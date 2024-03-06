import React from 'react'
import MyProfileTalent from './MyProfileTalent'
import MyProfileClient from './MyProfileClient'
import "./MyProfile.css"

function MyProfile() {
  return (
    <div>
      {false ? <MyProfileClient /> : <MyProfileTalent />}
    </div>
  )
}

export default MyProfile