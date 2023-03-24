import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function Tweets() {
  const [tweet, setTweet] = useState(null);

  useEffect(() => {
    async function fetchTweet() {
      const tweetData = await tweet.findOne().exec();
      setTweet(tweetData);
    }

    fetchTweet('http://localhost:3000/tweets');
  }, []);

  if (!tweet) {
    return <p>No tweet found</p>;
  }

  return (
    <div className={styles.LastTweetContainer}>
      <div className={styles.userContainer}>
        <img className={styles.userLogo} src={'/userLogo.jpeg'} alt='TwitterBackground'/>
        <div className={styles.userInfos}>
          <p className={styles.userFirstname}>{tweet.author}</p>
          <p className={styles.userName}>@{tweet.author} <span className={styles.hourOfPost}>5 hours</span></p>
        </div>
      </div> 
      <p className={styles.tweet}>{tweet.tweetContent}</p>  
      <div className={styles.tweetLikeContainer}>
        <FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} className={styles.like} />
        <span className={styles.likeCounter}>(3)</span>
      </div>
    </div>
  );
}

  
  export default Tweets;