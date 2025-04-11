import styles from "./HomeAbout.module.scss";

const HomeAbout = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.titleText}>Hello!</h2>
      <h2 className={styles.titleText}>{"I\'m Ruslan Gubin"}</h2>
      <h3 className={styles.subTitle}>
        A Full Stack Backend & Solana Blockchain Developer specializing in
        scalable server-side applications with Node.js & Rust. Proficient in
        Next.js and React.js for seamless web development.
      </h3>
    </section>
  );
};

export { HomeAbout };
