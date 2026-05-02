"use client";

import { useEffect, useState, type CSSProperties, type SVGProps } from "react";

/* ============================================================
   ICON SET — hand-tuned SVGs ported from kf-icons.jsx
   ============================================================ */

type IconProps = { size?: number } & Omit<SVGProps<SVGSVGElement>, "size">;

const Flame = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 2.5c.7 3.2 3.5 4.6 4.8 7.1 1.6 3-.4 8.9-4.8 8.9s-6.4-5.4-4.8-8.5c1-1.9 2.6-2.6 2.6-4.8 0-.6.1-1.5 0-2.7Z" />
    <path d="M12 12.5c.5 1.4 1.6 2 1.6 3.4 0 1.6-1.5 2.6-2.7 2.1-.9-.4-1.6-1.5-.9-2.7.5-.8 1.4-1.3 2-2.8Z" fill="currentColor" opacity=".15" />
  </svg>
);
const Spark = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8" />
  </svg>
);
const Calendar = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </svg>
);
const Bolt = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);
const Chart = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 20V8M10 20V4M16 20v-7M22 20H2" />
  </svg>
);
const ImageIcon = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <circle cx="9" cy="10" r="1.6" />
    <path d="m4 18 5-5 4 4 3-3 4 4" />
  </svg>
);
const FileIcon = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);
const Bot = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="4" y="7" width="16" height="13" rx="3" />
    <path d="M12 3v4M9 13h.01M15 13h.01M9 17h6" />
  </svg>
);
const Check = ({ size = 16, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m4 12 5 5L20 6" />
  </svg>
);
const Arrow = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Play = ({ size = 14, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M7 4.5v15a1 1 0 0 0 1.55.83l11.5-7.5a1 1 0 0 0 0-1.66l-11.5-7.5A1 1 0 0 0 7 4.5Z" />
  </svg>
);
const MenuIcon = ({ size = 20, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
const LinkedIn = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v15H.22V8Zm7.5 0h4.37v2.05h.06c.61-1.15 2.09-2.36 4.31-2.36 4.61 0 5.46 3.04 5.46 6.99V23h-4.56v-6.62c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23H7.72V8Z" />
  </svg>
);
const Instagram = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);
const Facebook = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12a10 10 0 1 0-11.5 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12Z" />
  </svg>
);
const XLogo = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.244 2H21.5l-7.43 8.49L23 22h-6.83l-5.34-7-6.11 7H1.46l7.95-9.08L1 2h7l4.83 6.39L18.244 2Zm-1.2 18h1.83L7.05 4H5.1l11.94 16Z" />
  </svg>
);

/* ============================================================
   EMBERS — rising sparks particle field
   ============================================================ */

type Spark = { left: number; delay: number; duration: number; size: number };

function Embers({ count = 18, opacity = 1, zIndex = 1 }: { count?: number; opacity?: number; zIndex?: number }) {
  // Generate sparks after mount: avoids SSR hydration mismatch and the
  // react-hooks/purity rule (Math.random is non-deterministic).
  const [sparks, setSparks] = useState<Spark[]>([]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional one-shot mount-time generation of decorative particles
    setSparks(
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        delay: -Math.random() * 8,
        duration: 7 + Math.random() * 9,
        size: 3 + Math.random() * 5,
      })),
    );
  }, [count]);

  return (
    <div
      aria-hidden
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity, zIndex }}
    >
      {sparks.map((s, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ============================================================
   FLAME CURSOR — fixed-position SVG + canvas particle trail
   ============================================================ */

function FlameCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 880px)").matches) return;

    const cursor = document.getElementById("pj1-flame-cursor");
    const canvas = document.getElementById("pj1-flame-trail") as HTMLCanvasElement | null;
    if (!cursor || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let lx = mx;
    let ly = my;
    let cx = mx;
    let cy = my;

    type P = { x: number; y: number; vx: number; vy: number; life: number; decay: number; size: number; hue: number };
    const particles: P[] = [];

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const dx = mx - lx;
      const dy = my - ly;
      const dist = Math.hypot(dx, dy);
      const n = Math.min(4, Math.ceil(dist / 8));
      for (let i = 0; i < n; i++) {
        const t = i / Math.max(1, n);
        particles.push({
          x: lx + dx * t + (Math.random() - 0.5) * 6,
          y: ly + dy * t + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -0.4 - Math.random() * 0.8,
          life: 1,
          decay: 0.018 + Math.random() * 0.02,
          size: 2 + Math.random() * 4,
          hue: 18 + Math.random() * 22,
        });
      }
      lx = mx;
      ly = my;
    };
    const onDown = () => {
      for (let i = 0; i < 25; i++) {
        particles.push({
          x: mx,
          y: my,
          vx: (Math.random() - 0.5) * 5,
          vy: -1 - Math.random() * 3,
          life: 1,
          decay: 0.02 + Math.random() * 0.02,
          size: 3 + Math.random() * 5,
          hue: 18 + Math.random() * 30,
        });
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);

    let raf = 0;
    const tick = () => {
      cx += (mx - cx) * 0.35;
      cy += (my - cy) * 0.35;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -55%)`;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.04;
        p.vx *= 0.98;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        const r = p.size * p.life;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
        grad.addColorStop(0, `rgba(255,235,180,${p.life * 0.9})`);
        grad.addColorStop(0.4, `hsla(${p.hue},100%,55%,${p.life * 0.55})`);
        grad.addColorStop(1, `hsla(${p.hue},100%,40%,0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas id="pj1-flame-trail" className="pj1-flame-trail" />
      <div id="pj1-flame-cursor" className="pj1-flame-cursor" aria-hidden>
        <svg viewBox="0 0 40 56" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="pj1-fc-outer" cx="50%" cy="80%" r="60%">
              <stop offset="0%" stopColor="#FFE7B0" />
              <stop offset="35%" stopColor="#F2A93C" />
              <stop offset="70%" stopColor="#E8451E" />
              <stop offset="100%" stopColor="#C9351A" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="pj1-fc-inner" cx="50%" cy="75%" r="50%">
              <stop offset="0%" stopColor="#FFFBEA" />
              <stop offset="60%" stopColor="#FFD27A" />
              <stop offset="100%" stopColor="#F2A93C" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g className="core">
            <path d="M20 4 C 28 16, 36 24, 34 36 C 33 46, 26 52, 20 52 C 14 52, 7 46, 6 36 C 4 24, 12 16, 20 4 Z" fill="url(#pj1-fc-outer)" />
            <path d="M20 14 C 25 22, 30 28, 28 36 C 27 42, 24 48, 20 48 C 16 48, 13 42, 12 36 C 10 28, 15 22, 20 14 Z" fill="url(#pj1-fc-inner)" />
          </g>
        </svg>
      </div>
    </>
  );
}

/* ============================================================
   NAV
   ============================================================ */

const linkStyle: CSSProperties = { textDecoration: "none", color: "var(--ink-2)" };

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-shell">
      <div className="nav-inner">
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--ink)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/preview-james-1/kf-logo.png"
            alt="KontentFire"
            style={{ width: 34, height: 34, objectFit: "contain", display: "block" }}
          />
          <span style={{ fontWeight: 800, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
            Kontent<span style={{ color: "var(--ember)" }}>Fire</span>
          </span>
        </a>
        <nav
          className="hide-md"
          style={{ display: "flex", gap: "1.6rem", alignItems: "center", fontSize: ".92rem", fontWeight: 500, color: "var(--ink-2)" }}
        >
          <a href="#features" style={linkStyle}>Features</a>
          <a href="#how" style={linkStyle}>How it works</a>
          <a href="#showcase" style={linkStyle}>Showcase</a>
          <a href="#pricing" style={linkStyle}>Pricing</a>
          <a href="#stories" style={linkStyle}>Stories</a>
        </nav>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <a className="hide-sm" href="#" style={{ ...linkStyle, padding: "8px 14px" }}>Log in</a>
          <a href="#" className="btn btn-primary nav-cta" style={{ padding: ".6rem .95rem", fontSize: ".85rem" }}>
            Start free <Arrow size={13} />
          </a>
          <button
            className="nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            style={{
              display: "none",
              background: "transparent",
              border: "1px solid var(--hairline-strong)",
              borderRadius: 99,
              width: 38,
              height: 38,
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--ink)",
            }}
          >
            <MenuIcon size={18} />
          </button>
        </div>
      </div>
      {open && (
        <div
          style={{
            marginTop: 8,
            background: "var(--paper)",
            border: "1px solid var(--hairline-strong)",
            borderRadius: 22,
            padding: "18px 20px",
            boxShadow: "0 20px 50px -20px rgba(26,15,8,.2)",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              ["#features", "Features"],
              ["#how", "How it works"],
              ["#showcase", "Showcase"],
              ["#pricing", "Pricing"],
              ["#stories", "Stories"],
            ].map(([h, l]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 4px",
                  textDecoration: "none",
                  color: "var(--ink)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  borderBottom: "1px solid var(--hairline)",
                }}
              >
                {l}
              </a>
            ))}
            <a href="#" style={{ padding: "12px 4px", textDecoration: "none", color: "var(--ink-2)", fontWeight: 500 }}>
              Log in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   HERO — full-bleed video background
   ============================================================ */

function FlameDoodle() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/preview-james-1/kf-logo.png"
      alt=""
      aria-hidden
      style={{
        width: "0.95em",
        height: "0.95em",
        display: "inline-block",
        verticalAlign: "-0.12em",
        marginLeft: "0.18em",
        objectFit: "contain",
        filter: "drop-shadow(0 6px 18px rgba(232,69,30,.35))",
      }}
    />
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginTop: -88,
        paddingTop: 120,
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/logo.png"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(180deg, rgba(251,247,241,0.55) 0%, rgba(251,247,241,0.25) 35%, rgba(251,247,241,0.55) 100%),
              radial-gradient(70% 55% at 50% 110%, rgba(232,69,30,.35), transparent 70%),
              radial-gradient(55% 45% at 50% -10%, rgba(242,169,60,.30), transparent 70%)
            `,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "25%",
            background: "linear-gradient(180deg, transparent, var(--ivory))",
          }}
        />
        <Embers count={45} opacity={0.95} zIndex={1} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2, padding: "80px 28px 120px" }}>
        <div style={{ textAlign: "center", maxWidth: 940, margin: "0 auto" }}>
          <div
            className="reveal in"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".5rem",
              padding: ".45rem 1rem",
              borderRadius: 999,
              background: "rgba(255,253,249,.85)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(26,15,8,.18)",
              fontSize: ".78rem",
              fontWeight: 600,
              letterSpacing: ".02em",
              color: "var(--ink-2)",
              marginBottom: 28,
              boxShadow: "0 8px 24px -10px rgba(26,15,8,.18)",
            }}
          >
            <span className="fire-dot" />
            Now in early access
          </div>

          <h1
            className="h-display anim-flicker"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              margin: "0 0 22px",
              color: "var(--ink)",
              textShadow: "0 1px 0 rgba(255,255,255,.4)",
            }}
          >
            Set your social <br />
            <span className="fire-text">on fire</span>
            <span style={{ display: "inline-block", transform: "translateY(-.05em)" }} className="anim-flame">
              <FlameDoodle />
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)",
              color: "var(--ink-2)",
              maxWidth: 660,
              margin: "0 auto 36px",
              lineHeight: 1.55,
              background: "rgba(251,247,241,.55)",
              backdropFilter: "blur(6px)",
              padding: "14px 22px",
              borderRadius: 18,
              display: "inline-block",
            }}
          >
            The AI content studio for contractors, agencies and creators. Write, schedule and publish across LinkedIn,
            Instagram, Facebook and X — in minutes, not hours.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
            <a href="#" className="btn btn-primary anim-pulse-glow" style={{ padding: "1.05rem 1.6rem", fontSize: "1rem" }}>
              Start your free trial <Arrow size={16} />
            </a>
            <a href="#how" className="btn btn-ghost" style={{ padding: "1.05rem 1.5rem", fontSize: "1rem" }}>
              <Play size={12} /> See how it works
            </a>
          </div>
          <div style={{ fontSize: ".85rem", color: "var(--ink-2)", fontWeight: 500 }}>
            Free 14-day trial · No credit card required ·{" "}
            <span style={{ color: "var(--ember-2)", fontWeight: 700 }}>80% off launch pricing</span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "var(--ink-2)",
          fontSize: ".72rem",
          letterSpacing: ".16em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        <span>Scroll</span>
        <span
          style={{
            width: 1,
            height: 32,
            background: "currentColor",
            opacity: 0.4,
            animation: "pj1-scrollcue 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

/* ============================================================
   BUILT FOR
   ============================================================ */

function BuiltFor() {
  const items = [
    { t: "Contractors", d: "Roofers, builders, home services — show up local, look pro." },
    { t: "Agencies", d: "Run every client account from one studio. White-label ready." },
    { t: "Creators", d: "Keep the calendar full without burning out on captions." },
    { t: "Small business", d: "Sound like the brand you want to be — not like AI." },
  ];
  return (
    <section style={{ padding: "90px 0 30px", position: "relative", overflow: "hidden" }}>
      <Embers count={14} opacity={0.5} />
      <div
        className="warmth-glow"
        style={{
          top: "10%",
          left: "-10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(242,169,60,.4), transparent 70%)",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 40px" }}>
          <div className="sec-label" style={{ justifyContent: "center", marginBottom: 14 }}>
            Built for
          </div>
          <h3 className="h-display" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", margin: 0 }}>
            Made for the people <em>actually doing the posting</em>.
          </h3>
        </div>
        <div className="bf-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {items.map((it, i) => (
            <div key={i} className="card lift" style={{ padding: "24px 22px" }}>
              <div
                className="anim-flame"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(180deg,#FFE7C4,#FFD0A5)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--ember-2)",
                  marginBottom: 14,
                  border: "1px solid rgba(232,69,30,.18)",
                  animationDelay: `${i * 0.25}s`,
                }}
              >
                <Flame size={16} />
              </div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 6 }}>{it.t}</div>
              <div style={{ fontSize: ".88rem", color: "var(--ink-soft)", lineHeight: 1.5 }}>{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURES
   ============================================================ */

function Features() {
  const features = [
    { Icon: Spark, title: "AI that sounds like you", desc: "Train on your voice in 4 minutes. GPT-4 + Claude blended for posts that don't read like AI.", tag: "Studio" },
    { Icon: Calendar, title: "Schedule weeks ahead", desc: "Drop a brief, get a month of content laid out on a calendar you can drag, drop and re-time.", tag: "Plan" },
    { Icon: Bot, title: "Set-and-forget automation", desc: "Recipes that watch your industry, write the post, queue it, and ship at peak engagement.", tag: "Auto" },
    { Icon: ImageIcon, title: "On-brand visuals", desc: "DALL·E, Stable Diffusion, and your own templates — every image stays inside your palette.", tag: "Visual" },
    { Icon: Chart, title: "Analytics that actually help", desc: "See which hooks, formats and times work. Auto-generate next month's plan from your wins.", tag: "Insight" },
    { Icon: FileIcon, title: "Proven content templates", desc: "Battle Royale, Myth Buster, Behind-the-Scenes — battle-tested formats you can fork in a click.", tag: "Library" },
  ];
  return (
    <section id="features" style={{ padding: "120px 0 80px", position: "relative", overflow: "hidden" }}>
      <Embers count={20} opacity={0.6} />
      <div
        className="warmth-glow"
        style={{
          top: "30%",
          right: "-15%",
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(232,69,30,.35), transparent 70%)",
          animationDelay: "1s",
        }}
      />
      <div
        className="warmth-glow"
        style={{
          bottom: "10%",
          left: "-10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(242,169,60,.4), transparent 70%)",
          animationDelay: "2.5s",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <div
          className="features-head"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end", marginBottom: 56 }}
        >
          <div>
            <div className="sec-label" style={{ marginBottom: 18 }}>
              01 &nbsp;·&nbsp; What&apos;s inside
            </div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)", margin: 0, lineHeight: 1 }}>
              Everything you need
              <br />
              to <em style={{ fontStyle: "italic" }}>stay lit</em>.
            </h2>
          </div>
          <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: 480, justifySelf: "end" }}>
            Six tools, one fluid workflow. From the first prompt to the last analytics report — KontentFire is the studio
            you set up once and run for years.
          </p>
        </div>

        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {features.map((f, i) => (
            <article
              key={i}
              className="card lift"
              style={{ padding: "28px 26px", display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  className="anim-flame"
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "linear-gradient(180deg, #FFE7C4, #FFD0A5)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--ember-2)",
                    border: "1px solid rgba(232,69,30,.18)",
                  }}
                >
                  <f.Icon size={20} />
                </span>
                <span
                  style={{
                    fontSize: ".7rem",
                    fontWeight: 600,
                    letterSpacing: ".12em",
                    color: "var(--ink-soft)",
                    textTransform: "uppercase",
                  }}
                >
                  {f.tag}
                </span>
              </div>
              <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{f.title}</h3>
              <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: ".93rem", lineHeight: 1.55 }}>{f.desc}</p>
              <a
                href="#"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--ember-2)",
                  fontWeight: 600,
                  fontSize: ".9rem",
                  textDecoration: "none",
                  paddingTop: 6,
                }}
              >
                Explore <Arrow size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOW IT WORKS
   ============================================================ */

function HowItWorks() {
  const steps = [
    { n: "01", t: "Tell us your voice", d: "Paste a few links or upload existing posts. KontentFire learns your tone, themes and hooks." },
    { n: "02", t: "Generate a month in minutes", d: "Pick a goal, pick a length, pick the platforms. We write, design, and lay it on your calendar." },
    { n: "03", t: "Approve. Auto-publish.", d: "Review, swap, or rewrite anything. Hit go — KontentFire ships every post at peak engagement time." },
  ];
  return (
    <section id="how" style={{ padding: "80px 0", background: "var(--ivory-2)", position: "relative", overflow: "hidden" }}>
      <Embers count={16} opacity={0.55} />
      <div
        className="warmth-glow"
        style={{
          top: "-10%",
          left: "30%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(242,169,60,.5), transparent 70%)",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 56px" }}>
          <div className="sec-label" style={{ justifyContent: "center", marginBottom: 18 }}>
            02 &nbsp;·&nbsp; How it works
          </div>
          <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", margin: 0 }}>
            Three steps from <em>blank page</em> to <span className="fire-text">all-fire feed</span>.
          </h2>
        </div>
        <div
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 1,
            background: "var(--hairline-strong)",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid var(--hairline-strong)",
          }}
        >
          {steps.map((s, i) => (
            <div key={i} className="lift" style={{ background: "var(--paper)", padding: "42px 32px", position: "relative", minHeight: 280 }}>
              <div
                className="serif anim-flame"
                style={{
                  fontSize: "4rem",
                  color: "var(--ember)",
                  lineHeight: 0.9,
                  marginBottom: 18,
                  fontStyle: "italic",
                  display: "inline-block",
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {s.n}
              </div>
              <h3 style={{ fontSize: "1.4rem", margin: "0 0 10px", fontWeight: 700 }}>{s.t}</h3>
              <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: 1.55 }}>{s.d}</p>
              {i < 2 && (
                <div
                  className="anim-drift hide-md"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: -12,
                    transform: "translateY(-50%)",
                    background: "var(--ember)",
                    color: "#fff",
                    width: 24,
                    height: 24,
                    borderRadius: 99,
                    display: "grid",
                    placeItems: "center",
                    zIndex: 2,
                  }}
                >
                  <Arrow size={12} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SHOWCASE
   ============================================================ */

function Showcase() {
  const [tab, setTab] = useState(0);
  const tabs = [
    { label: "Studio", src: "/screenshots/content-create.png" },
    { label: "Calendar", src: "/screenshots/schedule-calendar.png" },
    { label: "Analytics", src: "/screenshots/analytics-dashboard.png" },
    { label: "Dashboard", src: "/screenshots/dashboard.png" },
  ];
  return (
    <section id="showcase" style={{ padding: "120px 0", position: "relative" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end", marginBottom: 48 }}>
          <div>
            <div className="sec-label" style={{ marginBottom: 18 }}>
              03 &nbsp;·&nbsp; Inside the studio
            </div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", margin: 0, lineHeight: 1 }}>
              The <em>command center</em> for your content engine.
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifySelf: "end" }}>
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => setTab(i)}
                style={{
                  padding: ".55rem 1.05rem",
                  borderRadius: 999,
                  border: "1px solid " + (tab === i ? "var(--ink)" : "var(--hairline-strong)"),
                  background: tab === i ? "var(--ink)" : "var(--paper)",
                  color: tab === i ? "var(--ivory)" : "var(--ink-2)",
                  fontWeight: 600,
                  fontSize: ".85rem",
                  cursor: "pointer",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            borderRadius: 24,
            padding: 14,
            background: "linear-gradient(180deg, rgba(255,255,255,.7), rgba(255,255,255,.4))",
            border: "1px solid var(--hairline-strong)",
            boxShadow: "0 30px 80px -40px rgba(26,15,8,.25)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px" }}>
            <span style={{ width: 11, height: 11, borderRadius: 99, background: "#F26B4F" }} />
            <span style={{ width: 11, height: 11, borderRadius: 99, background: "#F2A93C" }} />
            <span style={{ width: 11, height: 11, borderRadius: 99, background: "#7CC97A" }} />
            <div
              className="mono"
              style={{
                flex: 1,
                height: 26,
                marginLeft: 14,
                borderRadius: 8,
                background: "var(--paper)",
                border: "1px solid var(--hairline)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: ".74rem",
                color: "var(--ink-soft)",
              }}
            >
              app.kontentfire.com / {tabs[tab].label.toLowerCase()}
            </div>
          </div>
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              background: "#fff",
              border: "1px solid var(--hairline)",
              aspectRatio: "16/9",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tabs[tab].src}
              alt={tabs[tab].label}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PLATFORMS
   ============================================================ */

function Platforms() {
  const items = [
    { Icon: LinkedIn, name: "LinkedIn", color: "#0A66C2" },
    { Icon: Instagram, name: "Instagram", color: "#E4405F" },
    { Icon: Facebook, name: "Facebook", color: "#1877F2" },
    { Icon: XLogo, name: "X", color: "#111" },
  ];
  return (
    <section style={{ padding: "40px 0 100px" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 36px" }}>
          <div className="sec-label" style={{ justifyContent: "center", marginBottom: 14 }}>
            One brief — every platform
          </div>
          <h3 className="h-display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", margin: 0 }}>
            Publish everywhere your audience already lives.
          </h3>
          <div className="shimmer-line" style={{ maxWidth: 240, margin: "24px auto 0" }} />
        </div>
        <div className="plat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
          {items.map((p, i) => (
            <div key={i} className="card lift" style={{ padding: "30px 22px", display: "flex", alignItems: "center", gap: 14 }}>
              <span
                className="anim-float"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  background: "var(--ivory-2)",
                  display: "grid",
                  placeItems: "center",
                  color: p.color,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                <p.Icon size={22} />
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{p.name}</div>
                <div style={{ fontSize: ".78rem", color: "var(--ink-soft)" }}>Connected · Auto-posting</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 24, color: "var(--ink-soft)", fontSize: ".9rem" }}>
          + Google Business Profile, Threads and TikTok arriving Q3 2026.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   PRICING
   ============================================================ */

function Pricing() {
  const plans = [
    {
      name: "Spark",
      price: 19,
      was: 99,
      sub: "For solo founders dipping in.",
      credits: 100,
      popular: false,
      features: ["100 AI credits / mo", "All 4 social platforms", "Basic templates", "Manual scheduling", "Email support"],
    },
    {
      name: "Blaze",
      price: 59,
      was: 299,
      sub: "For creators serious about growth.",
      credits: 400,
      popular: true,
      features: [
        "400 AI credits / mo",
        "Premium templates",
        "Smart auto-scheduling",
        "Analytics dashboard",
        "AI image generation",
        "Priority support",
      ],
    },
    {
      name: "Inferno",
      price: 199,
      was: 999,
      sub: "Maximum power for agencies.",
      credits: 1000,
      popular: false,
      features: [
        "1,000 AI credits / mo",
        "All templates + custom",
        "Full automation workflows",
        "Advanced analytics",
        "Unlimited AI images",
        "API access",
        "Dedicated CSM",
        "White-label options",
      ],
    },
  ];

  return (
    <section id="pricing" style={{ padding: "120px 0", background: "var(--paper)", position: "relative", overflow: "hidden" }}>
      <Embers count={20} opacity={0.55} />
      <div
        className="warmth-glow"
        style={{
          top: "15%",
          right: "-10%",
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(232,69,30,.3), transparent 70%)",
          animationDelay: ".7s",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 18px" }}>
          <div className="sec-label" style={{ justifyContent: "center", marginBottom: 18 }}>
            04 &nbsp;·&nbsp; Pricing
          </div>
          <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", margin: 0 }}>
            Simple plans. <em>Roaring</em> value.
          </h2>
          <p style={{ color: "var(--ink-soft)", marginTop: 14, fontSize: "1.05rem" }}>
            Lock in 80% off launch pricing. Cancel anytime.
          </p>
        </div>

        <div
          style={{
            margin: "30px auto 50px",
            maxWidth: 720,
            padding: "14px 22px",
            borderRadius: 999,
            background: "linear-gradient(95deg, #FFE7C4, #FFD0A5 50%, #FFE7C4)",
            border: "1px solid rgba(232,69,30,.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            fontSize: ".9rem",
            color: "var(--ink-2)",
            fontWeight: 500,
          }}
        >
          <Flame size={16} style={{ color: "var(--ember)" }} />
          <strong style={{ color: "var(--ember-2)" }}>Launch Special</strong> · 80% off your first 3 months — ends May 31
        </div>

        <div className="price-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, alignItems: "stretch" }}>
          {plans.map((p, i) => (
            <div
              key={i}
              className="card lift"
              style={{
                padding: "36px 30px",
                position: "relative",
                background: p.popular ? "linear-gradient(180deg, #FFFDF9, #FFF6EB)" : "var(--paper)",
                border: p.popular ? "1px solid rgba(232,69,30,.45)" : "1px solid var(--hairline)",
                boxShadow: p.popular
                  ? "0 20px 50px -20px rgba(232,69,30,.35), 0 1px 0 rgba(255,255,255,.6) inset"
                  : undefined,
                transform: p.popular ? "translateY(-8px)" : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {p.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "5px 14px",
                    borderRadius: 999,
                    background: "linear-gradient(180deg, #F2683A, #E8451E)",
                    color: "#fff",
                    fontSize: ".72rem",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    boxShadow: "0 8px 20px -8px rgba(232,69,30,.55)",
                  }}
                >
                  ★ Most popular
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: p.popular ? "linear-gradient(180deg, #F2A93C, #E8451E)" : "var(--ivory-2)",
                    color: p.popular ? "#fff" : "var(--ember-2)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {i === 0 ? <Spark size={18} /> : i === 1 ? <Flame size={18} /> : <Bolt size={18} />}
                </span>
                <h3 style={{ margin: 0, fontSize: "1.4rem" }}>{p.name}</h3>
              </div>
              <p style={{ color: "var(--ink-soft)", margin: "0 0 22px", fontSize: ".92rem" }}>{p.sub}</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
                <span style={{ textDecoration: "line-through", color: "var(--ink-soft)", fontSize: "1.05rem" }}>${p.was}</span>
                <span
                  style={{
                    fontSize: ".7rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 99,
                    background: "#E6F8E1",
                    color: "#2A6B1A",
                  }}
                >
                  80% off
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 24 }}>
                <span className="serif" style={{ fontSize: "3.6rem", lineHeight: 1, color: "var(--ink)" }}>
                  ${p.price}
                </span>
                <span style={{ color: "var(--ink-soft)" }}>/ mo</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: ".92rem", color: "var(--ink-2)" }}
                  >
                    <span style={{ flexShrink: 0, color: "var(--ember)", marginTop: 2 }}>
                      <Check size={15} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={p.popular ? "btn btn-primary" : "btn btn-ghost"}
                style={{ justifyContent: "center", marginTop: "auto" }}
              >
                Start with {p.name} <Arrow size={14} />
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 34, color: "var(--ink-soft)", fontSize: ".88rem" }}>
          Need more? Top-up credits anytime at $1 / credit. Annual plans save another 20%.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   EARLY ACCESS
   ============================================================ */

function EarlyAccess() {
  const items = [
    { h: "Early access", d: "You're among the first to try KontentFire. Your feedback shapes the roadmap." },
    { h: "Founder-led support", d: "Direct line to the team. We'll help you set up your studio personally." },
    { h: "Locked-in launch pricing", d: "Sign up now and keep 80% off as long as your subscription stays active." },
  ];
  return (
    <section id="stories" style={{ padding: "120px 0", background: "var(--ivory)", position: "relative", overflow: "hidden" }}>
      <Embers count={28} opacity={0.85} />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 56px" }}>
          <div className="sec-label" style={{ justifyContent: "center", marginBottom: 18 }}>
            05 &nbsp;·&nbsp; Just launched
          </div>
          <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", margin: 0 }}>
            Be one of the <em>first</em> to <span className="fire-text">light it up</span>.
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem", marginTop: 18, lineHeight: 1.6 }}>
            KontentFire is brand new. No inflated stats, no copy-pasted reviews. Just a tool we&apos;re proud of, and a team
            ready to make it work for you.
          </p>
        </div>
        <div className="t-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {items.map((it, i) => (
            <div key={i} className="card lift" style={{ padding: "30px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
              <span
                className="anim-flame"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "linear-gradient(180deg, #F2A93C, #E8451E)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                <Flame size={18} />
              </span>
              <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700 }}>{it.h}</h3>
              <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: 1.55, fontSize: ".93rem" }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA
   ============================================================ */

function FinalCTA() {
  return (
    <section style={{ padding: "80px 0 120px" }}>
      <div className="container">
        <div
          style={{
            position: "relative",
            borderRadius: 32,
            overflow: "hidden",
            padding: "70px 40px",
            textAlign: "center",
            background: `
              radial-gradient(80% 80% at 50% 0%, rgba(255,231,196,.95), transparent 70%),
              radial-gradient(80% 80% at 50% 100%, rgba(242,104,79,.55), transparent 70%),
              linear-gradient(180deg, #FFFDF9, #FFE9D2)
            `,
            border: "1px solid rgba(232,69,30,.25)",
            boxShadow: "0 30px 80px -40px rgba(232,69,30,.45)",
          }}
        >
          <div style={{ position: "absolute", inset: 0, opacity: 0.3 }} className="dotgrid" />
          <Embers count={32} opacity={0.95} />
          <div style={{ position: "relative" }}>
            <div className="sec-label" style={{ justifyContent: "center", marginBottom: 20 }}>
              <span className="anim-flame" style={{ display: "inline-flex" }}>
                <Flame size={16} style={{ color: "var(--ember)" }} />
              </span>{" "}
              Start your 14-day free trial
            </div>
            <h2 className="h-display" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", margin: "0 0 18px", lineHeight: 1 }}>
              Stop posting. <span className="fire-text">Start burning.</span>
            </h2>
            <p style={{ color: "var(--ink-2)", maxWidth: 560, margin: "0 auto 32px", fontSize: "1.1rem", lineHeight: 1.55 }}>
              Set up your studio in 4 minutes. Generate your first month of content in 9. We&apos;ll be here when your
              audience starts noticing.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <a href="#" className="btn btn-primary anim-pulse-glow" style={{ padding: "1.05rem 1.7rem", fontSize: "1rem" }}>
                Light it up — free for 14 days <Arrow size={16} />
              </a>
              <a href="#" className="btn btn-dark" style={{ padding: "1.05rem 1.5rem", fontSize: "1rem" }}>
                Talk to sales
              </a>
            </div>
            <div style={{ marginTop: 18, fontSize: ".82rem", color: "var(--ink-soft)" }}>
              No credit card · Migrate from Buffer / Hootsuite in 5 min · 24h support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  const cols = [
    { h: "Product", l: ["Features", "Pricing", "Templates", "Integrations", "Changelog"] },
    { h: "Use cases", l: ["Contractors", "Agencies", "Creators", "Small business", "Enterprise"] },
    { h: "Resources", l: ["Guides", "Blog", "Books", "Free tools", "API docs"] },
    { h: "Company", l: ["About", "Customers", "Careers", "Contact", "Press"] },
  ];
  return (
    <footer style={{ background: "var(--ink)", color: "var(--ivory)", padding: "80px 0 30px", marginTop: 0 }}>
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(4, 1fr)",
            gap: 40,
            paddingBottom: 60,
            borderBottom: "1px solid rgba(255,255,255,.1)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(180deg, #F2A93C, #E8451E)",
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                }}
              >
                <Flame size={18} />
              </span>
              <span style={{ fontSize: "1.15rem", fontWeight: 800 }}>
                Kontent<span style={{ color: "var(--amber)" }}>Fire</span>
              </span>
            </div>
            <p style={{ color: "rgba(251,247,241,.6)", fontSize: ".9rem", lineHeight: 1.55, maxWidth: 280, margin: 0 }}>
              The AI content studio for teams who&apos;d rather create than copy-paste.
            </p>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <h4
                style={{
                  margin: "0 0 16px",
                  fontSize: ".78rem",
                  textTransform: "uppercase",
                  letterSpacing: ".16em",
                  color: "var(--amber)",
                  fontWeight: 700,
                }}
              >
                {c.h}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.l.map((x, j) => (
                  <li key={j}>
                    <a href="#" style={{ color: "rgba(251,247,241,.75)", textDecoration: "none", fontSize: ".9rem" }}>
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            fontSize: ".82rem",
            color: "rgba(251,247,241,.5)",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© 2026 KontentFire Inc. All rights reserved.</span>
          <span style={{ display: "flex", gap: 18 }}>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Status</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   PAGE — composes the full redesign
   ============================================================ */

export default function PreviewJames1Page() {
  // Reveal-on-scroll for any .reveal elements (matches kf-app.jsx behavior).
  useEffect(() => {
    const els = document.querySelectorAll(".pj1-root .reveal");
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <FlameCursor />
      <Nav />
      <main>
        <Hero />
        <BuiltFor />
        <Features />
        <HowItWorks />
        <Showcase />
        <Platforms />
        <Pricing />
        <EarlyAccess />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
