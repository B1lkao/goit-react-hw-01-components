import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import {
  ProfImg,
  ProfItem,
  ProfUl,
  ProfName,
  ProfInfo,
  ProfLabel,
  ProfQuantity,
} from './Profile.styled';
export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => {
  return (
    <Box
      mt="30px"
      bg="background"
      display="block"
      width="35vh"
      pd="20px"
      borderRadius="8px"
      fontSize="40"
      overflow="hidden"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <ProfImg src={avatar} alt="User avatar" />
        <ProfName>{username}</ProfName>
        <ProfInfo>@{tag}</ProfInfo>
        <ProfInfo>{location}</ProfInfo>
      </Box>
      <ProfUl>
        <ProfItem>
          <ProfLabel>Followers</ProfLabel>
          <ProfQuantity>{stats.followers}</ProfQuantity>
        </ProfItem>
        <ProfItem>
          <ProfLabel>Views</ProfLabel>
          <ProfQuantity>{stats.views}</ProfQuantity>
        </ProfItem>
        <ProfItem>
          <ProfLabel>Likes</ProfLabel>
          <ProfQuantity>{stats.likes}</ProfQuantity>
        </ProfItem>
      </ProfUl>
    </Box>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};