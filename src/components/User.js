import React from 'react';
import './User.css';

const User = ({user}) => {
  const {profile_pic, name, status} = user;
  return(
    <div className="User">
      <img src={profile_pic} alt={name} className="User__pic"/>
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  )
}

export default User;
