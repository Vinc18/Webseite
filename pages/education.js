import React, { useState, useEffect } from 'react';
import Head from 'next/head'; // Importieren von Head für den dynamischen Seitentitel
import styles from '../styles/Education.module.css';
import globalStyles from '../styles/App.module.css';
import { FaSchool, FaUniversity, FaGraduationCap, FaBookOpen, FaEnvelope, FaGithub, FaLinkedin, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

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

  useEffect(() => {
    const handleScroll = () => {
      const entries = document.querySelectorAll(`.${styles.entry}`);
      entries.forEach(entry => {
        const entryTop = entry.getBoundingClientRect().top;
        if (entryTop < window.innerHeight - 50) {
          entry.classList.add(styles.active);
        }
      });
    };

    handleScroll(); // Initial check on load
    window.addEventListener('scroll', handleScroll); // Check on scroll

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <> 
    <Head>
<title>Portfolio EducationPage</title>


    </Head>
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
              <li><a href="/login">Documents</a></li>
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
          <a href="/login" onClick={toggleMenu}>Documents</a>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Education</h1>
        <div className={styles.timeline}>
          <div className={styles.entry}>
            <div className={styles.entryContent}>
              <h3>08/2022 - jetzt</h3>
              <div className={styles.title}><FaUniversity className={styles.icon} /> Informatikschule Bern (IMS)</div>
              <div className={styles.body}>
                <p>The IT secondary school enables me to complete a full degree in business. I achieve this business qualification by working 3.5 days a week.</p>
              </div>
              <div className={styles.buttonWrapper}>
                <a href="https://bwdbern.ch/ims/ausbildung/dein-abschluss/" className={styles.button}>Explore more</a>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.entryContent}>
              <h3>08/2022 - jetzt</h3>
              <div className={styles.title}><FaGraduationCap className={styles.icon} /> GIBB Berufsfachschule Bern (GIBB)</div>
              <div className={styles.body}>
                <p>In addition to the IMS, I am also attending the Gewerblich Industrielle Berufsfachschule Bern (GIBB) and am completing an IT apprenticeship with the aim of obtaining the EFZ as a computer scientist in application development. I attend the vocational school 1.5 days a week.</p>
              </div>
              <div className={styles.buttonWrapper}>
                <a href="https://gibb.ch/grundbildung/informatiker-in-efz" className={styles.button}>Explore more</a>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.entryContent}>
              <h3>08/2021 - 07/2022</h3>
              <div className={styles.title}><FaBookOpen className={styles.icon} /> Sekundarstufe II, Campus Muristalden</div>
              <div className={styles.body}>
                <p>In the 9th school year I was able to prepare myself optimally for the entrance exam for the IT school, which I finally passed.</p>
              </div>
              <div className={styles.buttonWrapper}>
                <a href="https://www.muristalden.ch/volksschule/9-schuljahr-plus/ziele/" className={styles.button}>Explore more</a>
              </div>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.entryContent}>
              <h3>08/2019 - 07/2021</h3>
              <div className={styles.title}><FaSchool className={styles.icon} /> Sekundarstufe I, Schulhaus Laubegg Berne</div>
              <div className={styles.body}>
                <p>I attended Laubegg secondary school for two years and then changed schools.</p>
              </div>
              <div className={styles.buttonWrapper}>
                <a href="https://www.schule-laubegg.ch/" className={styles.button}>Explore more</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={globalStyles.footer}>
        <hr className={globalStyles.footerLine} />
        <div className={globalStyles.footerContent}>
          <div className={globalStyles.footerLeft}>
            <a onClick={toggleImpressum} style={{ cursor: 'pointer' }}>Imprint</a>
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

<button className={styles.modalButton} onClick={toggleImpressum}>Close</button>

          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Education;
