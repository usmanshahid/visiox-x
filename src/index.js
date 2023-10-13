import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';

// styles
import './App.css';
import SoftwareApp from './components/SoftwareComponents/codefile/software';
import ImgMediaCard from './components/TechnologyConsluting/codefiles/cardbox';
import CustomerApp from './components/ourCustomers/codefile/customer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
      <SoftwareApp />
      <ImgMediaCard />
      <CustomerApp />
    </BrowserRouter>
  </React.StrictMode>
);
