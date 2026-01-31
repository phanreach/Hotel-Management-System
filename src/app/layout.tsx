"use client";
import { usePathname } from "next/navigation";
import NavBar from "@/components/layout/nav-bar";
import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideNavBar =
    pathname.startsWith("/auth") || pathname.startsWith("/admin/dashboard");

  return (
    <html lang="en">
      <body>
        <Providers>
          {!hideNavBar && <NavBar />}
          <main className={hideNavBar ? "" : "pt-15"}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
