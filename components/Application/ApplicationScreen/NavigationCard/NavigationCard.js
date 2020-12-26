import NavigationCardStyles from './NavigationCardStyles';

const NavigationCard = ({ cardUser: { name, surname }, messages, setActiveChat, id }) => {
  let message = null;
  if (messages.length) {
    message = messages[messages.length - 1].content;
  }

  return (
    <NavigationCardStyles
      onClick={() => {
        setActiveChat({ name, surname, messages, id });
      }}
    >
      <img src='/images/profile.png' alt='user' />

      <div>
        <h3>
          {name} {surname}
        </h3>
        {message && <p>{message.length > 25 ? `${message.substring(0, 25)}...` : message}</p>}
      </div>
    </NavigationCardStyles>
  );
};

export default NavigationCard;
