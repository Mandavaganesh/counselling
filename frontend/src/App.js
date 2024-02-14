import React  from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Counsellor from "./components/Addcounsellor";
import Appointment from "./components/Appointment";
import Signup from "./components/Signup";
import Addvistor from "./components/Addvistor";
import Home from "./components/Home";
import FetchRegistartions from "./components/FetchRegistartions";
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
        <Route path="/Addcounsellor" element={<Counsellor/ >} exact />
        <Route path="/Appointment" element={<Appointment/ >} exact />
        <Route path="/Addvistor" element={<Addvistor/ >} exact />
        <Route path="/FetchRegistartions" element={<FetchRegistartions/ >} exact />

      </Routes>
    </main>
  </React.Fragment>
}

export default App;