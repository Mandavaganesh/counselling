import React  from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signin from "./components/Signin";
import About from "./components/About";
import Signup from "./components/Signup";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import FetchRegistartions from "./components/FetchRegistartions";
import Success from "./components/Success";
import Polling from "./components/Polling";
import Submit from "./components/Submit";
function App() {
  return <React.Fragment>
    <Header>
  <Header/>    
    </Header>
    <main>
      <Routes>
        <Route path="/" element={<Home/ >} exact />
        <Route path="/Signin" element={<Signin/ >} exact />
        <Route path="/Signup" element={<Signup/ >} exact />
        <Route path="/About" element={<About/>} exact />    
        <Route path="/Success" element={<Success/>} exact />
        <Route path="/Contacts" element={<Contacts/>} exact />
        <Route path="/FetchRegistartions" element={<FetchRegistartions/ >} exact />
        <Route path="/Polling" element={<Polling/ >} exact />
        <Route path="/Submit" element={<Submit/ >} exact />

      </Routes>
    </main>
  </React.Fragment>
}

export default App;