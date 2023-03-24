import styles from '../styles/HashtagCompo.module.css';
import LeftPart from '../components/LeftPart';
import NewHashtag from '../components/NewHashtag';
import LastTweet from '../components/LastTweet';
import Tweet from '../components/Tweet';
import Trends from '../components/Trends';

function HashtagCompo() {
  return (
    <div className={styles.pageContainer}>

      <LeftPart/>

      <div className={styles.midSection}>
        <NewHashtag/>
        <LastTweet/>
        <div className={styles.tweetsContainer}>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
        </div>
      </div> 

      <Trends/>      
      
    </div>
  );
}

export default HashtagCompo;
