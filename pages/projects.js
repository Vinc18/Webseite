import React, { useState, useEffect } from 'react';
import appStyles from '../styles/App.module.css';
import projectStyles from '../styles/Project.module.css';
import { FaGithub, FaLinkedin, FaTimes, FaSun, FaMoon, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/router';

const projects = [
  {
    title: 'NoteHub',
    description: "NoteHub is a comprehensive note-taking app that offers advanced dictation features. It is designed to help you manage your notes efficiently, whether for personal use, study, or work. With NoteHub, you can easily create, edit, and organize notes, and use voice commands to dictate text.",
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
              <li><a href="/documents">Documents</a></li>
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
          <a href="/documents" onClick={toggleMenu}>Documents</a>
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
            <h2>Impressum</h2>
            <p>Responsible person:<br />
              Vincent Witzmann<br />
              Laubeggstrasse 43<br />
              3006 Bern<br />
              Switzerland<br />
              Email: vincent.witzmann@icloud.com
            </p>
            <p>Usage of contact information:<br />
              The use of the contact information published in the context of the imprint for the purpose of sending unsolicited advertising and information materials is hereby expressly prohibited.
            </p>
            <p>Disclaimer:<br />
              The author assumes no liability for the correctness, accuracy, timeliness, reliability, and completeness of the information provided.<br />
              Liability claims against the author for damages of a material or immaterial nature resulting from the access, use, or non-use of the published information, misuse of the connection, or technical faults are excluded.<br />
              All offers are non-binding. The author expressly reserves the right to change, supplement, delete parts of the pages or the entire offer without a separate announcement or to cease publication temporarily or permanently.
            </p>
            <p>Disclaimer for links and content:<br />
              References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is rejected. Access to and use of such websites are at the user's own risk.
            </p>
            <p>Copyright declaration:<br />
              The copyrights and all other rights to content, images, photos, or other files on this website belong exclusively to Vincent Witzmann or the specifically named rights holders. Written permission must be obtained in advance for the reproduction of any elements.
            </p>
            <button className={appStyles.modalButton} onClick={toggleImpressum}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
