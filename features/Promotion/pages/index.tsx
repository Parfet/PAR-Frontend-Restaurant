import React from 'react'

import CardElement from '../../../core/components/CardElement'
import PromotionList from '../components/PromotionList'
import PromotionForm from '../components/PromotionForm'

const ProfileManagement = () => {

  return (
    <div className="flex justify-around w-full py-16">
      <CardElement classNameFromParent="p-10 w-1/2 mx-16">
        <PromotionList />
      </CardElement>
      <CardElement classNameFromParent="w-1/2 mr-16">
        <PromotionForm />
      </CardElement>
    </div>
  )

}

export default ProfileManagement
