import NavBar from "@/components/layout/nav-bar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
