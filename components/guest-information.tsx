import React from "react";

export default function GuestInformation() {
  return (
    <section className="bg-white rounded-xl border border-[#dbe0e6] p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6 border-b border-[#f0f2f4] pb-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <span className="material-symbols-outlined">person</span>
        </div>
        <h3 className="text-xl font-bold text-[#111418]">Guest Information</h3>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-[#111418]"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            id="first-name"
            placeholder="e.g. Jane"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-[#111418]"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            id="last-name"
            placeholder="e.g. Doe"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#111418]" htmlFor="email">
            Email Address
          </label>
          <input
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            id="email"
            placeholder="jane@example.com"
            type="email"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#111418]" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            id="phone"
            placeholder="+1 (555) 000-0000"
            type="tel"
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-[#111418]"
            htmlFor="requests"
          >
            Special Requests (Optional)
          </label>
          <textarea
            className="w-full rounded-lg border border-[#dbe0e6] bg-white p-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            id="requests"
            placeholder="Allergies, late check-in, extra pillows..."
            rows={3}
          />
        </div>
      </form>
    </section>
  );
}
