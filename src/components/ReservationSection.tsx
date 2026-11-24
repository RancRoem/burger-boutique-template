"use client";

import React, { useState } from "react";
import { Calendar, Users, Clock, CheckCircle2, Loader2 } from "lucide-react";

const GUEST_OPTIONS = Array.from({ length: 12 }, (_, i) => i + 1);
const TIME_SLOTS = Array.of("12:00", "13:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00");

export default function ReservationSection() {
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
        body: JSON.stringify({ name, email, phone, guests: Number(guests), date, time, specialRequests }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) setErrorMessage(data.error || "Unable to complete reservation.");
      else setReservationCode(data.reservationCode);
    } catch {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservations" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-xs">Dine In With Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-3">Reserve Your Table</h2>
            <p className="text-gray-400 text-sm sm:text-base">Book your table online in seconds and skip the wait.</p>
          </div>
          {reservationCode ? (
            <div className="bg-white/10 border border-white/15 rounded-2xl p-8 text-center max-w-md mx-auto">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-extrabold mb-2">Table Reserved!</h3>
              <p className="text-sm text-gray-300 mb-5">Welcome <span className="font-bold text-white">{name}</span> ({guests} guests) on <span className="font-bold text-white">{date}</span> at <span className="font-bold text-white">{time}</span>.</p>
              <div className="inline-block bg-gray-900 px-5 py-2.5 rounded-xl text-sm font-mono text-brand-accent font-bold mb-6">Booking Code: #{reservationCode}</div>
              <div><button onClick={() => setReservationCode(null)} className="text-sm font-bold text-white underline hover:text-brand-primary">Make Another Reservation</button></div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-5">
              {errorMessage && <div className="p-3.5 rounded-xl bg-red-500/20 text-red-200 text-sm text-center">{errorMessage}</div>}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative">
                  <Users className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/15 rounded-xl text-sm text-white">
                    {GUEST_OPTIONS.map((num) => <option key={num} value={num} className="text-gray-900">{num} {num === 1 ? "Guest" : "Guests"}</option>)}
                  </select>
                </div>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/15 rounded-xl text-sm text-white" />
                </div>
                <div className="relative">
                  <Clock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/15 rounded-xl text-sm text-white">
                    {TIME_SLOTS.map((slot) => <option key={slot} value={slot} className="text-gray-900">{slot}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input type="text" required placeholder="Full Name *" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-sm text-white placeholder-gray-400" />
                <input type="email" required placeholder="Email Address *" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-sm text-white placeholder-gray-400" />
                <input type="tel" required placeholder="Phone Number *" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-sm text-white placeholder-gray-400" />
              </div>
              <input type="text" placeholder="Special requests (optional)" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-sm text-white placeholder-gray-400" />
              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-brand-primary hover:bg-orange-600 text-white font-bold rounded-xl text-base flex items-center justify-center gap-2">
                {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /><span>Confirming...</span></> : <span>Confirm Table Reservation</span>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
