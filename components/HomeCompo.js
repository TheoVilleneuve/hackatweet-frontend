import styles from '../styles/HomeCompo.module.css';
import LeftPart from '../components/LeftPart';
import NewTweet from '../components/NewTweet';
import LastTweet from '../components/LastTweet';
import Tweet from '../components/Tweet';
import Trends from '../components/Trends';

function HomeCompo() {
  return (
    <div className={styles.pageContainer}>
      <LeftPart/>
      <div className={styles.midSection}>
        <NewTweet/>
        <LastTweet/>
        <div className={styles.tweetsContainer}>
          <Tweet/>
        </div>
      <Trends/>        
      </div>
    </div>
  );
}

export default HomeCompo;
