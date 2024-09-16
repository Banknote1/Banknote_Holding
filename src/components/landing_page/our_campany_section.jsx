import React, { useState } from 'react';
import styles from "./landing.module.css";
import 'primeicons/primeicons.css';
import { Accordion, AccordionTab } from 'primereact/accordion';

const OurCampany = () => {
  // State to manage the active index of the Accordion
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle tab change and toggle the accordion state
  const handleTabChange = (e) => {
    setActiveIndex(e.index);
  };

  return (
    <div className={`container ${styles.collase_parent}`}>
      <h3 className={`${styles.section_title}`}>Our Company</h3>
      <Accordion
        activeIndex={activeIndex}
        onTabChange={handleTabChange}
        style={{ backgroundColor: "black !important" }}
      >
        {/* ========================== BANKNOTE FINANCE =============================== */}
        <AccordionTab
          className={`${styles.collapse_header} mb-3`}
          header={
            <div
              className={`${styles.collapse_header} ${
                activeIndex === 0 ? styles.active_according : ""
              }`}
            >
              <img
                src="./assets/images/seprator.png"
                className="w-100"
                alt=""
              />
              <span className={styles.gradient_text}>
                {/* Conditionally render caret-right or caret-down icon */}
                <i
                  className={`pi ${
                    activeIndex === 0 ? "pi-caret-down" : "pi-caret-right"
                  }`}
                  style={{ marginRight: "8px" }}
                ></i>
                BANKNOTE FINANCE
              </span>
            </div>
          }
        >
          <div className={styles.accordion_body}>
            <div className="row mx-5 align-items-center">
              <div className="col-8">
                <p>
                  "Securing Your Future, Together."
                  <br />
                  We empower clients with tailored financial strategies,
                  offering expert planning, investment management, and risk
                  assessment. With transparency and trust, we guide you to a
                  secure financial future.
                </p>
                <div>
                  "Securing Your Future, Together."
                  <br />
                  We empower clients with tailored financial strategies,
                  offering expert planning, investment management, and risk
                  assessment. With transparency and trust, we guide you to a
                  secure financial future.
                </div>
              </div>
              <div className="col-4">
                <img src="./assets/images/FINANCE.png" alt="Finance" />
              </div>
            </div>
          </div>
        </AccordionTab>
        {/* =========================== BANKNOTE exporting ============================== */}
        <AccordionTab
          className={`${styles.collapse_header} mb-3`}
          header={
            <div
              className={`${
                activeIndex === 1
                  ? styles.active_according
                  : styles.collapse_header
              } mb-3`}
            >
              <img
                src="./assets/images/seprator.png"
                className="w-100"
                alt=""
              />
              <span className={styles.gradient_text}>
                {/* Conditionally render caret-right or caret-down icon */}
                <i
                  className={`pi ${
                    activeIndex === 1
                      ? "pi-caret-down active_according"
                      : "pi-caret-right"
                  }`}
                  style={{ marginRight: "8px" }}
                ></i>
                BANKNOTE EXPORTING
              </span>
            </div>
          }
        >
          <div className={styles.accordion_body}>
            <div className="row">
              <div className="col-8">
                <p>
                  "Securing Your Future, Together."
                  <br />
                  We empower clients with tailored financial strategies,
                  offering expert planning, investment management, and risk
                  assessment. With transparency and trust, we guide you to a
                  secure financial future.
                </p>
                <div>
                  "Securing Your Future, Together."
                  <br />
                  We empower clients with tailored financial strategies,
                  offering expert planning, investment management, and risk
                  assessment. With transparency and trust, we guide you to a
                  secure financial future.
                </div>
              </div>
              <div className="col-4">
                <img src="./assets/images/FINANCE.png" alt="Finance" />
              </div>
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default OurCampany;
