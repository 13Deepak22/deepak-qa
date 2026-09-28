export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/logo.png?v=3"
      alt=""
      width={512}
      height={512}
      className={className}
    />
  );
}
