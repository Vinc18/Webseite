import React, { useState, useEffect } from 'react';
import styles from '../styles/App.module.css';
import globalStyles from '../styles/App.module.css';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTimes, FaBars, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Head from 'next/head';


const AboutMe = () => {
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
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleImpressum = () => {
    setIsImpressumOpen(!isImpressumOpen);
  };

  return (
   <> 
    <Head>
<title>Portfolio HomePage</title>


    </Head>
    
    <div className={isDarkMode ? styles.darkMode : styles.lightMode}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <h1 className={styles.brandName}>Vincent Witzmann</h1>
          </div>
          <div className={styles.navRight}>
            <ul className={`${styles.navList} ${isMenuOpen ? styles.showNav : ''}`}>
              <li><a href="/">About me</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/education">Education</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/login">Documents</a></li>
            </ul>
            <button onClick={toggleMode} className={globalStyles.modeToggle}>
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <div className={styles.burger} onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
          </div>
        </nav>
        <div className={`${styles.navListMobile} ${isMenuOpen ? styles.open : ''}`}>
          <button className={styles.closeIcon} onClick={toggleMenu}>
            <FaTimes size={24} />
          </button>
          <a href="/" onClick={toggleMenu}>About me</a>
          <a href="/projects" onClick={toggleMenu}>Projects</a>
          <a href="/education" onClick={toggleMenu}>Education</a>
          <a href="/skills" onClick={toggleMenu}>Skills</a>
          <a href="/login" onClick={toggleMenu}>Documents</a>
        </div>
      </header>
      <main className={styles.main}>
      <section className={styles.hero}>
  <div className={styles.heroContent}>
    <h1 className={styles.heroTitle}>Hello everyone!</h1>
    <h2 className={styles.heroSubtitle}>It's Vincent Witzmann</h2>
    <p className={styles.heroDescription}>
      I am a software developer, who is currently attending the Informatikschule (IMS) in Berne.
    </p>
    <p className={styles.heroDescription}>
      I am glad that you visit my site, if you have any questions please contact me.
    </p>
    <button 
      onClick={() => window.location.href = 'mailto:vincent.witzmann@icloud.com'} 
      className={styles.contactButton}
    >
      Contact me
    </button>
  </div>
  <img src='/images/vinc.png' alt="Vincent Witzmann" className={styles.heroImage} /> {/* Moved the image here */}
</section>

        <section className={styles.content}>
          <h2 className={styles.subtitle}>Who am I?</h2>
          <p>
            Hello everyone, I am Vincent Witzmann from Bern, Switzerland. I am currently attending the IMS at the Berufsbildungszentrum für Wirtschaft und Dienstleistung (bwd) in Berne. I am also attending the Berufsschule (GIBB) specialising in application development and am taking further courses (ük) at the bbc in Bümpliz to improve my skills as a developer.
          </p>
          <h2 className={styles.subtitle}>My Journey with Informatics</h2>
          <p>
            Even as a young boy I was interested in technology, I built gaming PCs with my own hands and was fascinated by how websites work. Towards the beginning of my 9th year at school I came across this education and was immediately enthusiastic, since then I have been constantly improving my programming skills.
          </p>
          <h2 className={styles.subtitle}>My Hobbies</h2>
          <p>
            In my free time, I enjoy going to the gym and I also play tennis in a club. I love being outside with my friends. Or just playing some games online.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <hr className={styles.footerLine} />
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <a onClick={toggleImpressum} style={{ cursor: 'pointer' }}>Impressum</a>
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

export default AboutMe;
