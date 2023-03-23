import styles from '../styles/LastTweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function LastTweet() {

    return (
        <div className={styles.LastTweetContainer}>
            <div className={styles.userContainer}>
                <img className={styles.userLogo} src={'/userLogo.jpeg'} alt='TwitterBackground'/>
                <div className={styles.userInfos}>
                    <p className={styles.userFirstname}>Antoine</p>
                    <p className={styles.userName}>@AntoineLeProf <span className={styles.hourOfPost}>5 hours</span></p>
                </div>
            </div> 
            <p className={styles.tweet}>Ceci est un tweet récent</p>  
            <div className={styles.tweetLikeContainer}>
                <FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} className={styles.like} />
                <span className={styles.likeCounter}>(3)</span>
            </div>
        </div>
    );
  }
  
  export default LastTweet;