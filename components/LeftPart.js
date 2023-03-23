import styles from '../styles/LeftPart.module.css';

function LeftPart() {
    return (
      <div className={styles.leftContainer}>
        <img className={styles.twitterLogoSmall} src={'/logo-twitter.png'} alt='TwitterBackground'/>

        <div className={styles.userContainer}>
            <img className={styles.userLogo} src={'/userLogo.jpeg'} alt='TwitterBackground'/>
            <div className={styles.userInfos}>
                <p className={styles.userFirstname}>John</p>
                <p className={styles.userName}>@JohnCena</p>
            </div>
        </div>
        <button className={styles.logOutBtn}>Logout</button>
      </div>
    );
  }
  
  export default LeftPart;