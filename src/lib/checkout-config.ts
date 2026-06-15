// ProGlide Express — Nautilus storefront embed config.
//
// We don't run any checkout logic here. Each "Subscribe"/"Buy" CTA opens a drawer
// that iframes the org's Nautilus storefront, deep-linked to the chosen product:
//   https://www.nautilus-app.com/c/storefront/proglide?locationId=…&productId=…&embedded=true
// The storefront (in the monorepo) owns product display, Stripe Connect checkout,
// and DenCar fulfillment. This mirrors the other per-org sites (galaxy, crystal-
// clean, rapid-wash).

export const ORG_SLUG = "proglide";

// ProGlide Express — Site.id (Nautilus storefront locationId).
export const LOCATION_ID = "2e7a275e-2104-4a83-98c9-a8ef89f5afc7";

const NAUTILUS_BASE_URL = "https://www.nautilus-app.com";

export type Tier = "basic" | "deluxe" | "ultimate" | "touch_free";
export type Plan = "membership" | "single";

// Nautilus SalesItem ids — the embedded storefront deep-links to these.
export const PRODUCT_IDS: Record<Plan, Record<Tier, string>> = {
  membership: {
    basic: "9a585b38-ec43-46a5-9cc4-6099f0cc60f2",
    deluxe: "1ddad5a5-825d-4b8c-af84-928a6d1c5f17",
    ultimate: "be1f3ecd-3a29-4373-83b8-98daf75e48ac",
    touch_free: "431c908a-90f6-41b9-869f-8eddde69a076",
  },
  single: {
    basic: "dd35f808-4e3d-4c2d-ad64-984c2d2d951d",
    deluxe: "d8f78156-da36-4da9-a63a-88ef99472cc6",
    ultimate: "4cdca746-8ce6-403c-80c3-ec85b4c7a307",
    touch_free: "c88f8be7-3016-450f-a846-5e1ee8d27f19",
  },
};

/** Build the embedded storefront URL, optionally deep-linked to a product. */
export function storefrontEmbedUrl(productId?: string): string {
  const params = new URLSearchParams({ locationId: LOCATION_ID, embedded: "true" });
  if (productId) params.set("productId", productId);
  return `${NAUTILUS_BASE_URL}/c/storefront/${ORG_SLUG}?${params.toString()}`;
}
