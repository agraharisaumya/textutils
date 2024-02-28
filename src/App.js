
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1000);
  }
    

 
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
    

  }
  return (  
    //JSX Fragment-:with the help of this multiple tags are used within JSX fragment   
    //Babel compile JSX (React) to normal javascript
    <>         
  {/*<Router>*/}
<Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>

<div className="container">
<Textform heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert}/>

{/*<Routes>
          <Route exact path="/about" element={ <About />}></Route>
           <Route exact path="/textform" element={<Textform heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert}/>}></Route>
</Routes>
  */}

{/*<About/>*/}
</div>
{/*</Router>*/}
    </>
   
  );
}

export default App;
