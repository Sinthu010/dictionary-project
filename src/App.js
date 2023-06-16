import logo from "./coding-cartoon.jpeg";
import logo2 from "./coding-cartoon2.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <img src={logo2} className="logo" alt="logo" />
      </header>
      <main>
        <Dictionary></Dictionary>
      </main>
      <footer className="footer"> Coded by @sinthu_codes </footer>
    </div>
  );
}

export default App;
