import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Sparkles, Lightbulb } from 'lucide-react';

import workshopImg from '../../o1.jpeg';
import medalImg from '../../o4.jpeg';

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
          <span className="badge-emerald" style={{ marginBottom: '12px' }}>Impact & Competitions</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>
            Award-Winning Projects & <span className="gradient-text">Social Initiatives</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '10px' }}>
            Demonstrating team leadership, environmental sustainability, and public presentation excellence.
          </p>
        </div>

        {/* Featured Project 1: Sustainability & Society Awareness Project (Dual-Image Showcase) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{ padding: '28px', marginBottom: '28px', border: '1px solid rgba(245, 158, 11, 0.35)' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', alignItems: 'center' }}>
            {/* Left: Text Details */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-gold">
                  <Trophy size={14} /> 🏆 1st Place Winner - University Competition
                </span>
                <span className="badge-blue">Alor Setar, AIU</span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#fff', marginBottom: '10px', lineHeight: 1.3 }}>
                Sustainability & Society Awareness Project
              </h3>

              <div style={{ color: '#94a3b8', fontSize: '0.84rem', marginBottom: '14px' }}>
                📅 Nov 2023 – Mar 2024 • Guided Team Leader
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Guided a team project on environmental sustainability, promoting research, community awareness, and teamwork. Secured <strong>1st Place Winner</strong> out of all competitive entries in the university-wide initiative.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.88rem' }}>
                  <Sparkles size={15} style={{ color: '#f59e0b', flexShrink: 0 }} />
                  <span>Led team research, workshop facilitation, and environmental advocacy.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.88rem' }}>
                  <Sparkles size={15} style={{ color: '#f59e0b', flexShrink: 0 }} />
                  <span>Won 1st Place Gold Medal recognition for project impact and presentation.</span>
                </li>
              </ul>
            </div>

            {/* Right: Dual Image Gallery for Sustainability Project (o4 & o1) */}
            <div className="dual-project-gallery" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {/* Image 1: Medal Victory (o4) */}
              <div>
                <div style={{ borderRadius: '14px', overflow: 'hidden', height: '200px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <img
                    src={medalImg}
                    alt="1st Place Medal Celebration"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '6px', textAlign: 'center', fontStyle: 'italic' }}>
                  🥇 1st Place Victory Medal
                </p>
              </div>

              {/* Image 2: Workshop Facilitation (o1) */}
              <div>
                <div style={{ borderRadius: '14px', overflow: 'hidden', height: '200px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <img
                    src={workshopImg}
                    alt="Sustainability Workshop Facilitation"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '6px', textAlign: 'center', fontStyle: 'italic' }}>
                  🎤 Student Workshop Facilitation
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Project 2: Social Business Project: Skill Empowerment Initiative (UpSkillzone) - Clean Card Without Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card"
          style={{ padding: '28px', border: '1px solid rgba(59, 130, 246, 0.35)' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '14px', alignItems: 'center' }}>
            <span className="badge-blue">
              <Award size={14} /> 🥈 2nd Place & Best Presentation Award
            </span>
            <span className="badge-emerald">Social Entrepreneurship</span>
            <span style={{ color: '#94a3b8', fontSize: '0.82rem', marginLeft: 'auto' }}>
              📍 Alor Setar, AIU • 📅 Feb 2025 – Jun 2025
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', padding: '12px', borderRadius: '12px', flexShrink: 0 }}>
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff' }}>
                Social Business Project: Skill Empowerment Initiative (UpSkillzone)
              </h3>
              <div style={{ color: '#f59e0b', fontSize: '0.88rem', fontWeight: '600' }}>
                Co-Founder & Workshop Lead
              </div>
            </div>
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '18px' }}>
            Co-founded <strong>UpSkillzone</strong> to reduce poverty through practical skill-based training modules, leadership workshops, and youth empowerment. Delivered high-engagement pitch presentations that earned <strong>2nd Place Overall</strong> and the prestigious <strong>Best Presentation Award</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ color: '#60a5fa', fontWeight: '700', fontSize: '0.88rem', marginBottom: '4px' }}>🎯 Poverty Reduction Strategy</div>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Constructed accessible training modules focused on empowering community youth with job-ready skills.</p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ color: '#f59e0b', fontWeight: '700', fontSize: '0.88rem', marginBottom: '4px' }}>🎤 Pitch & Presentation Excellence</div>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Awarded "Best Presentation" in university business competition for pitch delivery and clarity.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
