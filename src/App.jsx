import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalNote from './components/JournalNote/JournalNote';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import CardButton from './components/CardButton/CardButton';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tData = JSON.parse(localStorage.getItem('data'));
    if (tData) {
      setData(
        tData.map((item) => ({
          ...item,
          date: new Date(item.date),
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (data.length) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, [data]);

  const sortNotes = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else return -1;
  };

  const addNote = (journalNote) => {
    setData((prevData) => [
      ...prevData,
      {
        ...journalNote,
        date: new Date(journalNote.date),
        id:
          prevData.length > 0 ? Math.max(...prevData.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  return (
    <>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList>
            {data.length === 0 ? (
              <p>Записей пока нет</p>
            ) : (
              data.sort(sortNotes).map((el) => (
                <CardButton key={el.id}>
                  <JournalNote title={el.title} text={el.text} date={el.date} />
                </CardButton>
              ))
            )}
          </JournalList>
        </LeftPanel>

        <Body>
          <JournalForm onSubmit={addNote} />
        </Body>
      </div>
    </>
  );
};

export default App;
