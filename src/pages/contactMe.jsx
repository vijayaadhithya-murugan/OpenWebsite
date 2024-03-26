import { contactDetails } from "../data/allDetails";
import "../styles/footer.css"
import Twitter from "../assets/twitter.jsx"

const ContactMe = () => {
    return(
        <div className="footer-container">
        <div className="right-align">
        <>{contactDetails.address}</><br/>
        <>{contactDetails.city}</>
        <>{' '}{contactDetails.pincode}</><br/>
        <>{contactDetails.mobile}</><br/>
        </div>
        <ul className="footer_list">
        <li><a href={`mailto:${contactDetails.gmail}`}>Mail</a></li>
        <li><a href={contactDetails.linkedIn}>LinkedIn</a></li>
        <li><a href={contactDetails.github}>GitHub</a></li>
        <li><a href={contactDetails.twitter}>Twitter</a></li>
        </ul>
        </div>
    );
};

export default ContactMe;