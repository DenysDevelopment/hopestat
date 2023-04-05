import Button from "@/components/button/Button";
import Field from "@/components/forms/field/Field";
import FileUpload from "@/components/forms/fileUpload/FileUpload";
import Select from "@/components/forms/select/Select";
import Modal from "@/components/modal/Modal";
import { NextPage } from "next";
import { useState } from "react";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleForm = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div style={{ margin: "0 20px" }}>
      <Modal open={isModalOpen} onClose={closeModal} />
      <Button onClick={openModal}>Open modal</Button>
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
        <FileUpload label="Завантажте паспорт" />
        <br />
        <FileUpload label="Завантажте фотку людини" />
        <Button>register</Button>
      </form>
    </div>
  );
};

export default Register;
