"use client";

import React, { useMemo, useState, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";

type Props = {
  bgUrl?: string;
  /** Ancho “diseño” en px (desktop). Se adapta a móviles sin romper. */
  width?: number; // default 920
};

export default function FlipCredential({
  bgUrl = "/credential-bg.png",
  width = 920,
}: Props) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  // Escala derivada del ancho pedido (para fuentes/QR)
  const scale = useMemo(() => {
    const base = 920; // referencia
    return Math.max(0.6, Math.min(1.35, width / base));
  }, [width]);

  const qrSize = Math.round(300 * scale); // ~32% del ancho

  // Tipos escalables
  const titleSize = `${Math.round(28 * scale)}px`;
  const bodySize = `${Math.round(16 * scale)}px`;
  const disclaimerSize = `${Math.max(11, Math.round(12 * scale))}px`;

  return (
    <div
      className="relative z-50 isolate pointer-events-auto mx-auto"
      style={{ perspective: 1200 }}
    >
      <motion.div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onClick={toggle}
        onKeyDown={onKey}
        onMouseDown={(e) => e.preventDefault()}
        className="relative cursor-pointer select-none rounded-2xl shadow-xl"
        style={{
          // 🔒 tamaño unificado
          width: `min(${width}px, 92vw)`,
          aspectRatio: "16 / 10",
          minHeight: 320,
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
            backgroundColor: "#0c0c0c",
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translateZ(0)",
          }}
        >
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

          <div className="relative h-full w-full grid grid-cols-12 gap-6 p-6 md:p-8">
            {/* Izquierda */}
            <div className="col-span-12 md:col-span-7 flex flex-col">
              <div className="flex items-center gap-4 pt-1">
                <HexLogo className="h-8 w-8 md:h-10 md:w-10 text-white/90" />
                <h1
                  className="font-semibold tracking-wide"
                  style={{ fontSize: titleSize }}
                >
                  Escrow Completed
                </h1>
              </div>

              <div
                className="mt-6 md:mt-8 space-y-3 md:space-y-4 font-serif"
                style={{
                  fontSize: `calc(${bodySize} * 1.3)`, // 🔑 un poquito más grande
                  lineHeight: 1.4,
                }}
              >
                <p><span className="text-white/80">Holder:</span> Daniel Coto</p>
                <p><span className="text-white/80">Issued by:</span> TrustlessWork</p>
                <p><span className="text-white/80">Issued on:</span> August 26, 2025</p>
                <p><span className="text-white/80">Expires on:</span> August 26, 2026</p>
                <p><span className="text-white/80">Category:</span> Financial Services</p>
              </div>

            </div>

            {/* Derecha: QR */}
            <div className="col-span-12 md:col-span-5 flex items-center justify-center">
              <div className="rounded-xl p-4 bg-white/5">
                <QRCodeSVG
                  value="https://starproof.app/demo/credential/123"
                  level="M"
                  includeMargin
                  size={qrSize}
                  bgColor="transparent"
                  fgColor="#ffffff"
                />
              </div>
            </div>

            {/* Disclaimer */}
            <div className="col-span-12 flex items-end">
              <p
                className="ml-auto italic text-white/70"
                style={{ fontSize: disclaimerSize }}
              >
                *This credential is a demo issued by StarProof. It has no legal validity and does
                not represent an official verification*
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
          <div className="relative h-full w-full grid grid-cols-12 gap-6 p-6 md:p-8">
            <div className="col-span-12 md:col-span-7">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { k: "Credential ID", v: "cred_9f2a-1234-abcd" },
                  { k: "Standard", v: "W3C Verifiable Credential 2.0" },
                  { k: "Signature", v: "Ed25519 (Stellar)" },
                  { k: "Status", v: "Active" },
                  { k: "On-chain hash", v: "0x8f7a…b21c" },
                ].map((f) => (
                  <div
                    key={f.k}
                    className="rounded-lg bg-white/5 px-4 py-3 border border-white/10"
                    style={{ fontSize: bodySize }}
                  >
                    <dt className="text-xs uppercase tracking-wide text-white/60">
                      {f.k}
                    </dt>
                    <dd className="mt-1">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="col-span-12 md:col-span-5 flex items-center justify-center">
              <QRCodeSVG
                value="https://starproof.app/verify/cred_9f2a-1234-abcd"
                level="M"
                size={Math.max(120, Math.round(140 * scale))}
                bgColor="transparent"
                fgColor="#ffffff"
              />
            </div>

            <div className="col-span-12 flex items-end">
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

function HexLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M50 5 90 28v44L50 95 10 72V28L50 5Z" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M35 40h30l-6 10h-18l-6-10zm5 18h20l-10 17-10-17z" fill="currentColor" />
    </svg>
  );
}
