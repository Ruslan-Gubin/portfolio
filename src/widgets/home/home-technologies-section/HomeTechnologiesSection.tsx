import { MainImage } from "@/shared/iu/MainImage";
import styles from "./HomeTechnologiesSection.module.scss";

type Props = {
  title: string;
  technologiesList: {
    id: number;
    title: string;
    description: string;
    img: string;
  }[];
};

const HomeTechnologiesSection = ({ title, technologiesList }: Props) => {
  return (
    <section className={styles.technologiesBlock}>
      <h2 className={styles.technologiesTitle}>{title}</h2>
      <ul className={styles.technologiesList}>
        {technologiesList.map((item) => (
          <li key={item.id} className={styles.technologiesItem}>
            <header className={styles.technologiesItemHeader}>
              <h5 className={styles.technologiesItemTitle}>{item.title}</h5>
              <MainImage
                src={item.img}
                alt="Technologies image"
                classContainer={styles.technologiesImageContainer}
                priority={false}
              />
            </header>
            <p className={styles.technologiesItemDescription}>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { HomeTechnologiesSection };
