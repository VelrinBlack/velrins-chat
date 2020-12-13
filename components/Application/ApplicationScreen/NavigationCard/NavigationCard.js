import NavigationCardStyles from './NavigationCardStyles';

const NavigationCard = ({ user: { name, surname }, messages }) => {
  const message = messages[0].content;

  return (
    <NavigationCardStyles>
      <img src='/images/profile.png' alt='user' />

      <div>
        <h3>
          {name} {surname}
        </h3>
        <p>{message.length > 25 ? `${message.substring(0, 25)}...` : message}</p>
      </div>
    </NavigationCardStyles>
  );
};

export default NavigationCard;
