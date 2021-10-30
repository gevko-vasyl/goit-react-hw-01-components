import React from "react";
import "./FriendsItem.scss";

export default function FriendsItem({ avatar, name, isOnline }) {
  return (
    <li className="friends-item">
      <img className="avatar" src={avatar} alt={name} width="48" />
      <span className={isOnline ? "status-online" : "status-offline"}></span>
      <p className="name">{name}</p>
    </li>
  );
}
