import Layout from '../../../components/Layout.jsx'
import BandsPortfolio from '../../../components/BandsPortfolio.jsx'

const BANDS = [
  { to: '/bands-projekte/grosse-formation', img: '/images/big-percussion.jpg', alt: 'big percussion ensemble performing in the streets', title: 'Große Formation', description: 'Je nach Bedarf können Sie verschiedene Gruppengrößen buchen.', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/kleine-formationen', img: '/images/small-percussion.jpg', alt: 'small percussion ensemble posing in front of the Humboldt Forum', title: 'Kleine Formationen', description: 'Zwischen 4 und 8 Musikern.', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/spezielle-arrangements', img: '/images/special-performances.jpg', alt: 'singer-guitarist performing with a percussion group playing behind him', title: 'Spezielle Arrangements', description: 'Feste, Konzerte, Gala, Eröffnungen, Produktpräsentationen, Sportveranstaltungen, Umzüge, Vorführungen, Kreisfeste, Sommerfeste, Hochzeiten, Partys...', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/duo-trio', img: '/images/duo-trio.jpg', alt: 'percussion duo performing at night', title: 'Duo / Trio für Shows', description: 'Bossa Nova, Samba, International: Renato Pantera, singer from Bloco Explosão, comes from the Portela Samba School in Rio de Janeiro.', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/gruppenleiter', img: '/images/thumbnails/group-leaders-thumb.jpg', alt: 'Volker and VVolf profile pictures', title: 'Gruppenleiter', description: 'Geleitet werden die Gruppen und Workshops von den Musikern Volker Conrath und VVolf Oliveira.', buttonText: 'Weiterlesen' },
]

const ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'

export default function FormationWithBand() {
  return (
    <Layout lang="de">
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Formation mit Band &amp; Sänger</h2>
                </header>
                <div className="row">
                  <div className="col-12">
                    <section className="box">
                      <a href="#1" className="image featured">
                        <img src="/images/percussion-with-bands.JPG" alt="medium size percussion ensemble performing together with a band" />
                      </a>
                      <header id="1">
                        <h3>Formation mit Band &amp; Sänger</h3>
                      </header>
                      <p>Wir arbeiten mit verschiedenen brasilianischen Sängern:</p>
                      <ul>
                        <li>Renato Pantera (Rio de Janeiro).</li>
                        <li>Daniel Arruda (Sao Paulo).</li>
                        <li>Zusätzliche Musiker an der Sologitarre, Saxofon + NN.</li>
                      </ul>
                      <div className="video-iframe">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qlGns1dAs3c" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nud5G0fNq_w" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HFpu3PJUBRw" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
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
