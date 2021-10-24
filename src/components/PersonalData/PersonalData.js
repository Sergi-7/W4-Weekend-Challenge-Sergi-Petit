import Navigation from "../Navigation/Navigation";
import Input from "../Input/Input";
import { useState } from "react";

const PersonalData = ({ title, onSubmit }) => {
  const initialData = {
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
  };
  const [personalData, setPersonalData] = useState(initialData);

  const handleOnChange = (event) => {
    setPersonalData({ ...personalData, [event.target.id]: event.target.value });
    console.log(personalData);
  };

  const submitPersonalData = (event) => {
    event.preventDefault();
    onSubmit(personalData);
  };

  return (
    <>
      <form className={"form-container"} onSubmit={submitPersonalData}>
        <h2>{title}</h2>
        <Input
          onChangeAction={handleOnChange}
          text={"Name"}
          type={"text"}
          id={"name"}
          label={"name"}
          value={personalData.name}
        />
        <Input
          onChangeAction={handleOnChange}
          text={"Last Name"}
          type={"text"}
          id={"lastName"}
          label={"last-name"}
          value={personalData.lastName}
        />
        <Input
          onChangeAction={handleOnChange}
          text={"Birthdate"}
          type={"date"}
          id={"birthdate"}
          label={"birthdate"}
          value={personalData.birthdate}
        />
        <span>{"Test-Age"}</span>
        <Input
          onChangeAction={handleOnChange}
          text={"E-mail"}
          type={"email"}
          id={"email"}
          label={"email"}
          value={personalData.email}
        />
        <button type="submit">Submit</button>
        <Navigation text={"Siguiente"}></Navigation>
      </form>
    </>
  );
};

export default PersonalData;
