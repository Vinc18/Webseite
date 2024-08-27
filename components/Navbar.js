import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">About Me</Link></li>
        <li><Link href="/projekte">Projekte</Link></li>
        <li><Link href="/ausbildung">Ausbildung</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/login">Dokumente</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
