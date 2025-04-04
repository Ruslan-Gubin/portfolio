import { MainImage } from "@/shared/iu/MainImage";
import styles from "./styles/pages/Home.module.scss";

export default function Home() {
  const handleClick = () => {};

  return (
    <div className={styles.root}>
      <button onClick={() => handleClick()}>Click</button>
      <MainImage
        src="/assets/logo.png"
        alt="logo"
        classContainer={styles.logoContainer}
        classImg={styles.logoImage}
        priority
      />
      <h1 className={styles.text}>Portfolio</h1>
      <h1 className={styles.text}>{10}</h1>
    </div>
  );
}
