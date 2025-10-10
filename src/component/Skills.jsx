import React from 'react'
import Data from '../data'
import SectionTitle from './SectionTitle'
import { Code } from 'lucide-react'

function Skills({ skills }) {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
    >
      <SectionTitle Icon={Code}>Technical Skills</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {Object.entries(skills).flatMap(([category, list]) =>
          list.map((skill, index) => (
            <div
              key={`${category}-${index}`}
              className="bg-gray-800 p-4 rounded-lg text-center shadow-lg transition duration-300 hover:bg-teal-900/40 hover:scale-105 transform cursor-default border border-gray-700"
            >
              <p className="text-white font-medium text-sm md:text-base">
                {skill}
              </p>
              <p className="text-teal-400 text-xs mt-1 opacity-75">{category}</p>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default Skills