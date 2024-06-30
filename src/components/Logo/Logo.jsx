import styles from './Logo.module.css';
import { memo } from 'react';

const Logo = ({ image }) => {
  return <img className={styles.logo} src={image} alt="logotype" />;
};

export default memo(Logo);
