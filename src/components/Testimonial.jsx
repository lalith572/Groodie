import Heading from "./Heading";
import Section from "./Section";
import { testimonials } from "../constants";
import { Gradient } from "./design/Services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const headRef = useRef(null);
  const cardRefs = useRef([]);

  const addCardRef = (el) => el && !cardRefs.current.includes(el) && cardRefs.current.push(el);

  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  useGSAP(() => {

    gsap.from(headRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headRef.current,
        start: "top 85%",
      },
    });

    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });
  }, []);

  const Card = ({ item }) => (
    <article
      ref={addCardRef}
      className="rounded-3xl border border-stroke-1 bg-n-7/60 px-5 py-6 md:px-6 md:py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
    >
      <p className="body-2 text-n-2 mb-6 leading-relaxed">{item.text}</p>

      <div className="flex items-center justify-between gap-4 mt-4 bg-black/20 px-9 py-3 rounded-lg">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 ">
            <span className="text-sm md:text-[0.9rem] font-semibold text-n-1">
              {item.name}
            </span>
          </div>
          <span className="text-[0.7rem] md:text-xs text-n-3">{item.role}</span>
        </div>

        <div className="shrink-0">
          <img
            src={item.avatar}
            alt={item.name}
            className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover border border-stroke-1"
          />
        </div>
      </div>
    </article>
  );

  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="testimonials"
    >
      <div className="container mb-[1rem]">
        <div ref={headRef}>
          <Heading
            tag="Ready to get hear"
            title="What our clients say"
            text="Don't just take our word for it - hear from businesses we've helped succeed"
          />
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8 space-y-6 lg:space-y-0">

          <div className="flex flex-col gap-6">
            {col1.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:mt-10">
            {col2.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:mt-20">
            {col3.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>

        </div>
      </div>

      {/* <Gradient /> */}
    </Section>
  );
};

export default Testimonial;
