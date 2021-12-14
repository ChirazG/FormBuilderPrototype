import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import './App.css';
import Home from './pages/Home';
import Formulaire from './pages/Formulaire';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <Router>
        <React.Fragment>
          <ResponsiveAppBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/formulaire' element={<Formulaire />} />
            <Route exact path='/admin' element={<Admin />} />
          </Routes>
        </React.Fragment>
      </Router>

    </>
  );
}

export default App;
