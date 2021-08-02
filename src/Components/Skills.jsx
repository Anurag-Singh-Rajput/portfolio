import React from "react";
import SkillCard from "./SkillCard";

function Skills(){
    return(
        <section id = "skill-section">
            <div className = "container-fluid">
                <h1>Skills</h1>
            </div>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
        </section>
    );
}

export default Skills;