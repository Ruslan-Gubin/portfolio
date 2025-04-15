import styles from "./HomeContactInputs.module.scss";

const HomeContactInputs = () => {
  return (
    <ul className={styles.contactInputs}>
      <input placeholder="name" name="name" min={1} required />
      <input placeholder="telegramm" name="telegramm" min={1} required />
      <input type="email" placeholder="email" name="email" required={false} />
      <textarea placeholder="comment" name="comment" />
      <button type="submit">Submit</button>
    </ul>
  );
};

export { HomeContactInputs };
