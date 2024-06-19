import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

const JournalAddButton = () => {
  

  return (
    <>
      <CardButton className="journal-add">
        <img src="/plus-icon.svg" alt="" />
        Новая заметка
      </CardButton>
    </>
  );
}

export default JournalAddButton;