import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const Contact = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[7.25rem]"
      customPaddings
      id="contact">

      <Heading
        tag="Get ready to be Groodified"
        title="Let's Build Something Great Together"
        text="Whether you need a free audit, have a project in mind, or just want to chat about digital transformation — we're here to help."
      />

      <div className="container">
        <div className="mt-8 md:mt-10 grid gap-8 lg:gap-10 lg:grid-cols-2 items-start">

          <div className="space-y-6 lg:space-y-8">
            
            <div className="rounded-3xl border border-n-6 bg-n-7/60 p-6 md:p-8 h-full">
              <h3 className="h5 mb-3">Contact details</h3>
              <p className="body-2 text-n-3 mb-6">
                Reach out through email, phone, or visit our office. We’re
                here to bring your ideas to life.
              </p>

              <ul className="space-y-4 body-2">

                <li className="flex items-start gap-3">
                  <span className="mt-1 h-8 w-8 flex items-center justify-center rounded-xl bg-n-6 border border-n-5/40">
                    <i className="bx bx-envelope"></i>
                  </span>
                  <div>
                    <p className="text-n-3">Email</p>
                    <a
                      href="mailto:hello@groodie.in"
                      className="text-n-1 hover:text-color-1 transition"
                    >
                      hello@groodie.in
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 h-8 w-8 flex items-center justify-center rounded-xl bg-n-6 border border-n-5/40">
                    <i className="bx bx-phone"></i>
                  </span>
                  <div>
                    <p className="text-n-3">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-n-1 hover:text-color-1 transition"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 h-8 w-8 flex items-center justify-center rounded-xl bg-n-6 border border-n-5/40">
                    <i className="bx bx-location-plus"></i>
                  </span>
                  <div>
                    <p className="text-n-3">Office</p>
                    <p className="text-n-1">
                      Chennai – 600004.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-n-6 bg-radial-gradient from-n-7 via-n-8 to-n-8 p-6 md:p-7">
              <h4 className="h6 mb-2">Project details help a lot</h4>
              <p className="body-2 text-n-3">
                Share your timeline, budget range, and goals so we can
                prepare the best possible response for you.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-n-6 bg-n-7/80 p-6 md:p-8 lg:p-9 h-full flex flex-col">
            <form className="space-y-5 flex-1 flex flex-col">

              <div className="space-y-2">
                <label htmlFor="name" className="body-2 text-n-2">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2 text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1 focus:ring-1 focus:ring-color-1"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="body-2 text-n-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2 text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1 focus:ring-1 focus:ring-color-1"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="body-2 text-n-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Let’s talk about a new project"
                  className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2 text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1 focus:ring-1 focus:ring-color-1"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="body-2 text-n-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us a bit about what you need help with..."
                  className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2 text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1 focus:ring-1 focus:ring-color-1 resize-none"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="budget" className="body-2 text-n-2">
                    Budget range
                  </label>
                  <select
                    id="budget"
                    className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2 text-n-1 focus:outline-none focus:border-color-1 focus:ring-1 focus:ring-color-1"
                  >
                    <option value="">Select budget</option>
                    <option value="1">&lt; ₹1,000</option>
                    <option value="2">₹1,000 – ₹5,000</option>
                    <option value="3">₹5,000 – ₹10,000</option>
                    <option value="4">&gt; ₹10,000</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="body-2 text-n-2">
                    Service
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2 text-n-1 focus:outline-none focus:border-color-1 focus:ring-1 focus:ring-color-1"
                  >
                    <option value="">Select service</option>
                    <option value="branding">Web Development</option>
                    <option value="design">Graphic Design</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="development">Penetration Testing</option>
                  </select>
                </div>
              </div>

              <Button href="/PenetrationTesting" white className="mt-5 w-full flex items-center justify-center">
                Send message
              </Button>
            </form>
          </div>
        </div>

        <div className="h-10 md:h-16 lg:h-20"></div>
      </div>
    </Section>
  );
};

export default Contact;
