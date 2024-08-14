import React, { useState, useEffect } from 'react';
import styles from '../styles/Dokumente.module.css';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTimes, FaBars, FaEnvelope } from 'react-icons/fa';

const Dokumente = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'itprogramming' && password === 'application06') {
      setIsLoggedIn(true);
    } else {
      setError('Ungültiger Benutzername oder Passwort');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className={isDarkMode ? styles.darkMode : styles.lightMode}>
        <div className={styles.loginContainer}>
          <h2>Login</h2>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.loginButton}>
              Anmelden
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
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
            <button onClick={toggleMode} className={styles.modeToggle}>
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
        <h1>Dokumente</h1>

        <section className={styles.documentSection}>
          <h2>GIBB Zeugnis</h2>
          <ul>
            <li><a href="/docs/GIBB_Zeugnis.pdf" target="_blank">GIBB Zeugnis</a></li>
          </ul>
        </section>

        <section className={styles.documentSection}>
          <h2>ÜK Kursbestätigung</h2>
          <ul>
            <li><a href="/docs/KNW210_Witzmann_VincentAndreas.pdf" target="_blank">ÜK Kursbestätigung</a></li>
          </ul>
        </section>

        <section className={styles.documentSection}>
          <h2>Abstracts</h2>
          <ul>
            <li><a href="/docs/IMS_Projekt-Abstract_Vincent_Witzmann.pdf" target="_blank">IMS Projekt Abstract</a></li>
          </ul>
        </section>

        <section className={styles.documentSection}>
          <h2>Abacus Zertifikate</h2>
          <ul>
            <li><a href="/docs/Abacus_Debitorenbuchhaltung.pdf" target="_blank">Abacus Debitorenbuchhaltung</a></li>
            <li><a href="/docs/Abacus_Kreditorenbuchhaltung.pdf" target="_blank">Abacus Kreditorenbuchhaltung</a></li>
            <li><a href="/docs/Abacus_Zertifikat_Nr_1.pdf" target="_blank">Abacus Zertifikat Nr 1</a></li>
          </ul>
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
            <h2>Impressum</h2>
            <p>Verantwortliche Person:<br />
              Vincent Witzmann<br />
              Laubeggstrasse 43<br />
              3006 Bern<br />
              Schweiz<br />
              E-Mail: vincent.witzmann@icloud.com
            </p>
            <p>Verwendung der Kontaktinformationen:<br />
              Die Verwendung der im Rahmen des Impressums veröffentlichten Kontaktinformationen zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich untersagt.
            </p>
            <p>Haftungsausschluss:<br />
              Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.<br />
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff auf, der Nutzung oder Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.<br />
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
            <p>Haftungsausschluss für Inhalte und Links:<br />
              Verweise und Links auf Webseiten Dritter liegen außerhalb unseres Verantwortungsbereichs. Jegliche Verantwortung für solche Webseiten wird abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers.
            </p>
            <p>Urheberrechtserklärung:<br />
              Die Urheberrechte und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschließlich Vincent Witzmann oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist im Voraus die schriftliche Zustimmung des Urheberrechtsträgers einzuholen.
            </p>
            <button className={styles.modalButton} onClick={toggleImpressum}>Schließen</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dokumente;
