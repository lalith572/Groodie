import { values } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Values = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRefs = useRef([]);
  const textRefs = useRef([]);

  const addCardRef = (el) => el && !cardRefs.current.includes(el) && cardRefs.current.push(el);
  const addTitleRef = (el) => el && titleRefs.current.push(el);
  const addTextRef = (el) => el && textRefs.current.push(el);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    cardRefs.current.forEach((card, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });

      tl.from(card, {
        opacity: 0,
        rotateX: 90,       
        transformOrigin: "left center",
        duration: 1,
        ease: "power3.out",
        delay: i * 0.25,     
      });
   
      tl.from(titleRefs.current[i], {
          opacity: 0,
          y: 20,
          duration: 0.5,
        }, "-=0.4");

        tl.from(textRefs.current[i], {
          opacity: 0,
          y: 20,
          duration: 0.5,
        }, "-=0.35");
      });
  }, []);

  return (
    <Section
      id="values"
      className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="container relative z-2">
        <Heading
          ref={titleRef}
          className="mt-5 md:max-w-md lg:max-w-2xl"
          title="Why Groodie?"
          text="The principles that guide everything we do"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {values.map((item) => (
            <div
              ref={addCardRef}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col justify-center min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h4 ref={addTitleRef} className="h4 mb-5">{item.title}</h4>
                <p ref={addTextRef} className="body-2 mt-6 mb-6 text-n-3">{item.text}</p>
              </div>

              {item.light && <GradientLight />}

              <div
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
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Values;
