import React, { useRef, useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";

interface Props {
  classAtButton: string
  classAtContent: string
  title: JSX.Element
  content: JSX.Element
  action?: JSX.Element
}

const Accordion = (props: Props) => {
  const { title, content, action, classAtButton, classAtContent } = props
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive(active === false ? true : false)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-300 ease rotate-180')
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full">
      <div
          className={`${classAtButton} ${action ? 'w-5/6': 'w-full'} py-3 box-border appearance-none cursor-pointer focus:outline-none flex items-center rounded-5 `}
        onClick={toggleAccordion}
      >
        <div className="inline-block text-footnote light w-full mx-5">{title}</div>
        <TiArrowSortedDown className={`${rotate} inline-block mr-3`} style={{fontSize:"22px"}}/>
      </div>
      {
        action ? 
          <div className="flex flex-row items-center justify-center w-1/6">
            {action}
          </div>
        : <></>
      }
      </div>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className={`${classAtContent} ${action ? 'w-5/6' : 'w-full'} overflow-auto transition-max-height duration-300 ease-in-out scrollbar-hide rounded-5`}
      >
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Accordion