'use client';

import { useState } from 'react';

type Doc = {
  title: string;
  ref: string;
  desc: string;
  img: string;
  action: 'view' | 'download' | 'verified';
  type: 'legal' | 'iso';
};

const documents: Doc[] = [
  {
    title: 'Akta Pendirian',
    ref: 'REF: AHU-001293.BC.01.01',
    desc: 'Dokumen legalitas dasar pembentukan badan hukum PT. Bahana Totalindo Teknik yang disahkan oleh Kemenkumham.',
    img: '/assets/about/img112.jpg',
    action: 'view',
    type: 'legal',
  },
  {
    title: 'NIB Berusaha',
    ref: 'REF: 1245000982731',
    desc: 'Identitas pelaku usaha yang diterbitkan oleh Lembaga OSS untuk menjalankan kegiatan operasional konstruksi.',
    img: '/assets/about/img113.jpg',
    action: 'download',
    type: 'legal',
  },
  {
    title: 'SIUJK Konstruksi',
    ref: 'REF: 1-3174-07-005-1-092837',
    desc: 'Izin operasional khusus untuk memberikan layanan jasa konstruksi di seluruh wilayah Republik Indonesia.',
    img: '/assets/about/img116.jpg',
    action: 'view',
    type: 'legal',
  },
  {
    title: 'ISO 9001:2015',
    ref: 'CERT: QMS-BT-2024-001',
    desc: 'Quality Management System — Sistem manajemen mutu internasional untuk konsistensi kualitas layanan dan produk kami.',
    img: '/assets/about/img117.jpg',
    action: 'verified',
    type: 'iso',
  },
  {
    title: 'ISO 14001:2015',
    ref: 'CERT: EMS-BT-2024-042',
    desc: 'Environmental Management System — Kepatuhan terhadap standar lingkungan hidup internasional dalam setiap kegiatan operasional.',
    img: '/assets/about/img112.jpg',
    action: 'verified',
    type: 'iso',
  },
  {
    title: 'ISO 45001:2018',
    ref: 'CERT: OHS-BT-2024-089',
    desc: 'Occupational Health & Safety — Standar keselamatan dan kesehatan kerja yang menjamin keamanan seluruh tenaga kerja kami.',
    img: '/assets/about/img113.jpg',
    action: 'verified',
    type: 'iso',
  },
];

export default function DocumentCards() {
  const [activeDoc, setActiveDoc] = useState<Doc | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {documents.map((doc, i) => (
          <div
            key={i}
            className={`group flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden cursor-pointer ${
              doc.type === 'legal'
                ? 'bg-surface-container-lowest border-b-4 border-primary-container'
                : 'bg-surface-container-high border-l-4 border-tertiary-container'
            }`}
            onClick={() => setActiveDoc(doc)}
          >
            <div className={`w-full overflow-hidden relative ${doc.type === 'legal' ? 'h-48' : 'h-32'}`}>
              <img
                src={doc.img}
                alt={doc.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  doc.type === 'legal' ? 'from-surface-container-lowest' : 'from-surface-container-high'
                } to-transparent`}
              />
            </div>
            <div className="p-8 pt-4 flex-1 flex flex-col">
              <h4 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                <span
                  className={`material-symbols-outlined ${doc.type === 'iso' ? 'text-tertiary-container' : ''}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {doc.action === 'view' ? 'article' : doc.action === 'download' ? 'fingerprint' : 'workspace_premium'}
                </span>
                {doc.title}
              </h4>
              {doc.type === 'iso' && (
                <p className="text-xs font-bold text-tertiary-container mb-2 uppercase tracking-wider">
                  {doc.title.includes('9001')
                    ? 'Quality System'
                    : doc.title.includes('14001')
                    ? 'Environment Mgmt'
                    : 'Health & Safety'}
                </p>
              )}
              <p className="text-sm text-secondary mb-4 font-mono tracking-tighter">{doc.ref}</p>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">{doc.desc}</p>
              <button
                onClick={(e) => { e.stopPropagation(); setActiveDoc(doc); }}
                className={`w-full py-4 font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all ${
                  doc.type === 'legal'
                    ? 'bg-surface-container-low text-primary hover:bg-primary hover:text-white'
                    : 'bg-white text-primary hover:bg-tertiary-container hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {doc.action === 'view' ? 'visibility' : doc.action === 'download' ? 'download' : 'verified'}
                </span>
                {doc.action === 'view' ? 'View Document' : doc.action === 'download' ? 'Download PDF' : 'Verified Document'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeDoc && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setActiveDoc(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-48 relative overflow-hidden">
              <img src={activeDoc.img} alt={activeDoc.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <button
                onClick={() => setActiveDoc(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
              <div className="absolute bottom-4 left-6">
                <p className="text-white font-black text-xl">{activeDoc.title}</p>
                <p className="text-white/70 text-xs font-mono">{activeDoc.ref}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3 mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <span className="material-symbols-outlined text-blue-600 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Untuk mengakses dokumen resmi ini, silakan hubungi tim legal kami melalui halaman Contact atau kirim email ke <strong>legal@bahana-teknik.co.id</strong>
                </p>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{activeDoc.desc}</p>
              <div className="flex gap-3">
                <a
                  href="/contact"
                  className="flex-1 py-3 bg-primary text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors rounded-lg"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  Hubungi Kami
                </a>
                <button
                  onClick={() => setActiveDoc(null)}
                  className="px-4 py-3 border border-slate-200 text-slate-500 font-bold text-xs tracking-widest uppercase hover:bg-slate-50 transition-colors rounded-lg"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
