import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { Gradient2 } from "./design/Services";

const Footer = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-1"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          <span className="flex items-center justify-center">Made by team <a href="#home" className={classes}>Groodie</a></span>
          © {new Date().getFullYear()} Groodie. All rights reserved.
        </p>
         <Gradient2 />
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
