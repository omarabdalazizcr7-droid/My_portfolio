import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Shield, FileSpreadsheet, Video, MessageSquare, Calculator, Layers, Cpu, Award } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Core HR & Recruitment Operations',
      icon: <UserCheck size={22} style={{ color: '#f59e0b' }} />,
      items: [
        { name: 'Candidate Screening & Interviewing', level: 'Advanced' },
        { name: 'HR Administration & Documentation', level: 'Advanced' },
        { name: 'Data Entry & Records Management', level: 'Proficient' },
        { name: 'Performance Management Frameworks', level: 'Academic + Applied' },
        { name: 'Occupational Safety & Health (OSH)', level: 'Academic' },
        { name: 'Compensation & Benefits Fundamentals', level: 'Academic' },
      ],
    },
    {
      category: 'Project & Stakeholder Management',
      icon: <Layers size={22} style={{ color: '#3b82f6' }} />,
      items: [
        { name: 'Event & Leadership Program Coordination', level: 'Expert' },
        { name: 'Stakeholder & Community Engagement', level: 'Expert' },
        { name: 'Cross-Functional Team Communication', level: 'Advanced' },
        { name: 'Impact Story Writing & Branding', level: 'Advanced' },
        { name: 'Public Speaking & Workshop Facilitation', level: 'Award-Winning' },
      ],
    },
    {
      category: 'Technical Tools & Software',
      icon: <Cpu size={22} style={{ color: '#10b981' }} />,
      items: [
        { name: 'Microsoft Office (Excel, Word, PPT)', level: 'Advanced' },
        { name: 'Google Workspace Suite', level: 'Advanced' },
        { name: 'Video Editing & Content Creation', level: 'Proficient' },
        { name: 'Financial Record Keeping & Budget Control', level: 'Proficient' },
        { name: 'Website Content Drafting & CMS Support', level: 'Intermediate' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <span className="badge-gold" style={{ marginBottom: '12px' }}>Competency Matrix</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>
            Technical HR Skills & <span className="gradient-text">Tool Proficiencies</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', marginTop: '12px' }}>
            Comprehensive toolkit spanning HR administration, candidate evaluation, digital tools, and leadership skills.
          </p>
        </div>

        {/* 3 Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card"
              style={{ padding: '28px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '10px', borderRadius: '12px' }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff' }}>{cat.category}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: '500' }}>{item.name}</span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: '#f59e0b',
                        background: 'rgba(245, 158, 11, 0.12)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
