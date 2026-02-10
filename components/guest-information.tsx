import React from "react";
import { User } from "lucide-react";
import { Guest } from "@/src/types/api";

type Props = {
  guest: Guest;
  onChange: (guest: Guest) => void;
};

export default function GuestInformation({ guest, onChange }: Props) {
  const update = (field: keyof Guest, value: string) => {
    onChange({ ...guest, [field]: value });
  };

  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6 border-b border-[#f0f2f4] pb-4">
        <div className="p-2 bg-blue-50 rounded-lg text-primary">
          <span className="material-symbols-outlined">
            <User size={20} className="text-blue-600" />
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#111418]">Guest Information</h3>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#111418]" htmlFor="first-name">
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            placeholder="e.g. Jane"
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            value={guest.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#111418]" htmlFor="last-name">
            Last Name
          </label>
          <input
            id="last-name"
            type="text"
            placeholder="e.g. Doe"
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            value={guest.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#111418]" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            value={guest.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#111418]" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+855 123 456 789"
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            value={guest.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>

        {/* Special Request */}
        <div className="md:col-span-2 flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#111418]" htmlFor="requests">
            Special Requests (Optional)
          </label>
          <textarea
            id="requests"
            rows={3}
            placeholder="Allergies, late check-in, extra pillows..."
            className="w-full rounded-lg border border-[#dbe0e6] bg-white p-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            value={guest.specialRequest ?? ""}
            onChange={(e) => update("specialRequest", e.target.value)}
          />
        </div>
      </form>
    </section>
  );
}
