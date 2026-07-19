export default function Footer({ links }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-bottom">
          <div>
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div>© 2026 Gastoo. Track your gastos before they track you.</div>
        </div>
      </div>
    </footer>
  )
}
