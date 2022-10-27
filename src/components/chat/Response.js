function Response(props) {
  
  return (
    <li>
      <div class="message-data align-right">
        <span class="message-data-time">{props.message.time}</span> &nbsp; &nbsp;
        <span class="message-data-name">{props.from.name}</span>
        <i class="fa fa-circle me"></i>
      </div>
      <div class="message other-message float-right">
        {props.message.text}
      </div>
    </li>
  );
}

export default Response;