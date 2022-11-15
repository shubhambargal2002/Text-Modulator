import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }

  const [mode, setmode]=useState("light");
  const toggleMode=()=>{
    if(mode==="light")
    {
      setmode("dark");
      document.body.style.backgroundColor="#042743"
      document.body.style.color="white"
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TM-app" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
      <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/> } />
      <Route exact path="/about" element={ <About/> } />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
