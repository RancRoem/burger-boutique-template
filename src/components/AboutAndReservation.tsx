"use client";

import React, { useState } from "react";
import {
  Flame,
  Award,
  Sparkles,
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { RESTAURANT_CONFIG } from "@/data/menuData";

export default function AboutAndReservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [specialRequests, setSpecialRequests] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [reservationCode, setReservationCode] = useState<string | null>(null);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          guests: Number(guests),
          date,
          time,
          specialRequests,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(data.error || "Unable to complete reservation.");
      } else {
        setReservationCode(data.reservationCode);
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ABOUT / OUR CRAFT SECTION */}
      <section id="about" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200">
              <img
                src={RESTAURANT_CONFIG.images.aboutKitchen}
                alt="Chef preparing gourmet burgers"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    Fresh Daily
                  </p>
                  <p className="text-sm font-extrabold text-gray-900">
                    Never Frozen • Hand-Smashed to Order
                  </p>
                </div>
                <Flame className="w-8 h-8 text-brand-primary shrink-0" />
              </div>
            </div>

            {/* Text & Pillars Column */}
            <div>
              <span className="text-brand-primary font-bold tracking-wider uppercase text-xs">
                Our Culinary Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-5">
                Obsessed With Every Layer of Flavor
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                At {RESTAURANT_CONFIG.name}, we believe a burger should be an
                unforgettable craft experience. Every morning, our kitchen
                prepares custom-blend prime chuck patties, bakes buttery brioche
                buns, and simmers signature house sauces from scratch.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-100 text-brand-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      100% Grass-Fed Prime Beef
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5">
                      Ethically sourced cuts ground fresh daily for maximum
                      juiciness and a crisp, caramelized crust.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-100 text-brand-primary flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      Artisanal Bakery Buns
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5">
                      Toasted to order with clarified butter so every bite holds
                      together from first crunch to last.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE RESERVATION SECTION */}
      <section id="reservations" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-brand-primary font-bold tracking-wider uppercase text-xs">
                Dine In With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-3">
                Reserve Your Table
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Planning a dinner with friends or family? Book your table online
                in seconds and skip the wait.
              </p>
            </div>

            {reservationCode ? (
              <div className="bg-white/10 border border-white/15 rounded-2xl p-8 text-center max-w-md mx-auto">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-extrabold mb-2">
                  Table Reserved!
                </h3>
                <p className="text-sm text-gray-300 mb-5">
                  We look forward to welcoming{" "}
                  <span className="font-bold text-white">{name}</span> ({guests}{" "}
                  guests) on <span className="font-bold text-white">{date}</span>{" "}
                  at <span className="font-bold text-white">{time}</span>.
                </p>
                <div className="inline-block bg-gray-900 px-5 py-2.5 rounded-xl border border-white/10 text-sm font-mono text-brand-accent font-bold mb-6">
                  Booking Code: #{reservationCode}
                </div>
                <div>
                  <button
                    onClick={() => setReservationCode(null)}
                    className="text-sm font-bold text-white underline hover:text-brand-primary"
                  >
                    Make Another Reservation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-5">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-sm font-medium text-center">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Guests
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                          <option key={num} value={num} className="text-gray-900">
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Time *
                    </label>
                    <div className="relative">
