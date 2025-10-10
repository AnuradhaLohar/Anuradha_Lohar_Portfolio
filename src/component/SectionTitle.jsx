import React from 'react'
import Data from '../data'

function SectionTitle({ children, Icon }) {
  return (
   <h2 className="text-3xl font-extrabold text-teal-400 mb-8 border-b-4 border-teal-600/50 pb-2 flex items-center">
    <Icon className="w-7 h-7 mr-3 text-teal-400" />
    {children}
  </h2>
  )
}

export default SectionTitle