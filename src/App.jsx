import './App.css';
import Button from './components/Button/Button';
import JournalNote from './components/JournalNote/JournalNote';

const App = () => {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      text: "Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и ",
      date: new Date(),
    },
    {
      title: "Поход в горы",
      text: "Думал, что очень много времени",
      date: new Date(),
    }
  ];

  return (
    <>
      <Button />
      <JournalNote 
        title={data[0].title}
        text={data[0].text}
        date={data[0].date}
      />
      <JournalNote
        title={data[1].title}
        text={data[1].text}
        date={data[1].date}
      />
    </>
  );
}

export default App;

