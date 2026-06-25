import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout.jsx'
import BandsPortfolio from '../../components/BandsPortfolio.jsx'

const BANDS = [
  {
    to: '/bands-projekte/grosse-formation',
    img: '/images/big-percussion.jpg',
    alt: 'Große Formation',
    title: 'Große Formation',
    description: 'Unsere große Samba-Percussion-Formation mit bis zu 70 Trommlern für Karneval und Großveranstaltungen.',
    buttonText: 'Mehr erfahren',
  },
  {
    to: '/bands-projekte/kleine-formationen',
    img: '/images/small-percussion.jpg',
    alt: 'Kleine Formationen',
    title: 'Kleine Formationen',
    description: 'Flexible kleinere Gruppen für Firmenevents, Hochzeiten und andere Veranstaltungen.',
    buttonText: 'Mehr erfahren',
  },
  {
    to: '/bands-projekte/formation-mit-band-und-saenger',
    img: '/images/percussion-with-bands.JPG',
    alt: 'Formation mit Band & Sänger',
    title: 'Formation mit Band & Sänger',
    description: 'Percussion-Formation kombiniert mit Live-Band und Sängern für eine vollständige Show.',
    buttonText: 'Mehr erfahren',
  },
  {
    to: '/bands-projekte/spezielle-arrangements',
    img: '/images/special-performances.jpg',
    alt: 'Spezielle Arrangements',
    title: 'Spezielle Arrangements',
    description: 'Maßgeschneiderte Arrangements für besondere Anlässe und spezielle Anforderungen.',
    buttonText: 'Mehr erfahren',
  },
  {
    to: '/bands-projekte/duo-trio',
    img: '/images/duo-trio.jpg',
    alt: 'Duo / Trio für Shows',
    title: 'Duo / Trio für Shows',
    description: 'Kompakte Besetzung für kleinere Events, perfekt für Straßenperformances und private Feiern.',
    buttonText: 'Mehr erfahren',
  },
  {
    to: '/bands-projekte/gruppenleiter',
    img: '/images/thumbnails/group-leaders-thumb.jpg',
    alt: 'Gruppenleiter',
    title: 'Gruppenleiter',
    description: 'Professionelle Gruppenleiter für Workshops, Teambuilding und Unterricht.',
    buttonText: 'Mehr erfahren',
  },
]

export default function Home() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://opensheet.elk.sh/1dGxKu34AyicDELP3l9y60eZRdHEkhauAIAiDJTEsgi0/news-de')
      .then(r => r.json())
      .then(data => setNews(data))
      .catch(() => {})
  }, [])

  return (
    <Layout lang="de">
      <section id="main" className="first-main">
        <div className="container">
          <div className="row">
            <div className="col-8 col-12-medium">
              <article className="box post">
                <a href="#1" className="image featured">
                  <img src="/images/home.jpg" alt="Probe im Tempelhofer Feld, Berlin" />
                </a>
                <header id="1">
                  <h2>Herzlich willkommen!</h2>
                </header>
                <p>
                  Richtigen Samba gibt's nur in Brasilien? Mag sein. Aber Original Berliner Samba vom dreimaligen
                  Preisträger beim Karneval der Kulturen in Berlin gibt es eben nur in Berlin - und bei uns heißt das:
                  gut angereichert mit Funk, Reggae, Pop oder Hip Hop...
                </p>
                <p>
                  Auf unserer Seite finden sie gute Musik, eine Band für ihren Event, eine Gruppe zum mitspielen
                  sowie das Angebot einer Brasilienreise, also alles, was mit brasilianischer Lebensfreude und guter
                  Stimmung zu tun hat.
                </p>
                <h3>Eine Trommel kommt selten allein...</h3>
                <p>
                  Bloco Explosão, das ist die feurige Samba-Percussion-Formation mit spiel- und tanzfreudigen Menschen
                  aus Berlin und dem Rest der Welt. Bloco Explosão steht mit seinen Farben rot und gelb für
                  Lebensfreude, Licht, Sonne, aber auch für Feuer und Explosivität.
                </p>
                <p>
                  Der Bloco Explosão formierte sich erstmals 1998 anlässlich des Karnevals der Kulturen in Berlin und
                  ist seitdem jedes Jahr dabei.
                </p>
                <p>
                  2003, 2012 und erneut 2019 gehörten wir zu den Preisträgern beim Karneval der Kulturen in Berlin
                  (über 100 teilnehmende Gruppen). 2006 waren wir Teil der Zeremonie für die Fußball WM in Deutschland.
                </p>
                <p>
                  Beim Karneval der Kulturen spielen wir mit bis zu 70 Trommlern, einer eigenen großen
                  Tanzformationen, vielen weiteren Gästen und sind damit eine der größten Formationen.
                </p>
                <p>
                  Möchten Sie uns für einen Auftritt engagieren, können Sie unter verschiedenen Gruppengrößen wählen.
                </p>
              </article>
            </div>

            <div className="col-4 col-12-medium">
              <section className="box portfolio">
                <Link to="/nachrichten" className="image featured">
                  <img src="/images/rehearsal-tempelhofer-feld.jpg" alt="Gruppe von sechs Percussionisten mit Instrumenten im Gras" />
                </Link>
                <header>
                  {news[0] && <h3>{news[0].title}</h3>}
                </header>
                {news[0] && <p>{news[0].description}</p>}
                <footer>
                  <Link to="/nachrichten" className="button alt">Mehr erfahren</Link>
                </footer>
              </section>

            </div>
          </div>
        </div>
      </section>

      <section id="main">
        <div id="bands-projects" className="container">
          <div className="row">
            <BandsPortfolio title="Bands &amp; Projekte" bands={BANDS} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
