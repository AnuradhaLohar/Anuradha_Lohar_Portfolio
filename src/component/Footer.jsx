import React from 'react'
import data from '../data'

function Footer() {
  return (
    <footer className="bg-gray-950/70 border-t border-teal-800/50 mt-12 py-6 text-center text-sm text-gray-500">
        Designed & Built by{" "}
        <span className="text-teal-400">{data.header.name}</span>
      </footer>
  )
}

export default Footer