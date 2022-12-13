import logo from '../img/TheTallTankard_Zoomed_NoBackground.png';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to The Tall Tankard</h1>
        <div>
          <h3>Check out our tools!</h3>
          <li>
            <ul><a className="App-link" href="https://thetalltankard.github.io/ability-calculator">Ability Calculator</a></ul>
            <ul><a className="App-link" href="https://thetalltankard.github.io/dice-roller">Dice Roller</a></ul>
          </li>
        </div>
      </header>
    </div>
  );
}

export default App;
