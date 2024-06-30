import './App.css';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';
import { UserContextProvider } from './context/user.context';
import { useLocalStorage } from './hooks/useLocalStorage.hook';

function mapItems(items) {
  if (!items) {
    return [];
  }

  return items.map((i) => ({
    ...i,
    date: new Date(i.date),
  }));
}

const App = () => {
  const [data, setData] = useLocalStorage('data');
  const [selectedItem, setSelectedItem] = useState(null);

  const addNote = (journalNote) => {
    if (!journalNote.id) {
      setData([
        ...mapItems(data),
        {
          ...journalNote,
          date: new Date(journalNote.date),
          id: data?.length > 0 ? Math.max(...data.map((i) => i.id)) + 1 : 1,
        },
      ]);
    } else {
      setData([
        ...mapItems(data).map((i) => {
          if (i.id === journalNote.id) {
            return {
              ...journalNote,
            };
          }
          return i;
        }),
      ]);
    }
  };

  const deleteNote = (id) => {
    setData([...data.filter((i) => i.id !== id)]);
  };

  return (
    <>
      <UserContextProvider>
        <div className="app">
          <LeftPanel>
            <Header />
            <JournalAddButton clearForm={() => setSelectedItem(null)} />
            <JournalList items={mapItems(data)} setItem={setSelectedItem} />
          </LeftPanel>

          <Body>
            <JournalForm
              onSubmit={addNote}
              onDelete={deleteNote}
              data={selectedItem}
            />
          </Body>
        </div>
      </UserContextProvider>
    </>
  );
};

export default App;
