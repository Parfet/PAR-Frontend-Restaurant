import React from 'react'

import Navigator from '../core/components/Navigator'
import { MENU } from '../core/constant/constant'
import ProfileManagement from '../features/Profile/pages/index'

const Profile = () => {

  return (
    <Navigator isYellow currentPage={MENU.MENU_PROFILE}>
      <ProfileManagement/>
    </Navigator>
  )
}

export default Profile
