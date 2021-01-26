import React from "react";

const UserProfile = ({userData}) => {
  if (!userData) {
    return null;
  }

const { name, location, avatar_url } = userData;
  return (
    <div class="user">
      <img alt="User Avatar" src={avatar_url} class="user__avatar" />
      <div class="user__info">
        <span class="user__name">{name}</span>
        <span class="user__location">{location}</span>
      </div>
    </div>
  );
};

export default UserProfile;
