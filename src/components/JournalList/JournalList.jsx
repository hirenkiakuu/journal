import styles from './JournalList.module.css';
import CardButton from '../CardButton/CardButton';
import JournalNote from '../JournalNote/JournalNote';
import { UserContext } from '../../context/user.context';
import { useContext, useMemo } from 'react';

const JournalList = ({ items, setItem }) => {
  const { userId } = useContext(UserContext);

  const sortNotes = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else return -1;
  };

  const filteredItems = useMemo(
    () => items.filter((el) => el.uId === userId).sort(sortNotes),
    [items, userId]
  );

  return (
    <>
      <div className={styles['journal-list']}>
        {items.length === 0 ? (
          <p>Записей пока нет</p>
        ) : (
          filteredItems.map((el) => (
            <CardButton key={el.id} onClick={() => setItem(el)}>
              <JournalNote title={el.title} text={el.text} date={el.date} />
            </CardButton>
          ))
        )}
      </div>
    </>
  );
};

export default JournalList;
