import { useEffect, useReducer, useRef, useContext } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalFormState';
import { UserContext } from '../../context/user.context';

const JournalForm = ({ onSubmit }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();
  const { userId } = useContext(UserContext);

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.text || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' });
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit, values, onSubmit]);

  const addJournalNote = (e) => {
    e.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  };

  useEffect(() => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: { uId: userId },
    });
  }, [userId]);

  const onChange = (e) => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: { [e.target.name]: e.target.value, ['uId']: userId },
    });
  };

  return (
    <form className={styles['journal-form']} onSubmit={addJournalNote}>
      <div>
        <Input
          type="text"
          ref={titleRef}
          value={values.title}
          isValid={isValid.title}
          onChange={onChange}
          name="title"
          appearence="title"
        />
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']}>
          <img src="/calendar.svg" alt="calendar-icon" />
          <span>Дата</span>
        </label>
        <Input
          type="date"
          ref={dateRef}
          value={values.date}
          isValid={isValid.date}
          onChange={onChange}
          name="date"
          id="date"
        />
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/folder.svg" alt="folder" />
          <span>Метки</span>
        </label>
        <Input
          value={values.tag}
          onChange={onChange}
          type="text"
          name="tag"
          id="tag"
          className={styles['input']}
        />
      </div>

      <textarea
        value={values.text}
        onChange={onChange}
        name="text"
        ref={textRef}
        id=""
        cols="30"
        rows="10"
        className={cn(styles['input'], {
          [styles['invalid']]: !isValid.text,
        })}
      ></textarea>

      <Button text="сохранить" />
    </form>
  );
};

export default JournalForm;
