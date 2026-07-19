export default function NotificationShowcase({ data }) {
  const { kicker, title, body, lockscreen, notification, cta } = data

  return (
    <section id="notifications">
      <p className="kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-sub">{body}</p>

      <div className="notif-showcase">
        {/* Lock screen mock */}
        <div className="notif-phone">
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="lockscreen">
           
            <img className="w-full h-full" src="../gastoo_photos/web-push.jpg" alt="Web push mockup" />
         
         
            </div>
          </div>
        </div>

        {/* CTA panel */}
        <div className="notif-cta-panel">
          <div className="notif-cta-badge">
            <i className="fa-solid fa-bell" /> Real-time · Web Push
          </div>
          <h3>See it live on your phone.</h3>
          <p>
            Push notifications work straight from the browser — no app store install required.
            Try Gastoo now and opt in to notifications to get a tip like the one on the left.
          </p>
          <a className="btn-primary" href={cta.href} target="_blank" rel="noopener noreferrer">
            <i className={cta.icon} /> {cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}