import React from 'react'

import Navigator from '../core/components/Navigator'
import { MENU } from '../core/constant/constant'
import DashBoard from '../features/Home/pages/index'

const Home = () => {

  return (
    <div className="">
      <Navigator currentPage={MENU.MENU_HOME}>
        <DashBoard />
      </Navigator>
    </div>
  )
}

export default Home
