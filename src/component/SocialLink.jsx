import React from 'react'

function SocialLink({ href, Icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-teal-400 transition duration-300 transform hover:scale-105"
        >
            <Icon className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">{label}</span>
        </a>
    )
}

export default SocialLink