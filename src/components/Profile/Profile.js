import PropTypes from 'prop-types';
import {
  UserProfile,
  UserDescription,
  UserName,
  UserTag,
  UserLocation,
  UserAvatar,
  UserStats,
  UserLabel,
  UserQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <UserDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStats>
        <li>
          <UserLabel>Followers </UserLabel>
          <UserQuantity>{stats.followers}</UserQuantity>
        </li>
        <li>
          <UserLabel>Views </UserLabel>
          <UserQuantity>{stats.views}</UserQuantity>
        </li>
        <li>
          <UserLabel>Likes </UserLabel>
          <UserQuantity>{stats.likes}</UserQuantity>
        </li>
      </UserStats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
