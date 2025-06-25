import React from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Resume = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-900 text-white px-6 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 border-b-2 border-blue-500 inline-block pb-2">
            My Resume
          </h1>

          <p className="text-gray-400 italic text-lg mb-6">
            Passionate Java Backend Developer eager to build scalable systems and solve real-world problems through code.
          </p>

          <ul className="list-disc text-left ml-6 mb-10 space-y-2 text-base text-gray-200">
            <li>💼 Java Full Stack Developer with Spring Boot and React</li>
            <li>🌐 Built 5+ major projects, including real-time and IoT systems</li>
            <li>🎯 Solved 1200+ coding problems (LeetCode, GFG, CodeChef)</li>
            <li>☁️ Experience with AWS, Redis, Kafka, WebSocket</li>
            <li>🏆 Virtual Intern at Deloitte and HPE (via Forage)</li>
          </ul>

          <div className="flex flex-wrap justify-center gap-6">
            {/* View Resume */}
            <a
              href="/Harun_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 transition rounded shadow-lg text-white font-semibold"
            >
              <FaEye className="text-lg" />
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/Harun_Resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 transition rounded shadow-lg text-white font-semibold"
            >
              <FaDownload className="text-lg" />
              Download Resume
            </a>
          </div>

          {/* Back to Portfolio Link */}
          <Link
            to="/"
            className="block mt-10 text-blue-400 hover:underline text-lg transition"
          >
            ← Go back to Portfolio
          </Link>
        </div>
      </section>
    </>
  );
};

export default Resume;
