import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

const JournalForm = () => {
  const [inputData, setInputData] = useState('');

  const inputChange = (event) => {
    setInputData(event.target.value);
    console.log(inputData);
  };

  const addJournalNote = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
      <form className='journal-form' onSubmit={addJournalNote}>
        <input type="text" name='title' value={inputData} onChange={inputChange} />
        <input type="date" name='date'  />
        <input type="text" name='tag'  />
        <textarea name="post" id="" cols='30' rows='10'></textarea>
        <Button text='сохранить' onClick={() => {console.log('нажали');}} />
      </form>
  );
};

export default JournalForm;
