import React from "react";
import vectorPortrait from "../images/avatar-green.png";
function Home(){
    return(
        <div className = "home-section container-fluid">
        <div class="row">
      <div class="col-lg-6">
        <div className = "home-text"><h3>Hello !!</h3>
        <h1 >I am Anurag</h1>
        <p class="para">B.Tech, Computer Engineering student at <a href = "http://www.jcboseust.ac.in/" className = "home-a" target = "_blank" rel = "noreferrer">J.C. Bose University of Science and Technology, YMCA Faridabad</a>, web developer, designer, and I like to watch anime apart from staring at my code for hours :)</p>
        </div>
      </div>
      <div class="col-lg-6">
        <img class="avatar-img" src= {vectorPortrait} alt="avatar-img" />
      </div>
    </div>
        </div>
    );
}
export default Home;