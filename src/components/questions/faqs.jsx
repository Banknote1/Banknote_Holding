import React, { useState } from "react";
import styles from "./faqs.module.css";
import { Accordion, AccordionTab } from "primereact/accordion";
import { useTranslation } from "react-i18next";

export const Faqs = () => {
  const { t } = useTranslation('faqs');
  const questions = t('questions', { returnObjects: true });
   const [tabs] = useState([
     {
       header: "Title I",
       children: <p className="m-0">{t('FrequentlyAskQuestions')}</p>,
     },
     {
       header: "Title II",
       children: <p className="m-0">Content 2 </p>,
     },
     {
       header: "Title III",
       children: <p className="m-0">Content 3 </p>,
     },
   ]);
  const createDynamicTabs = () => {
    console.log('heeer'+questions[0].q);
    return questions.map((tab, i) => {
      return (
        <AccordionTab
          key={tab.q}
          header={tab.q}
          disabled={tab.disabled}
          className={`${styles.collapse_header} mb-3`}
        >
          <p className="m-0">{tab.a} </p>,
        </AccordionTab>
      );
    });
  };
  return (
    <div>
      <div className="container"></div>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className={`${styles.title}`}>{t('FrequentlyAskQuestions')}</div>
          <div className={`${styles.sub_title}`}>
            Can’t find what you’re looking for? Get support from our white glove
            service team.
          </div>
          <a href="" className={`${styles.get_in_touch_a}`}>
            get in touch
          </a>
        </div>
        <div className="col-12 col-md-8">
          <Accordion>{createDynamicTabs()}</Accordion>
        </div>
      </div>
    </div>
  );
};
