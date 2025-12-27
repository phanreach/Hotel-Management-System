"use client";
import React from "react";
import {
  Wallet,
  Banknote,
  Landmark,
  CreditCard,
  Lock,
  HelpCircle,
} from "lucide-react";

export default function PaymentMethod() {
  const [method, setMethod] = React.useState<"card" | "wallet">("card");

  return (
    <section className="bg-white rounded-xl border border-[#dbe0e6] p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6 border-b border-[#f0f2f4] pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg text-primary">
            <Landmark size={20} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-[#111418]">Payment Method</h3>
        </div>
        <div className="flex items-center gap-2 text-[#9aa2ac]">
          <Lock size={12} className="text-grey-600" />

          <span className="text-xs font-medium uppercase">Secure SSL</span>
        </div>
      </div>

      {/* Payment Tabs */}
      <div className="flex gap-4 mb-6">
        {/* Credit Card Tab */}
        <button
          type="button"
          onClick={() => setMethod("card")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all
      ${
        method === "card"
          ? "bg-primary/10 text-primary border border-primary"
          : "bg-white border border-[#dbe0e6] text-[#617589] hover:bg-gray-50"
      }`}
        >
          <CreditCard size={20} />
          Credit Card
        </button>

        {/* Wallet Tab */}
        <button
          type="button"
          onClick={() => setMethod("wallet")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all
      ${
        method === "wallet"
          ? "bg-primary/10 text-primary border border-primary"
          : "bg-white border border-[#dbe0e6] text-[#617589] hover:bg-gray-50"
      }`}
        >
          <Wallet size={20} />
          Digital Wallet
        </button>
      </div>
      {method === "card" && (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-[#111418]"
              htmlFor="card-number"
            >
              Card Number
            </label>
            <div className="relative">
              <input
                className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white pl-12 pr-4
               text-base text-[#111418] placeholder-[#9aa2ac]
               focus:border-primary focus:ring-1 focus:ring-primary
               outline-none transition-all"
                id="card-number"
                placeholder="0000 0000 0000 0000"
                type="text"
              />

              <CreditCard
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-[#111418]"
              htmlFor="expiry"
            >
              Expiry Date
            </label>
            <input
              className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              id="expiry"
              placeholder="MM / YY"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#111418]" htmlFor="cvc">
              CVC
            </label>
            <div className="relative">
              <input
                className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white
               px-4 pr-12 text-base text-[#111418] placeholder-[#9aa2ac]
               focus:border-primary focus:ring-1 focus:ring-primary
               outline-none transition-all"
                id="cvc"
                placeholder="123"
                type="text"
              />

              <HelpCircle
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-[#111418]"
              htmlFor="card-name"
            >
              Name on Card
            </label>
            <input
              className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              id="card-name"
              placeholder="e.g. Jane Doe"
              type="text"
            />
          </div>
        </form>
      )}
      {method === "wallet" && (
        <div className="p-6 border rounded-lg text-center text-gray-600">
          Wallet payment coming soon 🚀
        </div>
      )}

      <div className="mt-6 flex gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
        <div className="h-8 w-12 bg-gray-200 rounded border border-gray-300 flex items-center justify-center font-bold text-xs">
          VISA
        </div>
        <div className="h-8 w-12 bg-gray-200 rounded border border-gray-300 flex items-center justify-center font-bold text-xs">
          MC
        </div>
        <div className="h-8 w-12 bg-gray-200 rounded border border-gray-300 flex items-center justify-center font-bold text-xs">
          AMEX
        </div>
      </div>
    </section>
  );
}
