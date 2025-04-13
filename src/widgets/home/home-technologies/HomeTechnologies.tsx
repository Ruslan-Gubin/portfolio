import styles from "./HomeTechnologies.module.scss";
//import typeScriptImg from "../../../../public/assets/technologies/typescript.webp";

const HomeTechnologies = () => {
  const frontendList = [
    {
      id: 1,
      description: "JavaScript",
      img: "assets/technologies/javascript.png",
    },
    {
      id: 2,
      description:
        "TypeScript расширяет возможности JavaScript, добавляя в язык типы. TypeScript ускоряет процесс разработки, выявляя ошибки и предоставляя исправления еще до запуска кода.",
      img: "assets/technologies/typescript.png",
    },
    {
      id: 3,
      description: "React",
      img: "assets/technologies/react.png",
    },
    {
      id: 4,
      description:
        "Next.js - фреймворк для рендеринга серверной и клиентской частей приложения на базе React.",
      img: "assets/technologies/nextjs.png",
    },
    {
      id: 5,
      description: "React Native",
      img: "assets/technologies/reactnative.png",
    },
    {
      id: 6,
      description: "Vue 3",
      img: "assets/technologies/vue.png",
    },
    {
      id: 7,
      description: "SCSS",
      img: "assets/technologies/scss.png",
    },
  ];

  const storeList = [
    {
      id: 1,
      description: "Redux",
      img: "assets/technologies/redux.png",
    },
    {
      id: 2,
      description: "Zustand",
      img: "assets/technologies/zustand.png",
    },
    {
      id: 3,
      description: "MobX",
      img: "assets/technologies/mobx.png",
    },
    {
      id: 4,
      description: "Apollo",
      img: "assets/technologies/apollo.png",
    },
    {
      id: 5,
      description: "RTK query",
      img: "assets/technologies/redux.png",
    },
    {
      id: 6,
      description: "React Query",
      img: "assets/technologies/reactquery.png",
    },
    {
      id: 7,
      description: "SWR",
      img: "assets/technologies/swr.png",
    },
  ];

  const backendList = [
    {
      id: 1,
      description: "NodeJS - серверная среда выполнения JavaScript.",
      img: "assets/technologies/nodejs.png",
    },
    {
      id: 2,
      description: "Express - веб-фреймворк для приложений Node.js.",
      img: "assets/technologies/express.png",
    },
    {
      id: 3,
      description: "Nest",
      img: "assets/technologies/nestjs.png",
    },
    {
      id: 4,
      description: "Golang",
      img: "assets/technologies/golang.png",
    },
  ];

  const dbList = [
    {
      id: 1,
      description: "PostgreSQL",
      img: "assets/technologies/postgresql.png",
    },
    {
      id: 2,
      description: "MySQL",
      img: "assets/technologies/mysql.png",
    },
    {
      id: 3,
      description: "MongoDB",
      img: "assets/technologies/mongodb.png",
    },
    {
      id: 4,
      description: "Prisma",
      img: "assets/technologies/prisma.png",
    },
  ];

  const backendOtherList = [
    {
      id: 1,
      description: "GrapgQL",
      img: "assets/technologies/graphql.png",
    },
    {
      id: 2,
      description: "WebSocket",
      img: "assets/technologies/websocket.png",
    },
    {
      id: 3,
      description: "RabbitMQ",
      img: "assets/technologies/rabbitmq.png",
    },
    {
      id: 4,
      description: "Swagger",
      img: "assets/technologies/swagger.png",
    },
    {
      id: 5,
      description: "Docker",
      img: "assets/technologies/docker.png",
    },
  ];

  const otherFrontendList = [
    {
      id: 1,
      description: "Three.js",
      img: "assets/technologies/threejs.png",
    },
    {
      id: 2,
      description:
        "PixiJS — самая быстрая и легкая 2D-библиотека, доступная для Интернета, работающая на всех устройствах и позволяющая создавать насыщенную интерактивную графику и кроссплатформенные приложения с использованием WebGL и WebGPU.",
      img: "assets/technologies/pixi.png",
    },
    {
      id: 3,
      description:
        "p5.js это JavaScript библиотека, с особым акцентом на изобразительное искусство. p5.js подходит для художников и дизайнеров",
      img: "assets/technologies/p5.png",
    },
    {
      id: 4,
      description: "Jest",
      img: "assets/technologies/jest.png",
    },
    {
      id: 5,
      description:
        "WebAssembly (сокращенно Wasm) - это формат двоичных команд для виртуальной машины на основе стека. Wasm разработан как переносимый инструмент компиляции для языков программирования, позволяющий развертывать клиентские и серверные приложения в Интернете.",
      img: "assets/technologies/webassembly.png",
    },
    {
      id: 6,
      description:
        "Feature-Sliced Design (FSD) — это архитектурная методология для проектирования фронтенд-приложений. Проще говоря, это набор правил и соглашений по организации кода. Главная цель этой методологии — сделать проект понятнее и стабильнее в условиях постоянно меняющихся бизнес-требований.",
      img: "assets/technologies/fsd.png",
    },
    {
      id: 7,
      description:
        "Webpack - это модульный пакет. Его основная цель - объединить файлы JavaScript для использования в браузере, но он также способен преобразовывать, объединять или упаковывать практически любой ресурс или актив.",
      img: "assets/technologies/webpack.png",
    },
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
            {otherFrontendList.map((item) => (
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
          <h2 className={styles.technologiesTitle}>Store</h2>
          <ul className={styles.technologiesList}>
            {backendOtherList.map((item) => (
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

        {/*
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
          */}
      </div>
    </section>
  );
};

export { HomeTechnologies };
