import PropTypes from 'prop-types';
import { FriendStatus, FriendsLogo } from './FriendListItem.styled';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendStatus status={isOnline}></FriendStatus>
      <FriendsLogo src={avatar} alt="User avatar" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};