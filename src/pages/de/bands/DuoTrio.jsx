import Layout from '../../../components/Layout.jsx'
import BandsPortfolio from '../../../components/BandsPortfolio.jsx'

const BANDS = [
  { to: '/bands-projekte/grosse-formation', img: '/images/big-percussion.jpg', alt: 'big percussion ensemble performing in the streets', title: 'Große Formation', description: 'Je nach Bedarf können Sie verschiedene Gruppengrößen buchen.', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/kleine-formationen', img: '/images/small-percussion.jpg', alt: 'small percussion ensemble posing in front of the Humboldt Forum', title: 'Kleine Formationen', description: 'Zwischen 4 und 8 Musikern.', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/formation-mit-band-und-saenger', img: '/images/percussion-with-bands.JPG', alt: 'medium size percussion ensemble performing together with a band', title: 'Formation mit Band & Sänger', description: 'Wir arbeiten mit verschiedenen brasilianischen Sängern zusammen.', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/spezielle-arrangements', img: '/images/special-performances.jpg', alt: 'singer-guitarist performing with a percussion group playing behind him', title: 'Spezielle Arrangements', description: 'Feste, Konzerte, Gala, Eröffnungen, Produktpräsentationen, Sportveranstaltungen, Umzüge, Vorführungen, Kreisfeste, Sommerfeste, Hochzeiten, Partys...', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/gruppenleiter', img: '/images/thumbnails/group-leaders-thumb.jpg', alt: 'Volker and VVolf profile pictures', title: 'Gruppenleiter', description: 'Geleitet werden die Gruppen und Workshops von den Musikern Volker Conrath und VVolf Oliveira.', buttonText: 'Weiterlesen' },
]

const ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'

export default function DuoTrio() {
  return (
    <Layout lang="de">
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Duo / Trio für Shows</h2>
                </header>
                <div className="row">
                  <div className="col-12">
                    <section className="box">
                      <a href="#1" className="image featured">
                        <img src="/images/duo-trio.jpg" alt="percussion duo performing at night" />
                      </a>
                      <header id="1">
                        <h3>Duo / Trio für Shows</h3>
                      </header>
                      <p>
                        Bossa Nova, Samba, Internationales: Renato Pantera, Sänger vom Bloco Explosão, kommt aus der
                        Sambaschule Portela in Rio de Janeiro. Unser Duo oder Trio sorgt auch auf Ihrer Veranstaltung
                        für die richtige Stimmung. Ob Konzert, Hochzeit, Geburtstag, Party, als Brasil Show mit
                        brasilianischen Tänzerinnen, die gute Laune ist garantiert. Auf Wunsch kann die Band um
                        weitere Musiker erweitert werden.
                      </p>
                      <p>Besetzung:</p>
                      <ul>
                        <li>Renato Pantera: Gesang, Gitarre, Percussion</li>
                        <li>Volker Conrath: Percussion</li>
                        <li>NN: Bass, Saxofon, Gitarre</li>
                      </ul>
                      <div className="video-iframe">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6T03Ul-umlA" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </div>
            <BandsPortfolio title="Bands / Projekte" bands={BANDS} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
