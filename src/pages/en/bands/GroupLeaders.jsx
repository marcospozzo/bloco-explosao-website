import Layout from '../../../components/Layout.jsx'
import BandsPortfolio from '../../../components/BandsPortfolio.jsx'

const BANDS = [
  { to: '/en/bands/big-percussion', img: '/images/big-percussion.jpg', alt: 'big percussion ensemble performing in the streets', title: 'Big percussion', description: 'Depending on your needs, you can book different group sizes. Up to 20 players.', buttonText: 'Read more' },
  { to: '/en/bands/small-percussion', img: '/images/small-percussion.jpg', alt: 'small percussion ensemble posing in front of the Humboldt Forum', title: 'Small percussion', description: 'Between 4 and 8 players.', buttonText: 'Read more' },
  { to: '/en/bands/percussion-with-bands', img: '/images/percussion-with-bands.JPG', alt: 'medium size percussion ensemble performing together with a band', title: 'Percussion with bands', description: 'We work with different Brazilian singers.', buttonText: 'Read more' },
  { to: '/en/bands/special-performances', img: '/images/special-performances.jpg', alt: 'singer-guitarist performing with a percussion group playing behind him', title: 'Special performances', description: 'Festivals, concerts, gala, openings, product presentations, sporting events, parades, demonstrations, district festivals, summer festivals, weddings, parties...', buttonText: 'Read more' },
  { to: '/en/bands/duo-trio', img: '/images/duo-trio.jpg', alt: 'percussion duo performing at night', title: 'Duo / Trio for events', description: 'Bossa Nova, Samba, International: Renato Pantera, singer from Bloco Explosão, comes from the Portela Samba School in Rio de Janeiro.', buttonText: 'Read more' },
]

export default function GroupLeaders() {
  return (
    <Layout lang="en">
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Group Leaders</h2>
                </header>
                <div className="row leaders">
                  <div className="col-12-small">
                    <section className="box leader">
                      <div className="profile-box">
                        <img src="/images/volker-profile-picture.jpg" alt="Volker profile picture" />
                        <h3>Volker Conrath</h3>
                        <p>Percussionist, initiator and leader.</p>
                      </div>
                      <div>
                        <header>
                          <h3>A life in music</h3>
                        </header>
                        <p>
                          Volker Conrath has been involved with percussion since 1976; first with African and
                          Afro-Cuban, since 1984 with Brazilian percussion. He lived in Brazil for over three years
                          and organizes <a href="/en/bands/trip-to-brazil">trips</a> for people interested in Brazil
                          (brasilophiles). He regularly plays with various Afro-Blocos at Carnival in Salvador.
                          Volker organizes the offers of the music of Bahia at the{' '}
                          <a rel="noopener" target="_blank" href="https://landesmusikakademie-berlin.de/samba-syndrom/">Samba Syndrome</a>{' '}
                          in Berlin (largest workshop festival in Europe). Among other things, the master class with
                          lecturers from Olodum, Ilê Aiyê, Muzenza...
                        </p>
                        <p>
                          He specializes in the rhythms of these blocos and passes them on in workshops. In 2013 he
                          founded the{' '}
                          <a rel="noopener" target="_blank" href="https://sites.google.com/view/wwwbahiaconnectionde">Bahia Connection</a>{' '}
                          with the aim of giving the samba-reggae groups in Germany a common musical language.
                          Information and arrangements of selected original rhythms of the Afro Blocos from Bahia
                          are provided. The members learn these arrangements and are therefore able to play together
                          across groups. The Bahia Connection is now also available in France, Holland and
                          Switzerland. BC members have played together at various festivals since 2015. Since 2015
                          (always in January / February) there have been workshop meetings of the BC in Salvador da
                          Bahia every year. In Germany, the BC organizes regular meetings and workshops where we
                          play the music of the Afro Blocos together. BC is open to anyone who plays Bahian music.
                        </p>
                      </div>
                    </section>
                  </div>
                  <div className="col-12-small">
                    <section className="box leader two">
                      <div className="profile-box">
                        <img src="/images/VVolf_Oliveira_00.jpg" alt="VVolf profile picture" />
                        <h3>VVolf Oliveira</h3>
                        <p>Percussionist, singer, pianist and co-leader.</p>
                      </div>
                      <div>
                        <p>
                          He is already in his early years, as a dancer in the group Afoxé Loni (direction Dudu
                          Tucci), came into contact with Afro-Brazilian music. First own He gained percussion
                          experience at the Carnival of Cultures 2008 with Bloco Explosão. Since then he has been a
                          permanent member. He has also been a member of the Berlin percussion band Terra Brasilis.
                          In 2016 he played with Bloco for the first time Explosão and band on stage. He composes
                          and writes his own songs and plays keyboard. He has been the co-director of Bloco Explosão
                          since 2019.
                        </p>
                        <p>Teachers:</p>
                        <ul>
                          <li>Volker Conrath (Bloco Explosão)</li>
                          <li>Manni Spaniol (Terra Brasilis)</li>
                          <li>Mestre Memeu Nunes (Olodum)</li>
                          <li>Mestre Marivaldo Paim (Ilê Aiyê)</li>
                          <li>Mestre Mario Pam (Ilê Aiyê)</li>
                          <li>Mestre César Veloso (Malê Debalê)</li>
                          <li>Mestre Mario Bomba (Muzenza)</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </div>
            <BandsPortfolio title="Bands / Projects" bands={BANDS} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
