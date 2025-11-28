import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { groodieServices, groodieServicesIcons, groodieServices2 } from "../constants";
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRefs = useRef([]);
  const bodyRefs = useRef([]);
  const listRefs = useRef([]);
  const buttonRefs = useRef([]);

  const addCardRef = (el) => el && !cardRefs.current.includes(el) && cardRefs.current.push(el);
  const addTitleRef = (el) => el && titleRefs.current.push(el);
  const addBodyRef = (el) => el && bodyRefs.current.push(el);
  const addListRef = (el) => el && listRefs.current.push(el);
  const addButtonRef = (el) => el && buttonRefs.current.push(el);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    cardRefs.current.forEach((card, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });

      tl.from(card, {
        opacity: 0,
        y: 80,
        duration: 1,
        delay: index * 0.1,
        ease: "power3.Out",
      });

      tl.from(titleRefs.current[index], {
        opacity: 0,
        y: 20,
        duration: 0.5,
      }, "-=0.4");

      tl.from(bodyRefs.current[index], {
        opacity: 0,
        y: 20,
        duration: 0.5,
      }, "-=0.35");

      tl.from(listRefs.current[index], {
        opacity: 0,
        y: 20,
        duration: 0.5,
      }, "-=0.3");

      tl.from(buttonRefs.current[index], {
        opacity: 0,
        y: 15,
        duration: 0.5,
      }, "-=0.25");
    });
  }, []);

  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="services"
    >
      <div className="container">
        <Heading
          ref={titleRef}
          tag="Ready to get started"
          title="Our Services"
          text="We offer a full spectrum of freelance services to help your business thrive in the digital age"
        />

        <div className="relative">
          <div
            ref={addCardRef}
            className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                src={service1}
                alt="service"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 ref={addTitleRef} className="h4 mb-4">Web Development</h4>

              <p ref={addBodyRef} className="body-2 mb-[3rem] text-n-3">
                Build powerful websites and applications with modern technologies.
              </p>

              <ul ref={addListRef} className="body-2">
                {groodieServices.map((item, i) => (
                  <li key={i} className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>

              <Button
                ref={addButtonRef}
                href="/webdev"
                white
                className="mt-5 w-full flex items-center justify-center"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div
              ref={addCardRef}
              className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="w-full h-full object-cover"
                  alt="service"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 ref={addTitleRef} className="h4 mb-4">Digital Marketing</h4>

                <p ref={addBodyRef} className="body-2 mb-[3rem] text-n-3">
                  Boost your brand visibility with powerful digital strategies.
                </p>

                <Button
                  ref={addButtonRef}
                  href="/digitalmarketing"
                  white
                >
                  Learn More
                </Button>
              </div>

              <PhotoChatMessage />
            </div>

            <div
              ref={addCardRef}
              className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]"
            >
              <div className="py-12 px-4 xl:px-8">
                <h4 ref={addTitleRef} className="h4 mb-4">Graphic Design</h4>

                <p ref={addBodyRef} className="body-2 mb-[2rem] text-n-3">
                  Elevate your brand with stunning visual designs.
                </p>

                <ul ref={addListRef} className="flex items-center justify-between">
                  {groodieServicesIcons.map((icon, i) => (
                    <li key={i} className="rounded-2xl">
                      <img src={icon} width={40} alt="" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>

              <Button
                ref={addButtonRef}
                href="/designing"
                white
                className="mt-5 w-full"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div
            ref={addCardRef}
            className="relative z-1 flex items-center h-[39rem] mt-5 mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img className="w-full h-full object-cover" src={service1} />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-right">
              <h4 ref={addTitleRef} className="h4 mb-4">Penetration Testing</h4>

              <p ref={addBodyRef} className="body-2 mb-[3rem] text-n-3">
                Secure your digital assets with expert security testing.
              </p>

              <ul ref={addListRef} className="body-2">
                {groodieServices2.map((item, i) => (
                  <li key={i} className="flex items-start py-4 border-t border-n-6">
                    <img width={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>

              <Button
                ref={addButtonRef}
                href="/pentesting"
                white
                className="mt-5 w-full"
              >
                Learn More
              </Button>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
