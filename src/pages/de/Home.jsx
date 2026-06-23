import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout.jsx'
import BandsPortfolio from '../../components/BandsPortfolio.jsx'

const BANDS = [
  {
    to: '/bands-projekte/grosse-formation',
    img: '/images/bands/big-formation.jpg',
    alt: 'Große Formation',
    title: 'Große Formation',
    description: 'Unsere große Samba-Percussion-Formation mit bis zu 70 Trommlern für Karneval und Großveranstaltungen.',
    buttonText: 'Mehr erfahren',
  },
  {
    to: '/bands-projekte/kleine-formationen',
    img: '/images/bands/small-formation.jpg',
    alt: 'Kleine Formationen',
    title: 'Kleine Formationen',
    description: 'Flexible kleinere Gruppen für Firmenevents, Hochzeiten und andere Veranstaltungen.',
    buttonText: 'Mehr erfahren',
  },
  {
    to: '/bands-projekte/formation-mit-band-und-saenger',
    img: '/images/bands/formation-with-band.jpg',
    alt: 'Formation mit Band & Sänger',
    title: 'Formation mit Band & Sänger',
    description: 'Percussion-Formation kombiniert mit Live-Band und Sängern für eine vollständige Show.',
    buttonText: 'Mehr erfahren',
  },
  {
    to: '/bands-projekte/spezielle-arrangements',
    img: '/images/bands/special-arrangements.jpg',
    alt: 'Spezielle Arrangements',
    title: 'Spezielle Arrangements',
    description: 'Maßgeschneiderte Arrangements für besondere Anlässe und spezielle Anforderungen.',
    buttonText: 'Mehr erfahren',
  },
  {
    to: '/bands-projekte/duo-trio',
    img: '/images/bands/duo-trio.jpg',
    alt: 'Duo / Trio für Shows',
    title: 'Duo / Trio für Shows',
    description: 'Kompakte Besetzung für kleinere Events, perfekt für Straßenperformances und private Feiern.',
    buttonText: 'Mehr erfahren',
  },
  {
    to: '/bands-projekte/gruppenleiter',
    img: '/images/bands/group-leaders.jpg',
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
      .then(data => setNews(data.slice(0, 3)))
      .catch(() => {})
  }, [])

  return (
    <Layout lang="de">
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-8 col-12-medium">
              <section>
                <header className="major">
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
              </section>
            </div>

            <div className="col-4 col-12-medium">
              <section>
                <header className="major">
                  <h2>Neuigkeiten</h2>
                </header>
                {news.map((item, i) => (
                  <div key={i} className="box">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
                <ul className="actions">
                  <li><Link to="/nachrichten" className="button">Mehr erfahren</Link></li>
                </ul>
              </section>

              <section>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBlocoExplosaoPerc&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="500"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Page"
                ></iframe>
              </section>
            </div>

            <BandsPortfolio
              title="Bands &amp; Projekte"
              bands={BANDS}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
