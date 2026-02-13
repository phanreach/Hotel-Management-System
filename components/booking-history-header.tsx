import { Search } from "lucide-react";

type Props = {
  upcoming: number;
  past: number;
};

export default function BookingHistoryHeader({ upcoming, past }: Props) {

  return (
    <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      {/* Page Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-text-main text-4xl font-black leading-tight tracking-[-0.033em]">
          My Booking History
        </h1>
        <p className="text-text-secondary text-base font-normal leading-normal">
          You have {upcoming} upcoming stays and {past} past bookings.
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-auto md:min-w-[320px]">
        <label className="flex flex-col w-full h-12">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-white shadow-sm border border-gray-200 overflow-hidden group focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
            <div className="text-text-secondary flex items-center justify-center pl-4 pr-2">
              <span className="material-symbols-outlined text-[24px]">
                <Search />
              </span>
            </div>
            <input
              type="text"
              className="flex w-full min-w-0 flex-1 bg-transparent border-none text-text-main placeholder:text-text-secondary focus:outline-none focus:ring-0 h-full text-base font-normal leading-normal px-2"
              placeholder="Search hotel or booking ID"
            />
          </div>
        </label>
      </div>
    </section>
  );
}
