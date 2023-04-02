import Button from "@/components/button/Button";
import Heading from "@/components/heading/Heading";
import { FC } from "react";

import styles from "./home.module.scss";

const HomePage: FC = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <Heading className={styles.title} type="h1">
        Вітаємо в New Hope Волонтерський!
      </Heading>
      <p className={styles.text}>
        Завдяки цьому сервісу ми зможемо бачити твою участь у благодійності в
        повному обсязі. Ти важливий! Дякуємо, що допомагаєш разом з нами.
      </p>
      <div className={styles.btn}>
        <Button href="/login">Login</Button>
      </div>
    </div>
  );
};

export default HomePage;
