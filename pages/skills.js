import React, { useState, useEffect } from 'react';
import styles from '../styles/Skills.module.css';
import {
  FaCog, FaGithub, FaInstagram, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
  FaPython, FaJava, FaGitAlt, FaDocker, FaChevronUp, FaChevronDown, FaEnvelope, FaSun, FaMoon, FaBars, FaTimes
} from 'react-icons/fa';
import {
  SiNextdotjs, SiMongodb, SiMicrosoftsqlserver, SiDotnet, SiVisualstudiocode,
  SiTailwindcss, SiFigma, SiAzuredevops
} from 'react-icons/si';
import { GiBookCover } from 'react-icons/gi';
import globalStyles from '../styles/App.module.css';

const languages = [
  { name: 'Deutsch - Native Language', imgSrc: '/images/de.svg' },
  { name: 'English - B2 in 2024', imgSrc: '/images/gb.svg' },
  { name: 'French - B2 in 2024', imgSrc: '/images/fr.svg' }
];

const Skills = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const toggleMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSkill = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  return (
    <div className={isDarkMode ? globalStyles.darkMode : globalStyles.lightMode}>
      <header className={globalStyles.header}>
        <nav className={globalStyles.nav}>
          <div className={globalStyles.navLeft}>
            <h1 className={globalStyles.brandName}>Vincent Witzmann</h1>
          </div>
          <div className={globalStyles.navRight}>
            <ul className={`${globalStyles.navList} ${isMenuOpen ? globalStyles.showNav : ''}`}>
              <li><a href="/">About me</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/education">Education</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/documents">Documents</a></li>
            </ul>
            <button onClick={toggleMode} className={globalStyles.modeToggle}>
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <div className={globalStyles.burger} onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
          </div>
        </nav>
        <div className={`${globalStyles.navListMobile} ${isMenuOpen ? globalStyles.open : ''}`}>
          <FaTimes className={globalStyles.closeIcon} onClick={toggleMenu} />
          <a href="/" onClick={toggleMenu}>About me</a>
          <a href="/projects" onClick={toggleMenu}>Projects</a>
          <a href="/education" onClick={toggleMenu}>Education</a>
          <a href="/skills" onClick={toggleMenu}>Skills</a>
          <a href="/documents" onClick={toggleMenu}>Documents</a>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.skillsTitle}>Skills</h1>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h2 onClick={() => toggleSkill('frontend')}>
              Frontend Skills {activeSkill === 'frontend' ? <FaChevronUp /> : <FaChevronDown />}
            </h2>
            {activeSkill === 'frontend' && (
              <div className={styles.skillRow}>
                <div className={styles.skillBox}>
                  <h3>HTML</h3>
                  <div className={styles.skillsImage}>
                    <FaHtml5 size={60} color="#e34c26" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>CSS</h3>
                  <div className={styles.skillsImage}>
                    <FaCss3Alt size={60} color="#1572B6" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>JavaScript</h3>
                  <div className={styles.skillsImage}>
                    <FaJs size={60} color="#F7DF1E" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>Next.js</h3>
                  <div className={styles.skillsImage}>
                    <SiNextdotjs size={60} color="#000000" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>Tailwind CSS</h3>
                  <div className={styles.skillsImage}>
                    <SiTailwindcss size={60} color="#38B2AC" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '55%' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.skillCategory}>
            <h2 onClick={() => toggleSkill('backend')}>
              Backend Skills {activeSkill === 'backend' ? <FaChevronUp /> : <FaChevronDown />}
            </h2>
            {activeSkill === 'backend' && (
              <div className={styles.skillRow}>
                <div className={styles.skillBox}>
                  <h3>Node.js</h3>
                  <div className={styles.skillsImage}>
                    <FaNodeJs size={60} color="#339933" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>Python</h3>
                  <div className={styles.skillsImage}>
                    <FaPython size={60} color="#3776AB" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>Java</h3>
                  <div className={styles.skillsImage}>
                    <FaJava size={60} color="#007396" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>MongoDB</h3>
                  <div className={styles.skillsImage}>
                    <SiMongodb size={60} color="#47A248" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>SQL</h3>
                  <div className={styles.skillsImage}>
                    <SiMicrosoftsqlserver size={60} color="#CC2927" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>.NET MAUI</h3>
                  <div className={styles.skillsImage}>
                    <SiDotnet size={60} color="#512BD4" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.skillCategory}>
            <h2 onClick={() => toggleSkill('divers')}>
              Divers {activeSkill === 'divers' ? <FaChevronUp /> : <FaChevronDown />}
            </h2>
            {activeSkill === 'divers' && (
              <div className={styles.skillRow}>
                <div className={styles.skillBox}>
                  <h3>VS Code</h3>
                  <div className={styles.skillsImage}>
                    <SiVisualstudiocode size={60} color="#007ACC" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>Git</h3>
                  <div className={styles.skillsImage}>
                    <FaGitAlt size={60} color="#F05032" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>Figma</h3>
                  <div className={styles.skillsImage}>
                    <SiFigma size={60} color="#F24E1E" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>Azure DevOps</h3>
                  <div className={styles.skillsImage}>
                    <SiAzuredevops size={60} color="#0078D7" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>Docker</h3>
                  <div className={styles.skillsImage}>
                    <FaDocker size={60} color="#2496ED" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className={styles.skillBox}>
                  <h3>Abacus</h3>
                  <div className={styles.skillsImage}>
                    <GiBookCover size={60} color="#FFD700" />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.languagesContainer}>
          <h2 className={styles.languagesTitle}>Languages</h2>
          {languages.map((language, index) => (
            <div key={index} className={styles.languageBox}>
              <img src={language.imgSrc} alt={`${language.name} flag`} className={styles.flagIcon} />
              <span className={styles.languageName}>{language.name}</span>
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <hr className={styles.footerLine} />
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <a href="/impressum">Impressum</a>
          </div>
          <div className={styles.footerCenter}>
            <p>&copy; 2024 Vincent Witzmann</p>
          </div>
          <div className={styles.footerRight}>
            <a href="mailto:vincent.witzmann@icloud.com"><FaEnvelope size={24} /></a>
            <a href="https://github.com/Vinc18" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/vincent-witzmann-353990322/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Skills;
