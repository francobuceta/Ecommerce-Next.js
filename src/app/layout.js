import "../globals.css";
import { Oswald, Share_Tech } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

const mainFont = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});
const alternateFont = Share_Tech({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share_tech",
});

export const metadata = {
  title: "Cyber Cubic",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.variable} ${alternateFont.variable} bg-custome-secondary font-alternate`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
