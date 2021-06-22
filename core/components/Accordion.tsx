import React, { useRef, useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";

interface Props {
  title: JSX.Element
  content: React.ReactNode
}

const Accordion = (props: Props) => {
  const { title, content } = props
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive(active === false ? true : false)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }

  return (
    <div className="flex flex-col">
      <button
        className="py-2 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-footnote light">{title}</p>
        <TiArrowSortedDown className={`${rotate} inline-block`} />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out scrollbar-hide"
      >
        <div className="pb-10">{content}</div>
      </div>
    </div>
  )
}

export default Accordion