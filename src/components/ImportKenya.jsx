import './ImportKenya.css'

const services = [
  {
    icon: '⊛',
    title: 'CRSP MATCHING',
    desc: 'Full professional CRSP verification',
  },
  {
    icon: '⊕',
    title: 'KRA CLEARANCE',
    desc: 'Complete customs duty calculation',
  },
  {
    icon: '⚓',
    title: 'PORT HANDLING',
    desc: 'Mombasa port clearance',
  },
  {
    icon: '⊙',
    title: 'DOOR DELIVERY',
    desc: 'Delivery to Nakuru or your location',
  },
  {
    icon: '◈',
    title: 'INSURANCE',
    desc: 'Transit insurance options',
  },
  {
    icon: '⊞',
    title: 'EXPERT SUPPORT',
    desc: 'Personalised import assistance',
  },
]

function ServiceIcon({ title }) {
  const icons = {
    'CRSP MATCHING': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    'KRA CLEARANCE': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21 L16 21 M12 17 L12 21"/>
      </svg>
    ),
    'PORT HANDLING': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17 L21 17"/><path d="M12 3 L12 17"/><path d="M5 8 L12 3 L19 8"/>
        <path d="M5 12 L19 12"/>
      </svg>
    ),
    'DOOR DELIVERY': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 17H3a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="1"/>
        <circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      </svg>
    ),
    'INSURANCE': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    'EXPERT SUPPORT': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  }
  return icons[title] || null
}

export default function ImportKenya() {
  return (
    <section id="import" className="ik">
      <div className="ik__inner">

        {/* Left: car image */}
        <div className="ik__image">
          <img
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Import Alfa Romeo to Kenya"
          />
          <div className="ik__image-overlay" />
        </div>

        {/* Right: content */}
        <div className="ik__content">
          <div className="ik__bar" />
          <h2 className="ik__title">IMPORTING ALFA ROMEO TO KENYA</h2>
          <p className="ik__body">
            Alfa Romeo imports from Japan, the UK, UAE and Australia are all facilitated by
            Luxe Lane Autos. We handle CRSP matching, KRA customs clearance, insurance during
            transit, port handling and door-to-door delivery to Nakuru or your preferred Kenyan
            location.
          </p>

          <div className="ik__services">
            {services.map(s => (
              <div key={s.title} className="ik__service">
                <span className="ik__service-icon">
                  <ServiceIcon title={s.title} />
                </span>
                <div className="ik__service-text">
                  <span className="ik__service-title">{s.title}</span>
                  <span className="ik__service-desc">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="ik__btn">GET AN IMPORT QUOTE</a>
        </div>

      </div>
    </section>
  )
}
