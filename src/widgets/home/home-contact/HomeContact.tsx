import Form from "next/form";
import styles from "./HomeContact.module.scss";
import { HomeContactInputs } from "../home-contact-inputs/HomeContactInputs";

const HomeContact = () => {
  const submitForm = async (formData: FormData) => {
    "use server";
    const payload = {
      name: formData.get("name"),
      telegramm: formData.get("telegramm"),
      email: formData.get("email"),
      comment: formData.get("comment"),
    };
    console.log(payload);
  };

  return (
    <section className={styles.homeContact}>
      <Form action={submitForm}>
        <HomeContactInputs />
      </Form>
    </section>
  );
};

export { HomeContact };
