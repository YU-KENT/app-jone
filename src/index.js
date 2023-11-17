import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from'./components/Home';
import Login from'./components/Login';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import {store} from'./outils/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element ={<Login/>}/>
          <Route path='/home/user/:userId'  element={<Home/>} />
      </Routes>
    </Router>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
