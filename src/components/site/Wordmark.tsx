import type { SVGProps } from "react";

export function Wordmark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 220 44"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Apotek Pro"
      {...props}
    >
      {/* capsule mark */}
      <g transform="translate(2, 10)">
        <rect x="0" y="0" width="30" height="22" rx="11" fill="var(--brand)" />
        <rect x="15" y="0" width="15" height="22" rx="11" fill="var(--brand-accent)" />
        <line x1="15" y1="2" x2="15" y2="20" stroke="white" strokeWidth="1.25" opacity="0.9" />
      </g>
      {/* wordmark */}
      <text
        x="42"
        y="30"
        fontFamily="'Instrument Serif', 'Times New Roman', serif"
        fontSize="28"
        fontWeight="400"
        fill="var(--foreground)"
        letterSpacing="-0.5"
      >
        Apotek
      </text>
      <text
        x="140"
        y="30"
        fontFamily="'Inter', ui-sans-serif, system-ui, sans-serif"
        fontSize="12"
        fontWeight="600"
        fill="var(--brand)"
        letterSpacing="2"
      >
        PRO
      </text>
    </svg>
  );
}
