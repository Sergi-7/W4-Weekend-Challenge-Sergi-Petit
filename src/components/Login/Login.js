import Input from "../Input/Input";
import Navigation from "../Navigation/Navigation";

const Login = () => {
  return (
    <div>
      <Input text={"Username"}></Input>
      <Input text={"Password"}></Input>
      <input type="checkbox" id={"password-checkbox"}></input>
      <label for={"password-checkbox"}>{"Remember Password?"}</label>
      <Navigation text={"Siguiente"} />
      <Navigation text={"Atrás"} />
    </div>
  );
};

export default Login;
