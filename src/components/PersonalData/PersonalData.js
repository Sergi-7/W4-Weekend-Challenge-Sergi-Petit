import Navigation from "../Navigation/Navigation";
import Input from "../Input/Input";

const PersonalData = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
      <Input
        onChangeAction={(event) => {
          console.log(event.target.value);
        }}
        text={"Name"}
        type={"text"}
        id={"name"}
        label={"name"}
      />
      <Input
        onChangeAction={(event) => {
          console.log(event.target.value);
        }}
        text={"Last Name"}
        type={"text"}
        id={"last-name"}
        label={"last-name"}
      />
      <Input
        onChangeAction={(event) => {
          console.log(event.target.value);
        }}
        text={"Birthdate"}
        type={"date"}
        id={"birthdate"}
        label={"birthdate"}
      />
      <span>{"Test-Age"}</span>
      <Input
        onChangeAction={(event) => {
          console.log(event.target.value);
        }}
        text={"E-mail"}
        type={"email"}
        id={"email"}
        label={"email"}
      />
      <Navigation text={"Siguiente"}></Navigation>
    </>
  );
};

export default PersonalData;
