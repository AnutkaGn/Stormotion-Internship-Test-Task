import { useDispatch, useSelector } from 'react-redux';
import { Button } from '~/libs/components/components';
import { actions as gameActions } from '~/modules/store/app.slice';
import { RootState } from '~/modules/store';

import styles from './styles.module.css';

const SelectMatchsticks = () => {
  const { maxTakeMatches, matchesOnScreen } = useSelector(
    (state: RootState) => state.game
  );
  const dispatch = useDispatch();

  const handleSelectedMatches = (numberOfMatches: number) => {
    dispatch(gameActions.setUserMatches(numberOfMatches));
    dispatch(gameActions.toggleTurn());
  };

  return (
    <div className={styles['select-container']}>
      <p className={styles['instruction-text']}>I want to take</p>
      <div className={styles['match-buttons-wrapper']}>
        {Array.from(
          { length: Math.min(maxTakeMatches, matchesOnScreen) },
          (_, i) => {
            const matchCount = i + 1;
            return (
              <div className={styles['match-button']} key={matchCount}>
                <Button onClick={() => handleSelectedMatches(matchCount)}>
                  {matchCount}
                </Button>
              </div>
            );
          }
        )}
      </div>
      <p className={styles['instruction-text']}>matches.</p>
    </div>
  );
};

export { SelectMatchsticks };
