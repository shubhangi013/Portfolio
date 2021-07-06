import "./contact.scss";
import { GitHub, Mail, LinkedIn } from "@material-ui/icons";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.png" alt="" />
      </div>
      <div className="right">
        <h1>Find me here! </h1>
      
        <a href="https://github.com/shubhangi013">
        <GitHub className="icon" fontSize="large"></GitHub></a>
        <a href="https://www.linkedin.com/in/shubhangi-choudhary-32a347205/"><LinkedIn className="icon"fontSize="large"></LinkedIn></a>
        <a href=" mailto:choudharyshubhangi13@gmail.com "><Mail className="icon" fontSize="large"></Mail></a>
        </div>
 
    </div> 
  );
}
