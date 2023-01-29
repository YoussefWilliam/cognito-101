import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Account";
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <Account>
        <Status />
        <hr />
        <h1>Cognito</h1>
        <hr />
        <br />
        <Signup />
        <br />
        <hr />
        <br />
        <Login />
      </Account>
    </div>
  );
}

export default App;
