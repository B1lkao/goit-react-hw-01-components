import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListList, FriendListItemStyle } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendListList>
      {friends.map(friend => (
        <FriendListItemStyle key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendListItemStyle>
      ))}
    </FriendListList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};