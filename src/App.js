import "./App.css";
import Login from "./components/Login/Login.js";
import AccesData from "./components/AccesData/AccesData";
import PersonalData from "./components/PersonalData/PersonalData";
import FormContext from "./context/FormContext";
import { useState } from "react";

function App() {
  const [page, setPage] = useState();

  const [receivedInput, setReceivedInput] = useState();

  return (
    <>
      <FormContext.Provider
        value={{
          page,
          setPage,
          receivedInput,
          setReceivedInput,
        }}
      >
        <PersonalData title={"Personal Data"} onSubmit={}></PersonalData>

        <form className="form-container">
          <AccesData />
        </form>
        <form className="form-container">
          <Login />
        </form>
      </FormContext.Provider>
    </>
  );
}

export default App;
