import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout.jsx'
import BandsPortfolio from '../../components/BandsPortfolio.jsx'

const BANDS = [
  {
    to: '/en/bands/big-percussion',
    img: '/images/big-percussion.jpg',
    alt: 'Big percussion',
    title: 'Big percussion',
    description: 'Depending on your needs, you can book different group sizes. Up to 20 players.',
    buttonText: 'Read more',
  },
  {
    to: '/en/bands/small-percussion',
    img: '/images/small-percussion.jpg',
    alt: 'Small percussion',
    title: 'Small percussion',
    description: 'Between 4 and 8 players.',
    buttonText: 'Read more',
  },
  {
    to: '/en/bands/percussion-with-bands',
    img: '/images/percussion-with-bands.JPG',
    alt: 'Percussion with bands',
    title: 'Percussion with bands',
    description: 'We work with different Brazilian singers.',
    buttonText: 'Read more',
  },
  {
    to: '/en/bands/special-performances',
    img: '/images/special-performances.jpg',
    alt: 'Special performances',
    title: 'Special performances',
    description: 'Festivals, concerts, gala, openings, sporting events, parades...',
    buttonText: 'Read more',
  },
  {
    to: '/en/bands/duo-trio',
    img: '/images/duo-trio.jpg',
    alt: 'Duo / Trio for events',
    title: 'Duo / Trio for events',
    description: 'Bossa Nova, Samba, International: Renato Pantera, singer from Bloco Explosão.',
    buttonText: 'Read more',
  },
  {
    to: '/en/bands/group-leaders',
    img: '/images/thumbnails/group-leaders-thumb.jpg',
    alt: 'Group leaders',
    title: 'Group leaders',
    description: 'The groups and workshops are led by Volker Conrath and VVolf Oliveira.',
    buttonText: 'Read more',
  },
]

export default function Home() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://opensheet.elk.sh/1dGxKu34AyicDELP3l9y60eZRdHEkhauAIAiDJTEsgi0/news')
      .then(r => r.json())
      .then(data => setNews(data))
      .catch(() => {})
  }, [])

  return (
    <Layout lang="en">
      <section id="main" className="first-main">
        <div className="container">
          <div className="row">
            <div className="col-8 col-12-medium">
              <article className="box post">
                <a href="#1" className="image featured">
                  <img src="/images/home.jpg" alt="Rehearsal at Tempelhofer Feld, Berlin" />
                </a>
                <header id="1">
                  <h2>Welcome!</h2>
                </header>
                <p>
                  But proper Samba only comes from Rio, doesn't it? That may be so, but original Berlin Samba only
                  comes from Berlin, attractively complimented by Funk, Reggae and Pop. 'Bloco Explosão' is a 3 times
                  prizewinner at the famous 'Berlin Karneval der Kulturen', and plays at festivals, concerts and sport
                  events. Book us now for your event!
                </p>
                <p>
                  On our site you will find good music, a band for your event, a group to play along with as well as
                  a trip to Brazil, in short, everything related to Brazilian joie de vivre and good atmosphere.
                </p>
                <p>
                  Bloco Explosão is the fiery Samba-Percussion formation with music and dance-loving people from
                  Berlin and around the world. Bloco Explosão stands with its colours red and yellow for joie de
                  vivre, light, sun, but also for fire and explosiveness.
                </p>
                <p>
                  Bloco Explosão formed for the first time in 1998 on the occasion of the Karneval der Kulturen in
                  Berlin and has been participating every year since then.
                </p>
                <p>
                  In 2003, 2012 and again in 2019 we were among the prize winners at the Karneval der Kulturen in
                  Berlin (over 100 participating groups). In 2006 we were part of the ceremony for the Football World
                  Cup in Germany.
                </p>
                <p>
                  At the Karneval der Kulturen we play with up to 70 drummers, our own large dance formations and
                  many other guests, making us one of the largest formations.
                </p>
              </article>
            </div>

            <div className="col-4 col-12-medium">
              <section className="box portfolio">
                <Link to="/en/news" className="image featured">
                  <img src="/images/rehearsal-tempelhofer-feld.jpg" alt="Group of six percussionists with instruments in the grass" />
                </Link>
                <header>
                  {news[0] && <h3>{news[0].title}</h3>}
                </header>
                {news[0] && <p>{news[0].description}</p>}
                <footer>
                  <Link to="/en/news" className="button alt">Learn more</Link>
                </footer>
              </section>

            </div>
          </div>
        </div>
      </section>

      <section id="main">
        <div id="bands-projects" className="container">
          <div className="row">
            <BandsPortfolio title="Bands &amp; Projects" bands={BANDS} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
