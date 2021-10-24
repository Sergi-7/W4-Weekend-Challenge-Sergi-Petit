import Input from "../Input/Input";
import Navigation from "../Navigation/Navigation";

const AccesData = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
      <Input
        text={"Username"}
        type={"text"}
        id={"username"}
        label={"username"}
      />
      <Input
        text={"Password"}
        type={"password"}
        id={"password"}
        label={"password"}
      />
      <Input
        text={"Repeat Password"}
        type={"password"}
        id={"repeat-password"}
        label={"repeat-password"}
      />
      <Navigation text={"Siguiente"}></Navigation>
      <Navigation text={"Atrás"}></Navigation>
    </>
  );
};

export default AccesData;
