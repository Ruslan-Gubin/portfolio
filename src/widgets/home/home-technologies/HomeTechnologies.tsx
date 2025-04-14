import styles from "./HomeTechnologies.module.scss";
import { HomeTechnologiesSection } from "../home-technologies-section/HomeTechnologiesSection";
import {
  frontendList,
  storeList,
  otherFrontendList,
  dbList,
  backendList,
  backendOtherList,
} from "@/shared/data/technologies";

const HomeTechnologies = () => {
  return (
    <section className={styles.homeTechnologies}>
      <header>
        <h2 className={styles.titleText}>Технологии</h2>
      </header>
      <HomeTechnologiesSection
        title="Современные языки и передовые фреймворки для создания мощных и производительных интерфейсов."
        technologiesList={frontendList}
      />
      <HomeTechnologiesSection
        title="Инструменты для эффективного управления сложными состояниями и потоками данных в приложении."
        technologiesList={storeList}
      />
      <HomeTechnologiesSection
        title="Дополнительные инструменты для анимации, графики, оптимизации сборки и проектирования компонентов."
        technologiesList={otherFrontendList}
      />
      <header></header>
      <HomeTechnologiesSection
        title="Надёжные решения для построения масштабируемых и высокопроизводительных серверных приложений."
        technologiesList={backendList}
      />
      <HomeTechnologiesSection
        title="Набор вспомогательных технологий для связи, тестированияи безопасности серверных процессов."
        technologiesList={backendOtherList}
      />
      <HomeTechnologiesSection
        title="Опыт работы с различными реляционными и нереляционными базами данных."
        technologiesList={dbList}
      />
    </section>
  );
};

export { HomeTechnologies };
