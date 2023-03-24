import styles from '../styles/NewTweet.module.css';

import { useState } from 'react';

function NewTweet() {
  const [count, setCount] = useState(0);

  const handleInputChange = (event) => {
    setCount(event.target.value.length);
  }

  return (
    <div className={styles.midContainer}>
      <h1 className={styles.homeText}>Home</h1>
      <div className={styles.newTweetContainer}>
          <input className={styles.newTweet} type="text" placeholder="What's up ?" id="newTweet" maxLength={280} onChange={handleInputChange}/>
          <hr className={styles.hR}/>
          <div className={styles.counterTweet}>
              <span className={styles.counter}>{count}/280</span>
              <button className={styles.tweetBtn}>Tweet</button>
          </div>
      </div>
    </div>
  );
}

  
  export default NewTweet;