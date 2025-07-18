import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "./index.css";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen px-6 py-10 font-sans">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-teal-400"
        >
          Rishi Varun Tatavarthi
        </motion.h1>
        <p className="text-gray-300 text-lg">Aspiring Developer | Java, ML, Cybersecurity Enthusiast</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/tatavarthi-rishi-varun" target="_blank" rel="noreferrer">
            <Linkedin className="hover:text-teal-400" />
          </a>
          <a href="https://github.com/rishivaruntatavarthi" target="_blank" rel="noreferrer">
            <Github className="hover:text-teal-400" />
          </a>
          <a href="mailto:tatavarthirishi@gmail.com">
            <Mail className="hover:text-teal-400" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b border-teal-400 inline-block">About Me</h2>
        <p className="text-gray-300">
          Positive minded, calm, patient and quick learner with strong knowledge in programming languages such as C, Python, Java, C++ (STL), Oracle SQL, HTML, and CSS. Confident in Data Structures and Algorithms, Java Collections, and proficient with libraries like NumPy, Pandas and Matplotlib. Passionate about machine learning, cybersecurity, and real-world impact.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-4 text-center border-b border-teal-400 inline-block">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "C, C++, Java, Python",
            "Oracle SQL, HTML/CSS",
            "NumPy, Pandas, Matplotlib",
            "DSA & Java Collections",
            "Machine Learning (Regression, CNN, RNN)",
            "Excel, GitHub, Event Management",
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-gray-800 text-white p-4 rounded-lg border border-teal-400 shadow hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-4 text-center border-b border-teal-400 inline-block">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Diabetes Detection using Decision Tree",
            "Securing Federated Learning via Homomorphic Encryption",
            "Indian Flag program using Turtle Library",
            "Community Service Project: Health & Hygiene",
          ].map((project, i) => (
            <div
              key={i}
              className="bg-gray-800 text-white p-4 rounded-lg border border-teal-400 shadow hover:scale-105 transition font-medium"
            >
              {project}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b border-teal-400 inline-block">Certifications</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Microsoft Certified: Azure AI & Data Fundamentals</li>
          <li>British Council: English Strokes & Career Strokes</li>
          <li>Fortinet Certified Associate in Cybersecurity (Virtual Internship)</li>
          <li>NPTEL: Cloud Computing, Internet of Things</li>
          <li>Infosys Springboard: DSA using Java</li>
        </ul>
      </section>

      {/* Accomplishments */}
      <section className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b border-teal-400 inline-block">Professional Accomplishments</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Solved 275+ coding problems with 390+ score on GFG</li>
          <li>Scored 953/1000 in Intermediate</li>
          <li>Organized GitHub Workshop for Juniors</li>
          <li>Co-Lead of Event Management, Black Box Student Community</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b border-teal-400 inline-block">Education</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>B.Tech CSE, Sri Vasavi Engineering College – 9.2 CGPA (2022–26)</li>
          <li>Intermediate, Narayana Junior College – 95.3% (2020–22)</li>
          <li>SSC, Narayana School, Palakol – 10 GPA (2019–20)</li>
        </ul>
      </section>

      {/* Hobbies */}
      <section className="mt-20 max-w-4xl mx-auto pb-20">
        <h2 className="text-2xl font-semibold mb-4 border-b border-teal-400 inline-block">Hobbies</h2>
        <p className="text-gray-300">Listening to music, photography, reading, exploring interests, and playing cricket.</p>
      </section>
    </div>
  );
}
