"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { Skeleton } from "@/components/ui/skeleton";

export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {!loaded && (
        <Skeleton className="absolute inset-0 rounded-full" />
      )}
      <Image
        src={logo}
        alt=""
        width={32}
        height={32}
        priority
        className={`h-full w-full object-contain transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </span>
  );
}
