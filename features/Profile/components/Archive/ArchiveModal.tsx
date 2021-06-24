import React, { useState, useEffect } from 'react'

import CardElement from '../../../../core/components/CardElement'
import { NormalText, SubHeader, SmallText } from '../../../../core/config/TextStyle'

interface Props {
  showModal: boolean
  callBackToParent: (value: boolean) => void
}
const ArchiveModal = (props: Props) => {
  const { showModal, callBackToParent } = props
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
    <div className="flex items-center justify-center absolute h-screen w-screen left-0">
      <CardElement isYellow classNameFromParent="z-20 p-8 flex-col relative self-center shadow-2xl w-96">
        <>
          <SubHeader className="flex justify-center" isBold>
            ต้องการลบร้านบุฟเฟต์ใช่หรือไม่
          </SubHeader>
          <div className="my-5 px-0 break-words text-center">
            <NormalText>
              คุณสามารถกู้คืนบัญชีผู้ใช้งานได้ภายใน 30 วัน หลังจากยืนยันการจับเก็บ
            </NormalText>
          </div>
          <div className="flex justify-around mt-3">
            <button 
              onClick={handleClose} 
              className=" bg-white hover:bg-gray-200 py-2 px-6 rounded-25 focus:outline-none" type="submit">
              <SmallText>ยกเลิก</SmallText>
            </button>
            <button 
              onClick={handleSubmit} 
              className=" bg-cusRed hover:bg-cusDarkRe py-2 px-6 rounded-25 focus:outline-none" type="submit">
              <SmallText isWhite>ยืนยัน</SmallText>
            </button>
          </div>
        </>
      </CardElement>
      <div className="bg-gray-700 bg-opacity-50 fixed bottom-0 left-0 w-full h-full transition duration-500 ease-in-out transfom z-10"></div>
    </div>
  )

}

export default ArchiveModal
