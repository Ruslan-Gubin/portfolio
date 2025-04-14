import { HomeAbout } from "@/widgets/home/home-about/HomeAbout";
import { HomeTechnologies } from "@/widgets/home/home-technologies/HomeTechnologies";
import { HomeContact } from "@/widgets/home/home-contact/HomeContact";
import styles from "./styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.root}>
      {/*
      <div id="about" style={{ paddingTop: 90 }}>
        <HomeAbout />
      </div>
       */}
      <div id="technologies" style={{ paddingTop: 90 }}>
        <HomeTechnologies />
      </div>
      <div id="projects" style={{ paddingTop: 90 }}>
        <HomeContact />
      </div>
      <div id="contact" style={{ paddingTop: 90 }}>
        <HomeAbout />
      </div>
    </div>
  );
}
