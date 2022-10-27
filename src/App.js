import './App.css';
import Films from './components/films/Films';
import Listing from './components/listing/Listing';
import Json from './components/listing/etsy.json';
import MessageHistory from './components/chat/MessageHistory';

function App() {
  
  /* For listing */
  const items = JSON.parse(JSON.stringify(Json));
  
  /* For chat */
  const messages = [{
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идет работа над проектом?'
  }, {
    id: 'chat-5-1091',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:12',
    text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
  }, {
    id: 'chat-5-1092',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:14',
    text: 'Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
  }, {
    id: 'chat-5-1093',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:20',
    text: 'Нет, все прошло гладко. Очень хочу показать всё команде.'
  }, {
    id: 'chat-5-1094',
    from: { name: 'Виктор' },
    type: 'typing',
    time: '10:31'
  }];

  return (
    <div className="App">
      {/*Нужный компонент вставить сюда из списка ниже*/}
      <Listing items={items} />
      
      {/*
      <Films />
      <Listing items={items} />
      <MessageHistory list={messages} />
      */}
    </div>
  );
}

export default App;
