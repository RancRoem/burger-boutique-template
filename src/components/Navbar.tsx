"use client";

import React, { useState } from "react";
import { ShoppingBag, Menu, X, Phone } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/data/menuData";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Our Craft", href: "#about" },
    { label: "Book a Table", href: "#reservations" },
    { label: "Location & Hours", href: "#footer" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl overflow-hidden border border-gray-200 bg-white flex items-center justify-center p-1 shadow-sm group-hover:border-brand-primary transition">
              <img
                src={RESTAURANT_CONFIG.images.logo}
                alt={`${RESTAURANT_CONFIG.name} Logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block text-xl font-extrabold tracking-tight text-gray-900">
                {RESTAURANT_CONFIG.name}
              </span>
              <span className="block text-xs font-medium text-brand-primary tracking-wide uppercase">
                Gourmet Burgers
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-brand-primary transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Phone + Cart Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${RESTAURANT_CONFIG.phone}`}
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>{RESTAURANT_CONFIG.phone}</span>
            </a>

            <button
              onClick={openCart}
              aria-label="Open shopping cart"
              className="relative inline-flex items-center gap-2 bg-gray-900 hover:bg-brand-primary text-white px-4 py-2.5 rounded-full text-sm font-semibold transition duration-200 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order</span>
              <span className="inline-flex items-center justify-center bg-white text-gray-900 text-xs font-bold w-5 h-5 rounded-full">
                {totalItems}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-gray-800 hover:bg-orange-50 hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
