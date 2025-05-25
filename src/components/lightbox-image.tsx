import Image from "next/image";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

interface LightboxImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const LightboxImage = ({
  src,
  alt,
  className = "",
  width = 250,
  height = 250,
  priority = false,
}: LightboxImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Thumbnail Image */}
      <Image
        className={`cursor-pointer transition-all hover:opacity-80 ${className}`}
        width={width}
        height={height}
        src={src}
        alt={alt}
        onClick={openLightbox}
        priority={priority}
      />

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 text-4xl text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Backdrop - click to close */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={closeLightbox}
          />

          {/* Full-size image */}
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              width={1200}
              height={1200}
              priority
            />
          </div>

          {/* Escape key hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-70">
            Press ESC or click outside to close
          </div>
        </div>
      )}
    </>
  );
}; 