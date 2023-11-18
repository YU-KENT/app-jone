import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from'./components/Home';
import Login from'./components/Login';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from'./outils/store';
import GestionDemande from'./components/GestionDemande';
import GestionProjets from'./components/GestionProjets';
import GestionTests from'./components/GestionTests';
import Raports from './components/Raports';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' exact element ={<Login/>}/>
          <Route path='/home/user/:userId'  element={<Home/>} />
          <Route path='/demande/user/:userId' element={<GestionDemande/>}  />
          <Route path='/projects/user/:userId/list' element={<GestionProjets/>}  />
          <Route path='/tests/user/:userId/overview' element={<GestionTests/>}  />
          <Route path='/raports/user/:userId/developResourceList' element={<Raports/>}  />
      </Routes>
    </Router>
  </React.StrictMode>
  </Provider>
);

