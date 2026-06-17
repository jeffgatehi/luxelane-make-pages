import './Hero.css'
import './BrandBar.css'

// Default origin icon when no originFlag is provided
const GlobeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M2 12 L22 12"/>
    <path d="M12 2 C8.5 5.5 8.5 18.5 12 22 C15.5 18.5 15.5 5.5 12 2Z"/>
  </svg>
)

// Thematic icons for the brand stats strip — same for every make
const BB_STAT_ICONS = {
  founded: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7 L12 12 L15 14"/>
    </svg>
  ),
  engineering: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      <path d="M12 2 L12 5 M12 19 L12 22 M2 12 L5 12 M19 12 L22 12"/>
    </svg>
  ),
  bodyStyles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
      <rect x="9" y="11" width="14" height="10" rx="1"/>
      <circle cx="12" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
    </svg>
  ),
  drive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 3 L12 8 M12 16 L12 21 M3 12 L8 12 M16 12 L21 12"/>
    </svg>
  ),
}

/**
 * Renders a prop that can be either a React node or an image URL string.
 * When a string, applies imgClassName and wraps in <img>.
 * When a React node, returns it directly (node must carry its own className).
 */
function resolveNode(value, imgClassName, alt) {
  if (value === null || value === undefined) return null
  if (typeof value === 'string') {
    return (
      <img
        className={imgClassName}
        src={value}
        alt={alt || ''}
        aria-hidden={!alt ? 'true' : undefined}
      />
    )
  }
  return value
}

/**
 * MakePageHero
 *
 * Props:
 *  makeName        {string}   — e.g. "ALFA ROMEO"
 *  tagline         {string}   — e.g. "ITALIAN PASSION. ENGINEERED TO PERFORM."
 *  description     {string}   — hero body paragraph
 *  pillars         {Array<{icon: ReactNode|string, label: string}>}
 *  stats           {Object}
 *    .origin       {string}   — e.g. "Italy"
 *    .originFlag   {string}   — optional flag emoji e.g. "🇮🇹"
 *    .founded      {string}   — e.g. "1910"
 *    .engineering  {string}   — e.g. "Performance Driven"
 *    .bodyStyles   {string}   — e.g. "Sedan, SUV, Coupe"
 *    .drive        {string}   — e.g. "RWD / AWD"
 *  vehicleImage    {string|ReactNode}  — car image URL or element
 *  watermarkLogo   {ReactNode|string|null} — ghost emblem (node carries hero__ghost class; string → <img class="hero__ghost">)
 *  marqueBadge     {ReactNode|string|null} — badge top-right (node carries hero__badge class; string → <img class="hero__badge">)
 *  atmosphereLayer {string|null}  — optional extra overlay: CSS background-image value or image URL
 *  shadowLayer     {boolean|string} — true (default) = standard shadow; false = no shadow; string = custom CSS background value
 */
export default function MakePageHero({
  makeName = '',
  tagline = '',
  description = '',
  pillars = [],
  stats = {},
  vehicleImage,
  watermarkLogo,
  marqueBadge,
  atmosphereLayer,
  shadowLayer = true,
}) {
  const {
    origin = '',
    originFlag,
    founded = '',
    engineering = '',
    bodyStyles = '',
    drive = '',
  } = stats

  const bbItems = [
    {
      icon: originFlag
        ? <span className="bb__flag">{originFlag}</span>
        : GlobeIcon,
      label: 'ORIGIN',
      value: origin,
    },
    { icon: BB_STAT_ICONS.founded,     label: 'FOUNDED',     value: founded     },
    { icon: BB_STAT_ICONS.engineering, label: 'ENGINEERING', value: engineering },
    { icon: BB_STAT_ICONS.bodyStyles,  label: 'BODY STYLES', value: bodyStyles  },
    { icon: BB_STAT_ICONS.drive,       label: 'DRIVE',       value: drive       },
  ]

  // Resolve atmosphereLayer string: accept a bare URL, gradient, or full url() value
  const atmosphereStyle = atmosphereLayer
    ? {
        backgroundImage:
          atmosphereLayer.startsWith('url(') ||
          atmosphereLayer.startsWith('linear-gradient') ||
          atmosphereLayer.startsWith('radial-gradient')
            ? atmosphereLayer
            : `url(${atmosphereLayer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : null

  return (
    <>
      {/* ── Hero visual section ─────────────────────────────────────────── */}
      <section className="hero">

        {/* Ghost watermark emblem — sits behind the car */}
        {resolveNode(watermarkLogo, 'hero__ghost')}

        {/* Optional per-make atmosphere overlay */}
        {atmosphereStyle && (
          <div className="hero__atmosphere-extra" style={atmosphereStyle} />
        )}

        {/* Marque badge — top-right corner */}
        {resolveNode(marqueBadge, 'hero__badge', `${makeName} badge`)}

        <div className="hero__layout">
          {/* Left: text content */}
          <div className="hero__left">
            <h1 className="hero__title">{makeName}</h1>
            <p className="hero__tagline">{tagline}</p>
            <p className="hero__body">{description}</p>
            <div className="hero__badges">
              {pillars.map((p, i) => (
                <div key={i} className="hero__badge-item">
                  <span className="hero__badge-icon">
                    {typeof p.icon === 'string'
                      ? <img src={p.icon} alt="" aria-hidden="true" />
                      : p.icon
                    }
                  </span>
                  <span className="hero__badge-label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: vehicle image */}
          <div className="hero__right">
            {vehicleImage && (
              typeof vehicleImage === 'string'
                ? <img className="hero__car" src={vehicleImage} alt={makeName} />
                : vehicleImage
            )}
            {shadowLayer !== false && (
              <div
                className="hero__car-shadow"
                style={
                  typeof shadowLayer === 'string'
                    ? { background: shadowLayer }
                    : undefined
                }
              />
            )}
          </div>
        </div>
      </section>

      {/* ── Brand stats strip ───────────────────────────────────────────── */}
      <div className="bb">
        <div className="bb__inner">
          {bbItems.map((item, i) => (
            <div key={item.label} className="bb__item">
              <span className="bb__icon">{item.icon}</span>
              <div className="bb__text">
                <span className="bb__label">{item.label}</span>
                <span className="bb__value">{item.value}</span>
              </div>
              {i < bbItems.length - 1 && <div className="bb__divider" />}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
