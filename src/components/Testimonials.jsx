import { useState } from 'react'
import './Testimonials.css'

// Real photo URLs for testimonial avatars - matching scattered circular photos in design
const leftPhotos = [
  { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face', size: 48 },
  { url: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=120&h=120&fit=crop&crop=face', size: 38 },
  { url: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&h=120&fit=crop&crop=face', size: 44 },
]
const rightPhotos = [
  { url: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=120&h=120&fit=crop&crop=face', size: 52 },
  { url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&h=120&fit=crop&crop=face', size: 42 },
  { url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=120&h=120&fit=crop&crop=face', size: 66 },
]

const reviews = [
  {
    photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face',
    name: 'Alex Morgan',
    role: 'CTO, NovaTech',
    text: 'Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company mentioned, which have also proved to be easy to use and reliable.',
  },
  {
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face',
    name: 'Priya Nair',
    role: 'Founder, Bloom Studio',
    text: 'Working with Elementum transformed our brand identity completely. Their strategic thinking and creative execution exceeded every expectation we set. Truly a team that refuses to play things safe and always goes the extra mile.',
  },
  {
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    name: 'Marcus Chen',
    role: 'Head of Product, Aether',
    text: 'The attention to detail and quality of design thinking at Elementum is unlike anything I have experienced. They treated our project as their own and delivered outstanding results that exceeded all expectations.',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const r = reviews[idx]

  return (
    <section className="testi">
      <div className="wrap testi__grid">
        {/* Left scattered photos */}
        <div className="testi__side testi__side--left">
          {leftPhotos.map((p, i) => (
            <div
              key={i}
              className="testi__side-photo"
              style={{ width: p.size, height: p.size }}
            >
              <img src={p.url} alt="" width={p.size} height={p.size}/>
            </div>
          ))}
        </div>

        {/* Center content */}
        <div className="testi__center">
          <h2 className="testi__h2">
            What our customer<br/>
            says <span className="ul-pink testi__about">About Us</span>
          </h2>

          {/* Main review card */}
          <div className="testi__card">
            {/* Reviewer photo + quote marks */}
            <div className="testi__card-top">
              <div className="testi__reviewer-photo">
                <img src={r.photo} alt={r.name}/>
              </div>
              <svg className="testi__openquote" viewBox="0 0 36 28" fill="none" aria-hidden="true">
                <path d="M0 28V17C0 7.3 5.2 1.8 15.6 0L16.4 2.6C12.5 3.6 10 5.6 8.8 8.6H16V28H0ZM20 28V17C20 7.3 25.2 1.8 35.6 0L36.4 2.6C32.5 3.6 30 5.6 28.8 8.6H36V28H20Z" fill="#d1d5db"/>
              </svg>
            </div>

            <p className="testi__text">{r.text}</p>

            <svg className="testi__closequote" viewBox="0 0 36 28" fill="none" aria-hidden="true">
              <path d="M36 0V11C36 20.7 30.8 26.2 20.4 28L19.6 25.4C23.5 24.4 26 22.4 27.2 19.4H20V0H36ZM16 0V11C16 20.7 10.8 26.2 .4 28L-.4 25.4C3.5 24.4 6 22.4 7.2 19.4H0V0H16Z" fill="#d1d5db"/>
            </svg>

            <div className="testi__author">
              <strong>{r.name}</strong>
              <span>{r.role}</span>
            </div>
          </div>

          {/* Dot nav */}
          <div className="testi__dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`testi__dot ${i === idx ? 'testi__dot--on' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Review ${i+1}`}
              />
            ))}
          </div>
        </div>

        {/* Right scattered photos */}
        <div className="testi__side testi__side--right">
          {rightPhotos.map((p, i) => (
            <div
              key={i}
              className="testi__side-photo"
              style={{ width: p.size, height: p.size }}
            >
              <img src={p.url} alt="" width={p.size} height={p.size}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
