import React, { useState } from 'react'

import { RegularText } from '../../../../core/config/TextStyle'
import CardElement from '../../../../core/components/CardElement'
import ArchiveModal from './ArchiveModal'

const ArchiveCard = () => {

  const [modalState, setModalState] = useState(false)

  const actionModal = () => {
    setModalState(!modalState)
  }

  const valueFromModal = (value: boolean) => {
    setModalState(value)
  }

  return (
    <>
      <CardElement isYellow>
        <>
          <div className="text-center my-3">
            <RegularText>ลบร้านบุฟเฟต์</RegularText>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-white hover:bg-gray-100 focus:outline-none text-white py-2 px-4 rounded-25"
              type="submit"
              onClick={() => actionModal()}
            >
              <RegularText>ยืนยัน</RegularText>
            </button>
          </div>
        </>
      </CardElement>
      {
        modalState ?
          <ArchiveModal
            showModal={modalState}
            callBackToParent={valueFromModal}
          />
        :<></>
      }
      
    </>
  )

}

export default ArchiveCard
