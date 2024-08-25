import React from 'react';
import { headerStyle } from './Header.css';

export const Header: React.FC = React.memo(() => {
  return (
    <header className={headerStyle}>
      <nav>
        <a href="/">CutOut</a>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';
