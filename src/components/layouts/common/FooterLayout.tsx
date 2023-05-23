import { Link } from "react-scroll";
import { importIcon } from "../../../utils";

const FooterLayout = () => {
  const { FaAngleUp } = importIcon();
  return (
    <footer className="flex flex-col justify-center items-center font-link bg-blue-400 py-7 text-blue-50 ">
      <Link to="top" smooth={true} offset={-100} className="hoverLink">
        <FaAngleUp size={30} />
      </Link>
      <ul className="flex my-6">
        <li className="mr-6">
          <Link to="top" smooth={true} className="hoverLink">
            TOP
          </Link>
        </li>

        <li className="mr-6">
          <Link to="about" smooth={true} offset={-50} className="hoverLink">
            ABOUT
          </Link>
        </li>

        <li className="mr-6">
          <Link to="skill" smooth={true} offset={-50} className="hoverLink">
            SKILL
          </Link>
        </li>

        <li className="mr-6">
          <Link to="works" smooth={true} offset={-100} className="hoverLink">
            WORKS
          </Link>
        </li>

        <li className="mr-6">
          <Link to="contact" smooth={true} offset={-100} className="hoverLink">
            CONTACT
          </Link>
        </li>
      </ul>
      <small>© Kohei Miyoshi & Takahiro Terada. All Rights Reserved.</small>
    </footer>
  );
};

export default FooterLayout;
