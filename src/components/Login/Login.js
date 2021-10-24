import { useContext } from "react";
import FormContext from "../../context/FormContext";
import Input from "../Input/Input";
import Navigation from "../Navigation/Navigation";

const Login = () => {
  const { navigationForward, navigationBackwards } = useContext(FormContext);

  return (
    <>
      <Input text={"Username"}></Input>
      <Input text={"Password"}></Input>
      <input type="checkbox" id={"password-checkbox"}></input>
      <label htmlFor={"password-checkbox"}>{"Remember Password?"}</label>
      <Navigation text={"Siguiente"} actionOnClick={navigationForward} />
      <Navigation text={"Atrás"} actionOnClick={navigationBackwards} />
    </>
  );
};

export default Login;
