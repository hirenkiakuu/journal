import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <img className={styles.logo} src="/logo.svg" alt="logotype" />
      <SelectUser />
    </>
  );
};

export default Header;
