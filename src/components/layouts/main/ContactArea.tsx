import { useInView } from "react-intersection-observer";
import { importIcon } from "../../../utils";

const ContactArea = () => {
  const { FaInstagram, FiMail, FiTwitter } = importIcon();

  const [ref, inView] = useInView({
    rootMargin: "-10px 0px",
    triggerOnce: true,
  });

  return (
    <article ref={ref} id="contact" className="contactFlex flex-col">
      {inView && (
        <section className="pc:animate-slide-in-fwd-center">
          <h3 className="subTitle">Contact</h3>
          <p className="my-6 mx-12">
            お問い合わせは、SNSまたはメールにてお願いします。
          </p>
          <div className="pc:flex mb-20">
            <div className="mr-6 font-sans">
              <a
                href="https://twitter.com/tkhrtrd0710"
                className="hoverLink contactFlex"
              >
                <FiTwitter className="mr-1" />
                Twitter
              </a>
            </div>
            <div className="mr-6 font-sans">
              <a
                href="https://www.instagram.com/fennecnoprograming/"
                className="hoverLink contactFlex"
              >
                <FaInstagram className="mr-1" />
                Instagram
              </a>
            </div>
            <div className="mr-6 font-sans">
              <a
                href="mailto:teradatakahiro16@gmail.com"
                className="hoverLink contactFlex"
              >
                <FiMail className="mr-1" />
                teradatakahiro16@gmail.com
              </a>
            </div>
          </div>
        </section>
      )}
    </article>
  );
};

export default ContactArea;
