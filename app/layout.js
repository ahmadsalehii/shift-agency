import { DM_Sans } from "next/font/google";

import Footer from "@/components/Footer/Footer";

import "./globals.css";

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Shift Agency",
  description: "We grow your business",
};

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${font.className} overflow-x-hidden`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
