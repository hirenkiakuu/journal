import './App.css';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/useLocalStorage.hook';

function mapItems(items) {
  if (!items) {
    return [];
  }

  return items.map(i => ({
    ...i,
    date: new Date(i.date)
  }));
};

const App = () => {
  const [data, setData] = useLocalStorage('data');

  const addNote = (journalNote) => {
    setData([...mapItems(data), 
      {
        ...journalNote,
        date: new Date(journalNote.date),
        id:
          data.length > 0 ? Math.max(...data.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  return (
    <>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList items={mapItems(data)} />
        </LeftPanel>

        <Body>
          <JournalForm onSubmit={addNote} />
        </Body>
      </div>
    </>
  );
};

export default App;
