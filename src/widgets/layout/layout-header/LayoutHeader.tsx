import styles from "./LayoutHeader.module.scss";

const LayoutHeader = () => {
  return (
    <header className={styles.headerSection}>
      <h1 className={styles.headerLeftSideTitle}>Client Component</h1>
    </header>
  );
};

export { LayoutHeader };
