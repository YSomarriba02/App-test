interface Props {
  links: string[];
}
export const NavLinks = ({ links }: Props) => {
  return (
    <>
      {links.map((link) => (
        <p className="w-full  hover:text-green-500 ">{link}</p>
      ))}
    </>
  );
};
