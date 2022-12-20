import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './scripts/App';
import reportWebVitals from './reportWebVitals';

//Included for react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Custom theming
import './common/css/ttt-react-bootstrap-override.css';
import './common/css/ttt-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
