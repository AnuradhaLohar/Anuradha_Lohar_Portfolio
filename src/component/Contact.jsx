import React from 'react'
import SectionTitle from './SectionTitle'
import { Mail, Phone } from 'lucide-react'

function Contact({header}) {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
    >
      <SectionTitle Icon={Mail}>Get In Touch</SectionTitle>
      <p className="text-center text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
        I'm currently open to new opportunities and collaboration. Feel free to
        reach out!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-xl mx-auto">
        <a
          href={`mailto:${header.email}`}
          className="w-full md:w-auto flex items-center justify-center px-8 py-4 border-2 border-teal-500 text-lg font-semibold rounded-lg text-white bg-teal-600/20 hover:bg-teal-600 hover:text-gray-900 transition duration-300 shadow-lg shadow-teal-500/30"
        >
          <Mail className="w-5 h-5 mr-2" /> loharanuradha644@gmail.com
        </a>
        <a
          href={`tel:${header.phone}`}
          className="w-full md:w-auto flex items-center justify-center px-8 py-4 border-2 border-gray-500 text-lg font-semibold rounded-lg text-gray-300 hover:border-white transition duration-300"
        >
          <Phone className="w-5 h-5 mr-2" /> {header.phone}
        </a>
      </div>
    </section>
  )
}

export default Contact