"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Slide-in right-side drawer that embeds a Nautilus URL (storefront checkout or a
 * contact form) in an iframe. Shared by the payment drawer and the free-wash form
 * drawer so both share identical motion + chrome.
 */
export function IframeDrawer({
  src,
  title,
  onClose,
  bodyClassName,
}: {
  src: string;
  title: string;
  onClose: () => void;
  /** Extra classes for the iframe container (e.g. padding / background). */
  bodyClassName?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Let the slide-out animation finish before unmounting.
    setTimeout(onClose, 500);
  };

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isVisible ? "opacity-50" : "opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
      />

      {/* Panel */}
      <div
        className="absolute top-0 right-0 flex h-full w-full flex-col bg-[#FDF9F3] shadow-2xl md:max-w-[480px]"
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(100%)",
          transition: "transform 500ms cubic-bezier(0.32, 0.72, 0, 1)",
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="flex items-center justify-between border-b-2 border-[#090f27]/15 bg-[#3e65b3] px-5 py-4">
          <h2 className="text-lg font-bold uppercase tracking-wide text-[#f3c402]">{title}</h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="rounded-full p-2 text-[#f3c402] transition-colors hover:bg-black/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className={`relative flex-1 ${bodyClassName ?? "bg-[#FDF9F3]"}`}>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#3e65b3] border-t-transparent" />
            </div>
          )}
          <iframe
            src={src}
            allow="payment"
            className="h-full w-full border-0"
            onLoad={() => setIsLoaded(true)}
            title={title}
          />
        </div>
      </div>
    </div>
  );
}
