import shecodesLogo from './images/shecodes-logo.png';
import './App.css';
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
         <img src={shecodesLogo} className="img-fluid shecodes-logo" alt="SheCodes Logo" />
          </header>
        <main>
          <Dictionary standardKeyword="Flower" />
          </main>
          <br/>
          <footer className="App-footer">
            <small>
              Coded by <a href="https://github.com/Lebohang2/Dictionary-website" target="_blank" rel="noopener noreferrer">Lebohang Kubheka</a>
            </small>
          </footer>
      </div>
    </div>
  );
}