"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export interface SkeletonImageProps extends Omit<ImageProps, "onLoad"> {
  wrapperClassName?: string;
}

/**
 * Image component that displays an animated skeleton placeholder
 * until the Next.js Image has completely loaded and decoded.
 */
export function SkeletonImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  priority = false,
  ...props
}: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && (
        <Skeleton
          className="absolute inset-0 h-full w-full rounded-[inherit] z-10"
          variant="shimmer"
        />
      )}
      <Image
        src={src}
        alt={alt}
        priority={priority}
        className={`transition-opacity duration-300 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}
