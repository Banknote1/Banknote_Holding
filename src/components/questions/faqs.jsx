import React, { useContext, useState } from "react";
import styles from "./faqs.module.css";
import { Accordion, AccordionTab } from "primereact/accordion";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../context/LanguageContext";

export const Faqs = () => {
  const { t } = useTranslation("faqs");
  const { language } = useContext(LanguageContext);

  const questions = t("questions", { returnObjects: true });
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTabChange = (e) => {
    setActiveIndex(e.index);
  };

  const createDynamicFaqs = () => {
    return questions.map((tab, i) => {
      return (
        <AccordionTab
          key={tab.q}
          header={
            <div className={` ${activeIndex === i ? styles.active_according : ""}`}>
              <span className={styles.gradient_text}>
                {
                  activeIndex===i ?
                  (
                    <img  src='./assets/images/down.png' style={{width:'16px',  marginLeft: language === 'ar' ? '10px' : '0', marginRight: language === 'ar' ? '0' : '10px',}} alt="icon" />
                  ):(
                    <img  src='./assets/images/side.png' style={{width:'16px', marginLeft: language === 'ar' ? '10px' : '0', marginRight: language === 'ar' ? '0' : '10px', transform: language==='ar' ? 'rotate(180deg)' : 'none'}} alt="icon" />
                  )
                }
                {/* <img  src={activeIndex === i ? './assets/images/down.png' : './assets/images/side.png'} style={{width:'16px', marginRight:'10px'}} alt="icon" /> */}
                {tab.q}
              </span>
            </div>
          }
          disabled={tab.disabled}
          className={`${styles.collapse_header}`}
        >
          <div className={styles.accordion_body}>
            <p className="m-0">{tab.a} </p>
          </div>
        </AccordionTab>
      );
    });
  };
  
  // ========================================================================================================
  return (
    <div className={`${styles.page_content} container`}>
      <div className="row align-items-center">
        <div className="col-12 col-md-4">
          <div className={`${styles.title}`}>{t("frequently_ask_questions")}</div>
          <div className={`${styles.sub_title}`}> {t("get_support")} </div>
          <div className={`my-2 ${styles.contact_1}`}>
          <a href="" className={`${styles.get_in_touch_a}`}> {t("get_in_touch")} </a>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <Accordion activeIndex={activeIndex} onTabChange={handleTabChange} className="faqs">
            {createDynamicFaqs()}
          </Accordion>
          <div className={`my-2 ${styles.contact_2}`}>
          <a href="" className={`${styles.get_in_touch_a}`}> {t("get_in_touch")} </a>
          </div>
        </div>
      </div>
    </div>
  );
};
