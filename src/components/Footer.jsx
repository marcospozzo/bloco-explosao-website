import { Link } from 'react-router-dom'
import ContactForm from './ContactForm.jsx'

export default function Footer({ lang = 'de' }) {
  const isDE = lang === 'de'
  return (
    <section id="footer">
      <div className="container">
        <div className="row row-footer">
          <div className="col-12">
            <ContactForm lang={lang} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div id="copyright" className="contact-form">
              <ul className="links">
                <li>
                  <Link to="/impressum">&copy; 2026 Volker Conrath</Link>
                </li>
                <li>
                  {isDE ? 'Website von' : 'Website by'}{' '}
                  <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/marcospozzo/">Marcos Pozzo</a>
                </li>
                <li>Design by Lutz Wallroth &amp; Celeste Vagas</li>
                <li>
                  <a href="https://facebook.com/BlocoExplosaoPerc" className="icon brands fa-facebook" rel="noopener" target="_blank"></a>
                  {' '}
                  <a href="https://youtube.com/user/blocoexplosao" className="icon brands fa-youtube" rel="noopener" target="_blank"></a>
                  {' '}
                  <a href="https://soundcloud.com/blocoexplosao" className="icon brands fa-soundcloud" rel="noopener" target="_blank"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
