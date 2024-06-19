import './App.css';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import Button from './components/Button/Button';
import JournalNote from './components/JournalNote/JournalNote';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import CardButton from './components/CardButton/CardButton';

const App = () => {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и ',
      date: new Date(),
    },
    {
      title: 'Поход в горы',
      text: 'Думал, что очень много времени',
      date: new Date(),
    },
  ];

  
  return (
    <>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList>
            
            <CardButton>
              <JournalNote
                title={data[0].title}
                text={data[0].text}
                date={data[0].date}
              />
            </CardButton>

            <CardButton>
              <JournalNote
                title={data[1].title}
                text={data[1].text}
                date={data[1].date}
              />
            </CardButton>
          </JournalList>
        </LeftPanel>
        
        <Body>
          <JournalForm />
        </Body>
      </div>
    </>
  );
};

export default App;
