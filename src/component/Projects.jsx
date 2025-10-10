import React from 'react'
import Data from '../data'
import { Layers } from 'lucide-react'
import SectionTitle from './SectionTitle'

function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
    >
      <SectionTitle Icon={Layers}>Projects</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm mb-3">{project.date}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-teal-700/40 text-teal-300 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              View Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects