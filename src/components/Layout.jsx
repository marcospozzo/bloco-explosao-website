import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer.jsx'
import BackToTop from './BackToTop.jsx'

export default function Layout({ children, lang = 'de' }) {
  const [navOpen, setNavOpen] = useState(false)
  const isDE = lang === 'de'

  useEffect(() => {
    document.body.classList.remove('is-preload')
    return () => {
      document.body.classList.remove('navPanel-visible')
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('navPanel-visible', navOpen)
  }, [navOpen])

  function toggleNav(e) {
    e.preventDefault()
    setNavOpen(o => !o)
  }

  function closeNav() {
    setNavOpen(false)
  }

  return (
    <>
      <BackToTop />
      <div id="titleBar">
        <a className="toggle" href="#navPanel" onClick={toggleNav}></a>
      </div>

      <nav id="navPanel">
        {isDE ? (
          <>
            <Link to="/" className="link depth-0" onClick={closeNav}>Home</Link>
            <a href="/#bands-projects" className="link depth-0" onClick={closeNav}>Bands / Projekte</a>
            <Link to="/bands-projekte/grosse-formation" className="link" onClick={closeNav}><span className="indent-1"></span>Große Formation</Link>
            <Link to="/bands-projekte/kleine-formationen" className="link" onClick={closeNav}><span className="indent-1"></span>Kleine Formationen</Link>
            <Link to="/bands-projekte/formation-mit-band-und-saenger" className="link" onClick={closeNav}><span className="indent-1"></span>Formation mit Band &amp; Sänger</Link>
            <Link to="/bands-projekte/spezielle-arrangements" className="link" onClick={closeNav}><span className="indent-1"></span>Spezielle Arrangements</Link>
            <Link to="/bands-projekte/duo-trio" className="link" onClick={closeNav}><span className="indent-1"></span>Duo / Trio für Shows</Link>
            <Link to="/bands-projekte/gruppenleiter" className="link" onClick={closeNav}><span className="indent-1"></span>Gruppenleiter</Link>
            <Link to="/bands-projekte/brasilien" className="link" onClick={closeNav}><span className="indent-1"></span>Reise nach Brasilien</Link>
            <Link to="/unterricht-workshops" className="link depth-0" onClick={closeNav}>Unterricht / Workshops</Link>
            <Link to="/medien" className="link depth-0" onClick={closeNav}>Medien</Link>
            <Link to="/medien#photos" className="link" onClick={closeNav}><span className="indent-1"></span>Photos</Link>
            <Link to="/medien#videos" className="link" onClick={closeNav}><span className="indent-1"></span>Videos</Link>
            <Link to="/medien#cds" className="link" onClick={closeNav}><span className="indent-1"></span>CDs</Link>
            <Link to="/referenzen" className="link depth-0" onClick={closeNav}>Referenzen</Link>
            <span className="link depth-0">Links</span>
            <a href="https://sites.google.com/view/wwwbahiaconnectionde" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>Bahia Connection</a>
            <a href="https://fogodosamba.de" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>Fogo Do Samba</a>
            <a href="https://sapucaiu.de" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>Sapucaiu No Samba</a>
            <a href="https://olodum.com.br" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>Olodum</a>
            <a href="https://musikfabrik.berlin" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>MusikFabrik</a>
            <a href="https://www.kalango.com/de" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>Kalango</a>
            <a href="#footer" className="link depth-0" onClick={closeNav}>Kontakt / Buchung</a>
            <Link to="/en" className="link depth-0" onClick={closeNav}>EN</Link>
          </>
        ) : (
          <>
            <Link to="/en" className="link depth-0" onClick={closeNav}>Home</Link>
            <a href="/en#bands-projects" className="link depth-0" onClick={closeNav}>Bands / Projects</a>
            <Link to="/en/bands/big-percussion" className="link" onClick={closeNav}><span className="indent-1"></span>Big percussion</Link>
            <Link to="/en/bands/small-percussion" className="link" onClick={closeNav}><span className="indent-1"></span>Small percussion</Link>
            <Link to="/en/bands/percussion-with-bands" className="link" onClick={closeNav}><span className="indent-1"></span>Percussion with bands</Link>
            <Link to="/en/bands/special-performances" className="link" onClick={closeNav}><span className="indent-1"></span>Special performances</Link>
            <Link to="/en/bands/duo-trio" className="link" onClick={closeNav}><span className="indent-1"></span>Duo / Trio for events</Link>
            <Link to="/en/bands/group-leaders" className="link" onClick={closeNav}><span className="indent-1"></span>Group leaders</Link>
            <Link to="/en/bands/trip-to-brazil" className="link" onClick={closeNav}><span className="indent-1"></span>Trip to Brazil</Link>
            <Link to="/en/lessons-workshops" className="link depth-0" onClick={closeNav}>Lessons / Workshops</Link>
            <Link to="/en/media" className="link depth-0" onClick={closeNav}>Media</Link>
            <Link to="/en/media#photos" className="link" onClick={closeNav}><span className="indent-1"></span>Photos</Link>
            <Link to="/en/media#videos" className="link" onClick={closeNav}><span className="indent-1"></span>Videos</Link>
            <Link to="/en/media#cds" className="link" onClick={closeNav}><span className="indent-1"></span>CDs</Link>
            <Link to="/en/appearances" className="link depth-0" onClick={closeNav}>Appearances</Link>
            <span className="link depth-0">Links</span>
            <a href="https://sites.google.com/view/wwwbahiaconnectionde" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>Bahia Connection</a>
            <a href="https://fogodosamba.de" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>Fogo Do Samba</a>
            <a href="https://sapucaiu.de" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>Sapucaiu No Samba</a>
            <a href="https://olodum.com.br" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>Olodum</a>
            <a href="https://musikfabrik.berlin" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>MusikFabrik</a>
            <a href="https://www.kalango.com/de" className="link" target="_blank" rel="noopener" onClick={closeNav}><span className="indent-1"></span>Kalango</a>
            <a href="#footer" className="link depth-0" onClick={closeNav}>Contact / Booking</a>
            <Link to="/" className="link depth-0" onClick={closeNav}>DE</Link>
          </>
        )}
      </nav>

      <div id="page-wrapper" onClick={() => navOpen && setNavOpen(false)}>
        <section id="header">
          <Link to={isDE ? '/' : '/en'} className="logo">
            <img src="/images/logo.png" alt="Bloco Explosao logo" />
          </Link>
          <h5>Afro-Brasil percussion from Berlin</h5>
          <nav id="nav">
            <ul>
              {isDE ? (
                <>
                  <li><Link to="/">Home</Link></li>
                  <li>
                    <a href="/#bands-projects">Bands / Projekte</a>
                    <ul>
                      <li><Link to="/bands-projekte/grosse-formation">Große Formation</Link></li>
                      <li><Link to="/bands-projekte/kleine-formationen">Kleine Formationen</Link></li>
                      <li><Link to="/bands-projekte/formation-mit-band-und-saenger">Formation mit Band &amp; Sänger</Link></li>
                      <li><Link to="/bands-projekte/spezielle-arrangements">Spezielle Arrangements</Link></li>
                      <li><Link to="/bands-projekte/duo-trio">Duo / Trio für Shows</Link></li>
                      <li><Link to="/bands-projekte/gruppenleiter">Gruppenleiter</Link></li>
                      <li><Link to="/bands-projekte/brasilien">Reise nach Brasilien</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/unterricht-workshops">Unterricht / Workshops</Link></li>
                  <li>
                    <Link to="/medien">Medien</Link>
                    <ul>
                      <li><Link to="/medien#photos">Photos</Link></li>
                      <li><Link to="/medien#videos">Videos</Link></li>
                      <li><Link to="/medien#cds">CDs</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/referenzen">Referenzen</Link></li>
                  <li>
                    <a href="#">Links</a>
                    <ul>
                      <li><a href="https://sites.google.com/view/wwwbahiaconnectionde" rel="noopener" target="_blank">Bahia Connection</a></li>
                      <li><a href="https://fogodosamba.de" rel="noopener" target="_blank">Fogo Do Samba</a></li>
                      <li><a href="https://sapucaiu.de" rel="noopener" target="_blank">Sapucaiu No Samba</a></li>
                      <li><a href="https://olodum.com.br" rel="noopener" target="_blank">Olodum</a></li>
                      <li><a href="https://musikfabrik.berlin" rel="noopener" target="_blank">MusikFabrik</a></li>
                      <li><a href="https://www.kalango.com/de" rel="noopener" target="_blank">Kalango</a></li>
                    </ul>
                  </li>
                  <li><a href="#footer">Kontakt / Buchung</a></li>
                  <li className="important">
                    <a href="#">DE</a>
                    <ul>
                      <li><Link to="/en">EN</Link></li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/en">Home</Link></li>
                  <li>
                    <a href="/en#bands-projects">Bands / Projects</a>
                    <ul>
                      <li><Link to="/en/bands/big-percussion">Big percussion</Link></li>
                      <li><Link to="/en/bands/small-percussion">Small percussion</Link></li>
                      <li><Link to="/en/bands/percussion-with-bands">Percussion with bands</Link></li>
                      <li><Link to="/en/bands/special-performances">Special performances</Link></li>
                      <li><Link to="/en/bands/duo-trio">Duo / Trio for events</Link></li>
                      <li><Link to="/en/bands/group-leaders">Group leaders</Link></li>
                      <li><Link to="/en/bands/trip-to-brazil">Trip to Brazil</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/en/lessons-workshops">Lessons / Workshops</Link></li>
                  <li>
                    <Link to="/en/media">Media</Link>
                    <ul>
                      <li><Link to="/en/media#photos">Photos</Link></li>
                      <li><Link to="/en/media#videos">Videos</Link></li>
                      <li><Link to="/en/media#cds">CDs</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/en/appearances">Appearances</Link></li>
                  <li>
                    <a href="#">Links</a>
                    <ul>
                      <li><a href="https://sites.google.com/view/wwwbahiaconnectionde" rel="noopener" target="_blank">Bahia Connection</a></li>
                      <li><a href="https://fogodosamba.de" rel="noopener" target="_blank">Fogo Do Samba</a></li>
                      <li><a href="https://sapucaiu.de" rel="noopener" target="_blank">Sapucaiu No Samba</a></li>
                      <li><a href="https://olodum.com.br" rel="noopener" target="_blank">Olodum</a></li>
                      <li><a href="https://musikfabrik.berlin" rel="noopener" target="_blank">MusikFabrik</a></li>
                      <li><a href="https://www.kalango.com/de" rel="noopener" target="_blank">Kalango</a></li>
                    </ul>
                  </li>
                  <li><a href="#footer">Contact / Booking</a></li>
                  <li className="important">
                    <a href="#">EN</a>
                    <ul>
                      <li><Link to="/">DE</Link></li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </section>
        {children}
        <Footer lang={lang} />
      </div>
    </>
  )
}
