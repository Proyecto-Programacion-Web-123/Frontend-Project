// src/app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="begin">
      <div className="begin-content">
        <section className="home" id="home">
          <img src="/logo.png" className="logo" alt="Logo TERMN" />
        </section>

        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-text">IT'S DANGEROUS TO GO ALONE ...</div>
            <div className="marquee-text">IT'S DANGEROUS TO GO ALONE ...</div>
            <div className="marquee-text">IT'S DANGEROUS TO GO ALONE ...</div>
            <div className="marquee-text">IT'S DANGEROUS TO GO ALONE ...</div>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-track reverse">
            <div className="marquee-text">NES • SEGA GENESIS • ...</div>
            <div className="marquee-text">NES • SEGA GENESIS • ...</div>
            <div className="marquee-text">NES • SEGA GENESIS • ...</div>
            <div className="marquee-text">NES • SEGA GENESIS • ...</div>
          </div>
        </div>

        <section className="hero-section" id="hero">
          <p className="hero-text">WHERE ALL GAMES CONVERGE • A TERMINAL BETWEEN WORLDS • ACCESS ALL KINDS OF GAMING CONTENT</p>
          <a href="#hab" className="btn-discover">DISCOVER GAMES</a>
        </section>
      </div>

      <div className="begin-image">
        <img src="/ilustracion.png" alt="Ilustración Elden Ring" className="eldenring" />
      </div>
    </section>
  )
}
