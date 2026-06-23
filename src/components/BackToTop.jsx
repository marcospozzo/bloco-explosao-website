import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(document.documentElement.scrollTop > 300 || document.body.scrollTop > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTop() {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  if (!visible) return null

  return (
    <button onClick={scrollTop} id="myBtn" title="Go to top" style={{ display: 'block' }}>
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}
