function FeatureCard({ icon, color, bg, title, body }) {
  return (
    <div className="feature-card">
      <div className="icon-badge" style={{ background: bg, color }}>
        <i className={icon} />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default function Features({ items }) {
  return (
    <section id="why">
      <p className="kicker">Why Gastoo</p>
      <h2 className="section-title">A finance tracker with a personality.</h2>
      <p className="section-sub">
        Not another spreadsheet in disguise. Gastoo is built to make tracking money feel light —
        quick to log, easy to read, and honestly a little fun.
      </p>

      <div className="feature-grid">
        {items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
