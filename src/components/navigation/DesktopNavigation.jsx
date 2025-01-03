"use client";
import React, { useEffect, useState } from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { usePathname, useRouter } from "next/navigation";
import { getThememode } from "@/hooks/getThememode";
import logoicon from "@/assets/logoiconsvg.svg";
import Image from "next/image";

const DesktopNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activePage, setActivePage] = useState("gettingStarted");

  useEffect(() => {
    const pathMapping = {
      "/": "gettingStarted",
      "/services": "services",
      "/solutions": "solutions",
      "/about": "about",
      "/contact": "contact",
      "/blog": "blog",
    };

    setActivePage(pathMapping[pathname] || "");
  }, [pathname]);

  const isPageActive = (page) => activePage === page;

  const { isDark } = getThememode();

  return (
    <div>
      <NavigationMenu.Root className="relative z-10 flex justify-center ">
        <NavigationMenu.List className=" center m-0 flex  list-none rounded-md  gap-8  p-2 ">
          {/* /////getting started */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              onClick={() => router.push("/")}
              className={`${
                isPageActive("gettingStarted")
                  ? "text-secondary "
                  : " text-black   dark:text-[#F2F2F2]"
              } group flex hover:scale-105 transition-all duration-300 select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-base font-medium leading-none  outline-none `}
            >
              Getting Started
              <CaretDownIcon
                className={`${
                  isPageActive("gettingStarted")
                    ? "text-secondary"
                    : "text-black dark:text-[#F2F2F2]"
                } relative top-px  transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180`}
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-2.5  bg-inputbg-color dark:bg-inputbg-color-dark p-[22px] w-[800px] sm:grid-cols-[0.75fr_1fr]">
                <li className="row-span-3 grid">
                  <NavigationMenu.Link asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md  p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-secondary"
                      href="/"
                    >
                      <Image
                        src={logoicon.src}
                        alt="logo"
                        width={80}
                        height={80}
                      />
                      <div className="mb-[7px] mt-4 text-xl font-medium leading-[1.2] text-primary dark:text-primary ">
                        Sruvi Inc
                      </div>
                      <p className="text-[14px] leading-[1.3] text-black dark:text-[#F2F2F2]">
                        Unstyled, accessible components for React.
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>

                <ListItem href="https://stitches.dev/" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          {/* //////getting started */}

          {/* ////services */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              className={`${
                isPageActive("services")
                  ? "text-secondary"
                  : "text-black dark:text-[#F2F2F2]"
              } group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-base font-medium leading-none  outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7`}
            >
              Services
              <CaretDownIcon
                className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute bg-inputbg-color dark:bg-inputbg-color-dark left-0 top-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[800px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem
                  title="Introduction"
                  href="/primitives/docs/overview/introduction"
                >
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem
                  title="Getting started"
                  href="/primitives/docs/overview/getting-started"
                >
                  A quick tutorial to get you up and running with Radix
                  Primitives.
                </ListItem>
                <ListItem
                  title="Styling"
                  href="/primitives/docs/guides/styling"
                >
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem
                  title="Animation"
                  href="/primitives/docs/guides/animation"
                >
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem
                  title="Accessibility"
                  href="/primitives/docs/overview/accessibility"
                >
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem
                  title="Releases"
                  href="/primitives/docs/overview/releases"
                >
                  Radix Primitives releases and their changelogs.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          {/* ////services */}

          {/* ////solutions */}

          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              className={`${
                isPageActive("solutions")
                  ? "text-secondary"
                  : "text-black dark:text-[#F2F2F2]"
              } group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-base font-medium leading-none  outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7`}
            >
              Solutions
              <CaretDownIcon
                className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute bg-inputbg-color dark:bg-inputbg-color-dark left-0 top-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[800px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem
                  title="Introduction"
                  href="/primitives/docs/overview/introduction"
                >
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem
                  title="Getting started"
                  href="/primitives/docs/overview/getting-started"
                >
                  A quick tutorial to get you up and running with Radix
                  Primitives.
                </ListItem>
                <ListItem
                  title="Styling"
                  href="/primitives/docs/guides/styling"
                >
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem
                  title="Animation"
                  href="/primitives/docs/guides/animation"
                >
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem
                  title="Accessibility"
                  href="/primitives/docs/overview/accessibility"
                >
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem
                  title="Releases"
                  href="/primitives/docs/overview/releases"
                >
                  Radix Primitives releases and their changelogs.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* ////solutions */}

          {/* ////blog */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              className={`${
                isPageActive("blog")
                  ? "text-secondary"
                  : "text-black dark:text-[#F2F2F2]"
              } group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-base font-medium leading-none  outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7`}
            >
              Blog
              <CaretDownIcon
                className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute bg-inputbg-color dark:bg-inputbg-color-dark left-0 top-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[800px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem
                  title="Introduction"
                  href="/primitives/docs/overview/introduction"
                >
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem
                  title="Getting started"
                  href="/primitives/docs/overview/getting-started"
                >
                  A quick tutorial to get you up and running with Radix
                  Primitives.
                </ListItem>
                <ListItem
                  title="Styling"
                  href="/primitives/docs/guides/styling"
                >
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem
                  title="Animation"
                  href="/primitives/docs/guides/animation"
                >
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem
                  title="Accessibility"
                  href="/primitives/docs/overview/accessibility"
                >
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem
                  title="Releases"
                  href="/primitives/docs/overview/releases"
                >
                  Radix Primitives releases and their changelogs.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* ////blog */}

          {/* ////about */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              className={`${
                isPageActive("about")
                  ? "text-secondary"
                  : "text-black dark:text-[#F2F2F2]"
              } group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-base font-medium leading-none  outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7`}
            >
              About Us
              <CaretDownIcon
                className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute bg-inputbg-color dark:bg-inputbg-color-dark left-0 top-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[800px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem
                  title="Introduction"
                  href="/primitives/docs/overview/introduction"
                >
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem
                  title="Getting started"
                  href="/primitives/docs/overview/getting-started"
                >
                  A quick tutorial to get you up and running with Radix
                  Primitives.
                </ListItem>
                <ListItem
                  title="Styling"
                  href="/primitives/docs/guides/styling"
                >
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem
                  title="Animation"
                  href="/primitives/docs/guides/animation"
                >
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem
                  title="Accessibility"
                  href="/primitives/docs/overview/accessibility"
                >
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem
                  title="Releases"
                  href="/primitives/docs/overview/releases"
                >
                  Radix Primitives releases and their changelogs.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* ////about */}
          {/* ////support */}

          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              className={`${
                isPageActive("support")
                  ? "text-secondary"
                  : "text-black dark:text-[#F2F2F2]"
              } group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-base font-medium leading-none  outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7`}
            >
              Support
              <CaretDownIcon
                className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute bg-inputbg-color dark:bg-inputbg-color-dark left-0 top-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[800px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem
                  title="Introduction"
                  href="/primitives/docs/overview/introduction"
                >
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem
                  title="Getting started"
                  href="/primitives/docs/overview/getting-started"
                >
                  A quick tutorial to get you up and running with Radix
                  Primitives.
                </ListItem>
                <ListItem
                  title="Styling"
                  href="/primitives/docs/guides/styling"
                >
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem
                  title="Animation"
                  href="/primitives/docs/guides/animation"
                >
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem
                  title="Accessibility"
                  href="/primitives/docs/overview/accessibility"
                >
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem
                  title="Releases"
                  href="/primitives/docs/overview/releases"
                >
                  Radix Primitives releases and their changelogs.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* ////support */}

          <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
            <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
          <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "block select-none rounded-md p-3 text-base leading-none no-underline outline-none transition-colors hover:scale-[1.02] transition-transform duration-200 ease-in focus:shadow-[0_0_0_2px] focus:shadow-violet7",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium  leading-[1.2] text-secondary">
            {title}
          </div>
          <p className="leading-[1.4] text-black  dark:text-[#f2f2f2]">
            {children}
          </p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default DesktopNavigation;
