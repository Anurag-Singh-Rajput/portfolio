import React from "react";
import vectorPortrait from "../images/avatar-green.png";
function SkillCard(){

    return(
        <div className = "skill-card">
        <div className="row">
      <div class="col-lg-6 each-card">
        <h3 >Skill</h3>
        <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dicta fugiat incit consectetur, adipisicing elit. Quas, recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, possimus. uo culpa animi, molestias quod esse officiis velit!</p>
        </div>
      <div class="col-lg-6 each-card">
        <img class="skill-img" src= {vectorPortrait} alt="skill-img" />
      </div>
    </div>
        </div>
    );

}

export default SkillCard;