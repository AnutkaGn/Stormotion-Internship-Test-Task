import { MatchstickIcon } from '../components';
import styles from './styles.module.css';

type Properties = {
  count: number;
  width?: number;
  height?: number;
};

const Matchsticks = ({
  count,
  width = 30,
  height = 100,
}: Properties): JSX.Element => {
  return (
    <div className={styles['container']}>
      {Array.from({ length: count }).map((_, index) => (
        <MatchstickIcon key={index} width={width} height={height} />
      ))}
    </div>
  );
};

export { Matchsticks };
