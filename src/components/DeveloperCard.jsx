export default function DeveloperCard({ dev }) {
  const { name, role, avatar, bio, highlights, stack, socials } = dev

  return (
    <section id="developer">
      <p className="kicker">Meet the Developer</p>
      <h2 className="section-title">One dev, the whole stack.</h2>
      <p className="section-sub">
        Gastoo was designed and built end to end — database, API, and every pixel of the interface.
      </p>

      <div className="dev-section">
        <div className="dev-glow" aria-hidden="true" />
        <div className="dev-grid">
          <div className="dev-portrait-wrap">
            <div
              className="dev-portrait"
              style={avatar ? { backgroundImage: `url(${avatar})`, borderStyle: 'solid' } : undefined}
            >
              {/* IMAGE TEMPLATE: set developer.avatar in data/content.js to drop in a headshot */}
              {!avatar && (
                <>
                  <i className="fa-solid fa-user-astronaut" />
                  <span>Drop headshot here</span>
                </>
              )}
              <div className="status-dot" title="Available for work" />
            </div>
            <h4 className="dev-name">{name}</h4>
            <p className="dev-role">{role.toUpperCase()}</p>
            <div className="dev-socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="dev-content">
            <p className="kicker" style={{ color: 'var(--mint-300)' }}>
              The person behind Gastoo
            </p>
            <h3>Built solo, front to back.</h3>
            <p className="bio">{bio}</p>

            <div className="dev-highlights">
              {highlights.map((h) => (
                <div className="dev-highlight" key={h.title}>
                  <i className={h.icon} />
                  <b>{h.title}</b>
                  <span>{h.note}</span>
                </div>
              ))}
            </div>

            <p className="dev-stack-label">Tech Stack</p>
            <div className="dev-stack">
              {stack.map((tech) => (
                <span className="pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
