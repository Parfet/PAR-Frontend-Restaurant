import React from 'react'

import Navigator from '../core/components/Navigator'
import { MENU } from '../core/constant/constant'
import DashBoard from '../features/Home/pages/index'

const Home = () => {

  return (
    <Navigator currentPage={MENU.MENU_HOME}>
      <DashBoard />
    </Navigator>
  )
}

export default Home
