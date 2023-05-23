import { importIcon } from "../../../utils";
const ContactArea = () => {
  const { FaInstagram, FiMail, FiTwitter } = importIcon();
  return (
    <div id="contact" className="contactFlex flex-col ">
      <h3 className="subTitle">Contact</h3>
      <h4 className="my-6">
        お問い合わせは、SNSまたはメールにてお願いします。
      </h4>
      <div className="flex mb-20">
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
    </div>
  );
};

export default ContactArea;
