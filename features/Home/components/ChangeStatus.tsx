import React from 'react'
import { useFormik } from 'formik';
import _ from 'lodash'

import { RestaurantStatus } from '../../../core/constant/enum'
import { RegularText } from '../../../core/config/textStyle'
import CardElement from '../../../core/components/CardElement'

const optionItem = [
  {
    label: 'เปิดร้าน',
    value: RestaurantStatus.RESTAURANT_OPEN,
  },
  {
    label: 'ปิดร้าน',
    value: RestaurantStatus.RESTAURANT_CLOSED
  }
]

const ChangeStatus = () => {

  const formik = useFormik({
    initialValues: {
      restaurantStatus: RestaurantStatus.RESTAURANT_OPEN
    },
    onSubmit: (values) => {
      console.log(values.restaurantStatus)
    },
  });

  return (
    <CardElement>
      <>
        <div className="text-center">
          <RegularText>สถานะร้านบุฟเฟต์</RegularText>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="inline-block relative w-64 my-3">
            <select
              id="restaurantStatus"
              name="restaurantStatus"
              onChange={formik.handleChange}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none  rounded-25"
            >
              {
                _.map(optionItem, (data, index) => (
                  <option value={data.value} key={index}>{data.label}</option>
                ))
              }
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-cusYellow hover:bg-cusYellow-500 py-2 px-4 rounded-25 focus:outline-none " type="submit">
              <RegularText isWhite>ยืนยัน</RegularText>
            </button>
          </div>
        </form>
      </>
    </CardElement>
  )

}

export default ChangeStatus
