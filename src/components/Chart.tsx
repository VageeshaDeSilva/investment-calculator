interface ChartProps {
  data: { year: number; value: number }[];
}

export default function Chart({ data }: ChartProps) {
  if (data.length === 0) return null;

  const W = 400;
  const H = 120;
  const PAD = { top: 10, right: 10, bottom: 20, left: 10 };

  const maxV = Math.max(...data.map((d) => d.value));
  const minY = data[0].year;
  const maxY = data[data.length - 1].year;

  const xScale = (year: number) =>
    PAD.left +
    ((year - minY) / Math.max(maxY - minY, 1)) * (W - PAD.left - PAD.right);
  const yScale = (val: number) =>
    PAD.top + (1 - val / Math.max(maxV, 1)) * (H - PAD.top - PAD.bottom);

  const points = data
    .map((d) => `${xScale(d.year)},${yScale(d.value)}`)
    .join(" ");

  const areaPoints = [
    `${xScale(minY)},${H - PAD.bottom}`,
    ...data.map((d) => `${xScale(d.year)},${yScale(d.value)}`),
    `${xScale(maxY)},${H - PAD.bottom}`,
  ].join(" ");

  const ticks = data.filter(
    (_, i) =>
      i === 0 || i === Math.floor(data.length / 2) || i === data.length - 1,
  );

  return (
    <svg
      className="chart-svg"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3dbdaa" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3dbdaa" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      <polygon points={areaPoints} fill="url(#chartGrad)" />

      <polyline
        points={points}
        fill="none"
        stroke="#3dbdaa"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {ticks.map((d) => (
        <text
          key={d.year}
          x={xScale(d.year)}
          y={H - 4}
          textAnchor="middle"
          fontSize="9"
          fill="#94a3b8"
        >
          {d.year}
        </text>
      ))}
    </svg>
  );
}
