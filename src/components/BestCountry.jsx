import './BestCountry.css'

const countries = [
  {
    flag: '🇯🇵',
    name: 'JAPAN',
    points: [
      'Excellent vehicle condition (JDM standards)',
      'Wide range of models & grades',
      'Competitive pricing',
      'Well-maintained',
    ],
  },
  {
    flag: '🇬🇧',
    name: 'UNITED KINGDOM',
    points: [
      'Full service history & MOT records',
      'Right-hand drive standard',
      'Newer model years available',
      'Strong dealer network',
    ],
  },
  {
    flag: '🇿🇦',
    name: 'SOUTH AFRICA',
    points: [
      'Shorter sea freight time',
      'Competitive exchange rate',
      'Many low-mileage vehicles',
      'Good value for money',
    ],
  },
  {
    flag: '🇦🇺',
    name: 'AUSTRALIA',
    points: [
      'Low mileage vehicles',
      'Well-maintained',
      'Popular SUV & performance models',
      'Quality road conditions',
    ],
  },
]

export default function BestCountry() {
  return (
    <section className="bc section-pad">
      <div className="bc__inner">
        <h2 className="bc__heading">BEST COUNTRY TO IMPORT FROM</h2>

        <div className="bc__grid">
          {countries.map(c => (
            <div key={c.name} className="bc__col">
              <div className="bc__col-header">
                <span className="bc__flag">{c.flag}</span>
                <h3 className="bc__name">{c.name}</h3>
              </div>
              <ul className="bc__points">
                {c.points.map(p => (
                  <li key={p}>
                    <span className="bc__arrow">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bc__footer">
          <a href="#" className="bc__view-all">VIEW ALL STOCK →</a>
        </div>
      </div>
    </section>
  )
}
