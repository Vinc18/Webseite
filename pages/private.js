import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../styles/Private.module.css';

const PrivatePage = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await axios.get('https://api.vincentwitzmann.com/api/auth', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status == 200) {
          setAuth(true);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Fehler bei der Token-Überprüfung:', error);
        setError('Authentication failed. Please login again.');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <div>Laden...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={darkMode ? styles.darkMode : styles.lightMode}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <h1 className={styles.brandName}>Private Dokumente</h1>
          </div>
          <div className={styles.navRight}>
            <ul className={styles.navList}>
              <li><a href="/" className={styles.navLink}>Home</a></li>
              <li><a href="/projects" className={styles.navLink}>Projects</a></li>
              <li><a href="/skills" className={styles.navLink}>Skills</a></li>
            </ul>
            <button className={styles.modeToggle} onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.documentContainer}>
          <div className={styles.documentItem}>
            <h2 className={styles.documentTitle}>Abacus Debitorenbuchhaltung</h2>
            <iframe
              src="/docs/Abacus Debitorenbuchhaltung.pdf"
              className={styles.iframe}
              frameBorder="0"
            ></iframe>
            <a href="/docs/Abacus Debitorenbuchhaltung.pdf" download className={styles.downloadLink}>
              Download Abacus Debitorenbuchhaltung
            </a>
          </div>
          <div className={styles.documentItem}>
            <h2 className={styles.documentTitle}>Abacus Kreditorenbuchhaltung</h2>
            <iframe
              src="/docs/Abacus Kreditorenbuchhaltung.pdf"
              className={styles.iframe}
              frameBorder="0"
            ></iframe>
            <a href="/docs/Abacus Kreditorenbuchhaltung.pdf" download className={styles.downloadLink}>
              Download Abacus Kreditorenbuchhaltung
            </a>
          </div>
        </div>
        <div className={styles.documentContainer}>
          <div className={styles.documentItem}>
            <h2 className={styles.documentTitle}>Abacus Zertifikat Nr 1</h2>
            <iframe
              src="/docs/Abacus Zertifikat Nr 1.pdf"
              className={styles.iframe}
              frameBorder="0"
            ></iframe>
            <a href="/docs/Abacus Zertifikat Nr 1.pdf" download className={styles.downloadLink}>
              Download Abacus Zertifikat Nr 1
            </a>
          </div>
          <div className={styles.documentItem}>
            <h2 className={styles.documentTitle}>GIBB Zeugnis</h2>
            <iframe
              src="/docs/GIBB Zeugnis.pdf"
              className={styles.iframe}
              frameBorder="0"
            ></iframe>
            <a href="/docs/GIBB Zeugnis.pdf" download className={styles.downloadLink}>
              Download GIBB Zeugnis
            </a>
          </div>
        </div>
        <div className={styles.documentContainer}>
          <div className={styles.documentItem}>
            <h2 className={styles.documentTitle}>IMS Projekt-Abstract Vincent Witzmann</h2>
            <iframe
              src="/docs/IMS_Projekt-Abstract_Vincent_Witzmann.pdf"
              className={styles.iframe}
              frameBorder="0"
            ></iframe>
            <a href="/docs/IMS_Projekt-Abstract_Vincent_Witzmann.pdf" download className={styles.downloadLink}>
              Download IMS Projekt-Abstract Vincent Witzmann
            </a>
          </div>
          <div className={styles.documentItem}>
            <h2 className={styles.documentTitle}>KNW210 Witzmann Vincent Andreas</h2>
            <iframe
              src="/docs/KNW210_Witzmann_VincentAndreas.pdf"
              className={styles.iframe}
              frameBorder="0"
            ></iframe>
            <a href="/docs/KNW210_Witzmann_VincentAndreas.pdf" download className={styles.downloadLink}>
              Download KNW210 Witzmann Vincent Andreas
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivatePage;
