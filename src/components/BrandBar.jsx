import './BrandBar.css'

const stats = [
  {
    icon: (
      <span className="bb__flag">🇮🇹</span>
    ),
    label: 'ORIGIN',
    value: 'Italy',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7 L12 12 L15 14"/>
      </svg>
    ),
    label: 'FOUNDED',
    value: '1910',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M12 2 L12 5 M12 19 L12 22 M2 12 L5 12 M19 12 L22 12"/>
      </svg>
    ),
    label: 'ENGINEERING',
    value: 'Performance Driven',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="1"/>
        <circle cx="12" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
      </svg>
    ),
    label: 'BODY STYLES',
    value: 'Sedan, SUV, Coupe',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 3 L12 8 M12 16 L12 21 M3 12 L8 12 M16 12 L21 12"/>
      </svg>
    ),
    label: 'DRIVE',
    value: 'RWD / AWD',
  },
]

export default function BrandBar() {
  return (
    <div className="bb">
      <div className="bb__inner">
        {stats.map((s, i) => (
          <div key={s.label} className="bb__item">
            <span className="bb__icon">{s.icon}</span>
            <div className="bb__text">
              <span className="bb__label">{s.label}</span>
              <span className="bb__value">{s.value}</span>
            </div>
            {i < stats.length - 1 && <div className="bb__divider" />}
          </div>
        ))}
      </div>
    </div>
  )
}
