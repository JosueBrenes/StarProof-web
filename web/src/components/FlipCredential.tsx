"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  KeyboardEvent,
} from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";

type Props = {
  /** Ruta de la estrella (PNG/SVG/WebP). */
  starUrl?: string;         // default: /star.png
  /** Opacidad de la estrella (0–1). */
  starOpacity?: number;     // default: 0.18
  /** Ancho máximo del card en desktop; en mobile usa 92vw. */
  maxWidth?: number;        // default: 980
};

export default function FlipCredential({
  starUrl = "/star.png",
  starOpacity = 0.18,
  maxWidth = 980,
}: Props) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  // Medimos ancho real para escalar QR y tipografías.
  const ref = useRef<HTMLDivElement>(null);
  const [realW, setRealW] = useState<number>(maxWidth);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = Math.max(300, Math.round(entry.contentRect.width));
      setRealW(w);
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  // Flag: ¿pantalla estrecha?
  const isNarrow = realW <= 520;

  // Escalado fluido
  const base = 980;
  const scale = useMemo(
    () => Math.max(0.6, Math.min(1.35, realW / base)),
    [realW]
  );
  const titleSize = `clamp(20px, ${28 * scale}px, 34px)`;
  const bodySize = `clamp(14px, ${16 * scale}px, 18px)`;
  const detailsSize = `clamp(15px, ${18 * scale}px, 20px)`;
  const disclaimerSize = `clamp(11px, ${12 * scale}px, 14px)`;

  // QR: en móvil lo reducimos un poco si quieres, pero igual cabrá porque el card es más alto
  const qrFront = Math.round(Math.min(0.32 * realW, isNarrow ? 260 : 320));
  const qrBack  = Math.max(120, Math.round(0.18 * realW));

  // Aspect ratio dinámico
  const aspect = isNarrow ? "16 / 14" : "16 / 10";
  const minH   = isNarrow ? 460 : 320;

  return (
    <div className="relative z-50 isolate mx-auto" style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onClick={toggle}
        onKeyDown={onKey}
        onMouseDown={(e) => e.preventDefault()}
        className="relative select-none rounded-2xl shadow-xl cursor-pointer"
        style={{
          width: `min(${maxWidth}px, 92vw)`,
          aspectRatio: aspect,   // dinámico
          minHeight: minH,       // más alto en móvil
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 16, mass: 0.8 }}
        whileTap={{ scale: 0.995 }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl text-white"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          {/* Fondo negro sólido */}
          <div className="absolute inset-0 bg-black pointer-events-none rounded-2xl" />

          {/* Estrella como imagen superpuesta */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute left-0 top-0 h-full w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] bg-left bg-no-repeat"
              style={{
                backgroundImage: `url(${starUrl})`,
                backgroundSize: "contain",
                opacity: starOpacity,
                filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.45))",
              }}
              aria-hidden
            />
          </div>

          {/* Contenido */}
          <div className="relative h-full w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-4 md:p-8 pb-5">
            {/* Izquierda */}
            <div className="md:col-span-7 flex flex-col">
              <div className="flex items-center gap-3 md:gap-4 pt-1">
                <HexLogo className="h-7 w-7 md:h-10 md:w-10 text-white/90" />
                <h1 className="font-semibold tracking-wide" style={{ fontSize: titleSize }}>
                  Escrow Completed
                </h1>
              </div>

              <div
                className="mt-5 md:mt-8 space-y-3 md:space-y-4 font-serif"
                style={{ fontSize: detailsSize, lineHeight: 1.45 }}
              >
                <p><span className="text-white/80">Holder:</span> Daniel Coto</p>
                <p><span className="text-white/80">Issued by:</span> TrustlessWork</p>
                <p><span className="text-white/80">Issued on:</span> August 26, 2025</p>
                <p><span className="text-white/80">Expires on:</span> August 26, 2026</p>
                <p><span className="text-white/80">Category:</span> Financial Services</p>
              </div>
            </div>

            {/* Derecha: QR */}
            <div className="md:col-span-5 flex items-center justify-center">
              <div className="rounded-xl p-3 md:p-4 bg-white/5">
                <QRCodeSVG
                  value="https://starproof.app/demo/credential/123"
                  level="M"
                  includeMargin
                  size={qrFront}
                  bgColor="transparent"
                  fgColor="#ffffff"
                />
              </div>
            </div>

            {/* Disclaimer */}
            <div className="md:col-span-12 col-span-1 flex items-end">
              <p className="ml-auto italic text-white/70" style={{ fontSize: disclaimerSize }}>
                *This credential is a demo issued by StarProof. It has no legal validity and does not
                represent an official verification*
              </p>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl text-white"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(0)",
            background: "linear-gradient(145deg, rgba(20,20,20,0.95), rgba(10,10,10,0.95))",
          }}
        >
          <div className="relative h-full w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-4 md:p-8">
            <div className="md:col-span-7">
              <dl
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
                style={{ fontSize: bodySize }}
              >
                {[
                  { k: "Credential ID", v: "cred_9f2a-1234-abcd" },
                  { k: "Standard", v: "W3C Verifiable Credential 2.0" },
                  { k: "Signature", v: "Ed25519 (Stellar)" },
                  { k: "Status", v: "Active" },
                  { k: "On-chain hash", v: "0x8f7a…b21c" },
                ].map((f) => (
                  <div key={f.k} className="rounded-lg bg-white/5 px-4 py-3 border border-white/10">
                    <dt className="text-xs uppercase tracking-wide text-white/60">{f.k}</dt>
                    <dd className="mt-1">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="md:col-span-5 flex items-center justify-center">
              <QRCodeSVG
                value="https://starproof.app/verify/cred_9f2a-1234-abcd"
                level="M"
                size={qrBack}
                bgColor="transparent"
                fgColor="#ffffff"
              />
            </div>

            <div className="md:col-span-12 col-span-1 flex items-end">
              <p className="text-white/60" style={{ fontSize: disclaimerSize }}>
                Back • StarProof
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/** ------ Logo simple hexagonal (placeholder) ------ */
function HexLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 5 90 28v44L50 95 10 72V28L50 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
      />
      <path
        d="M35 40h30l-6 10h-18l-6-10zm5 18h20l-10 17-10-17z"
        fill="currentColor"
      />
    </svg>
  );
}
