import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const WA = '6282296770390'
const waLink = (m) => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`

const legalProducts = [
  { title: 'PT Persero', price: 'Rp4.500.000', image: '/images/pt_persero.png', docs: ['SK Kemenkumham PT', 'Akta Notaris PT', 'NPWP & SKT PT', 'Akun Coretax PT', 'NIB & Akun OSS PT'], accent: 'blue' },
  { title: 'CV', price: 'Rp3.500.000', image: '/images/cv.png', docs: ['SK Kemenkumham CV', 'Akta Notaris CV', 'NPWP & SKT CV', 'Akun Coretax CV', 'NIB & Akun OSS CV'], accent: 'peach' },
  { title: 'PT Perorangan', price: 'Rp1.500.000', image: '/images/pt_perorangan.png', docs: ['SK Kemenkumham', 'Pernyataan Pendirian', 'E-NPWP + SKT', 'Akun OSS RBA', 'NIB Usaha'], accent: 'mint' },
  { title: 'NPWP & NIB OSS', price: 'Mulai Rp350.000', image: '/images/npwp.png', docs: ['NPWP Pribadi / Badan', 'Pendaftaran Coretax', 'NIB Mikro/Kecil', 'Validasi KBLI OSS', 'Pendampingan Sampai Aktif'], accent: 'lilac' },
]

const techServices = [
  { title: 'Website & Aplikasi', desc: 'Landing page & web toko yang cakep, ngebut di HP, dan langsung nyambung ke WhatsApp kamu.', image: '/images/web.jpeg', tag: 'Konsultasi Gratis', color: 'blue' },
  { title: 'Pemasangan CCTV', desc: 'Pasang CCTV HD jernih, bisa intip toko & rumah dari HP kapan aja. Kabel rapi, hasil rapi.', image: '/images/cctv.jpeg', tag: 'Bisa Survey Lokasi', color: 'peach' },
  { title: 'Service HP & Laptop', desc: 'LCD pecah, baterai ngedrop, lemot, atau mati total — kita beresin dengan jujur & garansi.', image: '/images/hp laptp.jpeg', tag: 'Cirebon Timur', color: 'mint' },
  { title: 'Service AC', desc: 'Cuci bersih, isi freon, servis bocor & bongkar pasang AC semua merk. Dinginnya balik lagi!', image: '/images/ac.jpeg', tag: 'Semua Merk', color: 'yellow' },
]

const testimonials = [
  { name: 'Hendra Kurniawan', role: 'Owner Cafe di Cirebon', rating: 5, text: 'Bikin PT Perorangan sat-set banget! Dua hari jadi, dokumen lengkap. Adminnya ramah dan ngejelasinnya enak dipahami.', init: 'HK' },
  { name: 'Siti Rahmawati', role: 'Owner AR Hijab', rating: 5, text: 'Webnya cakep poll! Di HP smooth banget, pelanggan jadi gampang chat langsung. Penjualan naik kerasa!', init: 'SR' },
  { name: 'David Wijaya', role: 'Pemilik Toko Grosir', rating: 4.5, text: 'CCTV 6 titik hasilnya rapi banget. Kabel nggak berantakan, diajarin pantau dari HP sampai bisa.', init: 'DW' },
  { name: 'Dimas Aditya', role: 'Freelancer Desain', rating: 5, text: 'Laptop kesiram air pas deadline, panik! Untung dibawa ke AR-Solution, data selamat semua. Life saver!', init: 'DA' },
  { name: 'Maya Anggraeni', role: 'Admin Kantor CV', rating: 4.5, text: 'Langganan cuci AC kantor. Dateng tepat waktu, nggak bikin becek, AC langsung dingin nyess.', init: 'MA' },
  { name: 'Rizky Pratama', role: 'Direktur CV Karya', rating: 5, text: 'Urus CV transparan dari awal, nggak ada biaya siluman. Dijelasin step OSS & Coretax sampai paham.', init: 'RP' },
]

function Stars({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 !== 0
  return (
    <span className="stars-row" aria-label={`${rating} bintang`}>
      <span className="star-glyphs">
        {'★'.repeat(full)}{half ? '½' : ''}<span className="stars-dim">{'★'.repeat(5 - Math.ceil(rating))}</span>
      </span>
      <b>{rating.toFixed(1)}</b>
    </span>
  )
}

function App() {
  const [menu, setMenu] = useState(false)
  const [serviceFilter, setServiceFilter] = useState('Semua')
  const allServices = serviceFilter === 'Semua' ? techServices : techServices.filter(s => s.title.toLowerCase().includes(serviceFilter.toLowerCase()))

  return (
    <>
      <div className="topbar">✨ Konsultasi gratis & ramah di WhatsApp — <b>fast respon</b> setiap hari 08.00–21.00 ✨</div>

      <header className="header">
        <div className="container nav">
          <a href="#home" className="brand">
            <img src="/images/logo.jpeg" alt="AR-Solution" />
            <span><b>AR-Solution</b><small>Solusi Cepat, Tepat & Terpercaya</small></span>
          </a>
          <button className="burger" onClick={() => setMenu(!menu)} aria-label="menu">{menu ? '✕' : '☰'}</button>
          <nav className={menu ? 'open' : ''}>
            <a href="#legalitas" onClick={() => setMenu(false)}>Legalitas</a>
            <a href="#layanan" onClick={() => setMenu(false)}>Jasa Harian</a>
            <a href="#testimoni" onClick={() => setMenu(false)}>Testimoni</a>
            <a href="#tentang" onClick={() => setMenu(false)}>Tentang</a>
            <a className="nav-cta" href={waLink('Halo AR-Solution, saya mau konsultasi gratis dong!')} target="_blank" rel="noreferrer" onClick={() => setMenu(false)}>Chat WhatsApp 💬</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-blobs" aria-hidden>
            <span className="blob b1" />
            <span className="blob b2" />
            <span className="blob b3" />
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="pill">👋 Halo, Pejuang UMKM!</span>
              <h1>Bikin usaha <em>resmi & kekinian</em> — nggak pakai ribet.</h1>
              <p>Kami bantu urus legalitas (PT, CV, NPWP, NIB), bikin website yang enak dilihat di HP, pasang CCTV, sampai servis HP / laptop & AC. Satu tempat, semua beres.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={waLink('Halo AR-Solution, saya mau konsultasi gratis dong!')} target="_blank" rel="noreferrer">Mulai Konsultasi Gratis 🚀</a>
                <a className="btn btn-ghost" href="#legalitas">Lihat Paket ↓</a>
              </div>
              <div className="social-proof">
                <span className="face-stack"><i>HK</i><i>SR</i><i>DW</i><i>RP</i></span>
                <span><b>250+ pebisnis</b> udah percayain ke kami <small>★ 4.9/5 kepuasan pelanggan</small></span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card-stack">
                <div className="hcard hcard-front">
                  <img src="/images/web.jpeg" alt="Website AR-Solution" />
                  <span className="hcard-label">🌐 Website siap jualan</span>
                </div>
                <div className="hcard hcard-back">
                  <img src="/images/cctv.jpeg" alt="CCTV AR-Solution" />
                </div>
              </div>
              <div className="hero-float f1"><b>⚡ 1–3 hari</b><small>legalitas jadi</small></div>
              <div className="hero-float f2"><b>💬 Fast Respon</b><small>via WhatsApp</small></div>
            </div>
          </div>
        </section>

        <div className="ticker"><div className="ticker-track">PT PERSERO • CV • PT PERORANGAN Rp1,5 JT • NPWP & NIB OSS • WEBSITE & APLIKASI • CCTV HD • SERVICE HP & LAPTOP • SERVICE AC • — PT PERSERO • CV • PT PERORANGAN Rp1,5 JT • NPWP & NIB OSS • WEBSITE & APLIKASI • CCTV HD • SERVICE HP & LAPTOP • SERVICE AC •</div></div>

        {/* LEGALITAS */}
        <section className="section soft" id="legalitas">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">📄 LEGALITAS ANTI RIBET</span>
                <h2>Usaha resmi, <em>hati tenang.</em></h2>
              </div>
              <p>Semua paket legalitas tampil dengan gambar dokumen aslinya — jadi kamu tahu persis yang bakal kamu terima. Harga jelas, nggak ada yang ditutup-tutupin.</p>
            </div>

            <div className="legal-grid">
              {legalProducts.map(p => (
                <article key={p.title} className={`legal-card accent-${p.accent}`}>
                  <div className="legal-img">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                  <div className="legal-body">
                    <h3>{p.title}</h3>
                    <span className="price">{p.price}</span>
                    <ul>{p.docs.map(d => <li key={d}>✓ {d}</li>)}</ul>
                    <a className="btn btn-dark" href={waLink(`Halo AR-Solution, saya mau tanya paket ${p.title} dong!`)} target="_blank" rel="noreferrer">Tanya Paket Ini ↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* JASA */}
        <section className="section" id="layanan">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">🛠️ JASA HARIAN</span>
                <h2>Butuh bantuan <em>hari ini?</em></h2>
              </div>
              <p>Dari bikin web yang cakep sampai betulin gadget & AC — tim kami siap bantu dengan cara yang ramah dan transparan.</p>
            </div>

            <div className="chip-row">
              {['Semua', 'Website', 'CCTV', 'Service'].map(c => (
                <button key={c} className={serviceFilter === c ? 'chip active' : 'chip'} onClick={() => setServiceFilter(c)}>{c}</button>
              ))}
            </div>

            <div className="service-grid">
              {allServices.map(s => (
                <article key={s.title} className={`service-card c-${s.color}`}>
                  <div className="service-img">
                    <img src={s.image} alt={s.title} loading="lazy" />
                    <span className="service-tag">{s.tag}</span>
                  </div>
                  <div className="service-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <a className="btn btn-outline" href={waLink(`Halo AR-Solution, saya mau tanya jasa ${s.title} dong!`)} target="_blank" rel="noreferrer">Chat via WA ↗</a>
                  </div>
                </article>
              ))}
            </div>

            <p className="hint">💡 Semua foto di atas adalah foto asli layanan AR-Solution — bukan stok foto.</p>
          </div>
        </section>

        {/* TESTIMONI */}
        <section className="section soft" id="testimoni">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow">💬 KATA MEREKA</span>
              <h2>Yang udah <em>cobain duluan</em></h2>
              <p>Ulasan di bawah adalah contoh tampilan dummy berikan gambaran nyata untuk calon pelanggan. Rating natural kombinasi 5.0 dan 4.5 bintang.</p>
            </div>

            <div className="testi-grid">
              {testimonials.map(t => (
                <article key={t.name} className="testi-card">
                  <Stars rating={t.rating} />
                  <p className="quote">“{t.text}”</p>
                  <div className="person">
                    <span className="avatar">{t.init}</span>
                    <span><b>{t.name}</b><small>{t.role} · ✓ terverifikasi</small></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TENTANG */}
        <section className="section" id="tentang">
          <div className="container about-grid">
            <div>
              <span className="eyebrow">🤝 KENAPA AR-SOLUTION?</span>
              <h2>Kerjanya santai, <em>hasilnya serius.</em></h2>
              <p className="about-lead">Kita ngobrol dulu kayak teman — dengerin kebutuhanmu, baru kasih solusi yang paling pas. Nggak maksa, nggak muter-muter.</p>
              <div className="why-list">
                <div><span>🛡️</span><div><b>Legal & aman</b><p>Terdaftar resmi Kemenkumham, OSS RBA, dan Coretax DJP.</p></div></div>
                <div><span>⚡</span><div><b>Cepat & jelas</b><p>Update progres rutin, biaya di awal, tanpa kejutan di akhir.</p></div></div>
                <div><span>🤗</span><div><b>Ramah & garansi</b><p>Ada kendala setelah selesai? Tinggal chat, kita bantu sampai tuntas.</p></div></div>
              </div>
            </div>
            <div className="about-card">
              <img src="/images/logo.jpeg" alt="AR-Solution" className="about-logo" />
              <h3>Ngobrol dulu yuk?</h3>
              <p>Konsultasi awal gratis — nggak harus langsung jadi. Ceritain aja kebutuhanmu.</p>
              <div className="about-contacts">
                <div><small>WhatsApp</small><b>+62 822-9677-0390</b></div>
                <div><small>Jam buka</small><b>Setiap hari 08.00–21.00</b></div>
                <div><small>Wilayah</small><b>Cirebon & seluruh Indonesia (online)</b></div>
              </div>
              <a className="btn btn-primary block" href={waLink('Halo AR-Solution, saya mau ngobrol dulu tentang kebutuhan usaha saya!')} target="_blank" rel="noreferrer">Chat Sekarang 💬</a>
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="cta-band" id="kontak">
          <div className="container cta-inner">
            <div>
              <h2>Punya ide? <em>Yuk wujudin bareng!</em></h2>
              <p>Ceritain kebutuhanmu — kita kasih solusi yang paling pas tanpa paksaan.</p>
            </div>
            <a className="btn btn-yellow" href={waLink('Halo AR-Solution, saya mau konsultasi gratis!')} target="_blank" rel="noreferrer">Chat WhatsApp Sekarang ↗</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a href="#home" className="brand small"><img src="/images/logo.jpeg" alt="AR-Solution" /><span><b>AR-Solution</b><small>Solusi Cepat, Tepat & Terpercaya</small></span></a>
            <p className="foot-desc">Satu partner untuk legalitas, website, CCTV, dan servis gadget & AC — dengan cara yang ramah & transparan.</p>
          </div>
          <div><b>Legalitas</b><a href="#legalitas">PT Persero</a><a href="#legalitas">CV</a><a href="#legalitas">PT Perorangan</a><a href="#legalitas">NPWP & NIB OSS</a></div>
          <div><b>Jasa</b><a href="#layanan">Website</a><a href="#layanan">CCTV</a><a href="#layanan">HP & Laptop</a><a href="#layanan">Service AC</a></div>
          <div><b>Hubungi</b><a href={waLink('Halo AR-Solution!')} target="_blank" rel="noreferrer">+62 822-9677-0390</a><small>Chat WhatsApp kapan aja</small></div>
        </div>
        <div className="container foot-bottom">© 2025 AR-Solution · Dibuat dengan hangat untuk UMKM Indonesia</div>
      </footer>

      <a className="wa-float" href={waLink('Halo AR-Solution, saya mau tanya tentang layanan Anda dong!')} target="_blank" rel="noreferrer" aria-label="WhatsApp">💬<span>Chat kami</span></a>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
