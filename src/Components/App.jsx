import React from "react";
import Header from "./Heading";
import Home from "./Home";
import Skills from "./Skills";
import Navigate  from "./Navigate";
import Footer from "./Footer";
// import {Parallax, ParallaxLayer} from "@react-spring/parallax"
// import skills from "./data";
// import Skill from "./Skill";
import ContactCard from "./Contact";
import MyComponent from "./CfData";
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

//    <Parallax pages={3} style={{ top: '0', left: '0' }}>
//   <ParallaxLayer
//     offset={0}
//     speed={2.5}
//     style={{justifyContent: 'center', alignItems: 'center' }}>
//     <Header />
//     <Home/>
//     <Navigate/>
//   </ParallaxLayer>

//   <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#1e2331' }} />

//   <ParallaxLayer
//     offset={1}
//     speed={0.5}
//     style={{
//       justifyContent: 'center',
//       alignItems: 'center',
//       color: 'white',
//     }}>
//      <Skills/>
//   </ParallaxLayer>
//   <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: 'red' }} />

//   <ParallaxLayer
//     offset={1}
//     speed={0.5}
//     style={{
//       justifyContent: 'center',
//       alignItems: 'center',
//       color: 'white',
//     }}>
//      <Skills/>
//      <Footer/>
//   </ParallaxLayer>
// </Parallax>
    );
    }

 export default App;
 