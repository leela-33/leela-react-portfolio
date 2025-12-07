import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FreelanceWork from "./components/FreelanceWork";
import Skills from "./components/Skills";
import PracticeProjects from "./components/PracticeProjects";
import About from "./components/About";
import Contact from "./components/Contact";

// ✅ IMPORT PROJECT IMAGES
import ecommerceImg from "./images/E-Come.png";
import dentalImg from "./images/Dental.png";
import iplImg from "./images/IPLDashBord.png";
// Free 
import mbfoodsImg from "./images/mblogo.png";  
import rrfinanceImg from "./images/RandR.jpg";

// ✅ KEY PROJECTS WITH IMAGES ADDED
const KEY_PROJECTS = [
  {
    id: 1,
    name: "E-commerce Clone",
    tech: "React, Routing, css, Responsive Design",
    description:
      "A full-stack e-commerce application with product listings, cart, and authentication.",
    liveUrl: "https://trendproducts.ccbp.tech/login",
    githubUrl: "https://github.com/leela-33/React-Ecommerce-APP",
    image: ecommerceImg,
    type: "major",
  },
  {
    id: 2,
    name: "Dental Clinic Landing Page",
    tech: "HTML, CSS, JS, Responsive Design",
    description:
      "A modern, responsive landing page for a dental clinic highlighting services and booking.",
    liveUrl: "https://leela-33.github.io/my-landing-page/",
    githubUrl: "https://github.com/leela-33/my-landing-page",
    image: dentalImg,
    type: "freelance",
  },
  {
    id: 3,
    name: "IPL Dashboard",
    tech: "React, Routing, REST API",
    description:
      "Interactive dashboard to browse IPL teams and match stats using routing and API data.",
    liveUrl: "https://iplusingrouting.ccbp.tech/",
    githubUrl: null, // No GitHub link — handled automatically
    image: iplImg,
    type: "major",
  },
];


// ✅ FREELANCE PROJECTS
const FREELANCE_PROJECTS = [
  {
    id: 1,
    name: "MB Foods",
    image: mbfoodsImg,
    url: "https://leelap1mbfoods.ccbp.tech/",
    description:
      "Built a modern website to showcase product catalog, improving brand presence and customer trust.",
    impact:
      "Helped the client present their products clearly and receive more inquiries.",
  },
  {
    id: 2,
    name: "RR Fincali Services",
    image: rrfinanceImg,
    url: "https://rrfinance.ccbp.tech/",
    description:
      "Developed a landing page for financial services with clear CTAs and contact options.",
    impact:
      "Made it easier for potential customers to understand services and reach out.",
  },
];


// ✅ PRACTICE APPS
const PRACTICE_APPS = [
  { name: "Odd or Even App", url: "https://OddEvenAppLeela.ccbp.tech" },
  { name: "Cash Withdrawal App", url: "https://CashWithDar.ccbp.tech" },
  { name: "Google Search UI", url: "https://LeelaLLGoogle.ccbp.tech" },
  { name: "Letter Count App", url: "https://LetterCountAppL.ccbp.tech" },
  { name: "App Store", url: "https://appstorelee.ccbp.tech/" },
  { name: "Toss App", url: "https://TossAppLeela.ccbp.tech" },
  { name: "Comments Box", url: "https://CmmentsBox.ccbp.tech" },
  { name: "Appointment Booking App", url: "https://AppointBooking.ccbp.tech" },
  { name: "Amount Manager", url: "https://AmountManager.ccbp.tech" },
  { name: "Select Emoji Game", url: "https://SelectDiffEmoji.ccbp.tech" },
  { name: "Digital Timer", url: "https://TimerLeela.ccbp.tech" },
  { name: "Password Manager", url: "https://PassWordBank2.ccbp.tech" },
  { name: "Matching Game", url: "https://FAPmatchingGame.ccbp.tech" },
  { name: "IPL Dashboard", url: "https://iplusingrouting.ccbp.tech/" },
  { name: "E-Commerce App", url: "https://nxtz.ccbp.tech/login" },
  { name: "Task Manager App", url: "https://TaskMangLee.ccbp.tech" },
];


function App() {
  const [theme, setTheme] = useState("dark");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    }
  }, []);

  // Apply theme class and persist
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app app-${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="projects" className="section">
          <Projects projects={KEY_PROJECTS} />
        </section>

        <section id="freelance" className="section">
          <FreelanceWork projects={FREELANCE_PROJECTS} />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="practice" className="section">
          <PracticeProjects apps={PRACTICE_APPS} />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Leela V. R. Gunja. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
