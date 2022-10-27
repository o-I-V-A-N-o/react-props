import './MessageHistory.css';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

function MessageHistory(props) {
  
  const list = props.list;

  console.log(list);
  
  const listitem = list.map((item) => (
    item.type == "message" ?
      <Message from={item.from} message={item} />
      : item.type == "response" ?
        <Response from={item.from} message={item} />
        : item.type == "typing" ?
          <Typing from={item.from} message={item} />
          : null
  ));

  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <ul>
            {listitem}
          </ul>
        </div>
      </div>  
    </div>
  );
}

export default MessageHistory;