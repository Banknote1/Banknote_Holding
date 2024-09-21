import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} row jutify-content-center m-2 m-md-5`}>
      {/* =============== first column =============== */}
      <div className="col-6 col-md-3 mb-2">
        <div className="icon_parent">
          <a href="" className={`${styles.footer_iocn}`}>
            <img src="./assets/images/footer-logo.png" alt="footer-icon" />
          </a>
          <div className={`${styles.footer_content}`}>
            A fast-growing diversified holding company that is redefining the
            global marketplace.
          </div>
        </div>
      </div>
      {/* =============== 2nd column =============== */}
      <div className="col-6 col-md-3 mb-2">
        <div className={`${styles.footer_title}`}>banknote Identity</div>
        <div className={`${styles.footer_content}`}>Who We Are</div>
        <div className={`${styles.footer_content}`}>what we do</div>
        <div className={`${styles.footer_content}`}>leadership</div>
      </div>
      {/* =============== 3rd column =============== */}
      <div className="col-6 col-md-3 mb-2">
        <div className={`${styles.footer_title}`}>find out more</div>
        <div className={`${styles.footer_content}`}>about us</div>
        <div className={`${styles.footer_content}`}>Businesses</div>
        <div className={`${styles.footer_content}`}>INVESTOR RELATIONS</div>
      </div>
      {/* =============== 4rd column =============== */}
      <div className="col-6 col-md-3 mb-2">
        <div className={`${styles.footer_title}`}>security</div>
        <div className={`${styles.footer_content}`}>privacy policy</div>
        <div className={`${styles.footer_content}`}>terms & conditions</div>
        <div className={`${styles.footer_content}`}>cookie policy</div>
      </div>

    </footer>
  );
};
