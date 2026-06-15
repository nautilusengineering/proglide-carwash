"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { PRODUCT_IDS, storefrontEmbedUrl } from "@/lib/checkout-config";
import { usePaymentDrawerStore } from "@/stores/use-payment-drawer-store";

/**
 * Slide-in drawer that embeds the Nautilus storefront, deep-linked to the chosen
 * ProGlide product. Mirrors the other per-org sites (galaxy/crystal-clean/rapid-
 * wash): the marketing page stays ProGlide-branded; the actual product display +
 * Stripe Connect checkout + DenCar fulfillment all live in the embedded storefront.
 */
export function PaymentDrawer() {
  const { isOpen, tier, plan, closeDrawer } = usePaymentDrawerStore();

  if (!isOpen) return null;

  return (
    <IframeDrawer
      productId={PRODUCT_IDS[plan][tier]}
      title={plan === "membership" ? "Join the Wash Club" : "Buy a Wash"}
      onClose={closeDrawer}
    />
  );
}

function IframeDrawer({
  productId,
  title,
  onClose,
}: {
  productId: string;
  title: string;
  onClose: () => void;
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

        <div className="relative flex-1 bg-[#FDF9F3]">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#3e65b3] border-t-transparent" />
            </div>
          )}
          <iframe
            src={storefrontEmbedUrl(productId)}
            allow="payment"
            className="h-full w-full border-0"
            onLoad={() => setIsLoaded(true)}
            title="ProGlide Checkout"
          />
        </div>
      </div>
    </div>
  );
}
