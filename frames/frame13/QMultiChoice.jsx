import React from "react"
import {  ButtonNext  } from "../../components/ButtonNext"
import {  MultipleChoice  } from "../../components/MultipleChoice"
import "./style.css"
import { progressionq  } from "../images_import"
import { background6  } from "../images_import"
import { logo  } from "../images_import"
export const QMultiChoice = ({onNext}) => {
  

  return (
<div className= "questionnaireMC">
<div className= "overlap">
   <div className= "group">
      <div className= "overlap-group">
         <div className= "div-2">
            Name
         </div>
         <img className= "logo" alt= "Logo" src= { logo  }/>
      </div>
   </div>
   <img className= "background" alt= "Background" src= { background6  }/>
   <div className= "rectangle-2" />
      <ButtonNext className="button-next-instance" divClassName="design-component-instance-node" onClick={onNext}/>
      <div className= "text-wrapper-2">
         Question 1
      </div>
      <MultipleChoice 
      option6 ={ false } 
      option7 ={ false } 
      option8 ={ false } 
      option9 ={ false } 
      option10={ false } 
      className="multiple-choice-instance"/>
      <div className= "text-wrapper-3">
         Selectionne max 3 options
      </div>
      <img className= "progression-q" alt= "Progression q" 
         src= { progressionq  }/>
   </div>
</div>
)
}