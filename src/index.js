import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const express = require("express");
const cors = require("cors");
const app = express();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

app.cors(cors());
app.listen(process.env.PORT || 3000);
