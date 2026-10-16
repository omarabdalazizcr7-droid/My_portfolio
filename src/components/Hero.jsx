import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Linkedin, Download, CheckCircle2, ArrowUpRight, GraduationCap } from 'lucide-react';
import profileImg from '../../o6.jpeg';

export default function Hero({ onOpenResume }) {
  const keyMetrics = [
    { value: '70+', label: 'Students Facilitated', sub: 'Tun Razak Foundation' },
    { value: '200+', label: 'Relief Families Supported', sub: 'Red Crescent Volunteer' },
    { value: '2x', label: 'Competition Awards Won', sub: 'Sustainability & Social Business' },
    { value: 'HRM', label: 'BBA (Hons) Graduate', sub: 'Albukhary International Univ.' },
  ];

  return (
    <section style={{ paddingTop: '110px', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Text Content */}
          <motion.div
            className="hero-text-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status pill */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="badge-gold">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                Open for HR & Talent Acquisition Roles
              </span>
              <span className="badge-blue">
                <MapPin size={12} /> Kuala Lumpur, Malaysia
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4.5vw, 3.8rem)',
                fontWeight: '800',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}
            >
              Driving Organizational Growth Through <span className="gradient-text">People-First HR Leadership</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.98rem, 2vw, 1.1rem)',
                color: '#cbd5e1',
                lineHeight: 1.65,
                marginBottom: '24px',
                maxWidth: '640px',
              }}
            >
              Hi, I’m <strong>Omer Abdalaziz Mohamed</strong>. A Human Resource Management graduate (BBA HRM-Hons) with hands-on experience in program facilitation, candidate & stakeholder interviews, stakeholder communication, and organizational budget administration across corporate, campus, and non-profit initiatives.
            </p>

            {/* Quick Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              <span className="badge-emerald"><CheckCircle2 size={13} /> Bilingual (Arabic / English / Tigre)</span>
              <span className="badge-blue"><CheckCircle2 size={13} /> Candidate Screening & Interviewing</span>
              <span className="badge-gold"><CheckCircle2 size={13} /> Event & Program Facilitation</span>
            </div>

            {/* CTA Group */}
            <div className="hero-cta-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <a href="#contact" className="btn-primary">
                <span>Connect With Omer</span>
                <ArrowUpRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn-secondary">
                <Download size={18} />
                <span>View & Download CV</span>
              </button>

              <a
                href="https://www.linkedin.com/in/omer-abdalaziz-mohammed-93704b299"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ borderColor: 'rgba(59, 130, 246, 0.4)', color: '#60a5fa' }}
              >
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Profile Visual Card with o6.jpeg (First on Mobile!) */}
          <motion.div
            className="hero-img-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div
              className="glass-card"
              style={{
                padding: '12px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(320px, 45vh, 460px)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={profileImg}
                  alt="Omer Abdalaziz Mohamed Graduation"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(9, 13, 22, 0.92) 0%, transparent 60%)',
                  }}
                />

                {/* Floating Overlay Info */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    right: '14px',
                    background: 'rgba(15, 23, 42, 0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '14px',
                    padding: '12px 14px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        background: 'rgba(245, 158, 11, 0.2)',
                        color: '#f59e0b',
                        padding: '8px',
                        borderRadius: '10px',
                        flexShrink: 0,
                      }}
                    >
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.9rem' }}>
                        Albukhary International University
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.78rem' }}>
                        B.B.A. Human Resource Management (Hons)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '40px' }}
        >
          <div
            className="glass-card"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '16px',
              padding: '24px 16px',
            }}
          >
            {keyMetrics.map((m, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '8px' }}>
                <div
                  className="gradient-text"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', lineHeight: 1 }}
                >
                  {m.value}
                </div>
                <div style={{ fontWeight: '700', color: '#f8fafc', marginTop: '6px', fontSize: '0.86rem' }}>
                  {m.label}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.76rem', marginTop: '2px' }}>
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
