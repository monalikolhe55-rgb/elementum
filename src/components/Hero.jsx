import './Hero.css'

// Real Unsplash photo URLs for circular avatars - matching the design's scattered circular photos
const photos = [
  { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=160&h=160&fit=crop&crop=face', size: 88 },
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=face', size: 72 },
  { url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=face', size: 80 },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face', size: 76 },
  { url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=face', size: 92 },
  { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face', size: 84 },
  { url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=160&h=160&fit=crop&crop=face', size: 70 },
]

export default function Hero() {
  return (
    <section className="hero">
      {/* Pink radial blob behind title */}
      <div className="hero__blob" aria-hidden="true"/>

      {/* Purple leaf top-right */}
      <svg className="hero__leaf" viewBox="0 0 34 52" fill="none" aria-hidden="true">
        <path d="M17 0C30 8 39 26 17 52C-5 26 4 8 17 0Z" fill="#7c3fbf"/>
      </svg>

      {/* Left wavy bracket */}
      <svg className="hero__bracket" viewBox="0 0 40 160" fill="none" aria-hidden="true">
        <path d="M30 5 Q5 30 20 60 Q35 90 10 120 Q-5 140 20 155"
          stroke="#c9a0dc" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>

      <div className="wrap hero__inner">
        {/* Big headline */}
        <h1 className="hero__h1">
          The <span className="ul-pink">thinkers</span> and<br/>
          doers were changing<br/>
          the <span className="ul-box-yellow">status</span> Quo with
        </h1>

        <p className="hero__sub">
          We are a team of strategic designers, designers, communicators, researchers. Together,<br className="hero__br"/>
          we believe that progress only happens when you refuse to play things safe.
        </p>

        {/* Scattered circular photo cluster - matches design exactly */}
        <div className="hero__photos" aria-label="Team members">
          {photos.map((p, i) => (
            <div
              key={i}
              className="hero__photo"
              style={{
                width: p.size,
                height: p.size,
                animationDelay: `${i * 0.09}s`,
              }}
            >
              <img src={p.url} alt={`Team member ${i+1}`} width={p.size} height={p.size}/>
            </div>
          ))}
        </div>
      </div>

      {/* Pink wavy underline decoration */}
      <svg className="hero__wave" viewBox="0 0 500 24" fill="none" aria-hidden="true">
        <path d="M0 12 Q62 0 125 12 Q188 24 250 12 Q312 0 375 12 Q438 24 500 12"
          stroke="#e8407a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      </svg>
    </section>
  )
}
