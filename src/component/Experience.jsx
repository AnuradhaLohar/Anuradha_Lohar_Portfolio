import React from 'react'
import SectionTitle from './SectionTitle'
import { Briefcase } from 'lucide-react'

function Experience({ experience }) {
    return (
        <section
            id="experience"
            className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
        >
            <SectionTitle Icon={Briefcase}>Experience</SectionTitle>
            {experience.map((exp, index) => (
                <div key={index} className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-teal-400">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                    <ul className="list-disc ml-6 text-gray-300 space-y-1">
                        {exp.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default Experience