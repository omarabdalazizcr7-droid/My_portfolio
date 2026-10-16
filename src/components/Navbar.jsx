import React, { useState, useEffect } from 'react';
import { UserCheck, FileText, Menu, X, Linkedin, Mail } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects & Impact', href: '#projects' },
    { name: 'HR Competencies', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? '10px 0' : '16px 0',
        transition: 'all 0.3s ease',
      }}
      className={isScrolled ? 'glass-nav' : ''}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: '800',
              fontSize: '1.1rem',
              boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
            }}
          >
            OM
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: '700', fontSize: '1rem', letterSpacing: '-0.02em' }}>
              Omer Abdalaziz
            </div>
            <div style={{ color: '#f59e0b', fontSize: '0.72rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              HR Operations & Talent
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.9rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#f59e0b')}
              onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="desktop-nav">
          <a
            href="https://www.linkedin.com/in/omer-abdalaziz-mohammed-93704b299"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#60a5fa',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0a66c2';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.color = '#60a5fa';
            }}
          >
            <Linkedin size={18} />
          </a>

          <button onClick={onOpenResume} className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            <FileText size={15} />
            <span>View Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Slide-out Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(9, 13, 22, 0.98)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(245, 158, 11, 0.3)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              style={{
                color: '#e2e8f0',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: '600',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <FileText size={18} />
              <span>View & Download CV</span>
            </button>

            <a
              href="https://www.linkedin.com/in/omer-abdalaziz-mohammed-93704b299"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', borderColor: 'rgba(59, 130, 246, 0.4)', color: '#60a5fa' }}
            >
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
