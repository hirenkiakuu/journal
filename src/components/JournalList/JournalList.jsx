import styles from './JournalList.module.css';

const JournalList = ({ children }) => {
  return (
    <>
      <div className={styles['journal-list']}>{children}</div>
    </>
  );
};

export default JournalList;
