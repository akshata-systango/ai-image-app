import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// app/layout.js
export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer className="text-center">
          <p>© {new Date().getFullYear()} Price Tracker</p>
        </footer>
      </body>
    </html>
  );
}

