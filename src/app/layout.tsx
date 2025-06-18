import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Manrope } from "next/font/google";

import ThemeProvider from "theme/ThemeProvider";
import Progress from "components/Progress";
import ScrollCue from "components/ScrollCue";
import PageProgress from "components/common/PageProgress";
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
import Topbar from "components/elements/Topbar";
import Navbar from "components/blocks/navbar/navbar-1/Navbar-1";
import Footer9 from "components/blocks/footer/Footer9";

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
        {/* ========== topbar section ========== */}
        <Topbar />
        {/* ========== header ========== */}

        <header className="wrapper bg-soft-primary">
          <Navbar
            info
            search
            stickyBox={false}
            logoAlt="logo-light"
            navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none"
          />
        </header>
        <ThemeProvider>{children}</ThemeProvider>
        <Footer9 />
      </body>
    </html>
  );
}
