import React from "react";
import Header from "./Heading";
import Home from "./Home";
import Skills from "./Skills";
import Navigate  from "./Navigate";
import Footer from "./Footer";
import ContactCard from "./Contact";
import ImageGallery from "./ImageGallery";
 function App(){
    return (
    <div>
      <Header/>
      <Home/>
      <Navigate/>
      <Skills/>
      <ContactCard/>
      <ImageGallery/>
      <Footer/>
    </div>
    );
 }
 export default App; 