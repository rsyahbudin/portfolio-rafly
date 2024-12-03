import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import logo from "../assets/mrslogo.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2 " width={50} height={33} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://wa.me/6281804040684"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://bit.ly/portfolio-rsyahbudin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Notion"
        >
          <RiNotionFill />
        </a>
        <a
          href="https://www.linkedin.com/in/raflysyahbudin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/raflysyahbudin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
