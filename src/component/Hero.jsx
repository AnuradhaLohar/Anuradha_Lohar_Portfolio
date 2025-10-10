import React from 'react'
import Data from '../data'
import SocialLink from './SocialLink'
import { Github, Linkedin } from 'lucide-react'
function Hero({ header, summary }) {
    return (
        <section
            id="home"
            className="py-24 md:py-36 min-h-screen flex items-center justify-center"
        >
            <div className="text-center max-w-4xl px-4">
                <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-4">
                    {header.name}
                </h1>
                <p className="text-2xl md:text-4xl font-bold text-teal-400 mb-8 tracking-wide">
                    {header.title}
                </p>
                <p className="text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed bg-gray-800/70 p-6 rounded-xl shadow-lg border border-teal-800/50">
                    {summary}
                </p>
                <div className="flex justify-center space-x-6">
                    <SocialLink href={header.github} Icon={Github} label="GitHub" />
                    <SocialLink href={header.linkedin} Icon={Linkedin} label="LinkedIn" />
                </div>
            </div>
        </section>
    )
}

export default Hero