import React from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle } from 'lucide-react';
import resumePdf from '../../Resume-2.pdf';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '900px',
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
          overflow: 'hidden',
          borderRadius: '20px',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 28px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(15, 23, 42, 0.95)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', padding: '10px', borderRadius: '10px' }}>
              <FileText size={20} />
            </div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '700' }}>
                Official Curriculum Vitae
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                Omer Abdalaziz Mohamed | BBA (HRM-Hons)
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={resumePdf}
              download="Omer_Abdalaziz_Mohamed_Resume.pdf"
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.background = 'rgba(239, 68, 68, 0.3)')}
              onMouseLeave={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.08)')}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* PDF Embedded View */}
        <div style={{ flex: 1, background: '#1e293b', position: 'relative' }}>
          <iframe
            src={resumePdf}
            title="Omer Abdalaziz Mohamed Resume"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}
