import styles from '../styles/NewHashtag.module.css';

function NewHashtag() {

    return (
      <div className={styles.midContainer}>
        <h1 className={styles.hashtagText}>Hashtag</h1>
        <div className={styles.newTweetContainer}>
            <input className={styles.newTweet} type="text" placeholder="#Hashtag" id="hashtagName"/>
            <hr className={styles.hR}/>
            <div className={styles.counterTweet}>
                <span className={styles.counter}>2/140</span>
                <button className={styles.tweetBtn}>Tweet</button>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default NewHashtag;