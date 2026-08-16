import React from 'react';
import { Mail, Shield, UserCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="header-bar">
      <div className="brand-logo">
        <div className="brand-dot"></div>
        <span>JOHAT ABREGO // PORTFOLIO</span>
      </div>

      <div className="sys-telemetry">
        <div className="sys-status-pill">
          <UserCheck size={12} />
          <span>OPEN TO OPPORTUNITIES</span>
        </div>
        <div className="sys-status-pill" style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#949E9E' }}>
          <Shield size={12} />
          <span>IP SANITIZED</span>
        </div>
        <a 
          href="mailto:johat.abrego24@gmail.com" 
          className="sys-status-pill" 
          style={{ borderColor: 'rgba(0, 229, 255, 0.4)', color: '#00E5FF', textDecoration: 'none' }}
        >
          <Mail size={12} />
          <span>GET IN TOUCH</span>
        </a>
      </div>
    </header>
  );
}
