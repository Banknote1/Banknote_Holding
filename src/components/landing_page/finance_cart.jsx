import React from "react";

export const FinanceCart = ({ styles, title, content, link }) => {
  return (
    <div className={`${styles.finance_card} h-100`}>
      <div className={`${styles.cart_title}`}>{title}</div>
      <div className={`${styles.cart_content}`}>{content}</div>
      <div className={`${styles.cart_button}`}>
        <button>click to learn more</button>
      </div>
    </div>
  );
};
