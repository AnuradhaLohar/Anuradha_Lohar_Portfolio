import React, { useState } from 'react'
import Data from '../data'
function Header({ header, summary }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)


   const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  const navItems = [
    "home",
    "skills",
    "experience",
    "projects",
    "education",
    "certifications",
    "contact",
  ];
  return (
    <>

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm shadow-xl">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="text-xl font-extrabold text-white">
            <span className="text-teal-400">&lt;</span>Anuradha
            <span className="text-teal-400">/&gt;</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {
              navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white text-sm font-medium capitalize cursor-pointer"
                >
                  {item}
                </button>
              ))
            }
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

        </div>
        {
          isMenuOpen && (
            <div className="md:hidden px-2 pb-3 space-y-2 bg-gray-900">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          )
        }
      </nav>

    </>
  )
}

export default Header