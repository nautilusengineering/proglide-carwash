"use client";

import { IframeDrawer } from "@/components/drawer/iframe-drawer";
import { freeWashFormEmbedUrl } from "@/lib/checkout-config";
import { useFreeWashDrawerStore } from "@/stores/use-free-wash-drawer-store";

/**
 * Slide-in drawer that embeds the Nautilus "Free Wash Form" lead-capture form
 * (name / phone / email). Opened by every "First Wash Free" / "Claim Your Free
 * Wash" CTA on the page.
 */
export function FreeWashDrawer() {
  const { isOpen, closeDrawer } = useFreeWashDrawerStore();

  if (!isOpen) return null;

  return (
    <IframeDrawer
      src={freeWashFormEmbedUrl()}
      title="Claim Your Free Wash"
      onClose={closeDrawer}
      bodyClassName="bg-white p-5"
    />
  );
}
