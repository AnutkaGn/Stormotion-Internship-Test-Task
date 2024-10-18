import styles from './styles.module.css';

type Properties = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: Properties): JSX.Element => {
  return (
    <button className={styles['button']} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
