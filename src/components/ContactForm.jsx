import { useState } from 'react'

export default function ContactForm({ lang = 'de' }) {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [honey, setHoney] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const isDE = lang === 'de'
  const labels = isDE
    ? { title: 'Kontaktiere uns', name: 'Vollständiger Name', msg: 'Nachricht', submit: 'Nachricht senden' }
    : { title: 'Contact Us', name: 'Full Name', msg: 'Message', submit: 'Send message' }

  function set(field) {
    return e => setFields(f => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const body = new URLSearchParams({
      'form-name': 'contact',
      name: fields.name,
      email: fields.email,
      message: fields.message,
      'miel-field': honey,
    }).toString()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => setSent(true))
      .catch(() => setError(true))
  }

  if (sent) {
    return (
      <div className="contact-form">
        <header><h1>{labels.title}</h1></header>
        <p>{isDE ? 'Nachricht gesendet! Wir melden uns bald.' : 'Message sent! We\'ll be in touch soon.'}</p>
      </div>
    )
  }

  return (
    <div className="contact-form">
      <header><h1>{labels.title}</h1></header>
      {error && <p>{isDE ? 'Fehler beim Senden. Bitte versuchen Sie es erneut.' : 'Error sending. Please try again.'}</p>}
      <form onSubmit={handleSubmit}>
        <div className="fields">
          <div className="field half">
            <input type="text" required name="name" placeholder={labels.name}
              value={fields.name} onChange={set('name')} />
          </div>
          <div className="field half">
            <input type="email" required name="email" placeholder="Email"
              value={fields.email} onChange={set('email')} />
          </div>
          <div className="field mielcita">
            <input type="text" name="miel-field" placeholder={labels.msg}
              value={honey} onChange={e => setHoney(e.target.value)} />
          </div>
          <div className="field">
            <textarea required name="message" rows="6" placeholder={labels.msg}
              value={fields.message} onChange={set('message')} />
          </div>
        </div>
        <ul className="actions special">
          <li><input type="submit" value={labels.submit} /></li>
        </ul>
      </form>
    </div>
  )
}
