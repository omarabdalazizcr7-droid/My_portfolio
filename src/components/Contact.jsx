import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <span className="badge-gold" style={{ marginBottom: '12px' }}>Get In Touch</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>
            Ready to Connect for <span className="gradient-text">HR Opportunities</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', marginTop: '12px' }}>
            Whether you have an HR opening, candidate screening opportunity, or corporate project, I’d love to speak with you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {/* Info Card Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Card */}
            <a
              href="mailto:omarabdalazizcr7@gmail.com"
              className="glass-card"
              style={{ padding: '24px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px' }}
            >
              <div style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', padding: '14px', borderRadius: '14px' }}>
                <Mail size={24} />
              </div>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct Email</div>
                <div style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700', marginTop: '2px' }}>omarabdalazizcr7@gmail.com</div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+60174024189"
              className="glass-card"
              style={{ padding: '24px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px' }}
            >
              <div style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', padding: '14px', borderRadius: '14px' }}>
                <Phone size={24} />
              </div>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone / WhatsApp</div>
                <div style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700', marginTop: '2px' }}>+60 17-402 4189</div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/omer-abdalaziz-mohammed-93704b299"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{ padding: '24px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px', borderBorderColor: 'rgba(10, 102, 194, 0.4)' }}
            >
              <div style={{ background: 'rgba(10, 102, 194, 0.2)', color: '#60a5fa', padding: '14px', borderRadius: '14px' }}>
                <Linkedin size={24} />
              </div>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>LinkedIn Profile</div>
                <div style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700', marginTop: '2px' }}>Omer Abdalaziz Mohammed</div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '14px', borderRadius: '14px' }}>
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</div>
                <div style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700', marginTop: '2px' }}>Kuala Lumpur, Malaysia</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: '32px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: '800' }}>Message Sent Successfully!</h3>
                <p style={{ color: '#94a3b8', marginTop: '10px', fontSize: '0.95rem' }}>
                  Thank you for reaching out. Omer will review your message and respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: '24px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>
                  Send a Direct Message
                </h3>

                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: '600', marginBottom: '6px' }}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: '600', marginBottom: '6px' }}>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: '600', marginBottom: '6px' }}>Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. HR Opportunity Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: '600', marginBottom: '6px' }}>Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
