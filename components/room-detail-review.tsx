export default function RoomDetailReview() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold ">Guest Reviews</h3>

        <div className="flex items-center gap-1">
          <span className="text-2xl font-black">4.9</span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-12 shrink-0"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZqrW6H8vjc38yHjYW5TrZtzpQlkBVW0Ad3-x9_nuk4nIRIYb-ks9NFgpdQxKuCb1GP-Ds72PwjXNDkBgqGBnnOCEe_cruJ9nsjJpGF-JDx8tzXxRo_-wFF1k2ilOkATt29w-hZZC7_MOF5fyPc0CN_RNNDpuOs7Z--yu_f6qzZjFo2q6Rmly1CPlSP6uXNIOKZCiQksyJJxg1T1TfbXxffwbEcQG2W3QxnQXGtR4dlxqwNFokIM_oH28gzdPbFLUpwWjGhgJQL_4")',
            }}
            aria-label="Portrait of Sarah Jenkins"
          />

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold">Sarah Jenkins</span>
              <span className="text-xs text-gray-500">• 2 days ago</span>
            </div>

            <p className="text-[#617589]text-sm">
              Absolutely stunning room! The view was even better than the
              pictures. Staff was incredibly helpful with our late check-in.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-12 shrink-0"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6ucMCARu2KX5bgxPPwqVLDEy2Cn2wNaarxQNdTPs5D3ahUhJe1rD6GQtiA2tsacI0EYY6T_EP8-P2hg-G_NpJWJMYJM_gMX1HUqmoN1r450cv51NL1NEJ4NErduqzmX2C6GQvtE8y4BltPp8KevPJ5aou8gnn08NlPNnf0effOdAFw56pHfAuuMK-TFLnaqrKEDNsk9I6EPNK0VHjVZlWckCYgicIgCyv6KW_iZQ8jgPoIKQploCX4jTPvNofYM4Vl1syJK_rNcs")',
            }}
            aria-label="Portrait of Michael Ross"
          />

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold">Michael Ross</span>
              <span className="text-xs text-gray-500">• 1 week ago</span>
            </div>

            <p className="text-[#617589] text-sm">
              Clean, spacious, and very modern. The workspace was perfect for my
              business trip. Wi-Fi was blazing fast.
            </p>
          </div>
        </div>
      </div>

      <button className="mt-6 px-6 h-10 border  border-gray-300 dark:border-slate-600 rounded-lg text-sm font-bold text-[#111418] dark:text-black hover:bg-gray-50 hover:text-white dark:hover:bg-slate-700 transition-colors">
        Load More Reviews
      </button>
    </section>
  );
}
