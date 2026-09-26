export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" fill="currentColor" />
      <path
        d="M8 16.5 13.2 22 24 10"
        fill="none"
        stroke="#efeae1"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
