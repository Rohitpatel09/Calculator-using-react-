import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
// import styles from "./App.module.css";

import styles from "./App.module.css"
import Display from "./component/Display";
import ButtonContainer from "./component/ButtonContainer";
import { useState } from "react";
import RestEqualButton from "./component/restequalbutton";
import Coded from "./component/Coded";
function App() {
 

let [calVal,setcalVal]=useState("");

const click=(buttonText)=>{
  let text=buttonText;

 if(buttonText==='C'){
  setcalVal('');
 }
else if(buttonText==="="){
const result=eval(calVal);
setcalVal(result);
}
else if(buttonText==="DEL"){
  setcalVal(calVal.slice(0, -1));
}
 else{
  let newDisplay=calVal+buttonText;
  setcalVal(newDisplay);
 }
}
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>

     <ButtonContainer click={click} ></ButtonContainer>
       <RestEqualButton click={click}></RestEqualButton>
       <Coded></Coded>
    </div>
  )
}

export default App
