export function N7Mark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="6.1" y1="6.1" x2="33.9" y2="33.9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="33.9" y1="6.1" x2="6.1" y2="33.9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
