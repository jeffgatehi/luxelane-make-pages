import './ImportVsBuy.css'

function CheckIcon() {
  return (
    <svg className="ivb__icon ivb__icon--check" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#2ea555"/>
      <path d="M5.5 10 L8.5 13 L14.5 7" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg className="ivb__icon ivb__icon--cross" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#c0392b"/>
      <path d="M6.5 6.5 L13.5 13.5 M13.5 6.5 L6.5 13.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

const advantages = [
  'Lower prices',
  'Wider selection',
  'Better specifications',
  'Lower mileage options',
  'Full grade availability',
]

const considerations = [
  'Import process time (6–10 weeks)',
  'Customs duty & CRSP valuation',
  'Requires experienced importer',
  'Shipping & documentation fees',
]

export default function ImportVsBuy() {
  return (
    <section className="ivb">
      <div className="ivb__inner">

        <div className="ivb__left">
          <h2 className="ivb__heading">IMPORT VS<br/>BUY LOCAL</h2>
        </div>

        <div className="ivb__right">
          <div className="ivb__card">
            <div className="ivb__card-header ivb__card-header--green">
              ADVANTAGES OF IMPORTING
            </div>
            <ul className="ivb__list">
              {advantages.map(a => (
                <li key={a} className="ivb__item">
                  <CheckIcon />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ivb__card">
            <div className="ivb__card-header ivb__card-header--red">
              CONSIDERATIONS
            </div>
            <ul className="ivb__list">
              {considerations.map(c => (
                <li key={c} className="ivb__item">
                  <CrossIcon />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
