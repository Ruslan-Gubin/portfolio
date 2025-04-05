import Link from "next/link";
import { LayoutNavigateLine } from "../layout-navigate-line/LayoutNavigateLine";
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
            <Link href={`/#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <LayoutNavigateLine />
    </nav>
  );
};

export { LayoutHeaderNavigate };
