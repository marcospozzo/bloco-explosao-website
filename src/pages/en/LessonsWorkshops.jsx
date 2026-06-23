import Layout from '../../components/Layout.jsx'

export default function LessonsWorkshops() {
  return (
    <Layout lang="en">
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Lessons</h2>
                </header>
                <div className="row">
                  <div className="col-12">
                    <section className="box">
                      <a href="#1" className="image featured">
                        <img src="/images/lessons.JPG" alt="" />
                      </a>
                      <header id="1">
                        <h3>Would you like to participate?</h3>
                      </header>
                      <p>
                        Our group is open to all music enthusiasts. We offer regular courses and workshops. Come by,
                        the first time it's free to sniff. Instruments and sticks are provided. We regularly offer
                        introductory workshops.
                      </p>
                      <h3>New beginners course: every Tuesday from 20-22h. Please contact us if you are interested!</h3>
                      <br />
                      <p>
                        From rhythmically gifted beginners to experienced drum enthusiasts, everyone is welcome. Fun
                        and appearances are guaranteed. Come over! Relaxed and from the beginning, we will get into
                        the rhythms and techniques of the music of the Afro Blocos from Salvador da Bahia.
                      </p>
                      <p>
                        On Tuesdays from 8 p.m. to 10 p.m., advanced learners rehearse. There it is quite possible
                        for experienced players to join.
                      </p>
                      <p>
                        You can also take part in the Carnival of Cultures in Berlin (May / June) every year. All
                        rehearsals take place on the Samba floor in the Musikfabrik Berlin.
                      </p>
                      <p>
                        The groups and workshops are led by the musicians Volker Conrath and VVolf Oliveira.
                      </p>
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
                        <h3>On request:</h3>
                      </header>
                      <ul>
                        <li>Regular WS to integrate new players into the group, open to everyone (please ask).</li>
                        <li>Workshops in Afro-Brazilian percussion.</li>
                        <li>Band coaching (supervision for existing groups).</li>
                        <li>Drumming for managers and companies to promote team spirit.</li>
                        <li>Project days in schools.</li>
                        <li>Lessons in small percussion for bands (brass section, singers).</li>
                        <li>Lessons in pandeiro, berimbão, cuica and other instruments of the Brazilian rhythm world.</li>
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
