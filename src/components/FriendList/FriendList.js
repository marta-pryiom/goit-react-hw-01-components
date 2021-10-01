import PropTypes from 'prop-types';
import s from './FriendList.module.css';
console.log(s);

function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={s.item} key={id}>
          {isOnline ? (
            <span className={s.statusRed}></span>
          ) : (
            <span className={s.statusGreen}></span>
          )}
          <img className={s.avatar} src={avatar} alt={name} width="100" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsList;
