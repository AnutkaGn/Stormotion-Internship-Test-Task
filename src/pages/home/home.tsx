import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from '~/libs/components/components';

import styles from './styles.module.css';

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleStartGame = () => {
    navigate('/select-mode');
  };

  return (
    <div className={styles['container']}>
      <p
        className={styles['rules-button-text']}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Read Rules
      </p>
      <p className={styles['text']}>
        Welcome to the
        <span className={styles['colored-text']}>Matches Game</span>!
      </p>
      <div className={styles['start-button']}>
        <Button onClick={handleStartGame}>Start Game</Button>
      </div>

      <Modal
        title="Matches Game Rules"
        isOpened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        showCloseButton
      >
        <div>
          <p>
            Welcome to the Matches Game! This exciting two-player game combines
            strategy and luck. Here's how to play:
          </p>
          <p>
            <span className={styles['colored-text']}>1. </span>The game starts
            with a pile of 25 matches.
          </p>
          <p>
            <span className={styles['colored-text']}>2. </span>Players take
            turns removing matches from the pile.
          </p>
          <p>
            <span className={styles['colored-text']}>3. </span>On each turn, a
            player can take 1, 2, or 3 matches.
          </p>
          <p>
            <span className={styles['colored-text']}>4. </span>The game ends
            when all matches have been taken.
          </p>
          <p>
            <span className={styles['colored-text']}>5. </span>The player with
            an even number of matches at the end wins!
          </p>
        </div>
        <div>
          <p className={styles['colored-text']}>Customizable Settings</p>
          <p>
            <span className={styles['colored-text']}>1. </span>Starting Matches:
            Change the initial number of matches in the pile.
          </p>
          <p>
            <span className={styles['colored-text']}>2. </span>Maximum Take:
            Adjust the maximum number of matches a player can take per turn.
          </p>
          <p>
            Experiment with these settings to create your perfect game
            experience!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export { Home };
