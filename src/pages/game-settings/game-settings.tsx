import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import arrowLeft from '~/assets/images/arrow-left.png';
import arrowRight from '~/assets/images/arrow-right.png';
import longArrowLeft from '~/assets/images/long-left-arrow.png';
import longArrowRight from '~/assets/images/long-right-arrow.png';
import { Button } from '~/libs/components/components';
import { actions as gameActions } from '~/modules/store/app.slice';

import styles from './styles.module.css';

const GameSettings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [matchesCount, setMatchesCount] = useState(25);
  const [maxMatches, setMaxMatches] = useState(3);

  const decreaseMatches = () => {
    if (matchesCount > 10) {
      setMatchesCount(matchesCount - 2);
    }
  };

  const increaseMatches = () => {
    if (matchesCount < 50) {
      setMatchesCount(matchesCount + 2);
    }
  };

  const decreaseMaxMatches = () => {
    if (maxMatches > 3) {
      setMaxMatches(maxMatches - 1);
    }
  };

  const increaseMaxMatches = () => {
    if (maxMatches < 10) {
      setMaxMatches(maxMatches + 1);
    }
  };

  const handleReadyClick = () => {
    if (maxMatches > matchesCount) {
      return alert(
        'Invalid settings! The total number of matches must be greater than the maximum number of matches you can take in one move.'
      );
    }
    void dispatch(gameActions.setMatches(matchesCount));
    void dispatch(gameActions.setMaxTakeMatches(maxMatches));
    navigate('/game');
  };

  const handleSkipButton = () => {
    navigate('/game');
  };

  const handleBackButton = () => {
    navigate('/select-mode');
  };

  return (
    <div className={styles['container']}>
      <div className={styles['setting-wrapper']}>
        <p className={styles['text']}>Number of matches:</p>
        <img
          src={arrowLeft}
          alt="Decrease matches"
          className={styles['arrow']}
          onClick={decreaseMatches}
        />
        <p className={styles['text-of-number']}>{matchesCount}</p>
        <img
          src={arrowRight}
          alt="Increase matches"
          className={styles['arrow']}
          onClick={increaseMatches}
        />
      </div>
      <div className={styles['setting-wrapper']}>
        <p className={styles['text']}>
          I want to take from <span className={styles['yellow-text']}>1</span>
          to
        </p>
        <img
          src={arrowLeft}
          alt="Decrease matches"
          className={styles['arrow']}
          onClick={decreaseMaxMatches}
        />
        <p className={styles['text-of-number']}>{maxMatches}</p>
        <img
          src={arrowRight}
          alt="Increase matches"
          className={styles['arrow']}
          onClick={increaseMaxMatches}
        />
        <p className={styles['text']}>matches.</p>
      </div>
      <div className={styles['button-wrapper']}>
        <Button onClick={handleReadyClick}>I'm ready</Button>
      </div>
      <div className={styles['long-arrows-wrapper']}>
        <div className={styles['arrow-wrapper']} onClick={handleBackButton}>
          <p className={`${styles['text']} ${styles['left-arrow-text']}`}>
            Back
          </p>
          <img
            src={longArrowLeft}
            alt="back"
            className={styles['long-arrow']}
          />
        </div>
        <div className={styles['arrow-wrapper']} onClick={handleSkipButton}>
          <p className={`${styles['text']} ${styles['right-arrow-text']}`}>
            Skip
          </p>
          <img
            src={longArrowRight}
            alt="skip"
            className={styles['long-arrow']}
          />
        </div>
      </div>
    </div>
  );
};

export { GameSettings };
