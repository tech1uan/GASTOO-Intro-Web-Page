export default function DeveloperCard({ dev }) {
  const { logo } = dev

  return (
    <section id="developer">
      <div className="developer-container flex items-center">

        {/* LEFT */}
        <div className="developer-intro flex-1">
         <p className="text-[#45E7EE] text-xs font-extrabold tracking-[0.12em] uppercase mb-4">
          BUILT BY EVOTRONE
        </p>

          <h2 className="section-title">
            From idea to working product.
          </h2>

          <p className="section-sub">
            Gastoo was designed and developed as a practical
            expense-tracking experience built around the way
            people actually manage everyday spending.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="developer-divider shrink-0" />

        {/* RIGHT */}
        <div className="developer-brand flex-1">

          <div className="developer-brand-header flex items-center">
            <img
              src={logo}
              alt="Evotrone logo"
              className="developer-logo"
            />

            <div>
              <span className="developer-label">
                Developed by
              </span>

              <h3 className="developer-company">
                EVOTRONE
              </h3>
            </div>
          </div>

          <p className="developer-description">
            A team of developers and designers
            building digital products that make life simpler.
          </p>

        </div>

      </div>
    </section>
  )
}