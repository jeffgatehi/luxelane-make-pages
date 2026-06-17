import './Models.css'

const models = [
  {
    name: 'GIULIA',
    category: 'Dynamic sports sedan',
    specs: ['2.0L Turbo / 2.9L V6', '200 – 510 hp', 'RWD / AWD'],
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'STELVIO',
    category: 'Performance SUV',
    specs: ['2.0L Turbo / 2.9L V6', '280 – 505 hp', 'AWD'],
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'TONALE',
    category: 'Compact luxury SUV',
    specs: ['1.5L Hybrid / 2.0L Turbo', '160 – 275 hp', 'AWD'],
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: '4C',
    category: 'Lightweight sports car',
    specs: ['1.7L Turbo', '237 hp', 'RWD'],
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function Models() {
  return (
    <section id="models" className="models section-pad">
      <h2 className="models__heading">POPULAR MODELS</h2>

      <div className="models__grid">
        {models.map(m => (
          <article key={m.name} className="model-card">
            <div className="model-card__img-wrap">
              <img src={m.image} alt={m.name} className="model-card__img" />
            </div>
            <div className="model-card__body">
              <h3 className="model-card__name">{m.name}</h3>
              <p className="model-card__cat">{m.category}</p>
              <ul className="model-card__specs">
                {m.specs.map(s => (
                  <li key={s}>
                    <span className="model-card__arrow">→</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="models__footer">
        <a href="#" className="models__view-all">VIEW ALL ALFA ROMEO STOCK →</a>
      </div>
    </section>
  )
}
