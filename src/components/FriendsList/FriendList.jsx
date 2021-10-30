import React from "react";
import PropTypes from "prop-types";
import FriendsItem from "./FriendsItem";

import "./FriendsList.scss";

export default function FriendList({ friends }) {
  return (
    <div className="friends-container">
      <ul className="friends-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendsItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
