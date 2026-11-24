import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/data/menuData";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-950 text-gray-300 border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center">
                <img
                  src={RESTAURANT_CONFIG.images.logo}
                  alt={`${RESTAURANT_CONFIG.name} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                {RESTAURANT_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {RESTAURANT_CONFIG.description}
            </p>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
              Location & Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>{RESTAURANT_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <a
                  href={`tel:${RESTAURANT_CONFIG.phone}`}
                  className="hover:text-white transition"
                >
                  {RESTAURANT_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a
                  href={`mailto:${RESTAURANT_CONFIG.email}`}
                  className="hover:text-white transition"
                >
                  {RESTAURANT_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {RESTAURANT_CONFIG.openingHours.map((schedule) => (
                <li
                  key={schedule.days}
                  className="flex items-center justify-between border-b border-gray-900 pb-2"
                >
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-primary" />
                    {schedule.days}
                  </span>
                  <span className="font-semibold text-white">
                    {schedule.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} {RESTAURANT_CONFIG.name}. All rights
            reserved.
          </p>
          <p>Freshly crafted burgers • Dine-in, Pickup & Express Delivery</p>
        </div>
      </div>
    </footer>
  );
}
