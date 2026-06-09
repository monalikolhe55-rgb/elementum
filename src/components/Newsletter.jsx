import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [err, setErr] = useState('')

  const submit = () => {
    if (!email.trim()) { setErr('Please enter your email.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr('Enter a valid email address.'); return }
    setErr(''); setDone(true)
  }

  return (
    <section className="nl">
      {/* Purple leaf - top right, matches design */}
      <svg className="nl__leaf" viewBox="0 0 34 52" fill="none" aria-hidden="true">
        <path d="M17 0C30 8 39 26 17 52C-5 26 4 8 17 0Z" fill="#7c3fbf"/>
      </svg>

      {/* Swirl line decoration above heading */}
      <svg className="nl__swirl" viewBox="0 0 260 48" fill="none" aria-hidden="true">
        <path d="M20 36 Q65 5 130 26 Q195 47 240 18"
          stroke="#555" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      </svg>

      <div className="wrap nl__inner">
        <h2 className="nl__h2">
          Subscribe to<br/>
          our newsletter
        </h2>
        <p className="nl__sub">To make your stay special and even more memorable</p>

        {done ? (
          <div className="nl__success">🎉 You're subscribed! Welcome aboard.</div>
        ) : (
          <>
            <div className="nl__form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => { setEmail(e.target.value); setErr('') }}
                onKeyDown={e => e.key === 'Enter' && submit()}
                className="nl__input"
                aria-label="Email address"
              />
              <button className="nl__btn" onClick={submit}>Subscribe Now</button>
            </div>
            {err && <p className="nl__err">{err}</p>}
          </>
        )}
      </div>
    </section>
  )
}
