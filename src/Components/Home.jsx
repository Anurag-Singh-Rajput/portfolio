import React from "react";
import vectorPortrait from "../images/avatar-green.png";
function Home(){
    return(
        <div className = "home-section">
            <h1>Hello</h1>
            <h1>I am Anurag</h1>
            
            <img className = "avatar-img" alt = "avatar-img" src = {vectorPortrait} />
        </div>
    );
}
export default Home;