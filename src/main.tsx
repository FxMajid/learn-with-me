import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const modules = [
  { title: 'Teori Organisasi', code: 'ADPU4341', edition: 'Edisi 3' },
  { title: 'Analisis dan Perancangan Sistem', code: 'MSIM4302', edition: 'Edisi 1' },
  { title: 'Komunikasi Bisnis', code: 'SKOM4432', edition: 'Edisi 4' }
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <button className="exit">Keluar</button>
        <h1>Selamat Malam, Learner!</h1>
        <p>
          Akses seluruh bahan ajar, kelola progres belajar, dan temukan modul baru dengan
          pengalaman yang cepat dan nyaman.
        </p>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-label">Total Modul Dibaca</span>
            <strong>4 Buku</strong>
          </div>
          <div className="stat-item">
            <span className="stat-label">Total Aktivitas Akses</span>
            <strong>6 Kali</strong>
          </div>
          <div className="stat-item">
            <span className="stat-label">Poin</span>
            <strong>Coming Soon</strong>
          </div>
        </div>
      </header>

      <section className="search-wrap">
        <input placeholder="Ketik kode mata kuliah atau judul modul..." />
      </section>

      <section className="recent">
        <h2>Terakhir Dibaca</h2>
        <div className="cards">
          {modules.map((module) => (
            <article key={module.code} className="card">
              <div className="badges">
                <span className="tag tag-green">Riwayat</span>
                <span className="tag tag-blue">{module.edition}</span>
              </div>
              <h3>{module.title}</h3>
              <div className="code-row">
                <span>Bahan Ajar:</span>
                <strong>{module.code}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
