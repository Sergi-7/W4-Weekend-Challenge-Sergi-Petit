import "./App.css";
import Login from "./components/Login/Login.js";
import AccesData from "./components/AccesData/AccesData";
import PersonalData from "./components/PersonalData/PersonalData";
import FormContext from "./context/FormContext";
import { useState } from "react";

function App() {
  const pageNum = 0;
  const [page, setPage] = useState(pageNum);

  const navigationForward = () => {
    if (page === 2) {
      setPage(2);
    } else {
      setPage(page + 1);
    }
  };

  const navigationBackwards = () => {
    if (page === 0) {
      setPage(0);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <>
      <FormContext.Provider
        value={{
          page,
          setPage,
          navigationBackwards,
          navigationForward,
        }}
      >
        {page === 0 && <PersonalData title={"Personal Data"}></PersonalData>}
        {page === 1 && (
          <form className="form-container">
            <AccesData title={"Acces Data"} />
          </form>
        )}
        {page === 2 && (
          <form className="form-container">
            <Login title={"Login"} />
          </form>
        )}
      </FormContext.Provider>
    </>
  );
}

export default App;
