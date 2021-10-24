import { useContext } from "react";
import FormContext from "../../context/FormContext";
import Input from "../Input/Input";
import Navigation from "../Navigation/Navigation";

const AccesData = ({ title }) => {
  const { navigationForward, navigationBackwards } = useContext(FormContext);

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
      <Navigation
        text={"Siguiente"}
        actionOnClick={navigationForward}
      ></Navigation>
      <Navigation
        text={"Atrás"}
        actionOnClick={navigationBackwards}
      ></Navigation>
    </>
  );
};

export default AccesData;
