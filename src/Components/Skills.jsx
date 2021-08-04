import React from "react";
import Skill from "./Skill";
import graphicSkill from "./graphic";
import skillArray from "./data";
import webSkill from "./Web";
function Skills(){
    return(
        <section id = "skill-section">
            <div className = "container-fluid">
                <h1>Skills</h1>
            </div>
        <Skill 
            array = {skillArray}
        />
        <Skill 
            array = {graphicSkill}
            message = {"Check out my work"}
        />
        <Skill 
            array = {webSkill}
        />
        </section>
    );
}

export default Skills;