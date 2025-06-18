import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Manrope } from "next/font/google";

// ANIMATE CSS
import "animate.css";
// SWIPER CSS
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// REACT VIDEO PLYR CSS
import "plyr-react/plyr.css";
// G-LIGHTBOX CSS
import "glightbox/dist/css/glightbox.css";
// SCROLL CUE CSS
import "plugins/scrollcue/scrollCue.css";
// BOOTSTRAP & CUSTOM CSS
import "assets/scss/style.scss";
import Homepage from "../app/demo-15/page";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandbox - Modern & Multipurpose NextJS Template",
  description: "Sandbox is a beautiful and flawless site template.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <main className="content-wrapper">
          <Homepage />
        </main>
      </body>
    </html>
  );
}
