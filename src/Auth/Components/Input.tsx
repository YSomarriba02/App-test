interface props {
  type: string;
  placeholder: string;
  name: string;
}

export default function Input({ type, placeholder, name }: props) {
  return (
    <input
      className="w-full h-9 p-6 bg-white [border:solid_black_1px]"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}
