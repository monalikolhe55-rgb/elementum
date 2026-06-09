import './Progress.css'

export default function Progress() {
  return (
    <section className="prog">
      <div className="wrap prog__grid">
        {/* LEFT: circular photo + red triangles */}
        <div className="prog__visual">
          {/* Large red triangle bottom-left */}
          <svg className="prog__tri prog__tri--lg" viewBox="0 0 100 87" fill="none" aria-hidden="true">
            <polygon points="50,0 100,87 0,87" fill="#e84040"/>
          </svg>
          {/* Circular photo */}
          <div className="prog__photo-wrap">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop&crop=center"
              alt="Team working together"
              className="prog__photo"
            />
          </div>
          {/* Smaller red triangle top-right */}
          <svg className="prog__tri prog__tri--sm" viewBox="0 0 70 61" fill="none" aria-hidden="true">
            <polygon points="35,0 70,61 0,61" fill="#e84040"/>
          </svg>
        </div>

        {/* RIGHT: text */}
        <div className="prog__text">
          <h2 className="prog__h2">
            See <em className="prog__em">how</em> we can<br/>
            help you <span className="ul-pink">progress</span>
          </h2>
          <p className="prog__body">
            We add a layer of tactical insights and action that allows change
            makers to accelerate that progress in areas such as brand, design,
            digital content, and social research.
          </p>
          <a href="#" className="prog__more">Read more &mdash;&mdash;&mdash;&mdash;</a>
        </div>
      </div>

      {/* Dashed pink curl between sections */}
      <svg className="prog__curl" viewBox="0 0 440 48" fill="none" aria-hidden="true">
        <path d="M20 36 Q110 4 220 28 Q330 52 420 16"
          stroke="#e8407a" strokeWidth="1.6" fill="none"
          strokeDasharray="7 5" strokeLinecap="round"/>
      </svg>
    </section>
  )
}
