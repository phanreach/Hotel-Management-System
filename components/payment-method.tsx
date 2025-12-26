import React from "react";

export default function PaymentMethod() {
  return (
    <section className="bg-white rounded-xl border border-[#dbe0e6] p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6 border-b border-[#f0f2f4] pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <span className="material-symbols-outlined">credit_card</span>
          </div>
          <h3 className="text-xl font-bold text-[#111418]">Payment Method</h3>
        </div>
        <div className="flex items-center gap-2 text-[#9aa2ac]">
          <span className="material-symbols-outlined text-sm">lock</span>
          <span className="text-xs font-medium uppercase">Secure SSL</span>
        </div>
      </div>

      {/* Payment Tabs */}
      <div className="flex gap-4 mb-6">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary/10 text-primary border border-primary font-medium transition-all">
          <span className="material-symbols-outlined">credit_card</span>
          Credit Card
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white border border-[#dbe0e6] text-[#617589] font-medium hover:bg-gray-50 transition-all">
          <span className="material-symbols-outlined">
            account_balance_wallet
          </span>
          Digital Wallet
        </button>
      </div>

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
              className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white pl-12 pr-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              id="card-number"
              placeholder="0000 0000 0000 0000"
              type="text"
            />
            {/* <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa2ac]">
                credit_card
              </span> */}
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
              className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              id="cvc"
              placeholder="123"
              type="text"
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#9aa2ac] text-lg cursor-help">
              help
            </span>
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
