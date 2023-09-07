import "../globals.css";
import { Oswald, Share_Tech } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Providers from "@/components/redux/Providers";

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
  title: "Cyber Cube",
  description: "Cyber Cube es una empresa especialida en la venta de componentes para PC, desde teclados y mouses de alta precisión hasta audio inmersivo, auriculares de calidad, sillas de escritorio ergonómicas y más.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.variable} ${alternateFont.variable} bg-custome-secondary font-alternate`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
