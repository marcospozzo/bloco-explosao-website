import { useState, useEffect } from 'react'
import Layout from '../../components/Layout.jsx'

export default function Appearances() {
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    fetch('https://opensheet.elk.sh/1dGxKu34AyicDELP3l9y60eZRdHEkhauAIAiDJTEsgi0/performances')
      .then(r => r.json())
      .then(data => setUpcoming(data))
      .catch(() => {})
  }, [])

  return (
    <Layout lang="en">
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Upcoming performances</h2>
                </header>
                <div className="row">
                  <div className="col-12">
                    <article className="box post">
                      <section>
                        <ul id="dates" className="dates">
                          {upcoming.map((p, i) => (
                            <li key={i}>
                              <span className="date">
                                {p.month} <strong>{p.day}</strong>
                              </span>
                              <h3>{p.venue}</h3>
                              <p>{p.description}</p>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Special appearances</h2>
                </header>
                <div className="row">
                  <div className="col-12">
                    <article className="box post">
                      <section>
                        <ul className="dates past-performances">
                          <h3>Festivals</h3>
                          <ul>
                            <li>Internationales Sambafestival Göteborg/Schweden</li>
                            <li>Internationales Sambafestival Coburg</li>
                            <li>Sambafestival Bremen, regelmäßig seit 2000</li>
                            <li>1000 Jahre Aschersleben</li>
                            <li>Straßenmusikfestival Aschersleben regelmäßig seit 2003</li>
                            <li>Folklorum Zentendorf (Sachsen)</li>
                            <li>Sambafestival Bad Wildungen</li>
                            <li>Sambasyndrom Berlin regelmäßig seit 2000</li>
                            <li>Folk &amp; Roots Festival Rudolstadt, regelmäßig seit 2009</li>
                            <li>Kulturelle Landpartie im Wendland</li>
                            <li>Cultura do Brasil, Festival in Rietberg</li>
                            <li>Brückenfest Ludwigsfelde</li>
                          </ul>
                          <h3>Sportveranstaltungen</h3>
                          <ul>
                            <li>ISTAF im Olympiastadion</li>
                            <li>ISTAF im Jahn Sportpark</li>
                            <li>Berlin Marathon regelmäßig</li>
                            <li>Laufveranstaltungen in Berlin, Halbmarathon, Staffellauf, Citylauf... regelmäßig</li>
                            <li>Velothon Berlin regelmäßig</li>
                            <li>Wasserballspiele von WF Spandau 04</li>
                            <li>Fußball WM an verschiedenen Orten 2006</li>
                            <li>Fußballspiele Club Italia</li>
                            <li>Iron Man in Leipzig</li>
                            <li>Dresden Marathon regelmäßig</li>
                          </ul>
                          <h3>Großveranstaltungen</h3>
                          <ul>
                            <li>GASAG-Präsentation im Sony Center</li>
                            <li>Coral Fashion Show am Brandenburger Tor</li>
                            <li>Bundesfamilientag vor der alten Nationalgalerie</li>
                            <li>Wella in Chemnitz</li>
                            <li>Shopping an der Frauenkirche in Dresden (Eröffnung)</li>
                            <li>Tempodrom</li>
                            <li>Arena Berlin</li>
                            <li>Walpurgisnacht Rüdersdorf</li>
                            <li>Fest der Kulturen (im Rahmen des Karnevals der Kulturen), regelmäßig</li>
                            <li>Karneval der Kulturen Berlin regelmäßig (2 x Preisträger)</li>
                            <li>Fest der Kulturen Hamburg</li>
                            <li>Altonale Hamburg</li>
                            <li>Panometer in Leipzig</li>
                            <li>Fete de la Musique in Berlin regelmäßig</li>
                          </ul>
                          <h3>Clubs, Veranstaltungsorte</h3>
                          <ul>
                            <li>Adadio Potsdamer Platz (Aids-Gala)</li>
                            <li>Magnet Club</li>
                            <li>Muvuca</li>
                            <li>Mau Club in Rostock</li>
                            <li>Platenlaase Kulturzentrum (Wendland)</li>
                            <li>90grad Disco</li>
                            <li>Pfefferberg Haus 13 und Garten</li>
                            <li>BKA Spiegelzelt</li>
                            <li>Ufa Fabrik</li>
                            <li>Brückenfest Ludwigsfelde</li>
                            <li>Trommelnacht im Grauen Hof Aschersleben, regelmäßig</li>
                            <li>Der Blaue Mittwoch in Frankfurt/Oder</li>
                            <li>Fischerjakobi-Fest in Plaue an der Havel</li>
                            <li>Wabe in Berlin</li>
                          </ul>
                          <h3>Demonstrationen/Kundgebungen</h3>
                          <ul>
                            <li>ÖTV/Verdi</li>
                            <li>Grüne Wahlkampfparty</li>
                            <li>deine Stimme gegen Armut vor dem Bundeskanzleramt</li>
                            <li>Amnesty International</li>
                            <li>Demos gegen rechte Gewalt regelmäßig</li>
                            <li>Deutscher Tierschutzbund</li>
                            <li>Anti Atomkraft Demos</li>
                            <li>gegen Pegida</li>
                            <li>Großdemo gegen das TTIP Abkommen</li>
                          </ul>
                          <h3>Desweiteren auf Hochzeiten, Geburtstagen, Firmenfesten, Stadtteilfesten sowie Brasilshows mit und ohne bras.Tänzerinnen...</h3>
                        </ul>
                      </section>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Past performances</h2>
                </header>
                <div className="row">
                  <div className="col-12">
                    <article className="box post">
                      <section>
                        <ul className="dates past-performances">
                          <h3>2019</h3>
                          <ul>
                            <li>Sun October 27, 2019 Marathon, Dresden, Fetscherplatz 10:30 am-3:00pm</li>
                            <li>Sun 09/29/2019 Marathon, Berlin, Mehringdamm 9:15-12:30</li>
                            <li>Sun 29.09.2019 Marathon, Berlin, Kleistpark 9:30-13:00</li>
                            <li>Sa 28.09.2019 Skatermarathon, Straußberger Platz 15:30-17:30</li>
                            <li>30.08.-01.09.2019 street music festival, Aschersleben</li>
                            <li>Sun 25.08.2019 Sport Check, Wilder Eber, 10:00-11:00</li>
                            <li>Sa 03.08.2019 City Night, Kurfürstendamm, 19:00-21:00</li>
                            <li>05-07.07.2019 Folk Roots Festival, Rudolstadt</li>
                            <li>01.06.2019 Karneval der Kulturen Berlin (prize winner!)</li>
                          </ul>
                        </ul>
                      </section>
                    </article>
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
