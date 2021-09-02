import React from "react";
import Header from "./Heading";
import Home from "./Home";
import Skills from "./Skills";
import Navigate  from "./Navigate";
import Footer from "./Footer";
import ContactCard from "./Contact";
 function App(){
    return (
    <div>
      <Header/>
      <Home/>
      <Navigate/>
      <Skills/>
      <ContactCard/>
      <Footer/>
    </div>
    );
 }
 export default App; 