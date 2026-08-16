import React from 'react';
import { Mail, Shield, UserCheck } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';

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
        <div className="sys-status-pill sys-pill-muted">
          <Shield size={12} />
          <span>IP SANITIZED</span>
        </div>
        <a 
          href={SOCIAL_LINKS.email} 
          className="sys-status-pill sys-pill-action" 
        >
          <Mail size={12} />
          <span>GET IN TOUCH</span>
        </a>
      </div>
    </header>
  );
}
