interface ButtonProps {
  name: string;
  onClick?: () => void;
}

export default function Button({ name, onClick }: ButtonProps) {
  return (
    <button className="calc-button" onClick={onClick}>
      {name}
    </button>
  );
}
