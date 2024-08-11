/* eslint-disable react/prop-types */

import styles from './Card.module.css'

function Card( { title , icon , children} ) {



  return (

    <div className={styles.card}>
    <div className={styles.headingWrapper} >
      <h1 className={styles.Heading}>{title}</h1>
      <img className={styles.hello} src={`/Images/${icon}.png`} alt="hand-logo" />
    </div>
    
    {children}
     

</div>
  )
}

export default Card