import React from "react";
import styles from "./landing.module.css";
import { Footer } from "../footer/footer";

export const SocialMediaSection = () => {
  return (
    <div className={`${styles.social_section}`}>
      <div className={`${styles.social_title} mx-5 col-6`}>
        grow your business grow your confidence with banknote
      </div>
      <div className={`col-6 my-3 mx-5`}>
        <div className="d-flex align-items-center">
          <div className="mx-2">
            <a href="" className={`${styles.social_Contact_us} col-6`}>
              CONTACT US
            </a>
          </div>
          <div className={`${styles.social_icon} col-6`}>
            <a href="" className="mx-2">
              <img src="./assets/images/facebook.svg" alt="" />
            </a>
            <a href="" className="mx-2">
              <img src="./assets/images/linkedin1.png" alt="" />
            </a>
            <a href="" className="mx-2">
              <img src="./assets/images/" alt="" />
            </a>
          </div>
        </div>
      </div>

      {/* =========================== footer ================== */}
      {/* <Footer /> */}
    </div>
  );
};
