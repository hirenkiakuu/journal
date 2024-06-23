import styles from './JournalList.module.css';
import CardButton from '../CardButton/CardButton';
import JournalNote from '../JournalNote/JournalNote';

const JournalList = ({ items }) => {
  const sortNotes = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else return -1;
  };

  return (
    <>
      <div className={styles['journal-list']}>
        {items.length === 0 ? (
          <p>Записей пока нет</p>
        ) : (
          items.sort(sortNotes).map((el) => (
            <CardButton key={el.id}>
              <JournalNote title={el.title} text={el.text} date={el.date} />
            </CardButton>
          ))
        )}
      </div>
    </>
  );
};

export default JournalList;
