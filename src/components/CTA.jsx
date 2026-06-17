import './CTA.css'

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta__inner">

        {/* Left car */}
        <div className="cta__car cta__car--left">
          <img
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt=""
            aria-hidden="true"
          />
          <div className="cta__car-fade cta__car-fade--left" />
        </div>

        {/* Center content */}
        <div className="cta__content">
          <h2 className="cta__heading">
            READY TO IMPORT YOUR{' '}
            <span className="cta__heading-gold">ALFA ROMEO?</span>
          </h2>
          <p className="cta__body">
            Browse our current Alfa Romeo stock or contact the Luxe Lane Autos team for
            personalised import advice. We handle everything from auction to your driveway.
          </p>
          <div className="cta__actions">
            <a href="#models" className="cta__btn cta__btn--primary">
              VIEW ALFA ROMEO STOCK →
            </a>
            <a href="#import" className="cta__btn cta__btn--ghost">
              GET AN IMPORT QUOTE
            </a>
          </div>
        </div>

        {/* Right car */}
        <div className="cta__car cta__car--right">
          <img
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt=""
            aria-hidden="true"
          />
          <div className="cta__car-fade cta__car-fade--right" />
        </div>

      </div>

      {/* Footer */}
      <div className="cta__footer">
        <div className="cta__footer-inner">
          <a href="#" className="cta__brand">
            <strong>LUXE</strong>LANE
            <span className="cta__brand-sub">AUTOS</span>
          </a>
          <nav className="cta__footer-nav">
            <a href="#">All Marques</a>
            <a href="#heritage">Heritage</a>
            <a href="#models">Models</a>
            <a href="#import">Import Guide</a>
            <a href="#contact">Contact</a>
          </nav>
          <p className="cta__copy">© 2024 Luxe Lane Autos. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
