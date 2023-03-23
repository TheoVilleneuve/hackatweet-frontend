import styles from '../styles/Trends.module.css';

function Trends() {

    return (
      <div className={styles.rightContainer}>
        <h1 className={styles.homeText}>Home</h1>
        <div className={styles.newTweetContainer}>
            <input className={styles.newTweet} type="text" placeholder="Task" id="taskName"/>
            <hr className={styles.hR}/>
            <div className={styles.counterTweet}>
                <span className={styles.counter}>2/140</span>
                <button className={styles.tweetBtn}>Tweet</button>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Trends;