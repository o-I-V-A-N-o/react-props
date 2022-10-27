function Message(props) {
  
  return (
    <li>
      <div class="message-data align-left">
        <span class="message-data-name"><i class="fa fa-circle online"></i> {props.from.name}</span>
        <span class="message-data-time">{props.message.time}</span>
      </div>
      <div class="message my-message">
        {props.message.text}
      </div>
    </li>
  );
}

export default Message;