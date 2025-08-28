"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";

/** ----- Mock data ----- */
const mock = {
  title: "Escrow Completed",
  holder: "Daniel Coto",
  issuer: "TrustlessWork",
  issuedOn: "August 26, 2025",
  expiresOn: "August 26, 2026",
  category: "Financial Services",
  disclaimer:
    "*This credential is a demo issued by StarProof. It has no legal validity and does not represent an official verification*",
  qrValue: "https://starproof.app/demo/credential/123",
};

type Data = typeof mock;

/**
 * Props:
 * - bgUrl: URL del fondo (usa tu imagen 2, ej: /credential-bg.png en /public)
 * - data: datos de la credencial (incluye qrValue)
 * - qrSize: tamaño del QR en px
 */
export default function CredentialCard({
  bgUrl = "/credential-bg.png",
  data = mock,
  qrSize = 340,
}: {
  bgUrl?: string;
  data?: Data;
  qrSize?: number;
}) {
  return (
    <div
      className="relative w-full max-w-[1080px] aspect-[16/10] overflow-hidden rounded-xl shadow-xl"
      style={{
        backgroundColor: "#0c0c0c",
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative h-full w-full text-white grid grid-cols-12 gap-6 p-8">
        {/* Columna izquierda */}
        <div className="col-span-12 md:col-span-7 flex flex-col">
          {/* Logo + Título */}
          <div className="flex items-center gap-4 pt-2">
            <HexLogo className="h-10 w-10 text-white/90" />
            <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
              {data.title}
            </h1>
          </div>

          {/* Detalles */}
          <div className="mt-8 space-y-4 text-base md:text-lg font-serif">
            <p><span className="text-white/80">Holder:</span> {data.holder}</p>
            <p><span className="text-white/80">Issued by:</span> {data.issuer}</p>
            <p><span className="text-white/80">Issued on:</span> {data.issuedOn}</p>
            <p><span className="text-white/80">Expires on:</span> {data.expiresOn}</p>
            <p><span className="text-white/80">Category:</span> {data.category}</p>
          </div>
        </div>

        {/* Columna derecha: QR real */}
        <div className="col-span-12 md:col-span-5 flex items-center justify-center">
          <div className="p-4 bg-white/5 rounded-lg">
            <QRCodeSVG
              value={data.qrValue}
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
          <p className="ml-auto text-xs italic text-white/70">{data.disclaimer}</p>
        </div>
      </div>
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
