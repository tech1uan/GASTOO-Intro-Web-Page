export default function Footer({ links }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#062B2B]">

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-40
          h-96 w-96
          rounded-full
          bg-[#45E7EE]/[0.07]
          blur-[130px]
        "
      />

      <div className="relative mx-auto w-[min(1100px,calc(100%-40px))]">

        {/* MAIN FOOTER */}
        <div className="
          grid
          grid-cols-1
          gap-12
          py-14
          md:grid-cols-[1.5fr_1fr_1fr]
          md:gap-20
        ">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3">

              <div className="
                flex h-12 w-12 shrink-0
                items-center justify-center
                overflow-hidden
                rounded-[15px]
                border border-white/10
                bg-white/[0.05]
                p-2
                shadow-lg shadow-black/10
              ">
                <img
                  src="../gastoo_photos/evotrone_logo.jpg"
                  alt="Evotrone"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="
                  mb-0.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/35
                ">
                  Developed by
                </p>

                <h3 className="
                  m-0
                  text-[18px]
                  font-extrabold
                  tracking-[0.1em]
                  text-white
                ">
                  EVOTRONE
                </h3>
              </div>

            </div>

            <p className="
              mt-5
              max-w-[330px]
              text-[14px]
              leading-6
              text-white/45
            ">
              Building practical digital products that make everyday
              experiences simpler.
            </p>

            <div className="
              mt-6
              flex items-center gap-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white/25
            ">
              <span className="h-1.5 w-1.5 rounded-full bg-[#45E7EE]" />
              Digital products & experiences
            </div>

          </div>


          {/* NAVIGATION */}
          <div>

            <p className="
              mb-5
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.16em]
              text-[#45E7EE]
            ">
              Explore Gastoo
            </p>

            <div className="flex flex-col gap-1 bg-none">

              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-2
                    py-2
                    text-[13px]
                    font-medium
                    text-white/45
                    transition-all
                    duration-200
                    hover:bg-white/[0.035]
                    hover:text-white
                  "
                >

                  <span className="
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-[10px]
                    border border-white/[0.07]
                    bg-white/[0.025]
                    text-white/30
                    transition-all duration-200
                    group-hover:border-[#45E7EE]/20
                    group-hover:bg-[#45E7EE]/10
                    group-hover:text-[#45E7EE]
                  ">
                    <i className={`${link.icon} text-[11px]`} />
                  </span>

                  <span className="flex-1">
                    {link.label}
                  </span>

                  <i className="
                    fa-solid fa-arrow-right
                    text-[9px]
                    text-white/0
                    transition-all duration-200
                    group-hover:translate-x-0.5
                    group-hover:text-[#45E7EE]/60
                  " />

                </a>
              ))}

            </div>

          </div>


          {/* CTA */}
          <div>

            <p className="
              mb-2
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.16em]
              text-[#45E7EE]
            ">
              Get Started
            </p>

            <h3 className="
              mb-2
              text-[20px]
              font-bold
              text-white
            ">
              Ready to take control?
            </h3>

            <p className="
              mb-5
              max-w-[250px]
              text-[13px]
              leading-5
              text-white/35
            ">
              Track your gastos before they track you.
            </p>

            <a
              href="/https://gastoos.onrender.com/"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#45E7EE]
                px-5
                py-3
                text-[12px]
                font-extrabold
                text-[#062B2B]
                shadow-lg
                shadow-[#45E7EE]/10
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#6BEFF4]
                hover:shadow-[#45E7EE]/20
              "
            >
              Open Gastoo

              <i className="
                fa-solid
                fa-arrow-up-right-from-square
                text-[9px]
              " />
            </a>

          </div>

        </div>


        {/* DIVIDER */}
        <div className="h-px bg-white/[0.07]" />


        {/* BOTTOM */}
        <div className="
          flex
          flex-col
          gap-3
          py-6
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">

          <p className="m-0 text-[11px] text-white/25">
            © 2026 Evotrone. All rights reserved.
          </p>

          <div className="
            flex
            items-center
            gap-2
            text-[11px]
            text-white/25
          ">
            <span>Gastoo</span>

            <span className="text-white/10">
              •
            </span>

            <span className="flex items-center gap-1.5">
              Made with
              <i className="fa-solid fa-heart text-[9px] text-[#45E7EE]" />
              for better spending.
            </span>
          </div>

        </div>

      </div>
    </footer>
  )
}