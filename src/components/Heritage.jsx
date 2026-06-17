import './Heritage.css'

export default function Heritage() {
  return (
    <section id="heritage" className="heritage">
      <div className="heritage__inner">

        {/* Left: text */}
        <div className="heritage__left">
          <div className="heritage__bar" />
          <h2 className="heritage__title">HISTORY &amp; HERITAGE</h2>
          <p className="heritage__body">
            Founded in 1910 in Milan, Alfa Romeo has a rich motorsport legacy and a reputation
            for building cars that are as beautiful as they are thrilling. From Grand Prix
            victories to modern performance icons, Alfa Romeo continues to embody the spirit of
            Italian motor culture.
          </p>
          <a href="#" className="heritage__btn">VIEW TIMELINE →</a>
        </div>

        {/* Right: image */}
        <div className="heritage__right">
          <img
            src="https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Alfa Romeo racing heritage"
            className="heritage__img"
          />
          <div className="heritage__img-overlay" />
        </div>

      </div>
    </section>
  )
}
