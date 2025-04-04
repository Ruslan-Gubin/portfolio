import { HomeAbout } from "@/widgets/home/home-about/HomeAbout";
import styles from "./styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.root}>
      <div id="about" style={{ paddingTop: 90 }}>
        <HomeAbout title="About" />
      </div>
      <div id="technologies" style={{ paddingTop: 90 }}>
        <HomeAbout title="Technologies" />
      </div>
      <div id="projects" style={{ paddingTop: 90 }}>
        <HomeAbout title="Projects" />
      </div>
      <div id="contact" style={{ paddingTop: 90 }}>
        <HomeAbout title="Contacts" />
      </div>
    </div>
  );
}
