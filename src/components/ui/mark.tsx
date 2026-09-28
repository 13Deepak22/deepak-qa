import Image from "next/image";
import logo from "../../../public/logo.png";

export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return <Image src={logo} alt="" width={32} height={32} className={className} />;
}
