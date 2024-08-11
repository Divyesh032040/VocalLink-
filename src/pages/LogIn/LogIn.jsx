/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import StepOtp from '../Steps/stepOtp/StepOtp'
import StepPhoneEmail from '../Steps/stepPhoneEmail/StepPhoneEmail'
import styles from './LogIn.module.css'
import { useState } from 'react'

function LogIn() {

    //components
    const loginSteps = {
        1 : StepPhoneEmail,
        2 : StepOtp
    }

    const [page , setPage] = useState(1);
    const CurrantPage = loginSteps[page];

    function onNext (){
        setPage( page + 1 );
    }

  return (
    <>
    {/* change component when we click in button , onNext fn execute and next page will render */}
    
    <CurrantPage onNext={onNext}>
   
    </CurrantPage>

    </>

  )
}

export default LogIn