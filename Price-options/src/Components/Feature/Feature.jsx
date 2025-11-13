import React from 'react'
import { HiMiniPaperAirplane } from "react-icons/hi2";
export const Feature = ({feature}) => {
  return (
    <div className=''>
        <p className='flex items-center gap-2'><HiMiniPaperAirplane></HiMiniPaperAirplane>{feature}</p>
    </div>
  )
}
