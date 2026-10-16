import React from 'react';
import { ArrowUp, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', background: '#05080f', padding: '40px 0 30px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
          <div>
            <div style={{ fontWeight: '800', color: '#fff', fontSize: '1.1rem' }}>
              Omer Abdalaziz Mohamed
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '2px' }}>
              HR Operations, Candidate Screening & Talent Coordination
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem' }}>About</a>
            <a href="#experience" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem' }}>Experience</a>
            <a href="#projects" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem' }}>Projects</a>
            <a href="#skills" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem' }}>Skills</a>
            <button onClick={onOpenResume} style={{ background: 'none', border: 'none', color: '#f59e0b', cursor: 'pointer', fontSize: '0.88rem', fontWeight: '600' }}>
              Resume
            </button>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '20px', textAlign: 'center', color: '#64748b', fontSize: '0.82rem' }}>
          © {new Date().getFullYear()} Omer Abdalaziz Mohamed. Built with React & Vite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
