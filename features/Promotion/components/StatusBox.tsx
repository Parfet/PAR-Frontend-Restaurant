import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { SmallText } from '../../../core/config/TextStyle'
import { PromotionStatusThai } from '../../../core/constant/constant'
import { PromotionStatus } from '../../../core/constant/enum'

interface StatusTextProps {
  fontColor: string
}

const StatusText = styled(SmallText)`
  color:  ${(props: StatusTextProps) => props.fontColor ? props.fontColor : '' };
  font-weight: bold;
`

interface Props {
  status: string
}

const StatusBox = (props: Props) => {
  const { status } = props

  const [color, setColor] = useState({
    bg: 'bg-cusPastelPink',
    font: '#FF6961'
  })
  
  useEffect(() => {
    if (status === PromotionStatus.PROMOTION_ACTIVE){
      setColor({
        bg: 'bg-cusPastelGreen',
        font:'#3ace3a'
      })
    }
  }, [status])

  return (
    <div className={`${color.bg} px-2 py-1 rounded-5 flex item-center`}>
      <StatusText fontColor={color.font}>
        { status === PromotionStatus.PROMOTION_ACTIVE ? PromotionStatusThai.PROMOTION_ACTIVE
          : PromotionStatusThai.PROMOTION_INACTIVE}
      </StatusText>
    </div>
  )

}

export default StatusBox