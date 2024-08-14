import React, { useState, useEffect } from 'react';
import styles from '../styles/Education.module.css';
import globalStyles from '../styles/App.module.css';
import { FaSchool, FaUniversity, FaGraduationCap, FaBuilding, FaBookOpen, FaMoon, FaBars, FaSun, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';


const Education = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

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

  const toggleImpressum = () => {
    setIsImpressumOpen(!isImpressumOpen);
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
              {isMenuOpen ? <FaTimes size={24} className={globalStyles.closeIcon} /> : <FaBars size={24} />}
            </div>
          </div>
        </nav>
        <div className={`${globalStyles.navListMobile} ${isMenuOpen ? globalStyles.open : ''}`}>
          <a href="/" onClick={toggleMenu}>About me</a>
          <a href="/projects" onClick={toggleMenu}>Projects</a>
          <a href="/education" onClick={toggleMenu}>Education</a>
          <a href="/skills" onClick={toggleMenu}>Skills</a>
          <a href="/documents" onClick={toggleMenu}>Documents</a>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Education</h1>
        <div className={styles.timeline}>
          <div className={styles.entry}>
            <span className={styles.circle}></span>
            <div className={styles.entryContent}>
              <h3>08/2022 - jetzt</h3>
              <div className={styles.title}><FaUniversity className={styles.icon} /> Informatikschule Bern (IMS)</div>
              <div className={styles.body}>
                <p>Die Informatikmittelschule ermöglicht mir ein vollumfänglichen Abschluss im Bereich Wirtschaft. Diesen wirtschaftlichen Abschluss erreiche ich mit 3.5 Tagen in der Woche.</p>
              </div>
              <div className={styles.buttonWrapper}>
                <a href="https://bwdbern.ch/ims/ausbildung/dein-abschluss/" className={styles.button}>Erfahre mehr</a>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <span className={styles.circle}></span>
            <div className={styles.entryContent}>
              <h3>08/2022 - jetzt</h3>
              <div className={styles.title}><FaGraduationCap className={styles.icon} /> GIBB Berufsfachschule Bern (GIBB)</div>
              <div className={styles.body}>
                <p>Zusätzlich der IMS besuche ich die Gewerblich Industrielle Berufsfachschule Bern (GIBB) und absolviere die Informatik Ausbildung mit dem Ziel das EFZ als Informatiker in Applikationsentwicklung zu erlangen. Die Berufsschule besuche ich 1.5 Tage die Woche.</p>
              </div>
              <div className={styles.buttonWrapper}>
                <a href="https://gibb.ch/grundbildung/informatiker-in-efz" className={styles.button}>Erfahre mehr</a>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <span className={styles.circle}></span>
            <div className={styles.entryContent}>
              <h3>08/2021 - 07/2022</h3>
              <div className={styles.title}><FaBookOpen className={styles.icon} /> Sekundarstufe II, Campus Muristalden</div>
              <div className={styles.body}>
                <p>Im 9.Schuljahr konnte ich mich optimal auf die Aufnahmeprüfung für die Informatikschule vorbereiten, die ich schlussendlich auch bestand.</p>
              </div>
              <div className={styles.buttonWrapper}>
                <a href="https://www.muristalden.ch/volksschule/9-schuljahr-plus/ziele/" className={styles.button}>Erfahre mehr</a>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <span className={styles.circle}></span>
            <div className={styles.entryContent}>
              <h3>08/2019 - 07/2021</h3>
              <div className={styles.title}><FaSchool className={styles.icon} /> Sekundarstufe I, Schulhaus Laubegg Bern</div>
              <div className={styles.body}>
                <p>Ich besuchte die Sekundarschule Laubegg, für 2 Jahre und wechselte anschliessend die Schule.</p>
              </div>
              <div className={styles.buttonWrapper}>
                <a href="https://www.schule-laubegg.ch/" className={styles.button}>Erfahre mehr</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={globalStyles.footer}>
        <hr className={globalStyles.footerLine} />
        <div className={globalStyles.footerContent}>
          <div className={globalStyles.footerLeft}>
            <a onClick={toggleImpressum} style={{ cursor: 'pointer' }}>Impressum</a>
          </div>
          <div className={globalStyles.footerCenter}>
            <p>&copy; 2024 Vincent Witzmann</p>
          </div>
          <div className={globalStyles.footerRight}>
            <a href="mailto:vincent.witzmann@icloud.com"><FaEnvelope size={24} /></a>
            <a href="https://github.com/Vinc18" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/vincent-witzmann-353990322/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </footer>
      {isImpressumOpen && (
        <div className={styles.modalOverlay} onClick={toggleImpressum}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={toggleImpressum}>×</button>
            <h2>Impressum</h2>
            {/* Weitere Impressum-Inhalte hier */}
            <button className={styles.modalButton} onClick={toggleImpressum}>Schließen</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
