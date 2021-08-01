import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import React from "react";

function Navigate(){
return(
    <div className = "navigate">
   <FontAwesomeIcon className = "icon" icon =  {faLongArrowAltDown}/>
    </div>
);
}

export default Navigate;