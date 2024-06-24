import styles from './JournalList.module.css';
import CardButton from '../CardButton/CardButton';
import JournalNote from '../JournalNote/JournalNote';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';

const JournalList = ({ items }) => {
  const { userId } = useContext(UserContext);

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
          items
            .filter((el) => el.uId === userId)
            .sort(sortNotes)
            .map((el) => (
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
