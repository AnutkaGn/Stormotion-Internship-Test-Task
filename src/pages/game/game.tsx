import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions as gameActions } from '~/modules/store/app.slice';
import { RootState } from '~/modules/store';
import { Button, Matchsticks, Modal } from '~/libs/components/components';
import { Player } from '~/libs/enums/enums';
import { winMessages, loseMessages } from '~/libs/constants/constants';
import {
  getComputerMove,
  getRandomMessage,
  getWinner,
} from '~/libs/helpers/helpers';

import { SelectMatchsticks, Scoreboard } from './libs/components/components';
import styles from './styles.module.css';

const Game = (): JSX.Element => {
  const {
    userMatches,
    computerMatches,
    matchesOnScreen,
    isComputerTurn,
    maxTakeMatches,
  } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const handleUnload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = false;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);

  useEffect(() => {
    if (matchesOnScreen === 0) {
      const winner = getWinner(userMatches);
      setWinner(winner);
      setGameOver(true);
    } else if (isComputerTurn && matchesOnScreen > 0) {
      setTimeout(() => {
        const computerMove = getComputerMove(matchesOnScreen, maxTakeMatches);
        dispatch(gameActions.setComputerMatches(computerMove));
        dispatch(gameActions.toggleTurn());
      }, 1000);
    }
  }, [isComputerTurn, matchesOnScreen, dispatch]);

  const handleRestart = () => {
    dispatch(gameActions.resetGame());
    setGameOver(false);
    setWinner(null);
  };

  const handleGoToMain = () => {
    dispatch(gameActions.resetGame());
    navigate('/');
  };

  return (
    <div className={styles['container']}>
      <div>
        <p className={styles['title-text']}>
          {isComputerTurn
            ? "Computer is making it's move..."
            : 'Now it is your turn! Choose!'}
        </p>
        <p className={styles['amount-matches-text']}>{matchesOnScreen}</p>
        <Matchsticks count={matchesOnScreen} />
        {!isComputerTurn ? (
          <SelectMatchsticks />
        ) : (
          <p className={styles['waiting-text']}>
            Please wait while the computer chooses...
          </p>
        )}
      </div>
      <div className={styles['matches-container']}>
        <Scoreboard score={userMatches} position="left" isUser />
        <Scoreboard score={computerMatches} position="right" />
      </div>

      <Modal title="Who won in this round?" isOpened={gameOver}>
        <>
          <div>
            <p>
              {winner === Player.USER
                ? getRandomMessage(winMessages)
                : getRandomMessage(loseMessages)}
            </p>
            <p>
              Your score:
              <span className={styles['colored-text']}>{userMatches}</span>
            </p>
            <p>
              Computer score:
              <span className={styles['colored-text']}>{computerMatches}</span>
            </p>
          </div>
          <div className={styles['model-button-wrapper']}>
            <div className={styles['modal-button']}>
              <Button onClick={handleGoToMain}>Home</Button>
            </div>
            <div className={styles['modal-button']}>
              <Button onClick={handleRestart}>Restart</Button>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
};

export { Game };
