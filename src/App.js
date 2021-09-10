import "./App.css";
import GetApiData from "./components/GetApiData";
import Practice from "./components/Practice";
import ReduxCounter from "./components/ReduxCounter";

function App() {
  return (
    <div className="App">
      <Practice />
      <ReduxCounter />
      <hr />
      <GetApiData />
    </div>
  );
}

export default App;
