import Link from "next/link";
import CasaDamiaoImage from "../Images/CasaDamiaoImage";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full px-6 max-w-[1400px] mx-auto">
      <Link href="/">
        <div className="flex items-center justify-center h-42 w-42">
          <CasaDamiaoImage />
        </div>
      </Link>
      <div className="flex flex-col md:flex-row  gap-4">
        <a href={"https://www.casadamiao.pt/"} target="_blank">
          <span className="hover:opacity-60">CASADAMIÃO.PT</span>
        </a>
        <a href={"https://www.casadamiao.pt/contatos"} target="_blank">
          <span className="hover:opacity-60">CONTATOS</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
