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
              <li><a href="/documents">Documents</a></li>
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
          <a href="/documents" onClick={toggleMenu}>Documents</a>
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
          <h2 className={styles.subtitle}>My Journey with Informatic</h2>
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
            <h2>Legal Notice</h2>
<p>Responsible Person:<br />
  Vincent Witzmann<br />
  Laubeggstrasse 43<br />
  3006 Bern<br />
  Switzerland<br />
  Email: vincent.witzmann@icloud.com
</p>
<p>Use of Contact Information:<br />
  The use of the contact information published in this legal notice for the purpose of sending unsolicited advertisements and informational materials is strictly prohibited.
</p>
<p>Disclaimer:<br />
  The author assumes no responsibility for the correctness, accuracy, timeliness, reliability, and completeness of the information provided.<br />
  Liability claims against the author due to material or immaterial damages resulting from access to, the use or non-use of the published information, misuse of the connection, or technical malfunctions are excluded.<br />
  All offers are non-binding. The author expressly reserves the right to change, supplement, delete parts of the pages or the entire offer without prior notice, or to temporarily or permanently cease publication.
</p>
<p>Disclaimer for Content and Links:<br />
  References and links to third-party websites are outside our area of responsibility. We reject any responsibility for such websites. Access to and use of such websites is at the user's own risk.
</p>
<p>Copyright Declaration:<br />
  The copyrights and all other rights to content, images, photos, or other files on this website belong exclusively to Vincent Witzmann or the specifically named rights holders. Written consent from the copyright holder must be obtained in advance for the reproduction of any elements.
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
