import React, { useState, useEffect } from 'react'

import CardElement from '../../../core/components/CardElement'
import { NormalText, SubHeader, RegularText } from '../../../core/config/TextStyle'

interface Props {
  textHeader: string
  textBody: string
  showModal: boolean
  callBackToParent: (value: boolean) => void
}
const PromotionModal = (props: Props) => {
  const { textHeader, textBody, showModal, callBackToParent } = props
  const [modalState, setModalState] = useState(false)

  useEffect(() => {
    setModalState(showModal)
  })

  const handleSubmit = () => {
    console.log("Confirm")
    setModalState(false);
    callBackToParent(false);
  };

  const handleClose = () => {
    setModalState(false);
    callBackToParent(false);
  };

  return (
    <div className="flex items-center justify-center absolute h-screen w-screen left-0 top-0">
      <CardElement isYellow classNameFromParent="z-20 p-8 flex-col relative self-center shadow-2xl w-96">
        <>
          <SubHeader className="flex justify-center" isBold>
            {textHeader}
          </SubHeader>
          <div className="my-5 px-0 break-words text-center">
            <RegularText>
              {textBody}
            </RegularText>
          </div>
          <div className="flex justify-around mt-3">
            <button 
              onClick={handleClose} 
              className=" bg-white hover:bg-gray-200 py-2 px-6 rounded-25 focus:outline-none" type="submit">
              <NormalText>ยกเลิก</NormalText>
            </button>
            <button 
              onClick={handleSubmit} 
              className=" bg-cusRed hover:bg-cusDarkRe py-2 px-6 rounded-25 focus:outline-none" type="submit">
              <NormalText isWhite>ยืนยัน</NormalText>
            </button>
          </div>
        </>
      </CardElement>
      <div className="bg-gray-700 bg-opacity-50 fixed bottom-0 left-0 w-full h-full transition duration-500 ease-in-out transfom z-10"></div>
    </div>
  )

}

export default PromotionModal
