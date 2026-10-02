
import React from 'react';

const orbs = [
  { id: 1, top: '10%', left: '15%', size: 280, duration: 28, delay: 0,  driftX: '60px',  driftY: '40px',  opacity: 0.045 },
  { id: 2, top: '55%', left: '75%', size: 220, duration: 35, delay: 6,  driftX: '-50px', driftY: '-30px', opacity: 0.035 },
  { id: 3, top: '30%', left: '50%', size: 350, duration: 42, delay: 12, driftX: '40px',  driftY: '60px',  opacity: 0.025 },
  { id: 4, top: '75%', left: '20%', size: 200, duration: 30, delay: 4,  driftX: '-40px', driftY: '-50px', opacity: 0.040 },
  { id: 5, top: '20%', left: '82%', size: 260, duration: 38, delay: 18, driftX: '-60px', driftY: '35px',  opacity: 0.030 },
];

const ripples = [
  { id: 1, top: '50%', left: '50%', duration: 6,  delay: 0   },
  { id: 2, top: '50%', left: '50%', duration: 6,  delay: 2   },
  { id: 3, top: '50%', left: '50%', duration: 6,  delay: 4   },
  { id: 4, top: '18%', left: '12%', duration: 8,  delay: 1   },
  { id: 5, top: '18%', left: '12%', duration: 8,  delay: 3.5 },
  { id: 6, top: '80%', left: '88%', duration: 7,  delay: 2.5 },
  { id: 7, top: '80%', left: '88%', duration: 7,  delay: 5   },
];

const particles = [
  { id: 1,  left: '2%',  size: 2, duration: 14, delay: 0,    drift: '18px',  opacity: 0.25 },
  { id: 2,  left: '6%',  size: 1, duration: 18, delay: 2,    drift: '-12px', opacity: 0.20 },
  { id: 3,  left: '10%', size: 3, duration: 12, delay: 5,    drift: '22px',  opacity: 0.28 },
  { id: 4,  left: '14%', size: 1, duration: 20, delay: 1,    drift: '-20px', opacity: 0.18 },
  { id: 5,  left: '18%', size: 2, duration: 16, delay: 7,    drift: '15px',  opacity: 0.22 },
  { id: 6,  left: '22%', size: 1, duration: 11, delay: 3,    drift: '-8px',  opacity: 0.30 },
  { id: 7,  left: '26%', size: 3, duration: 19, delay: 9,    drift: '25px',  opacity: 0.20 },
  { id: 8,  left: '30%', size: 1, duration: 13, delay: 4,    drift: '-18px', opacity: 0.25 },
  { id: 9,  left: '34%', size: 2, duration: 17, delay: 6,    drift: '10px',  opacity: 0.23 },
  { id: 10, left: '38%', size: 1, duration: 15, delay: 11,   drift: '-24px', opacity: 0.18 },
  { id: 11, left: '42%', size: 3, duration: 22, delay: 2.5,  drift: '20px',  opacity: 0.21 },
  { id: 12, left: '46%', size: 1, duration: 10, delay: 8,    drift: '-14px', opacity: 0.28 },
  { id: 13, left: '50%', size: 2, duration: 16, delay: 0.5,  drift: '16px',  opacity: 0.24 },
  { id: 14, left: '54%', size: 1, duration: 21, delay: 13,   drift: '-10px', opacity: 0.19 },
  { id: 15, left: '58%', size: 2, duration: 13, delay: 10,   drift: '28px',  opacity: 0.22 },
  { id: 16, left: '62%', size: 1, duration: 18, delay: 14,   drift: '-16px', opacity: 0.17 },
  { id: 17, left: '66%', size: 2, duration: 14, delay: 3.5,  drift: '12px',  opacity: 0.26 },
  { id: 18, left: '70%', size: 1, duration: 20, delay: 16,   drift: '-22px', opacity: 0.20 },
  { id: 19, left: '74%', size: 3, duration: 11, delay: 7.5,  drift: '18px',  opacity: 0.29 },
  { id: 20, left: '78%', size: 1, duration: 17, delay: 12,   drift: '-8px',  opacity: 0.21 },
  { id: 21, left: '82%', size: 2, duration: 15, delay: 1.5,  drift: '30px',  opacity: 0.23 },
  { id: 22, left: '86%', size: 1, duration: 23, delay: 6.5,  drift: '-26px', opacity: 0.18 },
  { id: 23, left: '90%', size: 2, duration: 12, delay: 9.5,  drift: '14px',  opacity: 0.27 },
  { id: 24, left: '94%', size: 1, duration: 19, delay: 4.5,  drift: '-18px', opacity: 0.20 },
  { id: 25, left: '98%', size: 3, duration: 14, delay: 17,   drift: '10px',  opacity: 0.22 },
  { id: 26, left: '4%',  size: 1, duration: 16, delay: 15,   drift: '-30px', opacity: 0.19 },
  { id: 27, left: '9%',  size: 2, duration: 21, delay: 0.8,  drift: '20px',  opacity: 0.24 },
  { id: 28, left: '16%', size: 1, duration: 13, delay: 11.5, drift: '-12px', opacity: 0.20 },
  { id: 29, left: '24%', size: 2, duration: 17, delay: 18,   drift: '24px',  opacity: 0.26 },
  { id: 30, left: '32%', size: 1, duration: 10, delay: 5.5,  drift: '-20px', opacity: 0.18 },
  { id: 31, left: '44%', size: 2, duration: 19, delay: 13.5, drift: '16px',  opacity: 0.22 },
  { id: 32, left: '56%', size: 1, duration: 14, delay: 2.2,  drift: '-14px', opacity: 0.24 },
  { id: 33, left: '68%', size: 3, duration: 22, delay: 8.5,  drift: '22px',  opacity: 0.20 },
  { id: 34, left: '80%', size: 1, duration: 11, delay: 19,   drift: '-10px', opacity: 0.28 },
  { id: 35, left: '92%', size: 2, duration: 18, delay: 3.8,  drift: '18px',  opacity: 0.21 },
];

// Elder Futhark runes — fits the Dark Souls aesthetic perfectly
const runes = [
  { id: 1,  top: '8%',  left: '5%',  char: 'ᛟ', size: '3rem',   duration: 12, delay: 0,   opacity: 0.055 },
  { id: 2,  top: '20%', left: '88%', char: 'ᚦ', size: '2.5rem', duration: 16, delay: 3,   opacity: 0.045 },
  { id: 3,  top: '35%', left: '3%',  char: 'ᚨ', size: '4rem',   duration: 14, delay: 7,   opacity: 0.040 },
  { id: 4,  top: '50%', left: '93%', char: 'ᛏ', size: '3rem',   duration: 18, delay: 1,   opacity: 0.050 },
  { id: 5,  top: '65%', left: '8%',  char: 'ᚱ', size: '2.5rem', duration: 10, delay: 5,   opacity: 0.060 },
  { id: 6,  top: '75%', left: '90%', char: 'ᛚ', size: '3.5rem', duration: 20, delay: 9,   opacity: 0.042 },
  { id: 7,  top: '15%', left: '48%', char: 'ᚷ', size: '2rem',   duration: 13, delay: 4,   opacity: 0.035 },
  { id: 8,  top: '42%', left: '52%', char: 'ᛜ', size: '4.5rem', duration: 22, delay: 11,  opacity: 0.030 },
  { id: 9,  top: '88%', left: '30%', char: 'ᚾ', size: '3rem',   duration: 15, delay: 6,   opacity: 0.048 },
  { id: 10, top: '60%', left: '70%', char: 'ᛁ', size: '2.5rem', duration: 17, delay: 2,   opacity: 0.052 },
  { id: 11, top: '5%',  left: '70%', char: 'ᚠ', size: '3.5rem', duration: 11, delay: 8,   opacity: 0.040 },
  { id: 12, top: '80%', left: '55%', char: 'ᛞ', size: '2rem',   duration: 19, delay: 14,  opacity: 0.045 },
];

const BackgroundFX = () => {
  return (
    <div className="bgfx-container" aria-hidden="true">

      {/* Soul orbs */}
      {orbs.map((o) => (
        <div
          key={o.id}
          className="bgfx-orb"
          style={{
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            animationDuration: `${o.duration}s`,
            animationDelay: `${o.delay}s`,
            '--orb-opacity': o.opacity,
            '--drift-x': o.driftX,
            '--drift-y': o.driftY,
          } as React.CSSProperties}
        />
      ))}

      {/* Ring ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="bgfx-ripple"
          style={{
            top: r.top,
            left: r.left,
            animationDuration: `${r.duration}s`,
            animationDelay: `${r.delay}s`,
          }}
        />
      ))}

      {/* Edge vignette */}
      <div className="bgfx-vignette" />

      {/* Bottom mist */}
      <div className="bgfx-mist" />

      {/* Floating runes */}
      {runes.map((r) => (
        <div
          key={r.id}
          className="bgfx-rune"
          style={{
            top: r.top,
            left: r.left,
            fontSize: r.size,
            animationDuration: `${r.duration}s`,
            animationDelay: `${r.delay}s`,
            '--rune-opacity': r.opacity,
          } as React.CSSProperties}
        >
          {r.char}
        </div>
      ))}

      {/* Ash particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="bgfx-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': p.drift,
            '--opacity': p.opacity,
          } as React.CSSProperties}
        />
      ))}

    </div>
  );
};

export default BackgroundFX;
