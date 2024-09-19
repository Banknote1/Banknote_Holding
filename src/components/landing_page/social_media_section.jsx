import React from "react";
import styles from "./landing.module.css";
import { Footer } from "../footer/footer";

export const SocialMediaSection = () => {
  return (
    <div className={`${styles.social_section}`}>
      <div className={`${styles.social_title} mx-2 mx-md-5 col-12 col-md-6`}>
        grow your business grow <br/> your confidence with<br/>  banknote
      </div>
      <div className={`my-3 mx-2 mx-md-5`}>
          <div className="d-flex align-items-center" >
            <a href="#" className={`${styles.social_Contact_us} `}>
              CONTACT US
            </a>
            <div className={`${styles.social_icon}`}>
            <a href="#" className="mx-2">
              <img src="./assets/images/facebook.svg" alt="" />
            </a>
            <a href="#" className="mx-2">
              <img src="./assets/images/linkedin1.png" alt="" />
            </a>
            <a href="#" className="mx-2">
              <img src="./assets/images/" alt="" />
            </a>
          </div>
          </div>
      </div>
    </div>
  );
};
