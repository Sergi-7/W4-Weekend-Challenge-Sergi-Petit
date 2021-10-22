import "./App.css";
import Login from "./components/Login/Login.js";
import AccesData from "./components/AccesData/AccesData";
import PersonalData from "./components/PersonalData/PersonalData";

function App() {
  return (
    <>
      <div className="form-container">
        <PersonalData title={"Personal Data"}></PersonalData>
      </div>
      <div className="form-container">
        <AccesData />
      </div>
      <div className="form-container">
        <Login />
      </div>
    </>
  );
}

export default App;
