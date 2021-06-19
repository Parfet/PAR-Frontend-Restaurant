import React from 'react'
// import { useRouter } from 'next/router'

import Navigator from '../core/components/Navigator'
import { MENU } from '../core/constant/constant'

const Home = () => {
  // const router = useRouter()

  return (
    <div className="">
      <Navigator currentPage={MENU.MENU_HOME}>
        <>
          Hello
        </>
      </Navigator>
    </div>
  )
}

export default Home
