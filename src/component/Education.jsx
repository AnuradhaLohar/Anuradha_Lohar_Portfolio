import React from 'react'
import Data from '../data'
import SectionTitle from './SectionTitle'
import { GraduationCap } from 'lucide-react'


export function Education({education}) {
  return (
    <section
      id="education"
      className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
    >
      <SectionTitle Icon={GraduationCap}>Education</SectionTitle>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-teal-400">{edu.institution}</p>
            <p className="text-gray-400 text-sm">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
