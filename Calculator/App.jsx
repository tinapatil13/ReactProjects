import ButtonContainer from "./component/ButtonContainer"
import styles from "./App.module.css"
import Display from "./component/Display"
import { useState } from "react"


const App = () => {
  const [calVal, setCalVal]=useState("");
  const onButtonClick= (buttonText)=>{
     if(buttonText==="C"){
      setCalVal("");
     }
     else if(buttonText==="="){
      const result=eval(calVal);
      setCalVal(result);
     }
     else{
      const newDisplauValue=calVal+buttonText;
      setCalVal(newDisplauValue);
     }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
       
    </div>
  )
}

export default App;