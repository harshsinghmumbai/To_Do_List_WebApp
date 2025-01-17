import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "To Do List WebApp",
  description: "Created To do list WebApp for Solruf Company",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={outfit.className}>
        <main className="max-w-[1400px] m-auto">
          <Navbar />
          <div className="mt-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
