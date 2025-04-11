import styles from "./HomeTechnologies.module.scss";
//import typeScriptImg from "../../../../public/assets/technologies/typescript.webp";

const HomeTechnologies = () => {
  const frontendList = [
    {
      id: 1,
      description:
        "TypeScript язык программирования, который добавляет статическую типизацию к JavaScript.",
      img: "assets/technologies/typescript.webp",
    },
    {
      id: 2,
      description:
        "Next.js - фреймворк для рендеринга серверной и клиентской частей приложения на базе React.",
      img: "assets/technologies/typescript.webp",
    },
    {
      id: 3,
      description: "Redux - инструментарий для упрощения работы с Redux.",
      img: "assets/technologies/typescript.webp",
    },
    {
      id: 4,
      description:
        "Feature-Sliced Design - архитектурная методология для проектирования frontend-приложени.",
      img: "assets/technologies/typescript.webp",
    },
    {
      id: 5,
      description:
        "Styled-components - библиотека для написания CSS внутри компонентов.",
      img: "assets/technologies/typescript.webp",
    },
    //{ id: 6, description: '', img: '' },
    //{ id: 7, description: '', img: '' },
    //{ id: 8, description: '', img: '' },
  ];

  const backendList = [
    {
      id: 1,
      description: "NodeJS - серверная среда выполнения JavaScript.",
      img: "assets/technologies/typescript.webp",
    },
    {
      id: 2,
      description: "Express - веб-фреймворк для приложений Node.js.",
      img: "assets/technologies/typescript.webp",
    },
    { id: 3, description: "MongoDB - NoSQL база данных.", img: "" },
    {
      id: 4,
      description: "JWT - JSON Web Tokens для авторизации пользователей.",
      img: "assets/technologies/typescript.webp",
    },
    //{ id: 5, description: '', img: ''},
    //{ id: 6, description: '', img: ''},
    //{ id: 7, description: '', img: ''},
    //{ id: 8, description: '', img: ''},
  ];

  return (
    <section className={styles.homeTechnologies}>
      <header>
        <h2 className={styles.titleText}>Technologies</h2>
        <h3 className={styles.subTitle}>
          {
            "I've worked with a range a technologies in the web development world. From Back-end To Blockchain"
          }
        </h3>
      </header>
      <div className={styles.technologiesBlock}>
        <section className={styles.technologiSection}>
          <h2 className={styles.technologiesTitle}>Front-End</h2>
          <ul className={styles.technologiesList}>
            {frontendList.map((item) => (
              <li key={item.id} className={styles.technologiesItem}>
                <picture>
                  <img
                    className={styles.technologiesImage}
                    src={item.img}
                    alt="Frontend image"
                  />
                </picture>
                {item.description}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.technologiSection}>
          <h2 className={styles.technologiesTitle}>Back-End</h2>
          <ul className={styles.technologiesList}>
            {backendList.map((item) => (
              <li key={item.id} className={styles.technologiesItem}>
                {item.description}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export { HomeTechnologies };
