import CardButton from '../CardButton/CardButton';
import styles from './JournalAddButton.module.css';

const JournalAddButton = () => {
  return (
    <>
      <CardButton className={styles['journal-add']}>
        <img src="/plus-icon.svg" alt="" />
        Новая заметка
      </CardButton>
    </>
  );
};

export default JournalAddButton;
