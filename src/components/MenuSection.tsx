"use client";

import React, { useState } from "react";
import { Plus, Check, Search, Flame } from "lucide-react";
import {
  CATEGORIES,
  CategoryId,
  MENU_ITEMS,
  MenuItem,
  RESTAURANT_CONFIG,
} from "@/data/menuData";
import { useCart } from "@/context/CartContext";

export default function MenuSection() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("burgers");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      searchQuery.trim() !== "" ? true : item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (item: MenuItem) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1000);
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-primary font-bold tracking-wider uppercase text-xs">
            Freshly Made To Order
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Our Signature Menu
          </h2>
          <p className="text-gray-600 text-base">
            Select a category below or search for your favorite gourmet burger,
            combo meal, side dish, or handcrafted drink.
          </p>
        </div>

        {/* Category Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          {/* Category Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((category) => {
              const isActive =
                activeCategory === category.id && searchQuery.trim() === "";
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery("");
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition duration-200 ${
                    isActive
                      ? "bg-gray-900 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-brand-primary"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, fries, drinks..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-600 font-medium">
              No dishes matched &ldquo;{searchQuery}&rdquo;. Try another keyword!
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-sm font-bold text-brand-primary hover:underline"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const isJustAdded = addedId === item.id;

              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Studio Image Container */}
                  <div className="relative aspect-[4/3] w-full bg-[#f3f4f6] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        <Flame className="w-3 h-3 text-brand-primary" />
                        {item.badge}
                      </span>
                    )}
                    {item.calories && (
                      <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {item.calories}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-brand-primary transition">
                          {item.name}
                        </h3>
                        <span className="text-lg font-extrabold text-gray-900 shrink-0">
                          {RESTAURANT_CONFIG.currency}
                          {item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAdd(item)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition duration-200 ${
                        isJustAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-900 hover:bg-brand-primary text-white shadow-sm"
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Order</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
