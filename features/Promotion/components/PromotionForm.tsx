import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik';
import _ from 'lodash'

import { RegularText } from '../../../core/config/TextStyle'
import { PromotionStatusThai } from '../../../core/constant/constant'
import { PromotionStatus } from '../../../core/constant/enum'

const optionItem = [
  {
    label: PromotionStatusThai.PROMOTION_ACTIVE,
    value: PromotionStatus.PROMOTION_ACTIVE,
  },
  {
    label: PromotionStatusThai.PROMOTION_INACTIVE,
    value: PromotionStatus.PROMOTION_INACTIVE
  }
]

const Select = styled.select`
  text-align-last: center;
`

const Option = styled.option`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PromotionForm = () => {

  const formik = useFormik({
    initialValues: {
      promotionName: '',
      promotionDescription: '',
      promotionStatus: PromotionStatus.PROMOTION_ACTIVE
    },
    onSubmit: (values) => {
      console.log(values.promotionName)
      console.log(values.promotionDescription)
    },
  });


  return (
    <div className="p-16">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <div className="text-center mb-3">
            <RegularText>
              ชื่อโปรโมชั่น
            </RegularText>
          </div>
          <input 
            className="appearance-none border rounded-25 w-full py-2 px-3 leading-tight focus:border-cusYellow focus:outline-none focus:shadow-outline text-center"
            id="promotionName"
            name="promotionName"
            type="text"
            onChange={formik.handleChange}
            placeholder="ชื่อโปรโมชั่น"
            />
        </div>
        <div className="mb-4">
          <div className="text-center mb-3">
            <RegularText>
              รายละเอียดโปรโมชั่น
            </RegularText>
          </div>
          <textarea 
            className="resize-none border rounded-5 h-56 w-full px-5 py-3 focus:border-cusYellow focus:outline-none focus:shadow-outline"
            id="promotionDescription"
            name="promotionDescription"
            onChange={formik.handleChange}
            >

          </textarea>
        </div>
        <div className="mb-4">
          <div className="text-center mb-3">
            <RegularText>
              สถานะของโปรโมชั่น
            </RegularText>
          </div>
          <div className="inline-block relative w-full my-3">
            <Select
              id="promotionStatus"
              name="promotionStatus"
              onChange={formik.handleChange}
              className="py-2 appearance-none w-full bg-white border focus:border-cusYellow leading-tight focus:outline-none rounded-25"
            >
              {
                _.map(optionItem, (data, index) => (
                  <Option value={data.value} key={index} className="text-center">
                      {data.label}
                  </Option>
                ))
              }
            </Select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button className="bg-cusYellow hover:bg-cusYellow-500 py-2 px-4 rounded-25 focus:outline-none " type="submit">
            <RegularText isWhite>เพิ่มโปโมชั่น</RegularText>
          </button>
        </div>
      </form>
    </div>
  )

}

export default PromotionForm