import React from "react";
import { Flame, Award, Sparkles } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/data/menuData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200">
            <img src={RESTAURANT_CONFIG.images.aboutKitchen} alt="Chef preparing gourmet burgers" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">Fresh Daily</p>
                <p className="text-sm font-extrabold text-gray-900">Never Frozen • Hand-Smashed to Order</p>
              </div>
              <Flame className="w-8 h-8 text-brand-primary shrink-0" />
            </div>
          </div>
          <div>
            <span className="text-brand-primary font-bold tracking-wider uppercase text-xs">Our Culinary Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-5">Obsessed With Every Layer of Flavor</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              At {RESTAURANT_CONFIG.name}, we believe a burger should be an unforgettable craft experience. Every morning, our kitchen prepares custom-blend prime chuck patties, bakes buttery brioche buns, and simmers signature house sauces from scratch.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-100 text-brand-primary flex items-center justify-center shrink-0"><Award className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">100% Grass-Fed Prime Beef</h3>
                  <p className="text-sm text-gray-600 mt-0.5">Ethically sourced cuts ground fresh daily for maximum juiciness and a crisp, caramelized crust.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-100 text-brand-primary flex items-center justify-center shrink-0"><Sparkles className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Artisanal Bakery Buns</h3>
                  <p className="text-sm text-gray-600 mt-0.5">Toasted to order with clarified butter so every bite holds together from first crunch to last.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
