import { useState, useEffect, useRef } from "react";

const GLITCH_CHARS = "!@#$%^&*<>?/\\|~`░▒▓█▄▀■□▪▫";
const HACKER_LINES = [
  "> Accessing mainframe...",
  "> Bypassing firewall... [DONE]",
  "> Injecting payload... [DONE]",
  "> Deleting system32... just kidding 😈",
  "> Stealing cookies... 🍪 (the browser kind)",
  "> Uploading cringe content...",
  "> Replacing homepage with cat memes...",
  "> Haters.exe is running...",
  "> ERROR: Could not kill the vibe",
  "> ALERT: Owner coming back STRONGER 💪",
];

function useGlitch(text, active) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!active) { setDisplay(text); return; }
    let frame = 0;
    const interval = setInterval(() => {
      if (frame > 18) { setDisplay(text); clearInterval(interval); return; }
      setDisplay(
        text.split("").map((c, i) =>
          i < frame / 2
            ? c
            : c === " " ? " " : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        ).join("")
      );
      frame++;
    }, 60);
    return () => clearInterval(interval);
  }, [text, active]);
  return display;
}

function Terminal() {
  const [lines, setLines] = useState([]);
  const [cursor, setCursor] = useState(true);
  const ref = useRef();

  useEffect(() => {
    let i = 0;
    const add = () => {
      if (i < HACKER_LINES.length) {
        setLines(prev => [...prev, HACKER_LINES[i]]);
        i++;
        setTimeout(add, 600 + Math.random() * 500);
      }
    };
    setTimeout(add, 800);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [lines]);

  return (
    <div
      ref={ref}
      className="bg-black border border-green-500 rounded-lg p-4 font-mono text-green-400 text-xs sm:text-sm h-48 overflow-y-auto shadow-lg shadow-green-900/40"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="text-green-300 mb-2 text-xs opacity-60">HACKER_TERMINAL v2.0 — anonymous@darkweb</div>
      {lines.map((l, i) => (
        <div key={i} className="mb-1 animate-fade-in">{l}</div>
      ))}
      <div className="flex items-center gap-1 mt-1">
        <span>&gt;</span>
        <span
          className="inline-block w-2 h-4 bg-green-400"
          style={{ opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
        />
      </div>
    </div>
  );
}

function FloatingParticle({ delay, duration, x }) {
  return (
    <div
      className="absolute bottom-0 text-red-500 opacity-0 select-none pointer-events-none"
      style={{
        left: `${x}%`,
        fontSize: `${12 + Math.random() * 16}px`,
        animation: `floatUp ${duration}s ease-in ${delay}s infinite`,
      }}
    >
      {["💀", "😈", "🔥", "⚡", "💻", "🕵️"][Math.floor(Math.random() * 6)]}
    </div>
  );
}

function CountdownBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setPct(p => {
        if (p >= 100) { clearInterval(t); return 100; }
        return p + 0.4;
      });
    }, 40);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-red-300 mb-1 font-mono">
        <span>COMEBACK LOADING...</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-red-900">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, #ef4444, #f97316, #eab308)`,
            boxShadow: "0 0 8px #ef4444",
          }}
        />
      </div>
    </div>
  );
}

export default function Page404() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [shake, setShake] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [pageScale, setPageScale] = useState(1);
  const title404 = useGlitch("404", glitchActive);
  const titleHacked = useGlitch("H4CK3D", glitchActive);

  useEffect(() => {
    const loop = () => {
      setGlitchActive(true);
      setShake(true);
      setTimeout(() => { setGlitchActive(false); setShake(false); }, 1200);
    };
    loop();
    const t = setInterval(loop, 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowMsg(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const updateScale = () => {
      const heightScale = (window.innerHeight - 24) / 920;
      const widthScale = (window.innerWidth - 24) / 460;
      setPageScale(Math.min(1, heightScale, widthScale));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 3,
    x: (i / 12) * 100 + Math.random() * 6,
  }));

  return (
    <div
      className="h-[100dvh] bg-gray-950 text-white flex flex-col items-center justify-center relative overflow-hidden px-3 sm:px-4"
      style={{ fontFamily: "'Courier New', monospace" }}
    >
      <style>{`
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(0) scale(0.5); }
          20% { opacity: 1; }
          80% { opacity: 0.6; }
          100% { opacity: 0; transform: translateY(-80vh) scale(1.2); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.4; }
          94% { opacity: 1; }
          96% { opacity: 0.6; }
          97% { opacity: 1; }
        }
        @keyframes glitchShift {
          0% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
          20% { clip-path: inset(30% 0 60% 0); transform: translate(4px, 0); }
          40% { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 0); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(3px, 0); }
          80% { clip-path: inset(10% 0 85% 0); transform: translate(-3px, 0); }
          100% { clip-path: inset(0 0 95% 0); transform: translate(0, 0); }
        }
        @keyframes pulse-red {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(239,68,68,0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeInUp 0.3s ease forwards; }
        .flicker { animation: flicker 3s infinite; }
        .shake { animation: shakeAnim 0.1s ease infinite; }
        @keyframes shakeAnim {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px) skewX(-1deg); }
          75% { transform: translateX(3px) skewX(1deg); }
        }
        .glitch-layer {
          animation: glitchShift 0.15s steps(1) infinite;
        }
        .pulse-badge { animation: pulse-red 1.5s infinite; }
      `}</style>

      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-10"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-5"
        style={{
          background: "linear-gradient(transparent 50%, rgba(0,255,0,0.03) 50%)",
          backgroundSize: "100% 4px",
          animation: "scanline 8s linear infinite",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => <FloatingParticle key={i} {...p} />)}
      </div>

      {/* Red glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(239,68,68,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div
        className={`relative z-20 w-full max-w-xl text-center ${shake ? "shake" : ""}`}
        style={{
          width: "min(100vw - 1.5rem, 40rem)",
          transform: `scale(${pageScale})`,
          transformOrigin: "center center",
        }}
      >

        {/* 404 glitch number */}
        <div className="relative inline-block mb-2">
          <div
            className="flicker"
            style={{
              fontSize: "clamp(80px, 20vw, 140px)",
              fontWeight: 900,
              color: "#ef4444",
              textShadow: "4px 0 #00ffff, -4px 0 #ff00ff",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            {title404}
          </div>
          {/* glitch copy layer */}
          {glitchActive && (
            <div
              className="absolute inset-0 glitch-layer"
              style={{
                fontSize: "clamp(80px, 20vw, 140px)",
                fontWeight: 900,
                color: "#00ffff",
                opacity: 0.5,
                lineHeight: 1,
              }}
            >
              {title404}
            </div>
          )}
        </div>

        {/* H4CK3D badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px flex-1 bg-red-700 opacity-50" />
          <div
            className="pulse-badge px-4 py-1 rounded border border-red-500 text-red-400 text-sm font-bold tracking-widest uppercase"
            style={{ background: "rgba(239,68,68,0.1)" }}
          >
            ☠️ {titleHacked} BY HATERS ☠️
          </div>
          <div className="h-px flex-1 bg-red-700 opacity-50" />
        </div>

        {/* Message */}
        <div
          className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed"
          style={{ textShadow: "0 0 10px rgba(239,68,68,0.3)" }}
        >
          <p className="text-red-400 font-bold text-xl mb-2">😤 Some haters thought they won.</p>
          <p className="text-gray-400 text-sm">They found this page. They celebrated. They posted about it.</p>
          <p className="text-gray-400 text-sm">Meanwhile... the boss is sharpening their comeback. ⚔️</p>
        </div>

        {/* Terminal */}
        <div className="mb-6">
          <Terminal />
        </div>

        {/* Comeback bar */}
        <div className="mb-6">
          <CountdownBar />
        </div>

        {/* Comeback message */}
        {showMsg && (
          <div
            className="mb-6 p-4 rounded-lg border border-yellow-500 text-yellow-300 text-sm font-bold"
            style={{
              background: "rgba(234,179,8,0.08)",
              animation: "fadeInUp 0.5s ease forwards",
              boxShadow: "0 0 20px rgba(234,179,8,0.15)",
            }}
          >
            ⚡ ALERT: I will be back. Stronger. Faster. Unbothered. ⚡<br />
            <span className="text-yellow-500 font-normal text-xs mt-1 block">
              "They tried to bury me. They forgot I was a seed. 🌱"
            </span>
          </div>
        )}

        {/* Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.href = "/"}
            className="px-6 py-3 rounded-lg border border-red-500 text-red-400 font-bold text-sm hover:bg-red-500 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ boxShadow: "0 0 12px rgba(239,68,68,0.3)" }}
          >
            🏠 Take me home (safely)
          </button>
          <button
            onClick={() => {
              setGlitchActive(true);
              setShake(true);
              setTimeout(() => { setGlitchActive(false); setShake(false); }, 1200);
            }}
            className="px-6 py-3 rounded-lg border border-green-500 text-green-400 font-bold text-sm hover:bg-green-500 hover:text-black transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ boxShadow: "0 0 12px rgba(34,197,94,0.3)" }}
          >
            ⚡ Trigger glitch effect
          </button>
        </div> */}

        {/* Footer */}
        <p className="mt-8 text-gray-700 text-xs font-mono">
          Error code: HATERS_GONNA_HATE_404 | Status: UNBOTHERED | Response: COMING_BACK_100x
        </p>
      </div>
    </div>
  );
}