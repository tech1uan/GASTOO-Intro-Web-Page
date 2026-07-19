export default function Hero({ data }) {
  const { eyebrow, titleLine1, titleAccent, subtitle, primaryCta, secondaryCta, phoneImage } = data

  return (
    <header className="hero">
      <div className="eyebrow">
        <i className="fa-solid fa-peso-sign" /> {eyebrow}
      </div>

      <h1 className="headline">
        {titleLine1} <span className="accent">{titleAccent}</span>
      </h1>

      <p className="sub">{subtitle}</p>

      <div className="cta-row">
        <a href={primaryCta.href} className="btn-primary">
          <i className={primaryCta.icon} /> {primaryCta.label}
        </a>
        <a href={secondaryCta.href} className="btn-ghost">
          <i className={secondaryCta.icon} /> {secondaryCta.label}
        </a>
      </div>

      <div className="hero-visual">
        <div className="float-mascot m1">
          <i className="fa-solid fa-piggy-bank" />
        </div>
        <div className="float-mascot m2">
          <i className="fa-solid fa-coins" />
        </div>

          <div className="w-[700px] h-full flex items-center justify-center">
          {phoneImage && (
            <img
              className="w-full h-auto object-contain"
              src={phoneImage}
              alt="Hero Mockup"
            />
          )}
        </div>
      </div>
    </header>
  )
}
