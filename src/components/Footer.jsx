import React from 'react';

export function Footer() {
  return (
    <footer className="footer-bar">
      <div>
        <span>© {new Date().getFullYear()} JOHAT ABREGO // FULL-STACK ML ENGINEER</span>
      </div>
      <div>
        <span>ALL APP NAMES & METRICS SANITIZED FOR IP PROTECTION</span>
      </div>
    </footer>
  );
}
