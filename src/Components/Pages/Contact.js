import React, { useContext } from "react";
import StyleData from "../../Store/styleContext";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import styles from "./Contact.module.css";
import Plug from "../UI/PageResources/Plug";

const Contact = () => {
  const stylectx = useContext(StyleData);
  return (
    <div className={styles.contactContainer} id="contact">
      <a
        className={styles.socialLink}
        style={stylectx.mainTextColor}
        href="https://www.linkedin.com/in/joshua-bergman-399133191/"
        rel="noreferrer"
        target="_blank"
      >
        <Plug
          textStyle={stylectx.mainTextColor}
          icon={
            <AiOutlineLinkedin
              style={stylectx.mainTextColor}
              className={styles.icon}
            />
          }
        >
          Joshua Bergman
        </Plug>
      </a>


      <a
        className={styles.socialLink}
        style={stylectx.mainTextColor}
        href="https://github.com/JoshBergman"
        rel="noreferrer"
        target="_blank"
      >
        <Plug
          textStyle={stylectx.mainTextColor}
          icon={
            <AiOutlineGithub
              style={stylectx.mainTextColor}
              className={styles.icon}
            />
          }
        >
          JoshBergman
        </Plug>
      </a>
      

      <a
        className={styles.socialLink}
        style={stylectx.mainTextColor}
        href="mailto:josh.bergman1@pm.me"
      >
        <Plug
          textStyle={stylectx.mainTextColor}
          smallerText={true}
          icon={
            <AiOutlineMail
              style={stylectx.mainTextColor}
              className={styles.icon}
            />
          }
        >
          Josh.Bergman1@pm.me
        </Plug>
      </a>
            

      <a
        className={styles.socialLink}
        style={stylectx.mainTextColor}
        href="tel:+16514473238"
      >
        <Plug
          textStyle={stylectx.mainTextColor}
          icon={
            <AiOutlinePhone
              style={stylectx.mainTextColor}
              className={styles.icon}
            />
          }
        >
          651 - 447 - 3238
        </Plug>
      </a>
    </div>
  );
};

export default Contact;
