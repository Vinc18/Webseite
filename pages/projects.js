import React, { useState, useEffect } from 'react';
import appStyles from '../styles/App.module.css';
import projectStyles from '../styles/Project.module.css';
import { FaGithub, FaLinkedin, FaTimes, FaSun, FaMoon, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/router';

const projects = [
  {
    title: 'NoteHub',
    description: "NoteHub is a comprehensive note-taking application that provides advanced dictation capabilities. It is designed to facilitate the efficient management of notes, whether for personal use, study, or professional purposes. With NoteHub, it is effortless to generate, modify, and arrange notes, and utilize voice commands to dictate text.",
    image: '/images/notehub.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
    code: 'https://github.com/Vinc18/NoteHub',
  },
  {
    title: 'VVETTER-APP',
    description: "This app was developed in a Ük course. It displays data using an API and outputs it. It is also possible to add a specific location and get corresponding information.",
    image: '/images/vvetter.png',
    tags: ['React Native', 'JavaScript'],
    code: 'https://github.com/Vinc18/VVETTER-APP',
  },
  {
    title: 'First WebPage',
    description: "My first website was programmed in the first semester. This was also my first experience with HTML and CSS. At that time, I hadn't programmed any functionalities with JavaScript or similar. Unfortunately, it's not responsive, as I defined the sizes with pixels in CSS. However, it does work.",
    image: '/images/firstwebpage.png',
    tags: ['HTML', 'CSS'],
    code: 'http://www.imsbern.ch/ims2022/witzmann/index.html',
  },
  {
    title: 'Just Delivery',
    description: "My first mobile app was supposed to be a food ordering app where you can easily choose between different burgers and then have them delivered to your home.",
    image: '/images/justdelivery.png',
    tags: ['C#'],
    code: 'https://github.com/Vinc18/JustDelivery',
  },
  // Add two more projects if needed
];

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleImpressum = () => {
    setIsImpressumOpen((prev) => !prev);
  };

  return (
    <div className={isDarkMode ? appStyles.darkMode : appStyles.lightMode}>
      <header className={appStyles.header}>
        <nav className={appStyles.nav}>
          <div className={appStyles.navLeft}>
            <h1 className={appStyles.brandName}>Vincent Witzmann</h1>
          </div>
          <div className={appStyles.navRight}>
            <ul className={appStyles.navList}>
              <li><a href="/">About me</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/education">Education</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/login">Documents</a></li>
            </ul>
            <button onClick={toggleMode} className={appStyles.modeToggle}>
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <div className={appStyles.burger} onClick={toggleMenu}>
              <div className={isMenuOpen ? appStyles.navOpen : ''}></div>
              <div className={isMenuOpen ? appStyles.navOpen : ''}></div>
              <div className={isMenuOpen ? appStyles.navOpen : ''}></div>
            </div>
          </div>
        </nav>
        <div className={`${appStyles.navListMobile} ${isMenuOpen ? appStyles.open : ''}`}>
          <FaTimes className={appStyles.closeIcon} onClick={toggleMenu} />
          <a href="/" onClick={toggleMenu}>About me</a>
          <a href="/projects" onClick={toggleMenu}>Projects</a>
          <a href="/education" onClick={toggleMenu}>Education</a>
          <a href="/skills" onClick={toggleMenu}>Skills</a>
          <a href="/login" onClick={toggleMenu}>Documents</a>
        </div>
      </header>
      <main className={appStyles.main}>
        <h2>Projects</h2>
        <div className={projectStyles.projectsGrid}>
          {projects.map(({ image, title, description, tags, code }, index) => (
            <div
              className={`${projectStyles.projectCard} ${isDarkMode ? '' : projectStyles.lightModeCard}`}
              key={index}
            >
              <div className={projectStyles.projectImageWrapper}>
                <img src={image} alt={title} className={projectStyles.projectImage} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className={projectStyles.tags}>
                {tags.map((tag, idx) => (
                  <span key={idx} className={projectStyles.tag}>{tag}</span>
                ))}
              </div>
              <a href={code} target="_blank" rel="noopener noreferrer" className={projectStyles.externalLink}>
                <FaGithub size={20} /> View Code
              </a>
            </div>
          ))}
        </div>
      </main>
      <footer className={appStyles.footer}>
        <hr className={appStyles.footerLine} />
        <div className={appStyles.footerContent}>
          <div className={appStyles.footerLeft}>
            <a onClick={toggleImpressum} style={{ cursor: 'pointer' }}>Impressum</a>
          </div>
          <div className={appStyles.footerCenter}>
            <p>&copy; 2024 Vincent Witzmann</p>
          </div>
          <div className={appStyles.footerRight}>
            <a href="mailto:vincent.witzmann@icloud.com"><FaEnvelope size={24} /></a>
            <a href="https://github.com/Vinc18" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/vincent-witzmann-353990322/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </footer>
      {isImpressumOpen && (
        <div className={appStyles.modalOverlay} onClick={toggleImpressum}>
          <div className={appStyles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={appStyles.closeButton} onClick={toggleImpressum}>×</button>
            <h2>Imprint</h2>
<p>Contact Information:<br />
  Vincent Witzmann<br />
  Laubeggstrasse 43<br />
  3006 Bern, Switzerland<br />
  Email: vincent.witzmann@icloud.com
</p>
<p>Prohibition on Unsolicited Contact:<br />
  The contact details provided here are intended solely for legitimate inquiries. Any use of this information for unsolicited marketing or promotional purposes is strictly forbidden.
</p>
<p>Limitation of Liability:<br />
  The author is not liable for the accuracy, reliability, or completeness of the content on this website. Any liability claims related to damages, whether material or immaterial, arising from the use or misuse of the information provided, including issues related to technical functionality, are excluded.<br />
  The content is offered without obligation, and the author reserves the right to modify or delete content at any time without prior notice, as well as to temporarily or permanently shut down the website.
</p>
<p>External Links Disclaimer:<br />
  This website may contain links to external sites, which are not under the control of the author. The inclusion of any links does not imply endorsement, and the author is not responsible for the content or practices of linked websites. Users access such sites at their own risk.
</p>
<p>Intellectual Property Rights:<br />
  All content on this site, including text, images, and other media, is the intellectual property of Vincent Witzmann or the respective rights holders. Unauthorized use or reproduction of any material from this site without prior written permission is prohibited.
</p>


            <button className={appStyles.modalButton} onClick={toggleImpressum}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
