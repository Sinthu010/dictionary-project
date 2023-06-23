import logo2 from "./coding-cartoon2.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div>
      <header className="header">
        <img src={logo2} className="computer-image" alt="computer" />
      </header>
      <main>
        <Dictionary defaultKeyword="hello"></Dictionary>
      </main>
      <footer className="footer"> Coded by @sinthu_codes </footer>
    </div>
  );
}

export default App;
