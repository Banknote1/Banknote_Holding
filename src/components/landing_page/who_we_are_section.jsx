import React, { useEffect } from "react";
import styles from "./landing.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const WhoWeAreSection = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, easing: "ease-out", mirror: true }); 
    AOS.refresh();
    
  }, []);

  return (
    <div className="m-5">
      <div className="my-5">
        <h3 className={`${styles.who_we_are} mt-5`} data-aos="fade-up-left">who We Are.. ?</h3>
        <div className={`mx-5 my-2 ${styles.who_title}`} data-aos="fade-up">
          <p>
            “We are one of the world’s leading and most successful diversified
            investment holding companies delivering continuous and sustainable
            growth that increase long-term shareholder value”
          </p>
        </div>
      </div>
      {/* ================ who cart======================== */}
      <div  className="my-2 mb-5">
        <div className="row m-5">
          <div className={`${styles.who_cart_image} col-4`} data-aos="fade-right">
            <img src="./assets/images/line1.png" alt="line1.png" />
          </div>
          <div className={` col-8`} data-aos="fade-up">
            <div className={`${styles.who_cart_title}`}>
              Portfolio of Investments
            </div>
            <div className={`${styles.who_cart_content}`}>
              <span style={{ color: "rgba(255, 200, 3, 0.80)" }}>
                We look for partners{" "}
              </span>{" "}
              who share our drive for excellence and expansion. That is why we
              see KHC companies consistently leading from the front across
              different industries.
              <span style={{ color: "#2398FF" }}>learn more...</span>
            </div>
          </div>
        </div>
      </div>
      {/* ================ who cart======================== */}
      <div className="">
        <div className="row m-5">
          <div className={`col-8`} data-aos="fade-up">
            <div className={`${styles.who_cart_title}`} >Our Team</div>
            <div className={`${styles.who_cart_content}`}>
              We benefit and utilize the experience of over 25 business
              professionals to proactively manage the Company’s Worldwide
              Assets.<span style={{ color: "#2398FF" }}>learn more...</span>
            </div>
          </div>
          <div
            className={`${styles.who_cart_image} col-4 ${styles.who_cart_image2}`} data-aos="fade-down"
          >
            <img src="./assets/images/line2.png" alt="line2.png" />
          </div>
        </div>
      </div>
      {/* ================ who cart======================== */}
      <div className=" mb-5">
        <div className="row m-5 ">
          <div className={`${styles.who_cart_image} col-4`}>
            {/* <img src="./assets/images/line1.png" alt="line1.png" /> */}
          </div>
          <div className={`col-8`} data-aos="fade-up">
            <div className={`${styles.who_cart_title} text-end`}>
            Investment Strategy
            </div>
            <div className={`${styles.who_cart_content} text-end` }>
            We seek out business teams with the coherence and expertise to develop a project capable of reaping long-term financial returns
              <span style={{ color: "#2398FF" }}> learn more...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
