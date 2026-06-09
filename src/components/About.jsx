import './About.css'

export default function About() {
  return (
    <section className="about">
      {/* Pink radial glow - as seen in design */}
      <div className="about__glow" aria-hidden="true"/>

      <div className="wrap about__grid">
        {/* LEFT: text */}
        <div className="about__text">
          <h2 className="about__h2">
            <em className="about__italic ul-pink">Tomorrow</em> should<br/>
            be better than today
          </h2>
          <p className="about__body">
            We are a team of strategic designers, designers, communicators,
            researchers. Together, we believe that progress only happens when you
            refuse to play things safe.
          </p>
          <a href="#" className="about__more">Read more &mdash;&mdash;&mdash;</a>
        </div>

        {/* RIGHT: circular photo + red square decoration */}
        <div className="about__visual">
          {/* Red square decoration top-right corner */}
          <div className="about__red-sq" aria-hidden="true"/>
          {/* Round cornered photo card */}
          <div className="about__photo-wrap">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=480&h=400&fit=crop&crop=center"
              alt="Team collaboration"
              className="about__photo"
            />
          </div>
          {/* Pink squiggle connector */}
          <svg className="about__squiggle" viewBox="0 0 80 120" fill="none" aria-hidden="true">
            <path d="M10 10 Q50 40 20 70 Q-10 100 40 115"
              stroke="#e8407a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
