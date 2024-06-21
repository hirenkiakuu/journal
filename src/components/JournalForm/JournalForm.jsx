import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

const JournalForm = ({ onSubmit }) => {
  const [formValidState, setFormValidState] = useState({
    title: true,
    text: true,
    date: true
  });

  const addJournalNote = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    const noteObject = {
      title: formProps.title,
      date: formProps.date,
      text: formProps.text
    };

    let isFormValid = true;

    if (!formProps.title?.trim().length) {
      setFormValidState(state => ({
        ...state,
        title: false
      }));
      isFormValid = false;
    } else {
      setFormValidState(state => ({
        ...state,
        title: true
      }));
    }

    if (!formProps.text?.trim().length) {
      setFormValidState(state => ({
        ...state,
        text: false
      }));
      isFormValid = false;
    } else {
      setFormValidState(state => ({
        ...state,
        text: true
      }));
    }

    if (!formProps.date) {
      setFormValidState(state => ({
        ...state,
        date: false
      }));
      isFormValid = false;
    } else {
      setFormValidState(state => ({
        ...state,
        date: true
      }));
    }

    if (!isFormValid) {
      return;
    }

    onSubmit(noteObject);
  };

  return (
      <form className='journal-form' onSubmit={addJournalNote}>
        <input type="text" name='title' className={`input ${formValidState.title ? '' : 'invalid'}`} />
        <input type="date" name='date' className={`input ${formValidState.date ? '' : 'invalid'}`} />
        <input type="text" name='tag'   />
        <textarea name="text" id="" cols='30' rows='10' className={`input ${formValidState.text ? '' : 'invalid'}`}></textarea>
        <Button text='сохранить' />
      </form>
  );
};

export default JournalForm;
