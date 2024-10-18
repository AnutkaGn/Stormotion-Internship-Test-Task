import { Matchsticks } from '~/libs/components/components';
import styles from './styles.module.css';

type Properties = {
  score: number;
  position: 'right' | 'left';
  isUser?: boolean;
};

const Scoreboard = ({ score, position, isUser }: Properties): JSX.Element => {
  const containerClass =
    position === 'right'
      ? styles['score-container-right']
      : styles['score-container-left'];
  return (
    <div className={`${styles['score-container']} ${containerClass}`}>
      <p className={styles['score-text']}>
        {isUser ? 'My ' : 'Computer '} number of matches: {score}
      </p>
      <Matchsticks count={score} width={18} height={70} />
    </div>
  );
};

export { Scoreboard };
