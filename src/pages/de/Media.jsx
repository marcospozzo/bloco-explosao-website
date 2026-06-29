import { useState, useEffect } from 'react'
import Layout from '../../components/Layout.jsx'

const IMAGES = [
  { src: '/images/media/image1.jpg', thumb: '/images/media/thumbnails/thumb1.jpg', alt: 'Brandenburger Tor' },
  { src: '/images/media/image2.jpg', thumb: '/images/media/thumbnails/thumb2.jpg', alt: 'Karneval der Kulturen Berlin' },
  { src: '/images/media/image3.jpg', thumb: '/images/media/thumbnails/thumb3.jpg', alt: 'Bühne Ufa Fabrik Berlin' },
  { src: '/images/media/image4.jpg', thumb: '/images/media/thumbnails/thumb4.jpg', alt: 'Straßenauftritt' },
  { src: '/images/media/image5.jpg', thumb: '/images/media/thumbnails/thumb5.jpg', alt: 'Folk & Roots Festival Rudolstadt' },
  { src: '/images/media/image6.jpg', thumb: '/images/media/thumbnails/thumb6.jpg', alt: 'Karneval d. Kulturen Berlin' },
  { src: '/images/media/image7.jpg', thumb: '/images/media/thumbnails/thumb7.jpg', alt: 'Bühne mit Renato & Band' },
  { src: '/images/media/image8.jpg', thumb: '/images/media/thumbnails/thumb8.jpg', alt: 'Sambafestival Bad Wildungen' },
  { src: '/images/media/image9.jpg', thumb: '/images/media/thumbnails/thumb9.jpg', alt: 'Im Zirkus' },
  { src: '/images/media/image10.jpg', thumb: '/images/media/thumbnails/thumb10.jpg', alt: 'Nach der Show' },
  { src: '/images/media/image11.jpg', thumb: '/images/media/thumbnails/thumb11.jpg', alt: 'Karneval' },
  { src: '/images/media/image12.jpg', thumb: '/images/media/thumbnails/thumb12.jpg', alt: 'Festival Rudolstadt Oriental' },
  { src: '/images/media/image13.jpg', thumb: '/images/media/thumbnails/thumb13.jpg', alt: 'Unsere Performer Karneval' },
  { src: '/images/media/image14.jpg', thumb: '/images/media/thumbnails/thumb14.jpg', alt: 'Werkstatt der Kulturen' },
  { src: '/images/media/image15.jpg', thumb: '/images/media/thumbnails/thumb15.jpg', alt: 'Stage Wuhlheide' },
  { src: '/images/media/image16.jpg', thumb: '/images/media/thumbnails/thumb16.jpg', alt: 'Straßenfest Karneval 2018' },
  { src: '/images/media/image17.jpg', thumb: '/images/media/thumbnails/thumb17.jpg', alt: 'Wir spielen bei jedem Wetter' },
  { src: '/images/media/image18.jpg', thumb: '/images/media/thumbnails/thumb18.jpg', alt: 'Frauenlauf' },
  { src: '/images/media/image19.jpg', thumb: '/images/media/thumbnails/thumb19.jpg', alt: 'Auszeichnungen Karneval' },
]

const ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  return (
    <div id="myModal" className="modal" style={{ display: 'block' }}>
      <span className="close cursor" onClick={onClose}>&times;</span>
      <div className="modal-content">
        <div className="mySlides" style={{ display: 'block' }}>
          <div className="numbertext">{index + 1} / {images.length}</div>
          <img src={images[index].src} style={{ width: '100%' }} alt={images[index].alt} />
        </div>
        <a className="prev" onClick={onPrev}>&#10094;</a>
        <a className="next" onClick={onNext}>&#10095;</a>
        <div className="caption-container">
          <p className="demo">{images[index].alt}</p>
        </div>
      </div>
    </div>
  )
}

export default function Media() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  function open(i) { setLightbox({ open: true, index: i }) }
  function close() { setLightbox(l => ({ ...l, open: false })) }
  function prev() { setLightbox(l => ({ ...l, index: (l.index - 1 + IMAGES.length) % IMAGES.length })) }
  function next() { setLightbox(l => ({ ...l, index: (l.index + 1) % IMAGES.length })) }

  return (
    <Layout lang="de">
      {lightbox.open && <Lightbox images={IMAGES} index={lightbox.index} onClose={close} onPrev={prev} onNext={next} />}
      <section id="main">
        <div className="container">
          <div className="row">
            <div id="photos" className="col-12">
              <section>
                <header className="major">
                  <h2>Photos</h2>
                </header>
                <div className="row media">
                  <div className="col-12">
                    <section className="box gallery">
                      <p>Danke an Michael Flascha, Maggie Ericksson und alle Fotografen.</p>
                      {IMAGES.map((img, i) => (
                        <img
                          key={i}
                          className="single-image hover-shadow"
                          src={img.thumb}
                          alt={img.alt}
                          onClick={() => open(i)}
                        />
                      ))}
                    </section>
                  </div>
                </div>
              </section>
            </div>

            <div id="videos" className="col-12">
              <section>
                <header className="major">
                  <h2>Videos</h2>
                </header>
                <div className="row media">
                  <div className="col-12">
                    <section className="box">
                      <div className="video-iframe">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6T03Ul-umlA" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gRxg2Xea3Tk" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qlGns1dAs3c" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nud5G0fNq_w" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HFpu3PJUBRw" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bc709rGWwJ0" title="YouTube video player" frameBorder="0" allow={ALLOW} allowFullScreen></iframe>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </div>

            <div id="cds" className="col-12">
              <section>
                <header className="major">
                  <h2>CDs</h2>
                </header>
                <div className="row media">
                  <div className="col-12-small">
                    <section className="box leader">
                      <div className="media-box">
                        <img src="/images/media/Cover CD Bloco Explosão.jpg" alt="Explosão - Plus Friends & Band CD Cover" />
                        <h3>Explosão - plus Friends &amp; Band</h3>
                      </div>
                      <div>
                        <h2>Die 2. CD</h2>
                        <br />
                        <p>
                          Ist inspiriert von den großen Afroblocos aus Bahia (Brasilien). Durch unsere immer enger
                          werdenden Kontakte dorthin schlägt diese CD eine Brücke zwischen Berlin und Brasilien. So
                          sind wir auch ein wenig stolz, dass gleich 3 Mestre (musikalische Leiter) der bekanntesten
                          dortigen Gruppen als "special Guests" in verschiedenen Stücken auf unserer CD mitspielen:
                        </p>
                        <ul>
                          <li>Marivaldo Paim (Ilê Aiyê)</li>
                          <li>Memeu Nunes (Olodum)</li>
                          <li>Mario Bomba (Muzenza)</li>
                        </ul>
                        <p>und als Gastmusiker aus Rio de Janeiro: Jovi Joviniano</p>
                        <p>Aber auch die Berliner Musikszene ist mit ausgesprochen guten Musikern auf unserer CD vertreten (Auswahl):</p>
                        <ul>
                          <li>Renato Pantera (Rio de Janeiro/Berlin): Gesang, Gitarre</li>
                          <li>Hans Limburg (Berlin): Gesang, Gitarre</li>
                          <li>Gui (Rio de Janeiro/Berlin): Bass</li>
                          <li>Georg Pfister, Oliver Fox, Thomas Walter Maria: Saxofone, Flöte</li>
                          <li>Jan Gropper, Greg Ambrosine: Trompeten</li>
                          <li>Martin Hänsel: Solo Gitarre</li>
                        </ul>
                        <p>Lassen Sie sich durch feurige brasilianische Rhythmen verzaubern und von der Kraft und Lebensfreude der Musik überzeugen.</p>
                      </div>
                    </section>
                  </div>

                  <div className="col-12-small">
                    <section className="box leader two">
                      <div className="media-box">
                        <img src="/images/media/bloco_explosao_cover_front_400.jpg" alt="Berlin percussive, Samba & more CD Cover" />
                        <h3>Berlin perkussiv, Samba &amp; more</h3>
                      </div>
                      <div>
                        <p>
                          Beide CD´s sind auf allen Streamingdiensten und können über{' '}
                          <a href="https://www.amazon.de/Berlin-Perkussiv-Samba-More/dp/B003C8P53E" rel="noopener" target="_blank">Amazon</a>
                          {' '}heruntergeladen werden. Bei{' '}
                          <a href="https://soundcloud.com/blocoexplosao" rel="noopener" target="_blank">Soundcloud</a>
                          {' '}sind Ausschnitte zu hören.
                        </p>
                        <p>
                          Die 1. CD „ Berlin perkussiv; Samba &amp; more" führt auf eine musikalische Reise von Berlin
                          über Salvador da Bahia bis nach Rio. Alle Stücke sind rein perkussiv.
                        </p>
                        <p>
                          Gastmusiker aus Brasilien sind Marivaldo Paim (Ilê Aiyê) aus Salvador da Bahia und Jovi
                          Joviniano aus Rio de Janeiro.
                        </p>
                      </div>
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
