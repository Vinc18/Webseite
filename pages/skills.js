import React, { useState, useEffect } from 'react';
import styles from '../styles/Skills.module.css';
import {
  FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
  FaPython, FaJava, FaGitAlt, FaDocker, FaChevronUp, FaChevronDown, FaSun, FaMoon
} from 'react-icons/fa';
import {
  SiNextdotjs, SiMongodb, SiMicrosoftsqlserver, SiDotnet, SiVisualstudiocode,
  SiTailwindcss, SiFigma, SiAzuredevops
} from 'react-icons/si';

const languages = [
  { name: 'Deutsch - Native Language', imgSrc: '/images/de.svg' },
  { name: 'English - B2 in 2024', imgSrc: '/images/gb.svg' },
  { name: 'French - B2 in 2024', imgSrc: '/images/fr.svg' }
];

const Skills = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
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

  const toggleSkill = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  const toggleImpressum = () => {
    setIsImpressumOpen(prevState => !prevState);
  };

  return (
    <div className={isDarkMode ? styles.darkMode : styles.lightMode}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <h1 className={styles.brandName}>Vincent Witzmann</h1>
          </div>
          <div className={styles.navRight}>
            <ul className={styles.navList}>
              <li><a href="/">About me</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/education">Education</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/login">Documents</a></li>
            </ul>
            <button onClick={toggleMode} className={styles.modeToggle}>
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.skillsTitle}>My Skills</h1>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h2 onClick={() => toggleSkill('frontend')}>
              Frontend Skills {activeSkill === 'frontend' ? <FaChevronUp /> : <FaChevronDown />}
            </h2>
            {activeSkill === 'frontend' && (
              <div className={styles.skillList}>
                <SkillBox title="HTML" icon={<FaHtml5 size={40} color="#e34c26" />} progress={95} />
                <SkillBox title="CSS" icon={<FaCss3Alt size={40} color="#1572B6" />} progress={95} />
                <SkillBox title="JavaScript" icon={<FaJs size={40} color="#F7DF1E" />} progress={85} />
                <SkillBox title="Next.js" icon={<SiNextdotjs size={40} color="#000000" />} progress={85} />
                <SkillBox title="Tailwind CSS" icon={<SiTailwindcss size={40} color="#38B2AC" />} progress={55} />
              </div>
            )}
          </div>

          <div className={styles.skillCategory}>
            <h2 onClick={() => toggleSkill('backend')}>
              Backend Skills {activeSkill === 'backend' ? <FaChevronUp /> : <FaChevronDown />}
            </h2>
            {activeSkill === 'backend' && (
              <div className={styles.skillList}>
                <SkillBox title="Node.js" icon={<FaNodeJs size={40} color="#339933" />} progress={85} />
                <SkillBox title="Python" icon={<FaPython size={40} color="#3776AB" />} progress={80} />
                <SkillBox title="Java" icon={<FaJava size={40} color="#007396" />} progress={75} />
                <SkillBox title="MongoDB" icon={<SiMongodb size={40} color="#47A248" />} progress={75} />
                <SkillBox title="SQL" icon={<SiMicrosoftsqlserver size={40} color="#CC2927" />} progress={90} />
                <SkillBox title=".NET MAUI" icon={<SiDotnet size={40} color="#512BD4" />} progress={85} />
              </div>
            )}
          </div>

          <div className={styles.skillCategory}>
            <h2 onClick={() => toggleSkill('divers')}>
              Diverse Skills {activeSkill === 'divers' ? <FaChevronUp /> : <FaChevronDown />}
            </h2>
            {activeSkill === 'divers' && (
              <div className={styles.skillList}>
                <SkillBox title="VS Code" icon={<SiVisualstudiocode size={40} color="#007ACC" />} progress={100} />
                <SkillBox title="Git" icon={<FaGitAlt size={40} color="#F05032" />} progress={90} />
                <SkillBox title="Figma" icon={<SiFigma size={40} color="#F24E1E" />} progress={80} />
                <SkillBox title="Azure DevOps" icon={<SiAzuredevops size={40} color="#0078D7" />} progress={75} />
                <SkillBox title="Docker" icon={<FaDocker size={40} color="#2496ED" />} progress={95} />
                <SkillBox title="Abacus" icon={<SiMongodb size={40} color="#FFD700" />} progress={85} />
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
<footer>
        {/* Inserted modal component */}
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
        {/* End of modal component */}
        </footer>
      </main>
    </div>
  );
};

const SkillBox = ({ title, icon, progress }) => {
  return (
    <div className={styles.skillBox}>
      <div className={styles.skillIcon}>{icon}</div>
      <h3 className={styles.skillTitle}>{title}</h3>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Skills;
