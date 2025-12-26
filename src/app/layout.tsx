import NavBar from "@/components/layout/nav-bar";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <main className="pt-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
