import MakePageHero from './MakePageHero'

// ── Alfa Romeo: three content pillars ────────────────────────────────────────
const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 4 L6 2 L8 4 L10 2 L12 4 L14 2 L16 4 L18 2 L20 4"/>
        <path d="M4 4 L4 20 L20 20 L20 4"/>
        <path d="M8 20 L8 14 L16 14 L16 20"/>
        <path d="M11 9 L13 9"/>
      </svg>
    ),
    label: 'RACING HERITAGE',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z"/>
      </svg>
    ),
    label: 'ITALIAN CRAFTSMANSHIP',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="3"/>
        <line x1="12" y1="3"  x2="12" y2="7"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <line x1="3"  y1="12" x2="7"  y2="12"/>
        <line x1="17" y1="12" x2="21" y2="12"/>
        <path d="M12 12 L15.5 8"/>
      </svg>
    ),
    label: 'DRIVER FOCUSSED',
  },
]

// ── Alfa Romeo: brand stats ───────────────────────────────────────────────────
const STATS = {
  origin:      'Italy',
  originFlag:  '🇮🇹',
  founded:     '1910',
  engineering: 'Performance Driven',
  bodyStyles:  'Sedan, SUV, Coupe',
  drive:       'RWD / AWD',
}

// ── Export: thin wrapper ──────────────────────────────────────────────────────
export default function Hero() {
  return (
    <MakePageHero
      makeName="ALFA ROMEO"
      tagline="ITALIAN PASSION. ENGINEERED TO PERFORM."
      description="Alfa Romeo is an iconic Italian marque known for its striking design, thrilling performance and racing heritage. Every Alfa Romeo is built to deliver an emotional connection between driver and machine."
      pillars={PILLARS}
      stats={STATS}
      shadowLayer={false}
    />
  )
}
