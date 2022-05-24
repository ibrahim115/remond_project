import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { Routes, Route, Router} from "react-router-dom";
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />

      <section>
        <Routes>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Routes>
      </section>

​    </Fragment>
  </Router>
);

export default App;