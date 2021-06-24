import React from 'react'
import Link  from 'next/link'
import styled from 'styled-components'
import _ from "lodash"

import { SubHeader } from '../config/TextStyle'
import { MENU } from '../constant/constant'

interface Props {
  isYellow?: boolean
  currentPage: string
  children: JSX.Element
}

interface BgNavigatorProps {
  isYellow?: boolean
}

const menuItem = [
  {
    path: '/',
    word: MENU.MENU_HOME, 
  },
  {
    path: '/edit/info',
    word: MENU.MENU_EDIT_INFO
  }, 
  {
    path: '/promotion',
    word: MENU.MENU_PROMOTION
  }, 
  {
    path: '/profile',
    word: MENU.MENU_PROFILE
  }
]

const BgNavigator = styled.div`
  background-color: ${(props: BgNavigatorProps) => props.isYellow ? '#F8CE28' : 'white'};
`

const Logo = styled.div`
  background-image: URL('/images/logo_parfet_192_no_bg.png');
  background-position: center;
  background-size: 192px;
  background-repeat: no-repeat;
  width: 256px;
  height: 256px;
`

const Navigator = (props: Props) => {
  const { isYellow, currentPage, children } = props
  const classNameCurrentPage = isYellow ? 'bg-white' : 'bg-cusYellow'

  return (
    <div className="flex w-screen h-screen">
      <BgNavigator isYellow={isYellow} className="flex flex-col justify-between w-1/4 py-10">
        <div className="flex justify-center flex-wrap content-center h-1/3">
          <Logo className="bg-white rounded-50 p-12" />
        </div>
        <div className="flex justify-center flex-wrap content-center h-1/3 pt-10">
          <div className="flex flex-col content-center">
            {
              _.map(menuItem, (data ,index) => (
                <div className={`text-center my-3 py-2 px-20 rounded-5 cursor-pointer ${currentPage === data.word ? classNameCurrentPage : ''}`}>
                  <Link href={data.path}><SubHeader>{data.word}</SubHeader></Link>
                </div>
              ))
            }
          </div>
        </div>
        <div className="h-1/3"></div>
      </BgNavigator>
      <BgNavigator isYellow={!isYellow} className="flex w-3/4">
        {children}
      </BgNavigator>
    </div>
  )
}

export default Navigator
