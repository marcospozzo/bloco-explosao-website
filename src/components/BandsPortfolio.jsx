import { Link } from 'react-router-dom'

export default function BandsPortfolio({ title, bands }) {
  return (
    <div className="col-12">
      <section className="portfolio">
        <header className="major">
          <h2>{title}</h2>
        </header>
        <div className="row">
          {bands.map((band, i) => (
            <div key={i} className="col-4 col-6-medium col-12-small">
              <section className="box">
                <Link to={band.to} className="image featured">
                  <img src={band.img} alt={band.alt} />
                </Link>
                <header>
                  <h3>{band.title}</h3>
                </header>
                <p>{band.description}</p>
                <footer>
                  <ul className="actions">
                    <li>
                      <Link to={band.to} className="button">{band.buttonText}</Link>
                    </li>
                  </ul>
                </footer>
              </section>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
