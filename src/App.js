import logo from "./coding-cartoon.jpeg";
import logo2 from "./coding-cartoon2.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo" alt="logo" />
        <a href="#" className="btn btn-primary shadow">
          {" "}
          Back to Top{" "}
        </a>
      </header>
    </div>
  );
}

export default App;
