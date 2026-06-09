import './Footer.css'

const cols = [
  {
    head: 'Company',
    links: ['Home','Works','Services','Blog'],
  },
  {
    head: 'Terms & Policies',
    links: ['Privacy Policy','Terms & Conditions','Careers','Accessibility'],
  },
  {
    head: 'Follow Us',
    links: ['Instagram','LinkedIn','YouTube','Twitter'],
  },
]

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__inner">
        {cols.map(c => (
          <div className="foot__col" key={c.head}>
            <h4 className="foot__head">{c.head}</h4>
            <ul className="foot__list">
              {c.links.map(l => (
                <li key={l}><a href="#" className="foot__a">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="foot__col">
          <h4 className="foot__head">Terms & Policies</h4>
          <address className="foot__addr">
            <span>4996 Nakula Str, St Diego, CA, 6547</span>
            <a href="tel:1236239090">123-6239090</a>
            <a href="mailto:info@elementum.com">info@elementum.com</a>
          </address>
        </div>
      </div>

      <div className="foot__bottom">
        <div className="wrap foot__bottom-row">
          <span>© {new Date().getFullYear()} Elementum. All rights reserved.</span>
          <span>Made with ♥ by Elementum</span>
        </div>
      </div>
    </footer>
  )
}
