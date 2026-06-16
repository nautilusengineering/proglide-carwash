"use client";

import { IframeDrawer } from "@/components/drawer/iframe-drawer";
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
      src={storefrontEmbedUrl(PRODUCT_IDS[plan][tier])}
      title={plan === "membership" ? "Join the Wash Club" : "Buy a Wash"}
      onClose={closeDrawer}
    />
  );
}
