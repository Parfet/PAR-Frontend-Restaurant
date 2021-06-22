import React from 'react'
import { FaTrash, FaPen } from "react-icons/fa";

import Accordion from '../../../core/components/Accordion'

const PromotionList = () => {

  return (
    <div className="block overscroll-y-contain">
      <Accordion
        title={
          <>
            <span>Test</span>
            <FaPen />
            <FaTrash />
          </>
        }
        content="test"
      />
    </div>
  )

}

export default PromotionList