import React, { useState } from "react";
import styles from "./landing.module.css";
import "primeicons/primeicons.css";
import { Accordion, AccordionTab } from "primereact/accordion";
import { FinanceCart } from "./finance_cart";
import { ServiceCart } from "./service_cart";

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
            <div className="row mx-5 align-items-center mb-5 ">
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
            {/* ============= carts ========== */}
            <div className="row mx-5 g-2 d-flex align-items-stretch">
              <div className="col-6 col-md-3">
                <FinanceCart
                  styles={styles}
                  title={"banking facilities"}
                  content={
                    "Banking facilities encompass a wide range of services and products offered by banks to help individuals and businesses manage their finances. Key facilities include:"
                  }
                />
              </div>
              <div className="col-6 col-md-3">
                <FinanceCart
                  styles={styles}
                  title={"financial planning"}
                  content={
                    "Financial planning is the process of creating a comprehensive strategy to achieve your financial goals."
                  }
                />
              </div>
              <div className="col-6 col-md-3">
                <FinanceCart
                  styles={styles}
                  title={"Accounting Advisory Services"}
                  content={
                    "Accounting Advisory Services (AAS) provide expert guidance to businesses and organizations in managing complex accounting and financial reporting requirements."
                  }
                />
              </div>
              <div className="col-6 col-md-3">
                <FinanceCart
                  styles={styles}
                  title={"Assurance & Advisory"}
                  content={
                    "Assurance & Advisory services are crucial components of financial management, designed to enhance the reliability of financial information and provide strategic insights to improve business performance."
                  }
                />
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
              <div className="m-5">
                <p>
                  An exporting company specializes in taking products from
                  Egyptian businesses and exporting them to international
                  markets. This company conducts thorough market research and
                  analysis to identify the best global opportunities for these
                  products.
                  <br />
                  <br />
                  They handle the entire export process, including logistics,
                  documentation, and compliance with international trade
                  regulations, ensuring that the products reach the right
                  markets efficiently and successfully.
                </p>
                <div className={`${styles.btn_more}`}>
                  <button>click to learn more</button>
                </div>
              </div>
              <div className={`${styles.according_center_img}`}>
                <img src="./assets/images/exporting.png" alt="exporting.png" />
              </div>
            </div>
          </div>
        </AccordionTab>
        {/* =========================== BANKNOTE  trading ============================== */}
        <AccordionTab
          className={`${styles.collapse_header} mb-3`}
          header={
            <div
              className={`${
                activeIndex === 2
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
                <i
                  className={`pi ${
                    activeIndex === 2
                      ? "pi-caret-down active_according"
                      : "pi-caret-right"
                  }`}
                  style={{ marginRight: "8px" }}
                ></i>
                banknote trading
              </span>
            </div>
          }
        >
          <div className={styles.accordion_body}>
            <div className="row">
              <div className="m-5">
                <p>
                  We are pleased to serve as the bridge between Egyptian
                  companies and international markets. We collaborate with you
                  to source your products, whether agricultural or industrial,
                  to global markets, providing you with the opportunity to
                  expand and grow on a global scale.
                  <br />
                  <br />
                  Our company takes care of the entire process, from marketing
                  and selling your products in large quantities to customers
                  abroad or within the local market. We manage all logistics and
                  commercial processes, including shipping, storage, and export
                  or domestic sales procedures, allowing you to concentrate on
                  production without the hassle of managing sales complexities.
                </p>
                <div className={`${styles.btn_more}`}>
                  <button>click to learn more</button>
                </div>
              </div>
              <div className={`${styles.according_center_img}`}>
                <img src="./assets/images/trading.png" alt="exporting.png" />
              </div>
            </div>
          </div>
        </AccordionTab>
        {/* =========================== BANKNOTE store ============================== */}
        <AccordionTab
          className={`${styles.collapse_header} mb-3`}
          header={
            <div
              className={`${
                activeIndex === 3
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
                <i
                  className={`pi ${
                    activeIndex === 3
                      ? "pi-caret-down active_according"
                      : "pi-caret-right"
                  }`}
                  style={{ marginRight: "8px" }}
                ></i>
                banknote store
              </span>
            </div>
          }
        >
          <div className={styles.accordion_body}>
            <div className="row">
              <div className="m-5">
                <p>
                  Our investment company offers a unique opportunity for
                  businesses looking to sell their products through us. We
                  specialize in purchasing a wide range of products directly
                  from manufacturers or suppliers, whether they are high-value
                  items or more affordable goods in large quantities.
                  <br />
                  <br />
                  We then showcase these products in our store at competitive
                  prices, often featuring special deals and discounts to attract
                  a broad customer base. By partnering with us, you can benefit
                  from our extensive market reach and our ability to maximize
                  profits through strategic bulk purchasing and effective retail
                  distribution.
                </p>
                <div className={`${styles.btn_more}`}>
                  <button>click to learn more</button>
                </div>
              </div>
              <div className={`${styles.according_center_img}`}>
                {/* <img src="./assets/images/trading.png" alt="exporting.png" /> */}
              </div>
            </div>
          </div>
        </AccordionTab>
        {/* =========================== BANKNOTE services ============================== */}
        <AccordionTab
          className={`${styles.collapse_header} mb-3`}
          header={
            <div
              className={`${
                activeIndex === 4
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
                <i
                  className={`pi ${
                    activeIndex === 4
                      ? "pi-caret-down active_according"
                      : "pi-caret-right"
                  }`}
                  style={{ marginRight: "8px" }}
                ></i>
                banknote services
              </span>
            </div>
          }
        >
          <div className={styles.accordion_body}>
            <div className="row">
              <div className="mx-5 my-2">
                <p>
                We are pleased to offer you a comprehensive suite of services designed to meet your diverse needs. In addition to our financial and investment services, we provide a wide range of specialized services, including:
                </p>
              </div>
              <div className="mx-5 my-2 row g-3">
                <div className="col-md-6">
                  <ServiceCart styles={styles} title={'car services'} content={'Car services include maintenance, repairs, and detailing to keep vehicles running smoothly and looking their best. They cover everything from routine check-ups to emergency roadside assistance, ensuring your car remains safe and reliable.'} link={"cxvv"} />
                </div>
                <div className="col-md-6">
                  <ServiceCart styles={styles} title={'home services'} content={'Home services provide essential maintenance, cleaning, and repairs to keep your living space comfortable and functional. They include tasks like plumbing, electrical work, and pest control, ensuring your home is well-maintained and in top condition.'} link={"cxvv"} />
                </div>
                <div className="col-md-6">
                  <ServiceCart styles={styles} title={'transportation services'} content={'Home services provide essential maintenance, cleaning, and repairs to keep your living space comfortable and functional. They include tasks like plumbing, electrical work, and pest control, ensuring your home is well-maintained and in top condition.'} link={"cxvv"} />
                </div>
                <div className="col-md-6">
                  <ServiceCart styles={styles} title={'technology sevises'} content={'Home services provide essential maintenance, cleaning, and repairs to keep your living space comfortable and functional. They include tasks like plumbing, electrical work, and pest control, ensuring your home is well-maintained and in top condition.'} link={"cxvv"} />
                </div>
              </div>
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default OurCampany;
