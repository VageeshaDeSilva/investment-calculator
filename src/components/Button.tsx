interface ButtonProps {
  name: string;
  onClick?: () => void;
}

export default function Button({ name, onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer  hover:bg-blue-600 transition-colors duration-300"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
