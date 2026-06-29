import Layout from '../../components/Layout.jsx'

export default function LessonsWorkshops() {
  return (
    <Layout lang="de">
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Unterricht</h2>
                </header>
                <div className="row">
                  <div className="col-12">
                    <section className="box">
                      <a href="#1" className="image featured">
                        <img src="/images/lessons.JPG" alt="" />
                      </a>
                      <header id="1">
                        <h3>Möchtest du bei uns Mitspielen?</h3>
                      </header>
                      <p>
                        Unsere Gruppe ist offen für alle Musik-begeisterte. Wir bieten regelmäßige Kurse und Workshops
                        an.
                        <br />
                        Kommt vorbei, das erste Mal ist es kostenlos, zum schnuppern. Instrumente und Sticks sind
                        vorhanden.
                        <br />
                        Wir bieten regelmäßig Einführungsworkshop an.
                      </p>
                      <p>Einsteiger-Kurs: jeden Dienstag von 20 - 22h. Bei Interesse bitte melden.</p>
                      <p>
                        Vom rhythmisch begabten Anfänger bis hin zum erfahrenen Trommel-begeisterten sind alle
                        willkommen. Spaß und Auftritte sind garantiert. Kommt vorbei!
                        <br />
                        Entspannt und mit viel Spaß, werden wir in die Rhythmen und Techniken der Musik der Afro Blocos
                        aus Salvador da Bahia einsteigen.
                      </p>
                      <p>
                        Dienstag, von 18 - 20 Uhr proben die Fortgeschrittenen. Dort ist es für erfahrene Spieler durchaus möglich einzusteigen.
                      </p>
                      <p>
                        Probenort: SambaEtage, 1. Stock der Musikfabrik, Raum A<br />
                        <a href="https://maps.app.goo.gl/x6aFWGhk8KfwvEwN8" target="_blank" rel="noopener">
                          Neuköllnische Allee 6-8, 12057 Berlin-Neukölln
                        </a>
                      </p>
                      <p>Leiter der Gruppen und Workshops sind die Musiker Volker Conrath und VVolf Oliveira.</p>
                    </section>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Workshops</h2>
                </header>
                <div className="row">
                  <div className="col-12">
                    <section className="box">
                      <a href="#2" className="image featured">
                        <img src="/images/workshops.jpg" alt="" />
                      </a>
                      <header id="2">
                        <h3>Auf Anfrage:</h3>
                      </header>
                      <ul>
                        <li>Regelmäßig WS um neue Spieler in die Gruppe zu integrieren, offen für alle (bitte nachfragen)</li>
                        <li>Workshops in afro-brasilianischer Perkussion</li>
                        <li>Band Coaching (Supervision für bestehende Gruppen)</li>
                        <li>Trommeln für Manager und Firmen zur Förderung des Teamgeistes</li>
                        <li>Projekttage an Schulen</li>
                        <li>Unterricht in Kleinperkussion für Bands (Bläsersektion, Sänger)</li>
                        <li>Unterricht in Pandeiro, Berimbão, Cuica und anderen Instrumenten der brasilianischen Rhythmuswelt</li>
                      </ul>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
