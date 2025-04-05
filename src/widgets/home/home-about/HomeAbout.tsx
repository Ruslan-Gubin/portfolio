import styles from "./HomeAbout.module.scss";

type Props = {
  title: string;
};

const HomeAbout = ({ title }: Props) => {
  return (
    <section className={styles.aboutSection}>
      <span>{title}</span>
      <br />
      <span>Section</span>
    </section>
  );
};

export { HomeAbout };
