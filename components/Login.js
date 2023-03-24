import styles from '../styles/Login.module.css';
import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';

function Login() {

//Gestion USER
const dispatch = useDispatch();
const user = useSelector((state) => state.user.value);

const [signUpUsername, setSignUpUsername] = useState('');
const [signUpUserFirstname, setSignUpUserFirstname] = useState('');
const [signUpPassword, setSignUpPassword] = useState('');
const [signInUsername, setSignInUsername] = useState('');
const [signInPassword, setSignInPassword] = useState('');

//SIGNUP
const handleRegister = () => {
  console.log('You better work')
  fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: signUpUsername, firstname: signUpUserFirstname, password: signUpPassword }),
  }).then(response => response.json())
    .then(data => {
      if (data.result) {
        dispatch(login({username: signUpUsername, token:data.token}));
        setSignUpUsername('');
        setSignUpUserFirstname('');
        setSignUpPassword('');
        location.assign('http://localhost:3001/home')
      }
    });
};

//SIGN IN
const handleConnection = () => {
  console.log('click Biatch')
  fetch('http://localhost:3000/users/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: signInUsername, password: signInPassword }),
  }).then(response => response.json())
    .then(data => {
      if (data.result) {
        dispatch(login({username: signUpUsername, token:data.token}));
        setSignInUsername('');
        setSignInPassword('');
        location.assign('http://localhost:3001/home')
      }
    });
};

//GESTION DE LA MODALE
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
      <button onClick={() => handleConnection()}>Sign in</button>
    </div>
  )

  let modalUpContent;
  modalUpContent = (
    <div className={styles.modaleContainer}>
      <img className={styles.twitterLogoSmall} src={'/logo-twitter.png'} alt='TwitterBackground'/>
      <h1>Create your hacktweet account</h1>
      <input 
      onChange={(e) => setSignUpUserFirstname(e.target.value)} value={signUpUserFirstname}
      className={styles.inputLog} type="text" placeholder="User Firstname" id="userFirstname"/>
      <input
      onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}
      className={styles.inputLog} type="text" placeholder="Username" id="username"/>
      <input 
      onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}
      className={styles.inputLog} type="text" placeholder="Password" id="password"/>
      <button onClick={() => handleRegister()}>Sign up</button>
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
