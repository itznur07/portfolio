import React from 'react'
import { AiOutlineLine } from 'react-icons/ai'

const MentionButton = ({name}) => {
  return (
    <div className='flex items-center gap-y-2 -rotate-90 text-xl text-[#0eb761] font-medium'>
            <span>{name}</span>
            <AiOutlineLine />{" "}
    </div>
  )
}

export default MentionButton