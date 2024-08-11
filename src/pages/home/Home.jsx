/* eslint-disable no-unused-vars */
import React from 'react'
import {Link , useNavigate} from 'react-router-dom';
import styles from './Home.module.css'
import Card from '../../Components/Shared/Card/Card';
import Button from '../../Components/Shared/Button/Button';

const Home = () => {

  const signInStyle = {
    color : "#0077ff" ,
    textDecoration:"none",
    fontWeight:'bold',
    marginLeft:'5px'

  }

  const navigate = useNavigate();
  function register (){
    navigate('/register')
  }
  
return (
<div className={styles.homePageWrapper}>
<div className={styles.cardWrapper}>
  <Card 
  title = "Welcome To VocalLink!" 
  icon='Logo'
  >

<div className={styles.peraDiv}>
      <p className={styles.pera}>Join the vibrant community and connect with voices from all over the world. Dive into conversations, share your thoughts, and explore endless possibilities.</p>
    </div>

    <div className={styles}>

      <Button onClick={register} buttonText = 'Continue'> </Button>
     
    </div>

    <div className={styles.signInWrapper}>
      <span className={styles.haveInvite}>Have an invite text ? </span>
        <Link style={signInStyle} to='/login'>
          Sign in
        </Link>
    </div> 
    <div>
      <img className={styles.connect} src="/Images/connect.png" alt="connect_logo" />
    </div>
 

</Card>


</div>

<div className={styles.footerLine}>
<span className={styles.footerText}>Built with code and voice, crafted by Divyesh in </span>
<img className={styles.Flag} src="/Images/Flag.png" alt="Flag" />
</div>

</div>
  )
}

export default Home