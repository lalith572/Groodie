import React, { useState } from "react";
import Section from "./Section";
import { faqItems } from "../constants";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section
      id="faq"
      className="pt-[10rem] lg:pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container grid gap-10 mb-[5.5rem] mt-[2rem] lg:gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] ">
        <div>
          <h2 className="h1 mb-6">Frequently asked questions</h2>

          <p className="body-2 text-n-3 mb-6 md:mb-8 max-w-md">
            We’ve answered some of the most common questions about Groodie and
            how it works.
          </p>

          <p className="body-2 text-n-3">
            Haven’t found what you’re looking for?{" "}
            <a
              href="#contact"
              className="text-n-1 hover:text-color-1 transition"
            >
              Contact us
            </a>
          </p>
        </div>

        <div className="rounded-3xl  bg-n-8/60 divide-y divide-n-6">
          {faqItems.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <div key={item.id} className="px-5 md:px-8">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-5 md:py-6 flex items-center justify-between gap-6"
                >
                  <span className="body-1 text-left">
                    {item.question}
                  </span>

                  <span className="flex items-center justify-center w-9 h-9 rounded-full border border-n-6">
                    <span className="relative w-3.5 h-3.5">
                      <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-n-1" />
                      <span
                        className={`absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-n-1 transition-transform duration-200 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 md:pb-6 -mt-2">
                    <p className="body-2 text-n-3 max-w-2xl">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
