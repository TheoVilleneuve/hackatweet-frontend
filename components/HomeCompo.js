import { useState, useEffect } from 'react';
import styles from '../styles/HomeCompo.module.css';
import LeftPart from '../components/LeftPart';
import NewTweet from '../components/NewTweet';
import Tweet from '../components/Tweet';
import Trends from '../components/Trends';

function HomeCompo() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => setTweets(data))
      .catch(error => console.log(error));
  }, []);

  // Get the last tweet from the tweets array
  const lastTweet = tweets.length > 0 ? tweets[tweets.length - 1] : null;

  return (
    <div className={styles.pageContainer}>

      <LeftPart/>

      <div className={styles.midSection}>
        <NewTweet/>
        <div className={styles.pinnedTweetContainer}>
          {lastTweet && (
            <Tweet
              text={lastTweet.text}
              username={lastTweet.username}
              createdAt={lastTweet.createdAt}
              isPinned={true}
            />
          )}
        </div>
        <div className={styles.tweetsContainer}>
          {tweets.map(tweet => (
            <Tweet
              key={tweet.id}
              text={tweet.text}
              username={tweet.username}
              createdAt={tweet.createdAt}
            />
          ))}
        </div>
      </div> 

      <Trends/>      
      
    </div>
  );
}

export default HomeCompo;
