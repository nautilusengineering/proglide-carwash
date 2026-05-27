"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
  Droplets,
  Check,
  ChevronRight,
  Navigation,
  Car,
  Menu,
  X,
  Zap,
  Ticket,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const washPackages = [
  {
    name: "Basic Wash",
    type: "Soft Touch",
    tier: "Good",
    tierLevel: 1,
    monthlyPrice: 20,
    singlePrice: 12,
    features: ["Soft Touch"],
    color: "bg-[#3e65b3]",
    borderColor: "border-[#2a4a8a]",
    shadowColor: "shadow-[4px_4px_0px_0px_#2a4a8a]",
    dotColor: "bg-[#3e65b3] shadow-[2px_2px_0px_0px_#2a4a8a]",
    headerTextColor: "text-white",
    popular: false,
    featured: false,
  },
  {
    name: "Deluxe Wash",
    type: "Soft Touch",
    tier: "Better",
    tierLevel: 2,
    monthlyPrice: 26,
    singlePrice: 16,
    features: ["Soft Touch", "Ceramic", "Triple Foam", "Tire Shine"],
    color: "bg-[#de4743]",
    borderColor: "border-[#b33936]",
    shadowColor: "shadow-[5px_5px_0px_0px_#b33936]",
    dotColor: "bg-[#de4743] shadow-[2px_2px_0px_0px_#b33936]",
    headerTextColor: "text-white",
    popular: true,
    featured: false,
  },
  {
    name: "Ultimate Wash",
    type: "Soft Touch Pro",
    tier: "Best",
    tierLevel: 3,
    monthlyPrice: 36,
    singlePrice: 20,
    features: ["Soft Touch Pro", "Ceramic x3", "Graphene", "Crazy Slick", "Tire Shine"],
    color: "bg-[#f3c402]",
    borderColor: "border-[#d4a900]",
    shadowColor: "shadow-[6px_6px_0px_0px_#d4a900]",
    dotColor: "bg-[#f3c402] shadow-[2px_2px_0px_0px_#d4a900]",
    headerTextColor: "text-[#090f27]",
    popular: false,
    featured: false,
  },
  {
    name: "Touch-Free Unlimited",
    type: "Touch Free",
    tier: "Premium",
    tierLevel: 4,
    monthlyPrice: 36,
    singlePrice: 20,
    features: ["Touch Free", "Ceramic x3", "Graphene", "Crazy Slick", "Tire Shine"],
    color: "bg-[#090f27]",
    borderColor: "border-[#090f27]",
    shadowColor: "shadow-[8px_8px_0px_0px_#090f27]",
    dotColor: "bg-[#f3c402] shadow-[2px_2px_0px_0px_#d4a900]",
    headerTextColor: "text-white",
    popular: false,
    featured: true,
  },
];

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We don't use any products or machinery that may damage your car. Touch free washing has always been the safest way to wash.",
    borderColor: "border-[#3e65b3]",
    shadowColor: "shadow-[5px_5px_0px_0px_#3e65b3]",
    iconBg: "bg-[#3e65b3]",
    iconColor: "text-white",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "State-of-the-art equipment and premium products ensure your vehicle gets the best treatment every single time.",
    borderColor: "border-[#f3c402]",
    shadowColor: "shadow-[5px_5px_0px_0px_#f3c402]",
    iconBg: "bg-[#f3c402]",
    iconColor: "text-white",
  },
  {
    icon: Droplets,
    title: "100% Satisfaction",
    description:
      "We are truly a 100% satisfaction guaranteed business. If we haven't met your expectations, contact us for a no-hassle refund.",
    borderColor: "border-[#de4743]",
    shadowColor: "shadow-[5px_5px_0px_0px_#de4743]",
    iconBg: "bg-[#de4743]",
    iconColor: "text-white",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pricingMode, setPricingMode] = useState<"membership" | "single">("membership");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF9F3]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#FDF9F3]/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Image
                src="https://ext.same-assets.com/206968009/3344349284.png"
                alt="ProGlide Express"
                width={160}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className={`font-bold transition-colors ${
                  scrolled
                    ? "text-[#090f27] hover:text-[#3e65b3]"
                    : "text-white hover:text-[#f3c402]"
                }`}
              >
                Why Us
              </a>
              <a
                href="#packages"
                className={`font-bold transition-colors ${
                  scrolled
                    ? "text-[#090f27] hover:text-[#3e65b3]"
                    : "text-white hover:text-[#f3c402]"
                }`}
              >
                Packages
              </a>
              <a
                href="#location"
                className={`font-bold transition-colors ${
                  scrolled
                    ? "text-[#090f27] hover:text-[#3e65b3]"
                    : "text-white hover:text-[#f3c402]"
                }`}
              >
                Location
              </a>
              <a
                href="https://mywashmembership.com/#/customer/1831a4e9-5c7f-4523-ab9e-374dad1af213/passes/pass-selection"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-block relative w-[180px] h-[40px] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform"
              >
                <svg
                  viewBox="0 0 262 60"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 2 H250 A6 6 0 0 1 256 8 V20 A8 8 0 0 0 256 36 V48 A6 6 0 0 1 250 54 H8 A6 6 0 0 1 2 48 V36 A8 8 0 0 0 2 20 V8 A6 6 0 0 1 8 2 Z"
                    fill="#090f27"
                    transform="translate(4, 4)"
                  />
                  <path
                    d="M8 2 H250 A6 6 0 0 1 256 8 V20 A8 8 0 0 0 256 36 V48 A6 6 0 0 1 250 54 H8 A6 6 0 0 1 2 48 V36 A8 8 0 0 0 2 20 V8 A6 6 0 0 1 8 2 Z"
                    fill="#f3c402"
                    stroke="#090f27"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center gap-1.5 pl-2 pr-3 pointer-events-none">
                  <Ticket className="w-4 h-4 text-[#de4743] flex-shrink-0" strokeWidth={2.5} />
                  <p className="text-[#090f27] font-extrabold text-[11px] uppercase tracking-wider leading-tight whitespace-nowrap">
                    First Wash Free
                  </p>
                </div>
              </a>
              <a
                href="https://mywashmembership.com/#/customer/1831a4e9-5c7f-4523-ab9e-374dad1af213/passes/pass-selection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#3e65b3] text-[#f3c402] font-bold px-6 py-3 rounded shadow-[4px_4px_0px_0px_#090f27] hover:shadow-[5px_5px_0px_0px_#090f27] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">
                  Join Wash Club
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={scrolled ? "text-[#090f27]" : "text-white"} size={28} />
              ) : (
                <Menu className={scrolled ? "text-[#090f27]" : "text-white"} size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDF9F3] shadow-lg border-t-2 border-[#090f27]">
            <div className="px-4 py-6 space-y-4">
              <a
                href="https://mywashmembership.com/#/customer/1831a4e9-5c7f-4523-ab9e-374dad1af213/passes/pass-selection"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-[262px] h-[60px] mx-auto"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  viewBox="0 0 262 60"
                  width="262"
                  height="60"
                  className="absolute inset-0"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 2 H250 A6 6 0 0 1 256 8 V20 A8 8 0 0 0 256 36 V48 A6 6 0 0 1 250 54 H8 A6 6 0 0 1 2 48 V36 A8 8 0 0 0 2 20 V8 A6 6 0 0 1 8 2 Z"
                    fill="#090f27"
                    transform="translate(4, 4)"
                  />
                  <path
                    d="M8 2 H250 A6 6 0 0 1 256 8 V20 A8 8 0 0 0 256 36 V48 A6 6 0 0 1 250 54 H8 A6 6 0 0 1 2 48 V36 A8 8 0 0 0 2 20 V8 A6 6 0 0 1 8 2 Z"
                    fill="#f3c402"
                    stroke="#090f27"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="14"
                    x2="50"
                    y2="42"
                    stroke="#090f27"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    opacity="0.4"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center pl-3 pr-5 pointer-events-none">
                  <Ticket className="w-7 h-7 text-[#de4743] flex-shrink-0" strokeWidth={2.5} />
                  <div className="flex-1 text-center leading-tight">
                    <p className="text-[#090f27] font-extrabold text-sm uppercase tracking-wider leading-tight">
                      First Wash Free
                    </p>
                    <p className="text-[#de4743] font-extrabold text-[10px] uppercase tracking-widest leading-tight">
                      New Customers
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="#features"
                className="block text-[#090f27] font-bold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <a
                href="#packages"
                className="block text-[#090f27] font-bold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Packages
              </a>
              <a
                href="#location"
                className="block text-[#090f27] font-bold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Location
              </a>
              <a
                href="https://mywashmembership.com/#/customer/1831a4e9-5c7f-4523-ab9e-374dad1af213/passes/pass-selection"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full bg-[#3e65b3] text-[#f3c402] font-bold py-3 rounded shadow-[4px_4px_0px_0px_#090f27]">
                  Join Wash Club
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-20">
        {/* Background Image with blur */}
        <div className="absolute inset-0">
          <Image
            src="http://proglideexpresscarwash.com/wp-content/uploads/2025/03/pro-glide-street-view-scaled.jpg"
            alt="ProGlide Express Car Wash Location"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Hero Content - positioned lower */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <MapPin className="w-4 h-4 text-[#f3c402]" />
              <span className="text-white text-sm font-medium">Hot Springs, Arkansas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Unlimited{" "}
              <span className="text-[#f3c402] glow-yellow">Shine</span>
              <br />
              <span className="text-[#de4743]">Zero</span>{" "}
              Scratches
            </h1>

            {/* Subheadline - moved lower */}
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto pt-4">
              Experience the safest, 100% touchless car wash technology designed to
              leave your vehicle protected, gleaming, and ready for the road.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a
                href="https://mywashmembership.com/#/customer/1831a4e9-5c7f-4523-ab9e-374dad1af213/passes/pass-selection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#3e65b3] text-[#f3c402] font-bold text-lg px-8 py-4 rounded shadow-[5px_5px_0px_0px_#090f27] hover:shadow-[6px_6px_0px_0px_#090f27] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">
                  Buy Membership
                </button>
              </a>
              <a
                href="https://maps.google.com/?q=1873+Higdon+Ferry+RD+Hot+Springs+AR+71913"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#F5F0E8] text-[#090f27] font-bold text-lg px-8 py-4 rounded border-2 border-[#090f27] shadow-[5px_5px_0px_0px_#090f27] hover:shadow-[6px_6px_0px_0px_#090f27] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#FDF9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#3e65b3] text-[#f3c402] px-4 py-1.5 text-sm font-bold rounded mb-4 shadow-[3px_3px_0px_0px_#090f27]">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090f27] mb-4">
              Touchless Car Washing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The safest way to wash. Get a spotless clean without the risk of
              scratches or damage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className={`p-8 border-3 ${feature.borderColor} bg-[#F5F0E8] ${feature.shadowColor} package-card rounded`}
              >
                <div
                  className={`w-14 h-14 rounded flex items-center justify-center mb-5 ${feature.iconBg}`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-[#090f27] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wash Packages Section */}
      <section id="packages" className="py-20 bg-[#FDF9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090f27] mb-4">
              Choose Your <span className="text-[#3e65b3]">Wash Pass</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {pricingMode === "membership"
                ? "Unlimited monthly washes starting at just $20/month."
                : "Individual wash passes - no commitment required."}
            </p>

            {/* Toggle */}
            <div className="inline-flex bg-[#F5F0E8] border-3 border-[#090f27] rounded-lg p-1 shadow-[4px_4px_0px_0px_#090f27]">
              <button
                type="button"
                onClick={() => setPricingMode("membership")}
                className={`px-6 py-2.5 font-bold rounded-md transition-all ${
                  pricingMode === "membership"
                    ? "bg-[#3e65b3] text-[#f3c402]"
                    : "bg-transparent text-[#090f27] hover:bg-[#FDF9F3]"
                }`}
              >
                Membership
              </button>
              <button
                type="button"
                onClick={() => setPricingMode("single")}
                className={`px-6 py-2.5 font-bold rounded-md transition-all ${
                  pricingMode === "single"
                    ? "bg-[#3e65b3] text-[#f3c402]"
                    : "bg-transparent text-[#090f27] hover:bg-[#FDF9F3]"
                }`}
              >
                Single Wash
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {washPackages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative overflow-visible border-3 ${pkg.borderColor} ${pkg.shadowColor} package-card rounded bg-[#F5F0E8] flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 z-20 whitespace-nowrap">
                    <span className="bg-[#de4743] text-white px-3 py-1 rounded-full font-extrabold text-[10px] shadow-[2px_2px_0px_0px_#090f27] uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                {pkg.featured && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 z-20 whitespace-nowrap">
                    <span className="bg-[#f3c402] text-[#090f27] px-3 py-1 rounded-full font-extrabold text-[10px] shadow-[2px_2px_0px_0px_#de4743] inline-flex items-center gap-1 uppercase tracking-wider">
                      <Zap className="w-3 h-3 fill-current" />
                      Top Tier
                    </span>
                  </div>
                )}

                {/* Tier strip */}
                <div className="bg-[#090f27] px-3 py-2 flex items-center justify-between border-b-3 border-[#090f27]">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#f3c402]">
                    Tier {pkg.tierLevel} · {pkg.tier}
                  </p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((n) => (
                      <span
                        key={n}
                        className={`w-1.5 h-1.5 rounded-full ${
                          n <= pkg.tierLevel ? "bg-[#f3c402]" : "bg-[#f3c402]/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Colored header */}
                <div className={`${pkg.color} p-5 text-center border-b-3 ${pkg.borderColor}`}>
                  <p
                    className={`text-xs font-medium mb-1 ${
                      pkg.headerTextColor === "text-white"
                        ? "text-white/90"
                        : "text-[#090f27]/80"
                    }`}
                  >
                    {pkg.type}
                  </p>
                  <h3 className={`text-lg lg:text-xl font-bold ${pkg.headerTextColor}`}>
                    {pkg.name}
                  </h3>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-[#090f27]">
                      ${pricingMode === "membership" ? pkg.monthlyPrice : pkg.singlePrice}
                    </span>
                    <span className="text-gray-500 font-medium text-sm">
                      {pricingMode === "membership" ? "/mo" : ""}
                    </span>
                    {pricingMode === "membership" && (
                      <p className="text-[10px] text-gray-400 mt-1">Unlimited washes</p>
                    )}
                  </div>

                  <ul className="space-y-2 mb-5 flex-grow">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-gray-700 text-sm"
                      >
                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${pkg.dotColor}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://mywashmembership.com/#/customer/1831a4e9-5c7f-4523-ab9e-374dad1af213/passes/pass-selection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <button
                      className={`w-full py-2.5 font-bold rounded text-sm flex items-center justify-center gap-1.5 transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] ${
                        pkg.featured
                          ? "bg-[#090f27] text-[#f3c402] shadow-[3px_3px_0px_0px_#de4743]"
                          : "bg-[#3e65b3] text-[#f3c402] shadow-[3px_3px_0px_0px_#090f27]"
                      }`}
                    >
                      {pricingMode === "membership" ? "Subscribe" : "Buy"}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-[#FDF9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#3e65b3] text-[#f3c402] px-4 py-1.5 text-sm font-bold rounded mb-4 shadow-[3px_3px_0px_0px_#090f27]">
              Visit Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090f27] mb-4">
              Our <span className="text-[#de4743]">Location</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are your friendly neighborhood carwash! Come visit us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Location Image */}
            <div className="relative rounded border-3 border-[#3e65b3] overflow-hidden shadow-[8px_8px_0px_0px_#3e65b3]">
              <Image
                src="http://proglideexpresscarwash.com/wp-content/uploads/2025/03/pro-glide-street-view-scaled.jpg"
                alt="ProGlide Express Car Wash Location"
                width={700}
                height={500}
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090f27]/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-xl font-bold text-white mb-1">
                  ProGlide Express Car Wash
                </h3>
                <p className="text-gray-200 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f3c402]" />
                  1873 Higdon Ferry RD. Hot Springs, AR 71913
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-[#F5F0E8] p-5 rounded border-3 border-[#f3c402] shadow-[4px_4px_0px_0px_#f3c402]">
                <div className="w-12 h-12 bg-[#f3c402] rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#090f27] mb-1">Our Address</h3>
                  <p className="text-gray-600">1873 Higdon Ferry RD. Hot Springs, AR 71913</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#F5F0E8] p-5 rounded border-3 border-[#3e65b3] shadow-[4px_4px_0px_0px_#3e65b3]">
                <div className="w-12 h-12 bg-[#3e65b3] rounded flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#090f27] mb-1">Call Us</h3>
                  <a
                    href="tel:5013593237"
                    className="text-gray-600 hover:text-[#3e65b3] transition-colors"
                  >
                    +1 (501) 359-3237
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#F5F0E8] p-5 rounded border-3 border-[#de4743] shadow-[4px_4px_0px_0px_#de4743]">
                <div className="w-12 h-12 bg-[#de4743] rounded flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#090f27] mb-1">Send an Email</h3>
                  <a
                    href="mailto:info@proglidecarwash.com"
                    className="text-gray-600 hover:text-[#de4743] transition-colors"
                  >
                    info@proglidecarwash.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#F5F0E8] p-5 rounded border-3 border-[#090f27] shadow-[4px_4px_0px_0px_#090f27]">
                <div className="w-12 h-12 bg-[#090f27] rounded flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#f3c402]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#090f27] mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Open 7 Days a Week<br />
                    7:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://mywashmembership.com/#/customer/1831a4e9-5c7f-4523-ab9e-374dad1af213/passes/pass-selection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#3e65b3] text-[#f3c402] font-bold px-6 py-3 rounded shadow-[4px_4px_0px_0px_#090f27] hover:shadow-[5px_5px_0px_0px_#090f27] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all w-full sm:w-auto">
                    Join Wash Club
                  </button>
                </a>
                <a
                  href="https://maps.google.com/?q=1873+Higdon+Ferry+RD+Hot+Springs+AR+71913"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#F5F0E8] text-[#090f27] font-bold px-6 py-3 rounded border-2 border-[#090f27] shadow-[4px_4px_0px_0px_#090f27] hover:shadow-[5px_5px_0px_0px_#090f27] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                    <Navigation className="w-5 h-5" />
                    Get Directions
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#3e65b3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a <span className="text-[#f3c402]">Spotless Shine?</span>
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Try us out — new customers get their <span className="text-[#f3c402] font-bold">first wash free</span>.
          </p>
          <a
            href="https://mywashmembership.com/#/customer/1831a4e9-5c7f-4523-ab9e-374dad1af213/passes/pass-selection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#f3c402] text-[#090f27] font-bold text-lg px-10 py-4 rounded shadow-[5px_5px_0px_0px_#090f27] hover:shadow-[6px_6px_0px_0px_#090f27] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">
              Claim Your Free Wash
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDF9F3] py-14 border-t-3 border-[#090f27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <Image
                src="https://ext.same-assets.com/206968009/3344349284.png"
                alt="ProGlide Express"
                width={180}
                height={70}
                className="h-14 w-auto mb-5"
              />
              <p className="text-gray-600 mb-5 max-w-md">
                At ProGlide Express Carwash, we're dedicated to providing
                top-notch car cleaning solutions to keep your vehicle spotless
                and shining.
              </p>
              <div className="flex gap-3">
                <a
                  href="tel:5013593237"
                  className="w-10 h-10 bg-[#F5F0E8] border-2 border-[#090f27] rounded flex items-center justify-center hover:bg-[#f3c402] transition-colors shadow-[2px_2px_0px_0px_#090f27]"
                >
                  <Phone className="w-5 h-5 text-[#090f27]" />
                </a>
                <a
                  href="mailto:info@proglidecarwash.com"
                  className="w-10 h-10 bg-[#F5F0E8] border-2 border-[#090f27] rounded flex items-center justify-center hover:bg-[#f3c402] transition-colors shadow-[2px_2px_0px_0px_#090f27]"
                >
                  <Mail className="w-5 h-5 text-[#090f27]" />
                </a>
                <a
                  href="https://maps.google.com/?q=1873+Higdon+Ferry+RD+Hot+Springs+AR+71913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F5F0E8] border-2 border-[#090f27] rounded flex items-center justify-center hover:bg-[#f3c402] transition-colors shadow-[2px_2px_0px_0px_#090f27]"
                >
                  <MapPin className="w-5 h-5 text-[#090f27]" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#090f27] font-bold text-lg mb-5">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-600 hover:text-[#3e65b3] transition-colors font-medium">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#packages" className="text-gray-600 hover:text-[#3e65b3] transition-colors font-medium">
                    Wash Packages
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-gray-600 hover:text-[#3e65b3] transition-colors font-medium">
                    Location
                  </a>
                </li>
                <li>
                  <a
                    href="https://mywashmembership.com/#/customer/1831a4e9-5c7f-4523-ab9e-374dad1af213/passes/pass-selection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#3e65b3] transition-colors font-medium"
                  >
                    Join Wash Club
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[#090f27] font-bold text-lg mb-5">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#3e65b3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    1873 Higdon Ferry RD.<br />
                    Hot Springs, AR 71913
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#3e65b3]" />
                  <a href="tel:5013593237" className="text-gray-600 hover:text-[#3e65b3] transition-colors">
                    (501) 359-3237
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#3e65b3]" />
                  <a href="mailto:info@proglidecarwash.com" className="text-gray-600 hover:text-[#3e65b3] transition-colors">
                    info@proglidecarwash.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-[#090f27]/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              2026 ProGlide Express Carwash. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://proglideexpresscarwash.com/terms-and-privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#3e65b3] text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="https://proglideexpresscarwash.com/terms-and-privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#3e65b3] text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
