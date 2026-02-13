// components/booker-information.tsx
import { User } from "lucide-react";

export type BookerForm = {
  bookerName: string;
  bookerEmail: string;
  bookerPhone: string;
  bookerSpecialRequest: string;
};

type Props = {
  booker: BookerForm;
};

export default function BookerInformation({ booker }: Props) {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <User size={20} className="text-blue-600" />
        </div>
        <h3 className="text-xl font-bold">Guest Information</h3>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-[#111418]"
            htmlFor="first-name"
          >
            Booker Name
          </label>
          <input
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            value={booker.bookerName}
            disabled
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-[#111418]"
            htmlFor="first-name"
          >
            Email
          </label>
          <input
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            value={booker.bookerEmail}
            disabled
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-[#111418]"
            htmlFor="first-name"
          >
            Phone Number
          </label>
          <input
            className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-4 text-base text-[#111418] placeholder-[#9aa2ac] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            value={booker.bookerPhone}
            disabled
          />
        </div>
      </form>
    </section>
  );
}
