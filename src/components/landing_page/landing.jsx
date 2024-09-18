import { Footer } from "../footer/footer";
import styles from "./landing.module.css";
import Logo from "./logo_section";
import OurCampany from "./our_campany_section";
import { SocialMediaSection } from "./social_media_section";
import { WhoWeAreSection } from "./who_we_are_section";

function Landing() {
  return (
    <>
      <div className={styles.logo_container}>
        <Logo />
      </div>
      <div className="container">
        <OurCampany />
        <WhoWeAreSection />
      </div>
        <SocialMediaSection />
      <Footer />

    </>
  );
}

export default Landing;
