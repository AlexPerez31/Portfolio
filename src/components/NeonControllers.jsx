import './NeonControllers.css'

const NEON_COLORS = [
  '#ff2020', // red
  '#ff44cc', // hot pink
  '#cc00ff', // purple
  '#0088ff', // electric blue
  '#00ddff', // cyan
  '#00ff88', // neon green
  '#ffee00', // yellow
  '#ff8800', // orange
  '#ff1493', // deep pink
]

// [type, colorIdx, left%, bottom%, width(px), animName, dur(s), delay(s)]
const INSTANCES = [
  ['ps',   0, 3,   3,  52, 'neonDrift1', 18, -3  ],
  ['xbox', 1, 16,  8,  48, 'neonDrift3', 22, -9  ],
  ['nin',  2, 33,  2,  56, 'neonDrift2', 16, -14 ],
  ['ps',   3, 50,  5,  50, 'neonDrift5', 20, -5  ],
  ['xbox', 4, 67,  0,  54, 'neonDrift4', 15, -11 ],
  ['nin',  5, 82,  6,  46, 'neonDrift1', 19, -7  ],
  ['ps',   6, 24,  35, 60, 'neonDrift4', 24, -16 ],
  ['xbox', 7, 60,  42, 50, 'neonDrift2', 17, -2  ],
  ['nin',  8, 43,  28, 58, 'neonDrift3', 21, -12 ],
]

// ── PlayStation DualShock 4 ──
const PSController = () => (
  <svg viewBox="0 0 80 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* L2/R2 Triggers (top) */}
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M14,17 L14,2 Q14,0 17,0 L34,0 Q38,0 37,6"/>
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M66,17 L66,2 Q66,0 63,0 L46,0 Q42,0 43,6"/>
    {/* L1/R1 Bumpers */}
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M12,20 Q12,8 37,6"/>
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M68,20 Q68,8 43,6"/>
    {/* Main body */}
    <path stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      d="M14,29 C10,19 12,7 22,7 L58,7 C68,7 70,19 66,29
         L68,43 C68,53 60,57 54,53 L47,43 Q44,40 40,40 Q36,40 33,43
         L26,53 C20,57 12,53 12,43 Z"/>
    {/* D-pad */}
    <rect stroke="currentColor" strokeWidth="1.8" x="19.5" y="21" width="4" height="13" rx="1.5"/>
    <rect stroke="currentColor" strokeWidth="1.8" x="15" y="25.5" width="13" height="4" rx="1.5"/>
    {/* △ ○ ✕ □ Face buttons */}
    <circle stroke="currentColor" strokeWidth="1.8" cx="62" cy="17" r="2.8"/>
    <circle stroke="currentColor" strokeWidth="1.8" cx="68" cy="23" r="2.8"/>
    <circle stroke="currentColor" strokeWidth="1.8" cx="62" cy="29" r="2.8"/>
    <circle stroke="currentColor" strokeWidth="1.8" cx="56" cy="23" r="2.8"/>
    {/* Touchpad */}
    <rect stroke="currentColor" strokeWidth="1.8" x="33" y="16" width="14" height="10" rx="2.5"/>
    {/* Left analog stick */}
    <circle stroke="currentColor" strokeWidth="1.8" cx="27" cy="34" r="5.5"/>
    <circle stroke="currentColor" strokeWidth="1" cx="27" cy="34" r="2" opacity="0.55"/>
    {/* Right analog stick */}
    <circle stroke="currentColor" strokeWidth="1.8" cx="52" cy="34" r="5.5"/>
    <circle stroke="currentColor" strokeWidth="1" cx="52" cy="34" r="2" opacity="0.55"/>
    {/* PS Logo button */}
    <circle stroke="currentColor" strokeWidth="1.8" cx="40" cy="14" r="3.2"/>
    {/* Share / Options */}
    <circle stroke="currentColor" strokeWidth="1.4" cx="33.5" cy="13" r="1.8"/>
    <circle stroke="currentColor" strokeWidth="1.4" cx="46.5" cy="13" r="1.8"/>
  </svg>
)

// ── Xbox Series X ──
const XboxController = () => (
  <svg viewBox="0 0 80 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* LT/RT Triggers */}
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M14,18 L14,2 Q14,0 18,0 L34,0 Q38,0 37,6"/>
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M66,18 L66,2 Q66,0 62,0 L46,0 Q42,0 43,6"/>
    {/* LB/RB Bumpers */}
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M13,21 Q13,8 37,6"/>
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M67,21 Q67,8 43,6"/>
    {/* Main body */}
    <path stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      d="M16,29 C12,19 14,7 24,7 L56,7 C66,7 68,19 64,29
         L66,43 C66,53 58,57 52,53 L46,43 Q43,40 40,40 Q37,40 34,43
         L28,53 C22,57 14,53 14,43 Z"/>
    {/* Left analog (upper-left — Xbox style) */}
    <circle stroke="currentColor" strokeWidth="1.8" cx="26" cy="23" r="6.5"/>
    <circle stroke="currentColor" strokeWidth="1" cx="26" cy="23" r="2.5" opacity="0.55"/>
    {/* D-pad (lower-left) */}
    <rect stroke="currentColor" strokeWidth="1.8" x="21" y="33" width="4" height="14" rx="1.5"/>
    <rect stroke="currentColor" strokeWidth="1.8" x="17" y="37.5" width="12" height="4" rx="1.5"/>
    {/* A B X Y buttons */}
    <circle stroke="currentColor" strokeWidth="1.8" cx="62" cy="18" r="2.8"/>
    <circle stroke="currentColor" strokeWidth="1.8" cx="68" cy="24" r="2.8"/>
    <circle stroke="currentColor" strokeWidth="1.8" cx="62" cy="30" r="2.8"/>
    <circle stroke="currentColor" strokeWidth="1.8" cx="56" cy="24" r="2.8"/>
    {/* Right analog (lower-right — Xbox style) */}
    <circle stroke="currentColor" strokeWidth="1.8" cx="53" cy="37" r="6.5"/>
    <circle stroke="currentColor" strokeWidth="1" cx="53" cy="37" r="2.5" opacity="0.55"/>
    {/* Xbox Guide button (large distinctive circle) */}
    <circle stroke="currentColor" strokeWidth="2" cx="40" cy="18" r="6"/>
    <circle stroke="currentColor" strokeWidth="1" cx="40" cy="18" r="2.8" opacity="0.65"/>
    {/* Menu / View */}
    <circle stroke="currentColor" strokeWidth="1.5" cx="47" cy="26" r="2.2"/>
    <circle stroke="currentColor" strokeWidth="1.5" cx="33" cy="26" r="2.2"/>
  </svg>
)

// ── Nintendo Switch Pro Controller ──
const NintendoController = () => (
  <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* L/R Triggers */}
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M12,20 L12,3 Q12,0 16,0 L33,0 Q37,0 36,6"/>
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M68,20 L68,3 Q68,0 64,0 L47,0 Q43,0 44,6"/>
    {/* L/R Bumpers */}
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M12,20 L12,12 Q12,6 18,6 L36,6"/>
    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      d="M68,20 L68,12 Q68,6 62,6 L44,6"/>
    {/* Main body — wider, rounder Nintendo shape */}
    <path stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      d="M12,20 Q12,6 22,6 L58,6 Q68,6 68,20 L68,48 Q68,58 58,58 L22,58 Q12,58 12,48 Z"/>
    {/* Left analog (upper-left) */}
    <circle stroke="currentColor" strokeWidth="1.8" cx="24" cy="22" r="7"/>
    <circle stroke="currentColor" strokeWidth="1" cx="24" cy="22" r="2.8" opacity="0.55"/>
    {/* D-pad (lower-left) */}
    <rect stroke="currentColor" strokeWidth="1.8" x="21" y="34" width="4" height="16" rx="1.5"/>
    <rect stroke="currentColor" strokeWidth="1.8" x="17" y="38.5" width="12" height="4.5" rx="1.5"/>
    {/* A B X Y buttons */}
    <circle stroke="currentColor" strokeWidth="1.8" cx="62" cy="22" r="2.8"/>
    <circle stroke="currentColor" strokeWidth="1.8" cx="68" cy="29" r="2.8"/>
    <circle stroke="currentColor" strokeWidth="1.8" cx="62" cy="36" r="2.8"/>
    <circle stroke="currentColor" strokeWidth="1.8" cx="56" cy="29" r="2.8"/>
    {/* Right analog (lower-right) */}
    <circle stroke="currentColor" strokeWidth="1.8" cx="56" cy="45" r="7"/>
    <circle stroke="currentColor" strokeWidth="1" cx="56" cy="45" r="2.8" opacity="0.55"/>
    {/* Home button (center) */}
    <circle stroke="currentColor" strokeWidth="2" cx="40" cy="32" r="5"/>
    <circle stroke="currentColor" strokeWidth="1.2" cx="40" cy="32" r="2.2" opacity="0.7"/>
    {/* + button */}
    <circle stroke="currentColor" strokeWidth="1.5" cx="48" cy="22" r="3.2"/>
    <line stroke="currentColor" strokeWidth="1.3" x1="45" y1="22" x2="51" y2="22"/>
    <line stroke="currentColor" strokeWidth="1.3" x1="48" y1="19" x2="48" y2="25"/>
    {/* - button */}
    <circle stroke="currentColor" strokeWidth="1.5" cx="32" cy="22" r="3.2"/>
    <line stroke="currentColor" strokeWidth="1.3" x1="29" y1="22" x2="35" y2="22"/>
    {/* Capture button */}
    <rect stroke="currentColor" strokeWidth="1.5" x="38" y="21" width="4" height="4" rx="0.8"/>
  </svg>
)

const CTRL_MAP = { ps: PSController, xbox: XboxController, nin: NintendoController }

export default function NeonControllers() {
  return (
    <div className="neon-controllers" aria-hidden="true">
      {INSTANCES.map(([type, colorIdx, leftPct, bottomPct, width, animName, dur, delay], i) => {
        const Ctrl = CTRL_MAP[type]
        return (
          <div
            key={i}
            className="neon-ctrl-wrap"
            style={{
              left:              `${leftPct}%`,
              bottom:            `${bottomPct}%`,
              width:             `${width}px`,
              color:             NEON_COLORS[colorIdx],
              animationName:     animName,
              animationDuration: `${dur}s`,
              animationDelay:    `${delay}s`,
            }}
          >
            <Ctrl />
          </div>
        )
      })}
    </div>
  )
}
