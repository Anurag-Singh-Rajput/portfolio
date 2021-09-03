import React from "react";
import MyComponent from "./CfData";
function Skill(props){
return(
    <div className = "skill-card">
    <div className="row">
  <div class="col-sm-6 each-card">
<h3 >{props.array[0].heading}</h3>
<ul>
    {
    props.array.map(skill => {
   return(<div>
    <li>{skill.name}</li>
    <div className = "bar ">
      <div className = "skill-bar" style = {{maxWidth : skill.progress}}>
        <div percent-val = {skill.progress}></div>
      </div>
    </div>
</div>);
        })
    }
    {(props.array[0].heading === "Coding") ? <MyComponent/> : null}
    <a href = "#design-section">{props.message}</a>
</ul>
</div>
<div class="col-sm-6 each-card">
<img class="skill-img" src= {props.array[0].imgSrc} alt="skill-img" />
</div>
</div>
</div>
);
}

export default Skill;