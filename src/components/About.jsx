import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Award, ShieldCheck, HeartHandshake, FileCheck, Layers } from 'lucide-react';

export default function About() {
  const coursework = [
    'Human Resource Planning (HRP)',
    'Human Resource Development (HRD)',
    'Operational Management',
    'Compensation Management',
    'Occupational Safety & Health (OSH)',
    'Performance Management System',
  ];

  const languages = [
    { name: 'Arabic', level: 'Native / Bilingual', percent: 100, flag: '🇸🇩' },
    { name: 'Tigre', level: 'Native', percent: 100, flag: '🌍' },
    { name: 'English', level: 'Advanced / Professional', percent: 90, flag: '🇬🇧' },
    { name: 'Malay', level: 'Elementary (A1-A2)', percent: 35, flag: '🇲🇾' },
  ];

  const corePillars = [
    {
      icon: <FileCheck size={24} style={{ color: '#f59e0b' }} />,
      title: 'Recruitment & Screening',
      desc: 'Screening candidate profiles, conducting structured intake interviews, and assessing organizational fit.',
    },
    {
      icon: <Layers size={24} style={{ color: '#3b82f6' }} />,
      title: 'HR Administration & Records',
      desc: 'Managing accurate documentation, employee records, compliance, and deadline-driven reporting.',
    },
    {
      icon: <HeartHandshake size={24} style={{ color: '#10b981' }} />,
      title: 'Stakeholder & Community Relations',
      desc: 'Building relationships across multicultural campus organizations, foundations, and corporate partners.',
    },
    {
      icon: <ShieldCheck size={24} style={{ color: '#ec4899' }} />,
      title: 'Financial & Program Control',
      desc: 'Managing organization budgets ($1k–$1.5k), tracking expenses, preventing overruns, and publishing impact reports.',
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <span className="badge-gold" style={{ marginBottom: '12px' }}>Professional Profile</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>
            Bridging Talent Strategy with <span className="gradient-text">Operational Precision</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', marginTop: '12px' }}>
            A comprehensive look at my academic foundation, language abilities, and core HR pillars.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {/* Card 1: Academic & Coursework */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', padding: '12px', borderRadius: '12px' }}>
                <BookOpen size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff' }}>Education & Academic Rigor</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Albukhary International University (2023 - 2026)</p>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Specialized in <strong>Bachelor of Business Administration (HRM-Hons)</strong>. Grounded in theoretical frameworks and practical applications of recruitment, talent retention, workplace safety, and performance evaluations.
            </p>

            <h4 style={{ color: '#f8fafc', fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              Key HRM Coursework:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {coursework.map((course, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#e2e8f0',
                    fontSize: '0.82rem',
                    padding: '6px 12px',
                    borderRadius: '8px',
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Multilingual Proficiency */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', padding: '12px', borderRadius: '12px' }}>
                <Globe size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff' }}>Multilingual Capabilities</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Effective Cross-Cultural Communication</p>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Fluent across multiple languages, enabling smooth candidate screening, international employee onboarding, and diverse community engagement.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {languages.map((lang, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: '600', color: '#fff' }}>{lang.flag} {lang.name}</span>
                    <span style={{ color: '#94a3b8' }}>{lang.level}</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${lang.percent}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #3b82f6 0%, #f59e0b 100%)',
                        borderRadius: '9999px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {corePillars.map((p, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '24px' }}>
              <div style={{ marginBottom: '14px' }}>{p.icon}</div>
              <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px' }}>{p.title}</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
