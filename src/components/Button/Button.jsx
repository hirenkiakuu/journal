import styles from './Button.module.css';
import { memo } from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button className={`${styles.button} ${styles.accent}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
