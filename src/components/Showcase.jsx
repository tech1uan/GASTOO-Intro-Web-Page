function MockSlot({ icon, label, caption, note, image }) {
  return (
    <div className="mock-slot">
      <div className="mock-frame">
        <div
          className="mock-inner"
          style={image ? { backgroundImage: `url(${image})`, borderStyle: 'solid' } : undefined}
        >
          {/* IMAGE TEMPLATE: set this slot's `image` field in data/content.js */}
          {!image && (
            <>
              <i className={icon} />
              <span>
                {label}
                <br />
                screenshot goes here
              </span>
            </>
          )}
        </div>
      </div>
      <p className="mock-caption">
        {caption}
        <small>{note}</small>
      </p>
    </div>
  )
}

export default function Showcase({ slots, stats }) {
  return (
    <section id="showcase">
      <p className="kicker">Take a look</p>
      <h2 className="section-title">Straight from the app.</h2>
      <p className="section-sub">
          Every screen is thoughtfully designed to make expense tracking simple,
       organized, and enjoyable, helping users stay in control of their finances.
      </p>

      <div className="showcase-belt">
        {slots.map((slot) => (
          <MockSlot key={slot.id} {...slot} />
        ))}
      </div>

      <p className="swap-note">
      <i className="fa-solid fa-circle-info" /> Designed with simplicity and usability in mind, making expense tracking effortless for everyone.
    </p>

      <div className="stat-strip" style={{ marginTop: 56 }}>
        {stats.map((stat) => (
          <div className="stat-cell" key={stat.label}>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
