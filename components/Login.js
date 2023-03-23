import styles from '../styles/Login.module.css';

function Login() {
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
            <button className={styles.signUpBtn}>Sign up</button>
            <h3 className={styles.alreadyPhrase}>Already have an account?</h3>
            <button className={styles.signInBtn}>Sign in</button>
            
        </div>

    </div>
  );
}

export default Login;
