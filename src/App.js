import logo from "./danalogo.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            className="img-fluid App-logo"
            alt="logo"
          />
          <h1>Welcome to my Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer">
            Dana Paulette Perkins
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/dperki02/dictionary-project-final"
            target="_blank"
            rel="noopener noreferrer">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dana-dictionary.netlify.app"
            target="_blank"
            rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
