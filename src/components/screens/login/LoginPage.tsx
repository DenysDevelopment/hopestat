import Button from "@/components/button/Button";
import Field from "@/components/forms/field/Field";
import Heading from "@/components/heading/Heading";
import { IFields } from "@/components/screens/login/fields.interface";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { IconLock, IconPeople } from "../../../../public/assets/icons";

import { AuthService } from "@/services/auth.services";
import Link from "next/link";
import styles from "./Login.module.scss";

const LoginPage: FC = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFields>({
    mode: "onChange",
  });

  const onSubmitForm = handleSubmit((data) => {
    AuthService.loginUser(data);
  });

  return (
    <div className={styles.login}>
      <Button href="/register">register</Button>
      <Heading className={styles.title} type="h1">
        Вітаємо в <span>Hope Stats</span>
      </Heading>
      <p className={styles.text}>
        Волонтер, увійди в свій аккаунт та отримай доступ до керування
        статистикою
      </p>
      <form onSubmit={onSubmitForm} className={styles.form}>
        <Field
          {...register("login", {
            required: "Це поле є обовʼязковим",
          })}
          error={errors.login?.message}
          icon={<IconPeople />}
          placeholder="Логін"
        />
        <Field
          {...register("password", {
            required: "Це поле є обовʼязковим",
          })}
          type="password"
          error={errors.password?.message}
          icon={<IconLock />}
          placeholder="Пароль"
        />
        <Button className={styles.btn}>Увійти</Button>
        <p className={styles.textHelp}>
          Якщо виникли проблеми зі входом <br />
          <Button href="https://t.me/denys_maksymuck" link>
            Звернись до Адміна
          </Button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;