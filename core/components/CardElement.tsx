import React from 'react'

interface Props {
  isYellow?: boolean
  classNameFromParent?: string
  children: JSX.Element
}

const CardElement = (props: Props) => {
  const { children, isYellow, classNameFromParent } = props
  return (
    <div className={`rounded-25
      ${classNameFromParent ? classNameFromParent : 'p-10'} 
      ${isYellow ? 'bg-cusYellow' :'bg-white'}
      `}>
      {children}
    </div>
  )

}

export default CardElement