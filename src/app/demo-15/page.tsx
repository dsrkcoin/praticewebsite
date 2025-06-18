import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Process7 } from "components/blocks/process";
import { Hero15 } from "components/blocks/hero";
import { Team3 } from "components/blocks/team";
import { About6 } from "components/blocks/about";
import { Facts5 } from "components/blocks/facts";
import { Footer9 } from "components/blocks/footer";
import { Contact7 } from "components/blocks/contact";
import { CTA5 } from "components/blocks/call-to-action";
import { Testimonial5 } from "components/blocks/testimonial";
import Topbar from "components/elements/Topbar";

export default function Demo15() {
  return (
    <Fragment>
      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero sections ========== */}
        <Hero15 />

        <section className="wrapper bg-light angled lower-end">
          <div className="container py-14 py-md-16">
            {/* ========== about section ========== */}
            <About6 />

            {/* ========== process section ========== */}
            <Process7 />
          </div>
        </section>

        {/* ========== testimonial section ========== */}
        <Testimonial5 />

        {/* ========== team section ========== */}
        <Team3 />

        {/* ========== facts section ========== */}
        <Facts5 />

        {/* ========== contact section ========== */}
        <Contact7 />

        {/* ========== call to action section ========== */}
        <CTA5 />
      </main>

      {/* ========== footer section ========== */}
    </Fragment>
  );
}
