import { useContext, useState } from "react";
import FormContext from "../../context/FormContext";
import Input from "../Input/Input";
import Navigation from "../Navigation/Navigation";

const AccesData = ({ title }) => {
  const { navigationForward, navigationBackwards } = useContext(FormContext);

  const initialAccesData = {
    username: "",
    password: "",
    repeatPassword: "",
  };

  const [accesData, setAccesData] = useState(initialAccesData);

  const handleOnChange = (event) => {
    setAccesData({
      ...accesData,
      [event.target.id]: event.target.value,
    });
  };

  const buttonStatus = () => {
    if (accesData.username && accesData.password && accesData.repeatPassword) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <h2>{title}</h2>
      <Input
        onChangeAction={handleOnChange}
        text={"Username"}
        type={"text"}
        id={"username"}
        label={"username"}
        value={accesData.username}
      />
      <Input
        onChangeAction={handleOnChange}
        text={"Password"}
        type={"password"}
        id={"password"}
        label={"password"}
        value={accesData.password}
      />
      <Input
        onChangeAction={handleOnChange}
        text={"Repeat Password"}
        type={"password"}
        id={"repeatPassword"}
        label={"repeatpassword"}
        value={accesData.repeatPassword}
      />
      <Navigation
        text={"Siguiente"}
        actionOnClick={navigationForward}
        disabled={buttonStatus()}
      ></Navigation>
      <Navigation
        text={"Atrás"}
        actionOnClick={navigationBackwards}
      ></Navigation>
    </>
  );
};

export default AccesData;
