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
  Sparkles,
  Droplets,
  Check,
  ChevronRight,
  Navigation,
  Car,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const washPackages = [
  {
    name: "Basic Wash",
    type: "Soft Touch",
    tier: "Good",
    monthlyPrice: 20,
    singlePrice: 12,
    features: ["Soft touch cleaning"],
    color: "bg-[#3e65b3]",
    borderColor: "border-[#2a4a8a]",
    shadowColor: "shadow-[8px_8px_0px_0px_#2a4a8a]",
    popular: false,
    scale: "",
  },
  {
    name: "Deluxe Wash",
    type: "Soft Touch",
    tier: "Better",
    monthlyPrice: 26,
    singlePrice: 16,
    features: ["Ceramic x1", "Triple foam"],
    color: "bg-[#de4743]",
    borderColor: "border-[#b33936]",
    shadowColor: "shadow-[10px_10px_0px_0px_#b33936]",
    popular: true,
    scale: "md:scale-105 z-10",
  },
  {
    name: "Ultimate Wash",
    type: "Soft Touch",
    tier: "Best",
    monthlyPrice: 36,
    singlePrice: 20,
    features: ["Ceramic x3", "Graphene", "Krazy Slick"],
    color: "bg-[#f3c402]",
    textColor: "text-[#090f27]",
    borderColor: "border-[#d4a900]",
    shadowColor: "shadow-[8px_8px_0px_0px_#d4a900]",
    popular: false,
    scale: "",
  },
];

const multiVehiclePricing = [
  {
    name: "Ultimate Wash (Touch Free)",
    prices: [36, 68, 101, 134, 167],
  },
  {
    name: "Ultimate Wash (Soft Touch)",
    prices: [36, 68, 101, 134, 167],
  },
  {
    name: "Deluxe Wash (Soft Touch)",
    prices: [26, 49, 73, 97, 121],
  },
  {
    name: "Basic Wash (Soft Touch)",
    prices: [20, 38, 56, 74, 92],
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
    icon: Sparkles,
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

          {/* Package Cards */}
          <div className="grid md:grid-cols-3 gap-8 items-end">
            {washPackages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative overflow-visible border-3 ${pkg.borderColor} ${pkg.shadowColor} package-card rounded bg-[#F5F0E8] flex flex-col ${pkg.scale} transition-transform`}
              >
                {/* Most Popular Chip */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#090f27] text-[#f3c402] px-4 py-1.5 rounded-full font-bold text-sm shadow-[3px_3px_0px_0px_#b33936]">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`${pkg.color} p-6 text-center border-b-3 ${pkg.borderColor} relative`}>
                  {/* Tier Badge */}
                  <span className={`absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-bold ${pkg.textColor ? "bg-[#090f27]/20 text-[#090f27]" : "bg-white/20 text-white"}`}>
                    {pkg.tier}
                  </span>
                  <p
                    className={`text-sm font-medium mb-1 ${pkg.textColor || "text-white/90"}`}
                  >
                    {pkg.type}
                  </p>
                  <h3
                    className={`text-2xl font-bold ${pkg.textColor || "text-white"}`}
                  >
                    {pkg.name}
                  </h3>
                </div>

                <div className="p-6 bg-[#F5F0E8] flex flex-col flex-grow">
                  <div className="text-center mb-5">
                    <span className="text-4xl font-bold text-[#090f27]">
                      ${pricingMode === "membership" ? pkg.monthlyPrice : pkg.singlePrice}
                    </span>
                    <span className="text-gray-500 font-medium">
                      {pricingMode === "membership" ? "/month" : ""}
                    </span>
                    {pricingMode === "membership" && (
                      <p className="text-xs text-gray-400 mt-1">Unlimited washes</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span
                          className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            pkg.name === "Basic Wash"
                              ? "bg-[#3e65b3] shadow-[2px_2px_0px_0px_#2a4a8a]"
                              : pkg.name === "Deluxe Wash"
                              ? "bg-[#de4743] shadow-[2px_2px_0px_0px_#b33936]"
                              : "bg-[#f3c402] shadow-[2px_2px_0px_0px_#d4a900]"
                          }`}
                        />
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
                      className="w-full py-3 font-bold rounded flex items-center justify-center gap-2 bg-[#3e65b3] text-[#f3c402] shadow-[4px_4px_0px_0px_#090f27] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                    >
                      {pricingMode === "membership" ? "Subscribe Now" : "Buy Now"}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Vehicle Pricing */}
      <section className="py-20 bg-[#FDF9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#de4743] text-white px-4 py-1.5 text-sm font-bold rounded mb-4 shadow-[3px_3px_0px_0px_#090f27]">
              Family Plans
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090f27] mb-4">
              Multi-Vehicle <span className="text-[#3e65b3]">Pricing</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Washes are shared between all the vehicles on the monthly plan.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-[#F5F0E8] rounded border-3 border-[#090f27] shadow-[6px_6px_0px_0px_#090f27] overflow-hidden">
              <thead>
                <tr className="bg-[#3e65b3] text-[#f3c402]">
                  <th className="px-6 py-4 text-left font-bold">Package</th>
                  <th className="px-6 py-4 text-center font-bold">1 Vehicle</th>
                  <th className="px-6 py-4 text-center font-bold">2 Vehicles</th>
                  <th className="px-6 py-4 text-center font-bold">3 Vehicles</th>
                  <th className="px-6 py-4 text-center font-bold">4 Vehicles</th>
                  <th className="px-6 py-4 text-center font-bold">5 Vehicles</th>
                </tr>
              </thead>
              <tbody>
                {multiVehiclePricing.map((row, index) => (
                  <tr
                    key={row.name}
                    className={index % 2 === 0 ? "bg-[#F5F0E8]" : "bg-[#FDF9F3]"}
                  >
                    <td className="px-6 py-4 font-bold text-[#090f27]">
                      {row.name}
                    </td>
                    {row.prices.map((price, i) => (
                      <td
                        key={`${row.name}-${price}-${i}`}
                        className="px-6 py-4 text-center font-bold text-[#3e65b3]"
                      >
                        ${price}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-[#f3c402]">
                  <td className="px-6 py-4 font-bold text-[#090f27]">
                    Monthly Washes
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-[#090f27]">30</td>
                  <td className="px-6 py-4 text-center font-bold text-[#090f27]">60</td>
                  <td className="px-6 py-4 text-center font-bold text-[#090f27]">90</td>
                  <td className="px-6 py-4 text-center font-bold text-[#090f27]">120</td>
                  <td className="px-6 py-4 text-center font-bold text-[#090f27]">150</td>
                </tr>
              </tbody>
            </table>
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
            Join our Wash Club today and enjoy unlimited washes every month.
          </p>
          <a
            href="https://mywashmembership.com/#/customer/1831a4e9-5c7f-4523-ab9e-374dad1af213/passes/pass-selection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#f3c402] text-[#090f27] font-bold text-lg px-10 py-4 rounded shadow-[5px_5px_0px_0px_#090f27] hover:shadow-[6px_6px_0px_0px_#090f27] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">
              Get Started for $20/month
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
