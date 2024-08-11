/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from './Button.module.css'

function Button( {buttonText , onClick} ) {
  return (
   
    <button onClick={onClick} className={styles.btn}>
        <span className={styles.continue}>{buttonText}</span>
         <img className={styles.arrow} src="/Images/arrow_forward.png" alt="" /> 
       
    </button>
      
  )
}

export default Button