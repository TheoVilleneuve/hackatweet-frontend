import styles from '../styles/Trends.module.css';
import HashtagCard from './HashtagCard';

function Trends() {

    return (
      <div className={styles.rightContainer}>
        <h1 className={styles.trendText}>Trends</h1>

        <div className={styles.hashtagsContainer}>
            <HashtagCard/>
            <HashtagCard/>
            <HashtagCard/>
            <HashtagCard/>
            <HashtagCard/>
            <HashtagCard/>
            <HashtagCard/>
            <HashtagCard/>
            <HashtagCard/>
            <HashtagCard/>
            <HashtagCard/>
        </div>    
      </div>
    );
  }
  
  export default Trends;