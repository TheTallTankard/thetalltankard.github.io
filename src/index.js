import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './scripts/pages/App';
import reportWebVitals from './reportWebVitals';

//Included for routing
import { HashRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './scripts/pages/ErrorPage';
import CommonTheme from './scripts/pages/CommonTheme';
import AbilityCalculator from './scripts/pages/AbilityCalculator';
import DiceRoller from './scripts/pages/DiceRoller';

//Included for react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Custom theming
import './styles/App.css';
import './styles/ttt-react-bootstrap-override.css';
import './styles/ttt-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />} />
        <Route path="/common-theme" element={<CommonTheme />} />
        <Route path="/ability-calculator" element={<AbilityCalculator />} />
        <Route path="/dice-roller" element={<DiceRoller />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
