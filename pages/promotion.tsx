import React from 'react'

import Navigator from '../core/components/Navigator'
import { MENU } from '../core/constant/constant'

const Promotion = () => {

  return (
    <div className="">
      <Navigator currentPage={MENU.MENU_PROMOTION}>
        <>
          Promotion
        </>
      </Navigator>
    </div>
  )
}

export default Promotion
