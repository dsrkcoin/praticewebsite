import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Team3 } from "components/blocks/team";
import { About6 } from "components/blocks/about";
import { Facts5 } from "components/blocks/facts";
import { Process7 } from "components/blocks/process";
import { Contact7 } from "components/blocks/contact";
import { Testimonial5 } from "components/blocks/testimonial";
import FigureImage from "components/reuseable/FigureImage";

export default function About() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section className="wrapper bg-gray">
        <div className="container pt-10 pt-md-14 text-center">
          <div className="row">
            <div className="col-xl-6 mx-auto">
              <h1 className="display-1 mb-4">Hello! This is Sandbox</h1>
              <p className="lead fs-lg mb-0">
                A company turning ideas into beautiful things.
              </p>
            </div>
          </div>
        </div>

        <FigureImage
          width={2800}
          height={1000}
          src="/img/photos/bg12.jpg"
          className="position-absoute"
          style={{ bottom: 0, left: 0, zIndex: 2 }}
        />
      </section>

      <section className="wrapper bg-light angled upper-end lower-end">
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
    </Fragment>
  );
}
