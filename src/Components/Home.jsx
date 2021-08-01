import React from "react";
import vectorPortrait from "../images/avatar-green.png";
function Home(){
    return(
        <div className = "home-section container-fluid">
        <div class="row">
      <div class="col-lg-6">
        <div className = "home-text"><h3>Hello !!</h3>
        <h1 >I am Anurag !!</h1>
        <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dicta fugiat incit consectetur, adipisicing elit. Quas, recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, possimus. uo culpa animi, molestias quod esse officiis velit!</p>
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