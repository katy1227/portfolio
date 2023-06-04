import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { importIcon } from "../../../utils";

const FooterLayout = () => {
  const { FaAngleUp } = importIcon();

  const [ref, inView] = useInView({
    rootMargin: "-10px 0px",
    triggerOnce: true,
  });

  return (
    <footer ref={ref} className="font-link bg-blue-400 py-7 text-blue-50 ">
      {inView && (
        <div className="flex flex-col justify-center items-center pc:animate-slide-in-fwd-center">
          <Link to="top" smooth={true} offset={-100} className="hoverLink">
            <FaAngleUp size={30} />
          </Link>
          <ul className="flex justify-around sp:w-3/4 pc:w-1/4 my-6">
            <li>
              <Link to="top" smooth={true} className="hoverLink text-center">
                TOP
              </Link>
            </li>

            <li>
              <Link to="about" smooth={true} offset={-50} className="hoverLink">
                ABOUT
              </Link>
            </li>

            <li>
              <Link to="skill" smooth={true} offset={-50} className="hoverLink">
                SKILL
              </Link>
            </li>

            <li>
              <Link
                to="works"
                smooth={true}
                offset={-100}
                className="hoverLink"
              >
                WORKS
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                offset={-100}
                className="hoverLink"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <small>© Kohei Miyoshi & Takahiro Terada. All Rights Reserved.</small>
        </div>
      )}
    </footer>
  );
};

export default FooterLayout;
