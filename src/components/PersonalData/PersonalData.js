import Navigation from "../Navigation/Navigation";
import Input from "../Input/Input";
import { useState } from "react";

const PersonalData = ({ title }) => {
  const initialData = {
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
  };
  const [personalData, setPersonalData] = useState(initialData);

  const handleOnChange = (event) => {
    event.preventDefault();
    setPersonalData({ ...personalData, [event.target.id]: event.target.value });
    console.log(personalData);
  };

  return (
    <>
      <h2>{title}</h2>
      <Input
        onChangeAction={handleOnChange}
        text={"Name"}
        type={"text"}
        id={"name"}
        label={"name"}
        value={initialData.name}
      />
      <Input
        onChangeAction={handleOnChange}
        text={"Last Name"}
        type={"text"}
        id={"last-name"}
        label={"last-name"}
        value={initialData.lastName}
      />
      <Input
        onChangeAction={handleOnChange}
        text={"Birthdate"}
        type={"date"}
        id={"birthdate"}
        label={"birthdate"}
        value={initialData.birthdate}
      />
      <span>{"Test-Age"}</span>
      <Input
        onChangeAction={handleOnChange}
        text={"E-mail"}
        type={"email"}
        id={"email"}
        label={"email"}
        value={initialData.email}
      />
      <Navigation text={"Siguiente"}></Navigation>
    </>
  );
};

export default PersonalData;
