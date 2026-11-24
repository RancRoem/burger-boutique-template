"use client";

import React, { useState } from "react";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  CheckCircle2,
  Truck,
  Store,
  Loader2,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { RESTAURANT_CONFIG } from "@/data/menuData";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    total,
  } = useCart();

  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderConfirmation, setOrderConfirmation] = useState<{
    orderNumber: string;
    estimatedMinutes: string;
  } | null>(null);

  if (!isCartOpen) return null;

  const effectiveDeliveryFee = orderType === "pickup" ? 0 : deliveryFee;
  const effectiveTotal = subtotal + effectiveDeliveryFee;
  const remainingForFreeDelivery = Math.max(
    0,
    RESTAURANT_CONFIG.minOrderForFreeDelivery - subtotal
  );

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone,
            orderType,
            address: orderType === "delivery" ? address : undefined,
            notes,
          },
          items: items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          subtotal,
          deliveryFee: effectiveDeliveryFee,
          total: effectiveTotal,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(data.error || "Something went wrong placing your order.");
      } else {
        setOrderConfirmation({
          orderNumber: data.orderNumber,
          estimatedMinutes: data.estimatedMinutes,
        });
        clearCart();
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setOrderConfirmation(null);
    setErrorMessage("");
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark Backdrop */}
      <div
        onClick={resetAndClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-Over Panel */}
      <div className="relative z-10 w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-brand-primary" />
            <h2 className="text-lg font-extrabold text-gray-900">Your Order</h2>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
            aria-label="Close Cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {orderConfirmation ? (
            /* Confirmation Screen */
            <div className="text-center py-12 px-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                Order Confirmed!
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Thank you, <span className="font-bold">{customerName}</span>. Our
                kitchen has fired up the grill for your order.
              </p>

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 mb-8 space-y-2">
                <div className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                  Order Reference
                </div>
                <div className="text-2xl font-black text-brand-primary">
                  #{orderConfirmation.orderNumber}
                </div>
                <div className="text-sm font-medium text-gray-700 pt-2 border-t border-gray-200">
                  Estimated {orderType === "delivery" ? "Delivery" : "Pickup"}:{" "}
                  <span className="font-bold">
                    {orderConfirmation.estimatedMinutes}
                  </span>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3.5 bg-gray-900 hover:bg-brand-primary text-white font-bold rounded-xl transition"
              >
                Back to Menu
              </button>
            </div>
          ) : items.length === 0 ? (
            /* Empty Cart State */
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Your cart is empty
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Add some signature burgers, crispy sides, or cold drinks to get
                started.
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-brand-primary text-white text-sm font-bold rounded-full hover:bg-orange-600 transition"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            /* Cart Items & Checkout Form */
            <div className="space-y-6">
              {/* Delivery vs Pickup Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setOrderType("delivery")}
                  className={`flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition ${
                    orderType === "delivery"
                      ? "bg-white text-gray-900 shadow-xs"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  <Truck className="w-4 h-4 text-brand-primary" />
                  <span>Delivery</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType("pickup")}
                  className={`flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition ${
                    orderType === "pickup"
                      ? "bg-white text-gray-900 shadow-xs"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  <Store className="w-4 h-4 text-brand-primary" />
                  <span>Pickup</span>
                </button>
              </div>

              {/* Free Delivery Progress Bar */}
              {orderType === "delivery" && (
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-3.5 text-xs">
                  {remainingForFreeDelivery > 0 ? (
                    <p className="text-gray-700 font-medium">
                      Add{" "}
                      <span className="font-bold text-brand-primary">
                        {RESTAURANT_CONFIG.currency}
                        {remainingForFreeDelivery.toFixed(2)}
                      </span>{" "}
                      more for <span className="font-bold">FREE Delivery</span>!
                    </p>
                  ) : (
                    <p className="text-emerald-700 font-bold">
                      You unlocked FREE Delivery!
                    </p>
                  )}
                </div>
              )}

              {/* Item List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3.5 p-3 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-14 rounded-lg object-cover bg-white shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs font-semibold text-brand-primary mt-0.5">
                        {RESTAURANT_CONFIG.currency}
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
