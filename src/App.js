import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route//,
  //Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a0039';
      showAlert('dark mode has been enabled', 'success');
      //  document.title='TextUtils-Dark Mode';
      //  setInterval(() => {
      //   document.title='TextUtils is amaging app';
      //  }, 2000);
      //  setInterval(() => {
      //   document.title='install TextUtils';
      //  }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled', 'success');
      // document.title='TextUtils-Light Mode';
    }

  }
  return (
    <>
      {/* <Navbar title="TextUtils3" abouttext="About TextUtils"/> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about"> 
              <About />
            </Route>

            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
            </Route>
          </Switch>

          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
