import React from 'react'

import Navigator from '../core/components/Navigator'
import { MENU } from '../core/constant/constant'
import PromotionPage from '../features/Promotion/pages'

const Promotion = () => {

  return (
    <Navigator currentPage={MENU.MENU_PROMOTION}>
      <PromotionPage />
    </Navigator>
  )
}

export default Promotion
