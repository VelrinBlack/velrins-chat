import MessageStyles from './MessageStyles';

const Message = ({ content, time, receiver }) => (
  <MessageStyles className={`message ${receiver && 'receiver'}`}>
    <p>{content}</p>
    <time>{new Date(time).toLocaleTimeString()}</time>
  </MessageStyles>
);

export default Message;
