// Each coin is just data -> JSX. Tweak `coinConfig` to change how many
// coins float up and how fast, without touching any markup.
const coinConfig = [
  { left: '6%', duration: '11s', delay: '0s', driftX: '60px' },
  { left: '18%', duration: '14s', delay: '2s', driftX: '-40px' },
  { left: '34%', duration: '9s', delay: '.5s', driftX: '30px' },
  { left: '52%', duration: '13s', delay: '3s', driftX: '-60px' },
  { left: '68%', duration: '10s', delay: '1.5s', driftX: '50px' },
  { left: '80%', duration: '15s', delay: '4s', driftX: '-30px' },
  { left: '92%', duration: '12s', delay: '2.5s', driftX: '20px' },
]

export default function CoinField() {
  return (
    <div className="field" aria-hidden="true">
      <div
        className="blob"
        style={{ width: 420, height: 420, top: -120, left: -140, background: 'var(--teal-400)' }}
      />
      <div
        className="blob"
        style={{ width: 360, height: 360, top: '20%', right: -160, background: 'var(--mint-300)' }}
      />
      {coinConfig.map((coin, i) => (
        <div
          key={i}
          className="coin"
          style={{
            left: coin.left,
            animationDuration: coin.duration,
            animationDelay: coin.delay,
            '--drift-x': coin.driftX,
          }}
        />
      ))}
    </div>
  )
}
