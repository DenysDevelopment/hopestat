import Button from "@/components/button/Button";
import Field from "@/components/forms/field/Field";
import Select from "@/components/forms/select/Select";
import { NextPage } from "next";
import { Controller, useForm } from "react-hook-form";
import { IconPeople } from "../../public/assets/icons";

const options = [
  { value: "volonter", label: "Волонтер" },
  { value: "kordynator", label: "Кординатор" },
  { value: "finance", label: "Фінансовий відділ" },
];

const options1 = [
  { value: "korova", label: "korova" },
  { value: "korova1", label: "korova2" },
  { value: "korova2", label: "korova3" },
];

const Register: NextPage = (): JSX.Element => {
  const { control, register, handleSubmit, formState } = useForm();

  const handleForm = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div style={{ margin: "0 20px" }}>
      <Button href="/login">Login</Button>
      <form onSubmit={handleForm}>
        <Field icon={<IconPeople />} placeholder="name" {...register("name")} />
        <br />
        <Controller
          name="role"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Select {...field} options={options} placeholder="Роль" />
          )}
        />
        <br />
        <Controller
          name="team"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Select {...field} options={options1} placeholder="Команда" />
          )}
        />
        <br />
        {/* <input type="date" {...register("date")} /> */}
        {/* <DatePickerComponent field={register("date")} /> */}
        <br />
        {/* <Field {...register("passport")} placeholder="Народження" type="file" />
        <br />
        <Field {...register("imgman")} placeholder="Народження" type="file" /> */}
        <Button>register</Button>
      </form>
    </div>
  );
};

export default Register;
