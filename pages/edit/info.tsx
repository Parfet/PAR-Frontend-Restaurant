import React from 'react'

import Navigator from '../../core/components/Navigator'
import { MENU } from '../../core/constant/constant'

const EditInfo = () => {

  return (
    <div className="">
      <Navigator isYellow currentPage={MENU.MENU_EDIT_INFO}>
        <>
          EditInfo
        </>
      </Navigator>
    </div>
  )
}

export default EditInfo
