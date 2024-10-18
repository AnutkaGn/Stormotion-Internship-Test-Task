import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions as gameActions } from '~/modules/store/app.slice';
import { Button } from '~/libs/components/components';
import { Player, type PlayerType } from '~/libs/enums/enums';
import longArrowLeft from '~/assets/images/long-left-arrow.png';

import styles from './styles.module.css';

const SelectMode = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickSelectMode = (mode: PlayerType) => {
    void dispatch(gameActions.setMode(mode));
    navigate('/settings');
  };

  const handleBackButton = () => {
    navigate('/');
  };

  return (
    <div className={styles['container']}>
      <p className={styles['mode-text']}>Who goes first?</p>
      <div className={styles['mode-button-wrapper']}>
        <div className={styles['mode-button']}>
          <Button onClick={() => handleClickSelectMode(Player.USER)}>
            I want
          </Button>
        </div>
        <div className={styles['mode-button']}>
          <Button onClick={() => handleClickSelectMode(Player.COMPUTER)}>
            Not me
          </Button>
        </div>
      </div>
      <div className={styles['arrow-wrapper']} onClick={handleBackButton}>
        <p className={styles['arrow-text']}>Back</p>
        <img src={longArrowLeft} alt="back" className={styles['long-arrow']} />
      </div>
    </div>
  );
};

export { SelectMode };
