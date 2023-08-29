import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Storage from './pages/Storage';
import Hosting from './pages/Hosting';
import Database from './pages/Dashboard';
import Authentication from './pages/Authentication'
import Functions from './pages/Functions';
import Mlearning from './pages/Mlearning';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path='authentication' element={<Authentication />} />
          <Route path='storage' element={<Storage />} />
          <Route path='hosting' element={<Hosting />} />
          <Route path='database' element={<Database />} />
          <Route path='functions' element={<Functions />} />
          <Route path='machine-learning' element={<Mlearning />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
