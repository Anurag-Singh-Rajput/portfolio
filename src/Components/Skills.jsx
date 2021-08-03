import React from "react";

function Skills(){
    return(
        <section id = "skill-section">
            <div className = "container-fluid">
                <h1>Skills</h1>
            </div>
            <div className = "skill-card">
        <div className="row">
      <div class="col-lg-6 each-card">
        <h3 >Coding</h3>
        <ul>
            <li>C++</li>
            <span className = "bar cplus"></span>
            <li>C</li>
            <span className = "bar c"></span>
            <li>Java</li>
            <span className = "bar java"></span>
        </ul>
        </div>
      <div class="col-lg-6 each-card">
        <img class="skill-img" src= "https://media.giphy.com/media/a8rlSHPozsTEuh1ibJ/giphy.gif" alt="skill-img" />
      </div>
    </div>
        </div>
        </section>
    );
}

export default Skills;