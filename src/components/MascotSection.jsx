export default function MascotSection({ intro, bubbles }) {
  return (
    <section id="mascot">
      <p className="kicker">{intro.kicker}</p>
      <h2 className="section-title">{intro.title}</h2>
      <p className="section-sub">{intro.subtitle}</p>

      <div className="mascot-orbit">
        <div className="mascot-center-wrap">
          <div className="mascot-glow" aria-hidden="true" />

          {intro.image ? (
            <img className="mascot-img" src={intro.image} alt={intro.name} />
          ) : (
            <div className="mascot-placeholder">
              <i className="fa-solid fa-piggy-bank" />
              <span>Drop mascot art here</span>
              <small>Transparent PNG/SVG, tall aspect ratio</small>
            </div>
          )}

          <p className="mascot-name">{intro.name}</p>
          <p className="mascot-tagline">{intro.tagline}</p>
        </div>

        {bubbles.map((bubble) => (
          <div className={`orbit-bubble orbit-${bubble.position}`} key={bubble.text}>
            <i className={bubble.icon} />
            <p>{bubble.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}