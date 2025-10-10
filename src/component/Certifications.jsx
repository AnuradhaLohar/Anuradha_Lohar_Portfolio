import React from 'react'
import SectionTitle from './SectionTitle'
import { Award } from 'lucide-react'

function Certifications({certifications}) {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
    >
      <SectionTitle Icon={Award}>Certifications</SectionTitle>
      <ul className="space-y-3 text-gray-300">
        {certifications.map((cert, index) => (
          <li
            key={index}
            className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-teal-900/40 transition duration-300"
          >
            {cert}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Certifications