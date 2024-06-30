import CardButton from '../CardButton/CardButton';
import styles from './JournalAddButton.module.css';

const JournalAddButton = ({ clearForm }) => {
  return (
    <>
      <CardButton className={styles['journal-add']} onClick={clearForm}>
        <img src="/plus-icon.svg" alt="" />
        Новая заметка
      </CardButton>
    </>
  );
};

export default JournalAddButton;
