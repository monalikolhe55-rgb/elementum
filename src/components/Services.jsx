import './Services.css'

const services = [
  {
    tag: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    tag: 'The hanger UI. Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    tag: 'Delta-boost content, social, digital',
    title: 'Piloting digital confidence',
  },
]

export default function Services() {
  return (
    <section className="svc">
      {/* Pink curvy line decoration above title - matches design */}
      <svg className="svc__curl" viewBox="0 0 300 56" fill="none" aria-hidden="true">
        <path d="M10 42 Q75 8 150 32 Q225 56 290 20"
          stroke="#e8407a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      </svg>

      <div className="wrap">
        <h2 className="svc__h2">
          What we <span className="ul-pink svc__can">can</span><br/>
          offer <span className="svc__underline">you!</span>
        </h2>

        <div className="svc__list">
          {services.map((s, i) => (
            <div className="svc__row" key={i}>
              {/* Left: small grey tag text */}
              <span className="svc__tag">{s.tag}</span>
              {/* Right: big title + arrow */}
              <div className="svc__right">
                <span className="svc__title">{s.title}</span>
                <span className="svc__arrow" aria-hidden="true">&#8212;&#8594;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
