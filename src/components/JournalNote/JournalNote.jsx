import styles from './JournalNote.module.css';

const JournalNote = ({ title, text, date }) => {
  const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date); // Internalization API

  return (
    <>
      <div className={styles['journal-item']}>
        <h2 className={styles['journal-item__header']}>{title}</h2>
        <div className={styles['journal-item__body']}>
          <div className={styles['journal-item__date']}>{formattedDate}</div>
          <div className={styles['journal-item__text']}>{text}</div>
        </div>
      </div>
    </>
  );
};

export default JournalNote;
