import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponentA from './components/ComponentA'
import "./index.css"
import './components/component.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='index-file'>
      <ComponentA>Interest Calculator (Simple)</ ComponentA>
    </div>
  </React.StrictMode>
);
