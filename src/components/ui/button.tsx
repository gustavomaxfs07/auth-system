interface Props {
    children: string;
    size: string;
    type: string;
}

export function Button({children, size, type}: Props) {
  return (
    <button type="button" className="w-full text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-4.5 me-2 mb-2 rounded-4xl">{children}</button>
  );
}