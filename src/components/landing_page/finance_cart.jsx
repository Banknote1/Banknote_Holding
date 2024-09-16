import React from "react";

export const FinanceCart = ({styles,title,content,link}) => {
  return (
    <div
      className={`col-6 col-md-3 ${styles.finance_card} justify-content-center`}
    >
      <div className={`${styles.cart_title}`}>{title}</div>
      <div className={`${styles.cart_content}`}>{content}</div>
      <div className={`${styles.cart_button}`}>
        <button>click to learn more</button>
      </div>
    </div>
  );
};
