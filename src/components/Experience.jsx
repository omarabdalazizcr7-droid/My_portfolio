import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

import tunRazakImg from '../../o5.jpeg';
import maybankImg from '../../o3.jpeg';
import redCrescentImg from '../../o2.jpeg';
import sudaneseCertImg from '../../o7.jpeg';
import nagashiCertImg from '../../o8.jpeg';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');

  const experiences = [
    {
      id: 'freelance-media',
      role: 'Videographer, Video Editor & YouTube Channel Manager',
      organization: 'Freelance',
      location: 'Malaysia',
      period: 'May 2026 – Present',
      category: 'media',
      image: null,
      badge: 'Digital Storytelling & Media Production',
      bullets: [
        'Filmed and edited video content, ensuring high-quality visuals and engaging storytelling.',
        'Managed a YouTube channel focused on culture and religion, overseeing content production and publication.',
        'Coordinated video production from filming to final editing, creating engaging content for digital audiences.',
      ],
      metrics: 'Video Production | Channel Management | Audience Engagement & Storytelling',
    },
    {
      id: 'tun-razak',
      role: 'Campaign Support Intern',
      organization: 'Tun Razak Foundation',
      location: 'Malaysia',
      period: 'Nov 2025 – April 2026',
      category: 'internship',
      image: tunRazakImg,
      imageCaption: 'Omer managing visual documentation and event photography with professional DSLR setup.',
      badge: 'HR & Program Operations',
      bullets: [
        'Coordinated the day-to-day operations of a two-week leadership program for 70 participants, ensuring smooth program delivery and participant engagement.',
        'Conducted interviews with 20+ participants, parents, and alumni, building strong stakeholder relationships and gathering qualitative feedback.',
        'Converted 11 participant interviews into professionally written success stories for the Foundation’s website, supporting organizational branding and impact reporting.',
        'Drafted website content and liaised with external agencies throughout the website development process, ensuring timely communication and project coordination.',
        'Managed event photography and visual documentation for Foundation programs, supporting internal communications and promotional initiatives.',
      ],
      metrics: '70 Participants Coordinated | 20+ Stakeholder Interviews | 11 Published Success Stories',
    },
    {
      id: 'maybank',
      role: 'Campus Ambassador 2025',
      organization: 'Maybank',
      location: 'Malaysia',
      period: 'Mar 2025 – Dec 2025',
      category: 'corporate',
      image: maybankImg,
      imageCaption: 'Omer representing Maybank at university campus ambassador initiatives.',
      badge: 'Corporate Ambassadorship',
      bullets: [
        'Represented Maybank at university events to promote brand awareness, financial literacy, and career pathway opportunities.',
        'Supported campaign execution, interactive student workshops, and outreach programs to boost campus engagement.',
        'Acted as a liaison between student bodies and Maybank corporate representatives for campus activations.',
      ],
      metrics: 'Campus Outreach | Financial Literacy Workshops | Brand Activation',
    },
    {
      id: 'red-crescent',
      role: 'Official Member - Volunteer',
      organization: 'Red Crescent',
      location: 'Malaysia',
      period: 'Mar 2024 – Dec 2025',
      category: 'volunteer',
      image: redCrescentImg,
      imageCaption: 'Omer actively serving food and essential aid during flood relief operations.',
      badge: 'Humanitarian & Crisis Support',
      bullets: [
        'Assisted in flood relief operations by supporting emergency response activities and providing aid to affected communities.',
        'Distributed food, essential supplies, and humanitarian assistance directly to 200+ flood-affected families.',
        'Supported elderly beneficiaries during relief operations, ensuring their safety, comfort, and access to assistance.',
        'Collaborated with volunteers to coordinate relief efforts in a fast-paced, community-focused environment.',
      ],
      metrics: '200+ Families Aided | Flood Relief Operations | Elderly Beneficiary Support',
    },
    {
      id: 'nagashi-club',
      role: 'Deputy Treasurer',
      organization: 'Nagashi Club',
      location: 'Malaysia',
      period: 'Feb 2023 – Oct 2023',
      category: 'finance',
      image: nagashiCertImg,
      imageCaption: 'Official Certificate of Appreciation for Deputy Head of Treasure Affairs (Nagashi Club).',
      badge: 'Financial Oversight & Administration',
      bullets: [
        'Managed an annual budget of $1,000–$1,500 for a 150+ member student organization, tracking expenses and fund allocation across club activities.',
        'Maintained accurate financial records and prepared periodic reports to ensure transparency and accountability to club leadership.',
        'Partnered with committee heads to allocate funds efficiently across events, minimizing budget overruns.',
      ],
      metrics: '$1,000–$1,500 Annual Budget | 150+ Members | Budget Variance Control',
    },
    {
      id: 'sudanese-community',
      role: 'Head of Finance / Treasurer',
      organization: 'Sudanese Students Community',
      location: 'Malaysia',
      period: 'Mar 2023 – Oct 2023',
      category: 'finance',
      image: sudaneseCertImg,
      imageCaption: 'Certificate of Appreciation awarded for outstanding service as Treasurer of Sudanese Students Community.',
      badge: 'Community Treasury & Budget Planning',
      bullets: [
        'Oversaw an annual budget of ($1,000–$1,500) for a 100+ member community, managing all income, expenses, and fund distribution.',
        'Directed budget planning for cultural and academic events, balancing spend across multiple initiatives throughout the year.',
        'Prepared financial statements and reports, ensuring transparent and compliant financial management for the community.',
      ],
      metrics: '100+ Community Members | ($1,000–$1,500) Budget | Compliant Financial Reporting',
    },
  ];

  const filteredExp = activeTab === 'all'
    ? experiences
    : experiences.filter((e) => e.category === activeTab);

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
          <span className="badge-blue" style={{ marginBottom: '12px' }}>Career & Leadership Journey</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>
            Professional Experience & <span className="gradient-text">Verified Impact</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '10px' }}>
            A track record of program facilitation, corporate representation, and verified finance leadership.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {[
            { id: 'all', label: 'All Roles' },
            { id: 'internship', label: 'Internship & HR' },
            { id: 'media', label: 'Digital Media' },
            { id: 'corporate', label: 'Corporate Ambassadorship' },
            { id: 'volunteer', label: 'Humanitarian Volunteer' },
            { id: 'finance', label: 'Finance & Administration' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveTab(btn.id)}
              style={{
                background: activeTab === btn.id ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === btn.id ? '#000' : '#cbd5e1',
                border: '1px solid',
                borderColor: activeTab === btn.id ? '#f59e0b' : 'rgba(255, 255, 255, 0.1)',
                fontWeight: '700',
                padding: '8px 20px',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontSize: '0.88rem',
                transition: 'all 0.2s ease',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Timeline Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {filteredExp.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card"
              style={{ padding: '28px' }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: exp.image ? '1fr 340px' : '1fr',
                  gap: '28px',
                  alignItems: 'start',
                }}
                className="exp-card-grid"
              >
                {/* Text Content */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span className="badge-gold">{exp.badge}</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span style={{ color: '#94a3b8', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                    {exp.role}
                  </h3>
                  <div style={{ color: '#f59e0b', fontSize: '1rem', fontWeight: '600', marginBottom: '14px' }}>
                    {exp.organization}
                  </div>

                  {/* Bullet points */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.55 }}>
                        <CheckCircle size={16} style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metrics Footer */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px dashed rgba(255, 255, 255, 0.12)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      color: '#f59e0b',
                      fontSize: '0.84rem',
                      fontWeight: '700',
                    }}
                  >
                    ⚡ Impact Highlight: {exp.metrics}
                  </div>
                </div>

                {/* Mapped Image Column (if present) */}
                {exp.image && (
                  <div style={{ position: 'relative' }}>
                    <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.15)', height: '230px' }}>
                      <img
                        src={exp.image}
                        alt={exp.organization}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.78rem', marginTop: '6px', textAlign: 'center', fontStyle: 'italic' }}>
                      {exp.imageCaption}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
