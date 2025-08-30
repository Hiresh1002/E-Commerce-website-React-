import { SiJordan } from "react-icons/si";


function Nav1(){
    return(
        <>
        <ul className="firstnavbar">
        <li className="Jordan">
          <SiJordan />
        </li>
        <li>Find a Store </li>|
        <li>
          <select className="dropdown">
            <option value="help">Help </option>
            <option value="dispatch">Dispatch and Delivery</option>
            <option value="returns">Returns</option>
            <option value="contact">Contact Us</option>
            <option value="privacy">Privacy Policy</option>
            <option value="sale">Terms of Sale</option>
            <option value="use">Terms of Use</option>
            <option value="feedback">Send Us Feedback</option>
          </select>|
        </li>
        <li>Join Us</li>|
        <li>Sign In</li>
      </ul>
        </>
    )
}
export default  Nav1;