import { create } from "zustand";
import type { Plan, Tier } from "@/lib/checkout-config";

interface PaymentDrawerStore {
  isOpen: boolean;
  tier: Tier;
  plan: Plan;
  openDrawer: (opts: { tier: Tier; plan: Plan }) => void;
  closeDrawer: () => void;
}

export const usePaymentDrawerStore = create<PaymentDrawerStore>((set) => ({
  isOpen: false,
  tier: "ultimate",
  plan: "membership",
  openDrawer: ({ tier, plan }) => set({ isOpen: true, tier, plan }),
  closeDrawer: () => set({ isOpen: false }),
}));
