import Button from "@/components/button/Button";
import Field from "@/components/forms/field/Field";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { IconPeople } from "../../public/assets/icons";

const Register: NextPage = (): JSX.Element => {
  const { register, handleSubmit } = useForm();

  const handleForm = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <Button href="/login">Login</Button>
      <form onSubmit={handleForm}>
        <Field icon={<IconPeople />} placeholder="name" {...register("name")} />
        <br />
        <select {...register("role")} name="role">
          <option value="cordynator">Кординатор</option>
          <option value="volonter">volonter</option>
          <option value="finance">finance</option>
        </select>
        <br />
        <select {...register("team")} name="team">
          <option value="cordynator">Chicken</option>
          <option value="Pisuny">Pisuny</option>
          <option value="ValeraAmfetamin">Valera Amfetamin</option>
        </select>
        <br />
        <Field {...register("date")} placeholder="Народження" type="date" />
        <br />
        <Field {...register("passport")} placeholder="Народження" type="file" />
        <br />
        <Field {...register("imgman")} placeholder="Народження" type="file" />
        <br />
        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
