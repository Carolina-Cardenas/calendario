// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import './styles.css'
// import { CalendarApp } from './CalendarApp'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//  <CalendarApp/>
//   </React.StrictMode>,
// )
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import { CalendarApp } from './CalendarApp';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <CalendarApp />
    </React.StrictMode>,
    rootElement
  );
}
