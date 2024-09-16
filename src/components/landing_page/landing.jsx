import styles from "./landing.module.css";
import Logo from './logo'
import OurCampany from "./our_campany_section";

function Landing() {
  return (
 
    <>
    <div className={styles.logo_container}  >
      <Logo/>
    </div>
    <OurCampany/>
    </>

   
  )
}

export default Landing