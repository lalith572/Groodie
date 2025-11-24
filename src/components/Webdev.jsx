import React from "react";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";
import { Webdetails } from "../constants";
import Pricing from "./Pricing";
import { Link } from "react-router-dom";

const Webdev = () => {
  return (
    <Section 
    className="pt-[10rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="webdev">

        <p className="body-2 text-n-3 mx-[6rem] mb-[2rem]">
            <Link to="/services" className="text-n-1 hover:text-color-1 transition">
                 <span className="text-xl leading-none px-3">←</span>
                Back to Services
            </Link>
        </p>
      <div className="container lg:flex">
        <div >
            <p className="body-2 my-2 px-2 pb-2 text-n-4">Building Digital Experiences</p>
            <h2 className="max-w-[25rem] h2 mb-4 md:mb-8">
                Web Development
            </h2>

            <p className="body-1 mb-[2rem] mt-[2rem]">We create modern, scalable, and performant web applications that drive business growth.
                From concept to deployment, our development process ensures quality at every step.</p>

            <Button white href="/contact">Get a Quote</Button>
        </div>
      </div>
      {/* Our process */}
      <div className="container relative z-2">
        <Heading
          className="mt-[5rem] md:max-w-md lg:max-w-2xl"
          title="Our process"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {Webdetails.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col justify-center min-h-[22rem] p-[2.4rem] pointer-events-none">
                
                <div className="flex items-center mt-auto">
                  {/* <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    // alt={item.title}
                  /> */}
                  <p className="font-code text-[1.5rem] font-bold text-n-1 mb-[1rem]">{item.id}</p>
                  {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow /> */}
                </div>
                <h4 className="h4 mb-5 ">{item.title}</h4>
                <p className="body-2 mt-6 mb-6 text-n-3">{item.text}</p>
              </div>

             {/* <GradientLight /> */}

              {/* <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div> */}

              {/* <ClipPath /> */}
            </div>
          ))}
        </div>
      </div>
      <Pricing />
    </Section>
  )
}

export default Webdev