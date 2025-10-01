// src/app/components/Features.tsx
export default function Features() {
  const categories = [
    { name: "ACTION", img: "/accion.png" },
    { name: "ADVENTURE", img: "/aventura.png" },
    { name: "STRATEGY", img: "/estrategia.png" },
    { name: "ROLEPLAYING", img: "/rpg.png" },
    { name: "HORROR", img: "/signalis.png" },
    { name: "RACING", img: "/art.png" },
  ]

  return (
    <section className="features" id="features">
      <div className="features-header">
        <h2 className="featuretittle">C A T E G O R I E S</h2>
        <p className="subfeature">Explore our main gaming categories</p>
      </div>

      <div className="features-grid">
        {categories.map(cat => (
          <div key={cat.name} className="feature-card">
            <div className="feature-img-container">
              <img src={cat.img} alt={`${cat.name} games`} className="feature-img" />
            </div>
            <div className="feature-content">
              <h3 className="feature-name">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
