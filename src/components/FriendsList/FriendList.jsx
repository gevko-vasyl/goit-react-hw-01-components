import React from "react";
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
