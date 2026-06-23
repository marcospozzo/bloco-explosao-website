import { useState, useEffect } from 'react'
import Layout from '../../components/Layout.jsx'

export default function News() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://opensheet.elk.sh/1dGxKu34AyicDELP3l9y60eZRdHEkhauAIAiDJTEsgi0/news-de')
      .then(r => r.json())
      .then(data => { setItems(data.filter(d => d.title || d.description)); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <Layout lang="de">
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section>
                <header className="major">
                  <h2>Nachrichten</h2>
                </header>
                {loading && <p>Wird geladen...</p>}
                {items.map((item, i) => (
                  <div key={i} className="box">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
