import React from "react";
import styles from "./Nabar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className={styles.desktopNavBar}>
      <div className={` fixed-top ${styles.cont}`}>
        <div className={styles.Navbar}>
          <div className={styles.NavLogo}>
            <a className="navbar-brand" href="/">
              <img src="/NavLogo.png" alt="" />
            </a>
          </div>
          <nav
            className={`navbar navbar-expand-lg navbar-light p-3 d-flex justify-content-around align-items-center  ${styles.nav}`}
          >
            <div className={styles.container}>
              <div className={styles.navbarContent}>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className={`collapse navbar-collapse ${styles.navbarContent}`}
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav ms-auto">
                    <li className={`nav-item ${styles.navItem}`}>
                      <Link
                        className={`nav-link mx-2 ${styles.NavLink}`}
                        to="/"
                      >
                        HOME
                      </Link>
                    </li>
                    <li className={`nav-item ${styles.navItem}`}>
                      <Link
                        className={`nav-link mx-2 ${styles.NavLink} `}
                        to="/"
                      >
                        COMPANIES
                      </Link>
                    </li>
                    <li className={`nav-item ${styles.navItem}`}>
                      <Link
                        className={`nav-link mx-2 ${styles.NavLink} `}
                        to="/"
                      >
                        WHO WE ARE
                      </Link>
                    </li>
                    <li className={`nav-item ${styles.navItem}`}>
                      <Link
                        className={`nav-link mx-2 ${styles.NavLink}`}
                        to="/"
                      >
                        FAQS
                      </Link>
                    </li>
                  </ul>
                </div>
                
            
              </div>
            </div>
          </nav>
          <div className={styles.rightContainer}>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Contact Us</button>
            </div>
            <div className={styles.Lang}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <path
                  d="M1 19C1 28.9414 9.0586 37 19 37C28.9414 37 37 28.9414 37 19C37 9.0586 28.9414 1 19 1C9.0586 1 1 9.0586 1 19Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.8008 1.09033C20.8008 1.09033 26.2008 8.20033 26.2008 19.0003C26.2008 29.8003 20.8008 36.9103 20.8008 36.9103M17.2008 36.9103C17.2008 36.9103 11.8008 29.8003 11.8008 19.0003C11.8008 8.20033 17.2008 1.09033 17.2008 1.09033M2.13477 25.3003H35.8668M2.13477 12.7003H35.8668"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="whatsapp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
              >
                <path
                  d="M0.440625 20.0951C0.439531 23.5883 1.35625 26.9985 3.09906 30.0044L0.273438 40.2751L10.8314 37.5192C13.7405 39.0982 17.0158 39.9307 20.3486 39.932H20.3572C31.3334 39.932 40.2687 31.0393 40.2734 20.111C40.2753 14.8147 38.2053 9.83435 34.4453 6.08785C30.6848 2.34182 25.6848 0.277324 20.3572 0.275146C9.37906 0.275146 0.445 9.16656 0.440625 20.0951ZM6.72828 29.4868L6.33406 28.8638C4.67687 26.2405 3.80219 23.2091 3.80344 20.0963C3.80687 11.0128 11.2325 3.62265 20.3634 3.62265C24.7853 3.62451 28.9409 5.34058 32.0666 8.45413C35.192 11.568 36.9119 15.7073 36.9108 20.1097C36.9067 29.1932 29.4809 36.5843 20.3572 36.5843H20.3506C17.3798 36.5828 14.4662 35.7885 11.9253 34.2876L11.3206 33.9306L5.05531 35.5659L6.72828 29.4868Z"
                  fill="url(#paint0_linear_597_2744)"
                />
                <path
                  d="M15.1356 11.3456C14.7442 10.4824 14.3322 10.4649 13.96 10.4498C13.6551 10.4368 13.3067 10.4378 12.9585 10.4378C12.61 10.4378 12.0439 10.5678 11.5653 11.0863C11.0862 11.6053 9.73633 12.8594 9.73633 15.4102C9.73633 17.961 11.6088 20.4263 11.8698 20.7725C12.1311 21.1181 15.4846 26.5202 20.7956 28.5984C25.2096 30.3254 26.1078 29.9819 27.0658 29.8953C28.0239 29.809 30.1574 28.6415 30.5926 27.4308C31.0282 26.2203 31.0282 25.1827 30.8976 24.9659C30.767 24.7498 30.4185 24.6201 29.896 24.3609C29.3735 24.1018 26.8044 22.8473 26.3255 22.6742C25.8464 22.5014 25.4981 22.4151 25.1497 22.9342C24.8012 23.4526 23.8006 24.6201 23.4956 24.9659C23.1909 25.3124 22.8859 25.3556 22.3636 25.0962C21.8407 24.8361 20.1579 24.2893 18.1614 22.5232C16.6081 21.1489 15.5594 19.4518 15.2546 18.9327C14.9497 18.4143 15.2219 18.1334 15.4839 17.875C15.7187 17.6427 16.0066 17.2696 16.2681 16.967C16.5287 16.6642 16.6156 16.4482 16.7899 16.1024C16.9643 15.7563 16.877 15.4535 16.7466 15.1942C16.6156 14.9349 15.6003 12.3707 15.1356 11.3456Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_597_2744"
                    x1="2000.27"
                    y1="4000.28"
                    x2="2000.27"
                    y2="0.275146"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9F9F9" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
