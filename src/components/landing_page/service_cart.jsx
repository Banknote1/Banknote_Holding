import React from "react";

export const ServiceCart = ({ styles, title, content, link }) => {
  return (
    <div className={`${styles.service_cart}`}>
      <div className={`${styles.service_title}`}>{title}</div>
      <div className={`${styles.service_content}`}>{content}</div>
      <div className={`${styles.cart_button}`}>
        <button>click to learn more</button>
      </div>
    </div>
  );
};
