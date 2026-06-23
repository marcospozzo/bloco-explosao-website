import Layout from '../../../components/Layout.jsx'
import BandsPortfolio from '../../../components/BandsPortfolio.jsx'

const BANDS = [
  { to: '/en/bands/big-percussion', img: '/images/big-percussion.jpg', alt: 'big percussion ensemble performing in the streets', title: 'Big percussion', description: 'Depending on your needs, you can book different group sizes. Up to 20 players.', buttonText: 'Read more' },
  { to: '/en/bands/percussion-with-bands', img: '/images/percussion-with-bands.JPG', alt: 'medium size percussion ensemble performing together with a band', title: 'Percussion with bands', description: 'We work with different Brazilian singers.', buttonText: 'Read more' },
  { to: '/en/bands/special-performances', img: '/images/special-performances.jpg', alt: 'singer-guitarist performing with a percussion group playing behind him', title: 'Special performances', description: 'Festivals, concerts, gala, openings, product presentations, sporting events, parades, demonstrations, district festivals, summer festivals, weddings, parties...', buttonText: 'Read more' },
  { to: '/en/bands/duo-trio', img: '/images/duo-trio.jpg', alt: 'percussion duo performing at night', title: 'Duo / Trio for events', description: 'Bossa Nova, Samba, International: Renato Pantera, singer from Bloco Explosão, comes from the Portela Samba School in Rio de Janeiro.', buttonText: 'Read more' },
  { to: '/en/bands/group-leaders', img: '/images/thumbnails/group-leaders-thumb.jpg', alt: 'Volker and VVolf profile pictures', title: 'Group Leaders', description: 'The groups and workshops are led by the musicians Volker Conrath and VVolf Oliveira.', buttonText: 'Read more' },
]

const ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'

export default function SmallPercussion() {
  return (
    <Layout lang="en">
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Small percussion</h2>
                </header>
                <div className="row">
                  <div className="col-12">
                    <section className="box">
                      <a href="#1" className="image featured">
                        <img src="/images/small-percussion.jpg" alt="small percussion ensemble posing in front of the Humboldt Forum" />
                      </a>
                      <header id="1">
                        <h3>Small percussion</h3>
                      </header>
                      <p>Between 4 and 8 players.</p>
                      <div className="video-iframe">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/gRxg2Xea3Tk" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </div>
            <BandsPortfolio title="More Bands / Projects" bands={BANDS} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
