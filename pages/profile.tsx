import React from 'react'

import Navigator from '../core/components/Navigator'
import { MENU } from '../core/constant/constant'

const Profile = () => {

  return (
    <div className="">
      <Navigator isYellow currentPage={MENU.MENU_PROFILE}>
        <>
          Profile
        </>
      </Navigator>
    </div>
  )
}

export default Profile
