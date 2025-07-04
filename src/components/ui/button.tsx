'use client';

interface Props {
    children: string;
    size: string;
    type: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export function Button({onClick, children, size, type, disabled}: Props) {
  return (
    <button disabled={disabled} type={type} onClick={onClick} className={`w-full text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-4.5 me-2 mb-2 rounded-4xl disabled:bg-blue-300 ${size}`}>
      {children}
    </button>
  );
}