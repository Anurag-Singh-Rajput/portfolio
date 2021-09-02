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
            key = {skillArray.id}
            array = {skillArray}
        />
        <Skill 
            key = {graphicSkill.id}
            array = {graphicSkill}
            message = {"Check out my work"}
        />
        <Skill 
            key = {webSkill.id}
            array = {webSkill}
        />
        </section>
    );
}

export default Skills;