import React from 'react';
import ClientProfile from './ClientProfile';
import TalentProfile from './TalentProfile';
import "./Profile.css";


function Profile() {
      

  return (
    <div>
    { false ? (<ClientProfile />) : (<TalentProfile />)}
    </div>
  )
}

export default Profile