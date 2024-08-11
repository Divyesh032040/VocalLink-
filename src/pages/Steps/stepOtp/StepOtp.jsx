/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from './StepOtp.module.css'

function StepOtp({onNext}) {
  return (
    <div>
      <button onClick={onNext}>Next</button>
      <h1>otp : page 2 </h1>
      
    </div>
  )
}

export default StepOtp