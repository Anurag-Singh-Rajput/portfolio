import React from "react";
import vectorPortrait from "../images/avatar-green.png";
function SkillCard(){

    return(
        <div className = "skill-card">
        <div class="row">
      <div class="col-lg-6">
        <h3 >Skill</h3>
        <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dicta fugiat incit consectetur, adipisicing elit. Quas, recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, possimus. uo culpa animi, molestias quod esse officiis velit!</p>
        </div>
      <div class="col-lg-6">
        <img class="skill-img" src= {vectorPortrait} alt="skill-img" />
      </div>
    </div>
        </div>
    );

}

export default SkillCard;