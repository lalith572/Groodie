import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { check } from "../assets";
import { servicesData } from "../constants";

const Services = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const startX = useRef(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % servicesData.length);

  const prev = () =>
    setIndex(
      (prev) =>
        (prev - 1 + servicesData.length) % servicesData.length
    );

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(next, 4500);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <Section
      id="services"
      className="pt-[10rem] -mt-[5.25rem] pb-[6rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container">
        <Heading
          tag="Ready to get started"
          title="Our Services"
          text="We offer a full spectrum of freelance services to help your business thrive in the digital age"
        />

        <div
          className="relative mt-16 h-[30rem] flex items-center justify-center overflow-hidden"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {servicesData.map((service, i) => {
            const offset =
              (i - index + servicesData.length) %
              servicesData.length;

            let style =
              "opacity-0 scale-75 pointer-events-none";

            if (offset === 0)
              style =
                "z-20 scale-100 opacity-100 translate-x-0";
            else if (offset === 1)
              style =
                "z-10 scale-90 opacity-60 translate-x-[55%]";
            else if (offset === servicesData.length - 1)
              style =
                "z-10 scale-90 opacity-60 -translate-x-[55%]";

            return (
              <div
                key={i}
                className={`absolute transition-all duration-700 ease-out ${style}`}
              >
                <div className="w-[48rem] max-w-[90vw] h-[24rem] bg-n-8 rounded-3xl border border-n-1/10 p-8 shadow-xl flex flex-col justify-center">
                  <h4 className="h4 mb-4">{service.title}</h4>

                  <p className="body-2 text-n-3 mb-6">
                    {service.description}
                  </p>

                  {service.list.length > 0 && (
                    <ul className="mb-6">
                      {service.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center py-1 text-sm"
                        >
                          <img src={check} width={18} />
                          <span className="ml-3">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Button
                    href={service.link}
                    white
                    className="self-start"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10 mb-4 gap-3">
          {servicesData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === i ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
