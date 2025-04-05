"use client";
import { useRef, useState } from "react";
import styles from "./LayoutBurgerMenu.module.scss";
import Link from "next/link";

type Props = {
  navList: string[];
};

const LayoutBurgerMenu = ({ navList }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleToggleMenu = () => {
    if (!menuRef.current) return;

    menuRef.current.classList.add(
      isOpen ? styles.mobileMenuOpen : styles.mobileMenuClose,
    );
    menuRef.current.classList.remove(
      isOpen ? styles.mobileMenuClose : styles.mobileMenuOpen,
    );
    document.body.style.overflow = !isOpen ? "auto" : "hidden";
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.burgerMenu}>
        <button onClick={handleToggleMenu} className={styles.burgerMenuButton}>
          <div className={styles.burgerMenuButtonLine}></div>
          <div
            style={{ maxWidth: "80%" }}
            className={styles.burgerMenuButtonLine}
          ></div>
          <div
            style={{ maxWidth: "60%" }}
            className={styles.burgerMenuButtonLine}
          ></div>
        </button>
      </div>

      <div ref={menuRef} className={styles.mobileMenu}>
        <button onClick={handleToggleMenu} className={styles.closeButton}>
          <div className={styles.closeButtonLine}></div>
          <div
            className={`${styles.closeButtonLine} ${styles.closeButtonLineSecond}`}
          ></div>
        </button>
        <ul className={styles.navList}>
          {navList.map((item, index) => (
            <li
              style={{ animationDuration: `${(index + 1) * 0.2}s` }}
              key={item}
              className={styles.navListItem}
              onClick={handleToggleMenu}
            >
              <Link href={`/#${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { LayoutBurgerMenu };
