import styles from '../styles/HashtagCard.module.css';

function HashtagCard() {

    return (
      <div className={styles.hashtagContainer}>
        <h1 className={styles.hashtagName}>#Hackatweet</h1>
        <p className={styles.tweetsCounter}>2 Tweet(s)</p>
      </div>
    );
  }
  
  export default HashtagCard;