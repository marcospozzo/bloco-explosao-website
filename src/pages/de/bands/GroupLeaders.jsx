import Layout from '../../../components/Layout.jsx'
import BandsPortfolio from '../../../components/BandsPortfolio.jsx'

const BANDS = [
  { to: '/bands-projekte/grosse-formation', img: '/images/big-percussion.jpg', alt: 'big percussion ensemble performing in the streets', title: 'Große Formation', description: 'Je nach Bedarf können Sie verschiedene Gruppengrößen buchen.', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/kleine-formationen', img: '/images/small-percussion.jpg', alt: 'small percussion ensemble posing in front of the Humboldt Forum', title: 'Kleine Formationen', description: 'Zwischen 4 und 8 Musikern.', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/formation-mit-band-und-saenger', img: '/images/percussion-with-bands.JPG', alt: 'medium size percussion ensemble performing together with a band', title: 'Formation mit Band & Sänger', description: 'Wir arbeiten mit verschiedenen brasilianischen Sängern zusammen.', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/spezielle-arrangements', img: '/images/special-performances.jpg', alt: 'singer-guitarist performing with a percussion group playing behind him', title: 'Spezielle Arrangements', description: 'Feste, Konzerte, Gala, Eröffnungen, Produktpräsentationen, Sportveranstaltungen, Umzüge, Vorführungen, Kreisfeste, Sommerfeste, Hochzeiten, Partys...', buttonText: 'Weiterlesen' },
  { to: '/bands-projekte/duo-trio', img: '/images/duo-trio.jpg', alt: 'percussion duo performing at night', title: 'Duo / Trio für Shows', description: 'Bossa Nova, Samba, International: Renato Pantera, singer from Bloco Explosão, comes from the Portela Samba School in Rio de Janeiro.', buttonText: 'Weiterlesen' },
]

export default function GroupLeaders() {
  return (
    <Layout lang="de">
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Gruppenleiter</h2>
                </header>
                <div className="row leaders">
                  <div className="col-12-small">
                    <section className="box leader">
                      <div className="profile-box">
                        <img src="/images/volker-profile-picture.jpg" alt="Volker profile picture" />
                        <h3>Volker Conrath</h3>
                        <p>Perkussionist, Initiator und Leiter.</p>
                      </div>
                      <div>
                        <header>
                          <h3>Ein Leben in der Musik</h3>
                        </header>
                        <p>
                          Volker Conrath beschäftigt sich seit 1976 mit Perkussion; erst mit afrikanischer und
                          afro-kubanischer, seit 1984 mit brasilianischer Perkussion. Er hat über drei Jahre in
                          Brasilien gelebt und organisiert{' '}
                          <a href="/bands-projekte/brasilien">Reisen</a> für an Brasilien interessierte
                          (brasilophile) Menschen. Er spielt regelmäßig im Karneval in Salvador mit verschiedenen
                          Afro-Blocos. Volker organisierte beim{' '}
                          <a rel="noopener" target="_blank" href="https://landesmusikakademie-berlin.de/samba-syndrom/">Samba-Syndrome</a>{' '}
                          in Berlin (größtes Workshop-Festival in Europa) die Angebote der Musik Bahias. Unter
                          anderem die Masterclass mit Dozenten von Olodum, Ilê Aiyê, Muzenza...
                        </p>
                        <p>
                          Er ist spezialisiert auf die Rhythmen dieser Blocos, und gibt diese in Workshops weiter.
                          2013 gründete er die{' '}
                          <a rel="noopener" target="_blank" href="https://bahiaconnection.de">Bahia Connection</a>{' '}
                          <a rel="noopener" target="_blank" href="https://www.facebook.com/bahiaconnection">bei Facebook</a>{' '}
                          mit dem Ziel, den Samba-Reggae Gruppen in Deutschland eine gemeinsame musikalische Sprache
                          zu geben. Infos sowie Arrangements ausgesuchter original Rhythmen der Afro Blocos aus Bahia
                          werden zur Verfügung gestellt. Die Mitglieder lernen diese Arrangements, und sind dadurch
                          in der Lage Gruppen-übergreifend zusammen zu spielen. Mittlerweile gibt es die Bahia
                          Connection auch in Frankreich, Holland und der Schweiz. Seit 2015 haben Mitglieder der BC
                          bei diversen Festivals zusammen gespielt. Seit 2015 (immer im Januar/Februar) gibt es jedes
                          Jahr Workshop-Treffen der BC in Salvador da Bahia. In Deutschland organisiert die BC
                          regelmäßige Treffen und Workshops, bei denen wir gemeinsam die Musik der Afro Blocos
                          spielen. Die BC ist offen für alle die die Musik Bahias spielen.
                        </p>
                        <p>
                          Unterricht unter anderem in/bei: Salvador da Bahia:<br />
                          Marivaldo Paim und Mario Pam von Ilê Aiyê, Memeu von Olodum; César Veloso von Malêdebalê,
                          Mario Bomba von Muzenza, Gabi Gedes (Candomblè, Terreiro do Gantois)
                        </p>
                        <p>
                          Rio de Janeiro:<br />
                          Marcos Suzano, Caboclinho, Beto Cazes, Jovi Joviniano
                        </p>
                        <p>
                          Berlin:<br />
                          Dudu Tucci (Brasil), Aja Adja (Afrika), John Santos (Latin), Uli Moritz, Reinhard Flatischler
                        </p>
                        <p>Lehrtätigkeit</p>
                        <ul>
                          <li>Landesmusikakademie Berlin; Dozent beim Samba-Syndrom; Workshops für Kinder u. Jugendliche</li>
                          <li>Deutsch Französisches Jugendwerk Genshagen</li>
                          <li>Internationale Jugendbildungsstätte Jagdschloss Glienike Berlin</li>
                          <li>Kreuzberger Musikalische Aktion</li>
                          <li>Civitas</li>
                          <li>Stiftung „Carlos Gomes" Belem/Para, Brasilien</li>
                          <li>Jugendtheatertage Potsdam</li>
                          <li>Diverse Workshops für Gruppen in ganz Deutschland</li>
                        </ul>
                        <p>Aktuelle Projekte</p>
                        <ul>
                          <li>Renato Pantera Duo/Trio</li>
                          <li>Bloco Explosão</li>
                          <li>Palpitaçoes</li>
                          <li>Bloco X</li>
                        </ul>
                        <p>Preise</p>
                        <ul>
                          <li>Musica Vitale (Criole der Werkstatt der Kulturen Berlin) 1996 mit "Vagalume" aus Potsdam</li>
                          <li>Preisträger beim Karneval der Kulturen 2003 und 2012 und 2019 mit dem "Bloco Explosão"</li>
                          <li>Jazz and Blues Award Berlin 2005 mit dem "Trio Cupuaçu"</li>
                        </ul>
                        <p>Mitwirkung auf folgenden CDs</p>
                        <ul>
                          <li>Bloco Explosão &amp; Band - 2014</li>
                          <li>Bloco Explosão, Berlin perkussiv - 2007</li>
                          <li>Trio Cupuaçu - 2003</li>
                          <li>Revista do Samba - 2002</li>
                          <li>Karneval der Kulturen Vol.2 - 2001</li>
                          <li>Jereba - 1998</li>
                          <li>Sayed Balaha - 1998</li>
                          <li>Fuzué - 1994</li>
                        </ul>
                        <p>
                          An dieser Stelle möchte ich mich bei all meinen Perkussionslehrern und musikalischen
                          Weggenossen bedanken, und meinen Respekt vor der afro-brasilianischen Kultur ausdrücken,
                          die mir viel Kraft und Lebensfreude gibt.
                        </p>
                      </div>
                    </section>
                  </div>
                  <div className="col-12-small">
                    <section className="box leader two">
                      <div className="profile-box">
                        <img src="/images/VVolf_Oliveira_00.jpg" alt="VVolf profile picture" />
                        <h3>VVolf Oliveira</h3>
                        <p>Perkussionist, Sänger, Pianist und Co-Leader.</p>
                      </div>
                      <div>
                        <p>
                          Er ist bereits in frühen Jahren, als Tänzer in der Gruppe Afoxé Loni (Leitung Dudu Tucci),
                          in Kontakt mit afro-brasilianischer Musik gekommen. Erste eigene Percussion Erfahrung
                          sammelte er beim Karneval der Kulturen 2008 mit Bloco Explosão. Seitdem ist er festes
                          Mitglied. Seit 2014 ist er ebenfalls Mitglied der Berliner Perkussion Band Terra Brasilis.
                          2016 spielte er das erste Mal mit Bloco Explosão und Band auf der Bühne. Er komponiert und
                          textet eigene Songs und spielt Keyboard. Seit 2019 ist er Ko-Leiter vom Bloco Explosão.
                        </p>
                        <p>Lehrer:</p>
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
            <BandsPortfolio title="Bands / Projekte" bands={BANDS} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
