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
      <footer className="footer">
        {" "}
        Coded by{" "}
        <a
          href="https://www.instagram.com/sinthu_codes/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          @sinthu_codes
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Sinthu010/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
