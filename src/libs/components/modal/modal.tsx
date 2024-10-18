import { useRef } from 'react';
import crossIcon from '~/assets/images/cross.svg';

import styles from './styles.module.css';

type Properties = {
  children: React.ReactNode;
  isOpened: boolean;
  title: string;
  showCloseButton?: boolean;
  onClose?: () => void;
};

const Modal = ({
  children,
  isOpened,
  title,
  showCloseButton = false,
  onClose,
}: Properties): JSX.Element => {
  const dialogReference = useRef<HTMLDialogElement>(null);

  if (!isOpened) {
    return <></>;
  }

  return (
    <>
      <div className={styles['modal-backdrop']} />

      <dialog
        aria-label={title}
        className={styles['modal-container']}
        ref={dialogReference}
      >
        <div className={styles['modal-content']}>
          {showCloseButton && (
            <div className={styles['modal-close']}>
              <img src={crossIcon} alt="Close" onClick={onClose} />
            </div>
          )}
          <div className={styles['modal-body']}>
            <h3 className={styles['modal-header-title']}>{title}</h3>
            {children}
          </div>
        </div>
      </dialog>
    </>
  );
};

export { Modal };
