import styles from '../styles/NewHashtag.module.css';

function NewHashtag() {

    return (
      <div className={styles.midContainer}>
        <h1 className={styles.hashtagText}>Hashtag</h1>
        <div className={styles.newTweetContainer}>
            <input className={styles.newTweet} type="text" placeholder="#Hashtag" id="hashtagName"/>
            <hr className={styles.hR}/>
        </div>    
      </div>
    );
  }
  
  export default NewHashtag;