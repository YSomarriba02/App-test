import { Link } from "react-router-dom";

interface Props {
  links: string[];
}
export const NavLinks = ({ links }: Props) => {
  return (
    <>
      {links.map((link) => (
        <Link to={link} className="w-full  hover:text-green-500 ">
          {link}
        </Link>
      ))}
    </>
  );
};
