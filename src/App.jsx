import React, { useState } from "react";
import {
  User,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  Github,
  Linkedin,
  Layers,
} from "lucide-react";
import { Certifications, Contact, Education, Experience, Footer, Header, Hero, Projects, Skills } from "./component";
import data from "./data";


// === MAIN APP ===
const App = () => {
 
 



  return (
    <div className="min-h-screen bg-gray-900 font-[Inter] text-gray-500">
      <Header/>
      {/* Main Sections */}
      <main className="max-w-7xl mx-auto pt-16 space-y-16">
        <Hero header={data.header} summary={data.summary} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
        <Education education={data.education} />
        <Certifications certifications={data.certifications} />
        <Contact header={data.header} />
      </main>
      <Footer/>
    </div>
  );
};

export default App;
