import { useState, useEffect, useReducer } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { INITIAL_STATE } from './JournalFormState';
import { formReducer } from './JournalFormState';

const JournalForm = ({ onSubmit }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;

  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.text || !isValid.title) {
        timerId = setTimeout(() => {
          dispatchForm({ type: 'RESET_VALIDITY' })
        }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
    }
  }, [isFormReadyToSubmit]);

  const addJournalNote = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const noteObject = {
      title: formProps.title,
      date: formProps.date,
      text: formProps.text
    };

    dispatchForm({ type: 'SUBMIT', payload: formProps });
  };

  return (
      <form className={styles['journal-form']} onSubmit={addJournalNote}>
        <div>
          <input type="text" name='title' className={cn(styles['input-title'], {
            [styles['invalid']]: !isValid.title
          })} />
        </div>
        
        <div className={styles['form-row']}>
          <label htmlFor="date" className={styles['form-label']}>
            <img src="public/calendar.svg" alt="calendar-icon" />
            <span>Дата</span>
          </label>
          <input type="date" name='date' id='date' className={cn(styles['input'], {
            [styles['invalid']]: !isValid.date
          })} />
        </div>

        <div className={styles['form-row']}>
          <label htmlFor="tag" className={styles['form-label']}>
            <img src="public/folder.svg" alt="folder" />
            <span>Метки</span>
          </label>
          <input type="text" name='tag' id='tag' className={styles['input']}/>
        </div>
        
        <textarea name="text" id="" cols='30' rows='10' className={cn(styles['input'], {
          [styles['invalid']]: !isValid.text
        })}></textarea>

        <Button text='сохранить' />
      </form>
  );
};

export default JournalForm;
