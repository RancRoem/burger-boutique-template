"use client";

import React from "react";
import { ArrowRight, Flame, Clock, Star } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/data/menuData";

export default function Hero() {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden">
      {/* Background Image with Left Gradient Overlay for Readability */}
      <div className="absolute inset-0">
        <img
          src={RESTAURANT_CONFIG.images.heroBanner}
          alt="Signature Gourmet Smash Burger"
          className="w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/40 text-orange-300 text-xs sm:text-sm font-semibold mb-6">
            <Flame className="w-4 h-4 text-brand-primary" />
            <span>100% Grass-Fed Beef • Freshly Baked Brioche</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {RESTAURANT_CONFIG.tagline}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            {RESTAURANT_CONFIG.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-base transition shadow-lg shadow-orange-600/25"
            >
              <span>Explore Full Menu</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#reservations"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-bold px-8 py-4 rounded-full text-base transition"
            >
              <span>Reserve a Table</span>
            </a>
          </div>

          {/* Trust & Speed Indicators */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/15 max-w-lg">
            <div>
              <div className="flex items-center gap-1 text-brand-accent font-bold text-lg">
                <Star className="w-4 h-4 fill-brand-accent" />
                <span>4.9/5</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">1,200+ Reviews</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-white font-bold text-lg">
                <Clock className="w-4 h-4 text-brand-primary" />
                <span>25 Min</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Hot Express Delivery</p>
            </div>
            <div>
              <div className="text-white font-bold text-lg">
                Free {RESTAURANT_CONFIG.currency}
                {RESTAURANT_CONFIG.minOrderForFreeDelivery}+
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Delivery Orders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
