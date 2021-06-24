import React, { useState } from 'react'
import { FaTrash, FaPen } from "react-icons/fa"

import Accordion from '../../../core/components/Accordion'
import { PromotionStatus } from '../../../core/constant/enum'
import { SubHeader, RegularText } from '../../../core/config/TextStyle'
import StatusBox from './StatusBox'
import PromotionModal from './PromotionModal'

const PromotionList = () => {
  const [modalState, setModalState] = useState(false)
  const [selectPromotion, setSelectPromotion] = useState("")

  const actionModal = () => {
    setModalState(!modalState)
    setSelectPromotion("Test1")
  }

  const valueFromModal = (value: boolean) => {
    setModalState(value)
  }

  return (
    <>
      <div className="block overscroll-y-contain">
        <Accordion
          classAtButton="bg-gray-200"
          classAtContent="bg-gray-100 my-3"
          title={
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center space-x-3">
                <SubHeader>Test</SubHeader>
                <StatusBox status={PromotionStatus.PROMOTION_ACTIVE} />
              </div>
              
            </div>
          }
          action={
            <div className="mx-3 flex flex-row space-x-3">
              <FaPen className="mr-3" />
              <div className="relative z-50 cursor-pointer">
                <FaTrash onClick={() => actionModal()} />
              </div>
            </div>
          }
          content={
            <div className="px-6 py-3">
              <RegularText>Elit aute excepteur ex sit. Adipisicing laborum occaecat consequat dolor sint enim reprehenderit anim consequat veniam veniam fugiat nostrud proident. Lorem consequat quis in in ullamco qui reprehenderit culpa anim. Eu nisi tempor non id consectetur ut eu cupidatat proident elit duis.</RegularText>
            </div>
          }
        />  
      </div>     
      {
        modalState ?
          <PromotionModal
            textHeader="ต้องการลบโปรชั่นใช่หรือไม่"
            textBody={`โปรโมชั่นที่ทำการลบคือ ${selectPromotion}`}
            showModal={modalState}
            callBackToParent={valueFromModal}
          />
          : <></>
      }
    </>
  )

}

export default PromotionList