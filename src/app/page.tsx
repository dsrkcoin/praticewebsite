import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import ReplaceMe from "components/ReplaceMe";
import Navbar from "components/blocks/navbar/navbar-1";
import CountUp from "components/reuseable/CountUp";
import Carousel from "components/reuseable/Carousel";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM ICON COMPONENT
import Safe from "icons/solid/Safe";
import Layers from "icons/solid/Layers";
import Share from "icons/solid-mono/Share";
import Puzzle from "icons/solid-mono/Puzzle";
import PenTool from "icons/solid-duo/PenTool";
import Devices from "icons/solid-mono/Devices";
import GlobeTwo from "icons/solid-mono/GlobeTwo";
import Demo15 from "./demo-15/page";

export default function Home() {
  return (
    <Fragment>
      {/* ========== header section ========== */}

      <main className="content-wrapper">
        <Demo15 />
      </main>
    </Fragment>
  );
}
