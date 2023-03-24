import styles from '../styles/Login.module.css';
import { Modal } from 'antd';
import { useState } from 'react';

function Login() {

  const [isModalUpVisible, setIsModalUpVisible] = useState(false);
  const [isModalInVisible, setIsModalInVisible] = useState(false);

  const signUpClick = () => {
    setIsModalUpVisible(!isModalUpVisible)
    console.log('Click detected')
  }

  const signInClick = () => {
    setIsModalInVisible(!isModalInVisible); 
  }

  const closeModal = () => {
    setIsModalUpVisible(false)
    setIsModalInVisible(false)
  }
  
  let modalInContent;
  modalInContent = (
    <div className={styles.modaleContainer}>
      <img className={styles.twitterLogoSmall} src={'/logo-twitter.png'} alt='TwitterBackground'/>
      <h1>Connect to Hackatweet</h1>
      <input className={styles.inputLog} type="text" placeholder="Username" id="username"/>
      <input className={styles.inputLog} type="text" placeholder="Password" id="password"/>
      <button>Sign in</button>
    </div>
  )

  let modalUpContent;
  modalUpContent = (
    <div className={styles.modaleContainer}>
      <img className={styles.twitterLogoSmall} src={'/logo-twitter.png'} alt='TwitterBackground'/>
      <h1>Create your hacktweet account</h1>
      <input className={styles.inputLog} type="text" placeholder="User Firstname" id="userFirstname"/>
      <input className={styles.inputLog} type="text" placeholder="Username" id="username"/>
      <input className={styles.inputLog} type="text" placeholder="Password" id="password"/>
      <button>Sign up</button>
    </div>
  )

  return (
    <div className={styles.container}>

        <div className={styles.LogoContainer}>
            <img className={styles.twitterBG} src={'/twitter_background.png'} alt='TwitterBackground'/>
            <img className={styles.twitterLogoBig} src={'/logo-twitter.png'} alt='TwitterBackground'/>
        </div>

        <div className={styles.WelcomeContainer}>
            <img className={styles.twitterLogoSmall} src={'/logo-twitter.png'} alt='TwitterBackground'/>
            <h1 className={styles.catchPhrase}>See what's <br/> happening </h1>
            <h2 className={styles.joinPhrase}>Join Hackatweet today.</h2>
            <button onClick={() => signUpClick()} className={styles.signUpBtn}>Sign up</button>

            {isModalUpVisible && <div id="react-modals">
				      <Modal getContainer="#react-modals"  className={styles.modal} visible={isModalUpVisible} closable={true} onCancel={closeModal} footer={null}>
					    {modalUpContent}
				      </Modal>
			      </div>}

            <h3 className={styles.alreadyPhrase}>Already have an account?</h3>
            <button onClick={() => signInClick()} className={styles.signInBtn}>Sign in</button>

            {isModalInVisible && <div id="react-modals">
				      <Modal getContainer="#react-modals"  className={styles.modal} visible={isModalInVisible} closable={true} onCancel={closeModal} footer={null}>
					    {modalInContent}
				      </Modal>
			      </div>}
            
        </div>

    </div>
  );
}

export default Login;
