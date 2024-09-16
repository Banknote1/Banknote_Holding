import { useState } from "react";
import styles from "./landing.module.css";
import { useEffect } from "react";


export default function Logo() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/middle1.png', '/middle2.png'];

  useEffect(() => {
    const changeImage = () => {
      setCurrentImage(prev => (prev + 1) % images.length);
    };

    const interval = setInterval(changeImage, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
    <div className={styles.parent_img}>
      <img src="/logo-border.png" className="w-100" alt="" />
      <div className={`${styles.middle_container} ${styles.animate}`}>
        <img src={images[currentImage]} className={styles.middle_img} alt="" />
      </div>
    </div>
  </>
 
 
    
  )
}
