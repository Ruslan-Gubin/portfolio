import Link from "next/link";
import styles from "./LayoutHeaderNavigate.module.scss";

type Props = {
  navList: string[];
};

const LayoutHeaderNavigate = ({ navList }: Props) => {
  return (
    <nav className={styles.headerNavigate}>
      <ul className={styles.headerNavList}>
        {navList.map((item) => (
          <li key={item} className={styles.headerNavItem}>
            <Link href={`/#${item}`} legacyBehavior>
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.activeLine}></div>
    </nav>
  );
};

export { LayoutHeaderNavigate };
