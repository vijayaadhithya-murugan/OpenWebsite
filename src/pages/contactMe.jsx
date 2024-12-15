import { contactDetails } from '../data/allDetails';
import '../styles/footer.css';

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const ContactMe = () => {
  return (
    <div className="footer-container">
      <div className="right-align">
        <>Address</>
        <br />
        <>{contactDetails.address}</>
        <br />
        <>{contactDetails.city}</>
        <> {contactDetails.pincode}</>
        <br />
        <>Contact Number</>
        <br />
        <>{contactDetails.mobile}</>
        <br />
      </div>
      <ul className="footer_list">
        <li>
          <a href={`mailto:${contactDetails.gmail}`}><BiLogoGmail /> Mail</a>
        </li>
        <li>
          <a href={contactDetails.linkedIn}><FaLinkedinIn /> LinkedIn</a>
        </li>
        <li>
          <a href={contactDetails.github}><FaGithub /> GitHub</a>
        </li>
        <li>
          <a href={contactDetails.twitter}><FaSquareXTwitter /> Twitter</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
