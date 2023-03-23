import styles from '../styles/HomeCompo.module.css';
import LeftPart from '../components/LeftPart';

function HomeCompo() {
  return (
    <div className={styles.pageContainer}>
      <LeftPart/>
    </div>
  );
}

export default HomeCompo;
