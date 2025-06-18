"use client";

import { Fragment, memo, ReactElement, useRef } from "react";
import clsx from "clsx";
// -------- CUSTOM HOOKS -------- //
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// -------- CUSTOM COMPONENTS -------- //
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// LOCAL CUSTOM COMPONENTS
import Info from "../components/Info";
import Search from "../components/search";
import Signin from "../components/signin";
import Signup from "../components/signup";
import MiniCart from "../components/mini-cart";
import HeaderRight from "../components/header-right";
import FancyHeader from "../components/fancy-header";
import Startup from "../components/startup";
import { usePathname } from "next/navigation";

// ===================================================================
interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
}
// ===================================================================

export default function NavbarOne({
  button,
  cart = false,
  info = false,
  fancy = false,
  social = false,
  search = false,
  language = false,
  stickyBox = true,
  logoAlt = "logo-dark",
  navOtherClass = "navbar-other w-100 d-flex ms-auto",
  navClassName = "navbar navbar-expand-lg center-nav transparent navbar-light",
}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? "logo-dark" : logoAlt;
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const navbarBg = isHomepage ? "bg-transparent" : "bg-primary";
  // all main header contents
  const headerContent = (
    <Fragment>
      <div className={`${navbarBg}  `}>
        <div className="container d-flex flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <NextLink
              href="/"
              title={
                <img
                  alt="logo"
                  src={`/img/${logo}.png`}
                  srcSet={`/img/${logo}@2x.png 2x`}
                />
              }
            />
          </div>

          <div
            id="offcanvas-nav"
            data-bs-scroll="true"
            className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
          >
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-white fs-30 mb-0">Sandbox</h3>
              <button
                type="button"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
                className="btn-close btn-close-white ms-auto"
              />
            </div>

            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                {/* ===================== Startup nav item ===================== */}
                <Startup />
              </ul>

              {/* ============= show contact info in the small device sidebar ============= */}
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <NextLink
                    title="info@email.com"
                    className="link-inverse"
                    href="mailto:first.last@email.com"
                  />
                  <br />
                  <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
                  <br />
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

          {/* ============= right side header content ============= */}
          <HeaderRight
            cart={cart}
            info={info}
            button={button}
            search={search}
            social={social}
            language={language}
            navOtherClass={navOtherClass}
          />
        </div>
      </div>
    </Fragment>
  );

  const navbarClassName = clsx(
    sticky ? navClassName.replace("navbar-dark", "navbar-light") : navClassName,
    {
      "navbar-clone fixed navbar-stick": sticky,
    }
  );

  return (
    <Fragment>
      {stickyBox && (
        <div
          style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }}
        />
      )}

      <nav ref={navbarRef} className={navbarClassName}>
        {fancy ? (
          <FancyHeader>{headerContent}</FancyHeader>
        ) : (
          <div className="w-100">{headerContent}</div>
        )}
      </nav>

      {/* ============= signin modal ============= */}
      <Signin />

      {/* ============= signup modal ============= */}
      <Signup />

      {/* ============= info sidebar ============= */}
      {info && <Info />}

      {/* ============= show search box ============= */}
      {search && <Search />}

      {/* ============= cart sidebar ============= */}
      {cart && <MiniCart />}
    </Fragment>
  );
}
