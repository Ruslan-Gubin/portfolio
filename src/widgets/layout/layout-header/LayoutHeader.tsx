import styles from "./LayoutHeader.module.scss";
import { LayoutHeaderNavigate } from "../layout-header-navigate/LayoutHeaderNavigate";
import { LayoutBurgerMenu } from "../layout-burger-menu/LayoutBurgerMenu";

const navList = ["about", "technologies", "projects", "contact"];

const LayoutHeader = () => {
  return (
    <header className={styles.headerSection}>
      <h1 className={styles.headerSectionTitle}>Portfolio</h1>
      <LayoutHeaderNavigate navList={navList} />
      <LayoutBurgerMenu navList={navList} />
    </header>
  );
};

export { LayoutHeader };
