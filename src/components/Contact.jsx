import { useState, useRef } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Swal from "sweetalert2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WEB3FORMS_ACCESS_KEY = "ef24a4c9-74f7-432e-9556-996a8e7dcaf2";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    service: "",
  });

  const headingRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useGSAP(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
      },
    });

    gsap.from(leftCardRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftCardRef.current,
        start: "top 85%",
      },
    });

    gsap.from(rightCardRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: rightCardRef.current,
        start: "top 85%",
      },
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.subject || !form.message || !form.budget || !form.service) {
      Swal.fire({ 
        icon: "error", 
        title: "Missing fields", 
        text: "Please fill in all required fields." 
      });
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(form.email)) {
      Swal.fire({ 
        icon: "error", 
        title: "Invalid Email", 
        text: "Please enter a valid email address." 
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    try {
      const res = await fetch("https://api.web3forms.com/submit", { 
        method: "POST", 
        body: formData 
      });
      const data = await res.json();

      if (data.success) {
        Swal.fire({ 
          icon: "success", 
          title: "Message Sent!", 
          text: "We will get back to you shortly." 
        });
        setForm({ 
          name: "", 
          email: "", 
          subject: "", 
          message: "", 
          budget: "", 
          service: "" 
        });
      } else {
        Swal.fire({ 
          icon: "error", 
          title: "Oops!", 
          text: data.message || "Something went wrong." 
        });
      }
    } catch (error) {
      Swal.fire({ 
        icon: "error", 
        title: "Network Error", 
        text: "Please try again later." 
      });
    }
  };

  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="contact"
    >
      <div ref={headingRef}>
        <Heading
          tag="Get ready to be Groodified"
          title="Let's Build Something Great Together"
          text="Whether you need a free audit, have a project in mind, or just want to chat — we're here to help."
        />
      </div>

      <div className="container mt-8 md:mt-10 grid gap-8 lg:gap-10 lg:grid-cols-2 items-start">
        
        <div ref={leftCardRef} className="space-y-6 lg:space-y-8">
          <div className="rounded-3xl border border-n-6 bg-n-7/60 p-6 md:p-8 h-full">
            <h3 className="h5 mb-3">Contact details</h3>
            <p className="body-2 text-n-3 mb-6">
              Reach us via email, phone or visit our office.
            </p>

            <ul className="space-y-4 body-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-8 w-8 flex items-center justify-center rounded-xl bg-n-6 border border-n-5/40">
                  <i className="bx bx-envelope"></i>
                </span>
                <div>
                  <p className="text-n-3">Email</p>
                  <a href="mailto:support@groodie.in" className="text-n-1 hover:text-color-1 transition">
                    support@groodie.in
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-8 w-8 flex items-center justify-center rounded-xl bg-n-6 border border-n-5/40">
                  <i className="bx bx-phone"></i>
                </span>
                <div>
                  <p className="text-n-3">Phone</p>
                  <a href="tel:+919445411084" className="text-n-1 hover:text-color-1 transition">
                    +91 94454 11084
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-8 w-8 flex items-center justify-center rounded-xl bg-n-6 border border-n-5/40">
                  <i className="bx bx-location-plus"></i>
                </span>
                <div>
                  <p className="text-n-3">Office</p>
                  <p className="text-n-1">Chennai, TamilNadu.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-n-6 bg-radial-gradient from-n-7 via-n-8 to-n-8 p-6 md:p-7">
            <h4 className="h6 mb-2">Project details help a lot</h4>
            <p className="body-2 text-n-3">
              Share your requirements so we can prepare a perfect proposal.
            </p>
          </div>
        </div>

        <div
          ref={rightCardRef}
          className="rounded-3xl border border-n-6 bg-n-7/80 p-6 md:p-8 lg:p-9 h-full flex flex-col"
        >
          <form className="space-y-5 flex-1 flex flex-col" onSubmit={handleSubmit}>
            
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <div className="space-y-2">
              <label htmlFor="name" className="body-2 text-n-2">Full name</label>
              <input
                id="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="body-2 text-n-2">Email address</label>
              <input
                id="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="body-2 text-n-2">Subject</label>
              <input
                id="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2"
                placeholder="Let’s talk about a new project"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="body-2 text-n-2">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2 resize-none"
                placeholder="Tell us a bit about your project..."
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="budget" className="body-2 text-n-2">Budget range</label>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2"
                >
                  <option value="">Select budget</option>
                  <option value="< ₹1,000">&lt; ₹1,000</option>
                  <option value="₹1,000 – ₹5,000">₹1,000 – ₹5,000</option>
                  <option value="₹5,000 – ₹10,000">₹5,000 – ₹10,000</option>
                  <option value="> ₹10,000">&gt; ₹10,000</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="body-2 text-n-2">Service</label>
                <select
                  id="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-n-8 border border-n-6 px-4 py-3 body-2"
                >
                  <option value="">Select service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Penetration Testing">Penetration Testing</option>
                </select>
              </div>
            </div>

            <button type="submit" className="mt-5 w-full button text-n-8 bg-n-1 rounded-xl py-3">
              Send message
            </button>
          </form>
        </div>
      </div>

      <div className="h-10 md:h-16 lg:h-20" />
    </Section>
  );
};

export default Contact;
