/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import styles from './Register.module.css'
import StepAvatar from '../Steps/stepAvatar/StepAvatar'
import StepName from '../Steps/stepName/StepName'
import StepOtp from '../Steps/stepOtp/StepOtp'
import StepPhoneEmail from '../Steps/stepPhoneEmail/StepPhoneEmail'
import StepUserName from '../Steps/stepUserName/StepUserName'


const pages = {
  1: StepPhoneEmail ,
  2: StepOtp , 
  3: StepName ,
  4: StepAvatar ,
  5: StepUserName
}

function Register() {

  const [step , setStep] = useState(1);
  const ComponentPage = pages[step];
    
  function onNext(){
    console.log("clicked")
    setStep(step + 1);
  }

  return (
    <>
      <div> <h1> this is register page </h1></div>
        <ComponentPage onNext = {onNext}/>
    </>
  )
}

export default Register