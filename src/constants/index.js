import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
  },
  {
    id: "1",
    title: "About Us",
    url: "#about",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "4",
    title: "Testimonials",
    url: "#testimonials",
    // onlyMobile: true,
  },
  {
    id: "5",
    title: "Contact Us",
    url: "#contact",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "FAQ",
    url: "#faq",
    // onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const groodieServices= [
  "Custom web applications",
  "Responsive design",
  "API development"
];

export const groodieServices2 = [
  "Web Application Testing",
  "Vulnerability Assessment",
  "Network Security Audits & Consulting",
];

export const groodieServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const project = [
  {
    id: "0",
    title: "Accretox",
    text: "India's first Certification-as-a-Service (CaaS) platform that's tailored for the modern workforce.",
    date: "May 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Smart Career Navigator",
    text: "An AI-powered career guidance platform that provides personalized career advice and job recommendations.",
    date: "November 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Medilocker",
    text: "A secure digital health record management system that allows users to store and share their medical records with healthcare providers.",
    date: "March 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "The Threat Cops",
    text: "A cybersecurity platform that uses AI to detect and prevent cyber threats in real-time.",
    date: "October 2024",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const aboutText =
  "Groodie is a collective of passionate freelancers dedicated to delivering exceptional digital solutions. We combine technical expertise with creative innovation to help businesses succeed in the digital landscape.";

export const aboutContent = [
  {
    id: "0",
    title: "Our team specializes in web development, graphic design, cybersecurity, and digital marketing.",
  },
  {
    id: "1",
    title: "We believe in building long-term partnerships with our clients, understanding their unique challenges, and crafting tailored solutions that drive real results.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Perfect for small projects and startups starting out",
    price: "4000",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Basic SEO optimization",
      "Contact form integration",
      "2 rounds of revisions",
      "30-day support",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Ideal for growing businesses needing advanced features",
    price: "6000",
    features: [
      "10-page custom website",
      "Advanced UI/UX design",
      "Full SEO package",
      "CMS integration",
      "E-commerce ready",
      "Analytics setup",
      "Unlimited revisions",
      "90-day support",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "For complex, large-scale projects requiring custom solutions",
    price: null,
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Advanced integrations",
      "Performance optimization",
      "Security hardening",
      "Dedicated project manager",
      "Priority support",
      "1-year maintenance included",
    ],
  },
];

export const values = [
  {
    id: "0",
    title: "Security First",
    text: "We believe security isn't optional. Every project is built with security at its core, protecting your business and customers.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    // iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Client Partnership",
    text: "We're not just vendors – we're partners in your success. Your goals become our goals.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    // iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Results Driven",
    text: "Everything we do is measured against real business outcomes. We focus on what matters: your ROI.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    // iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Excellence",
    text: "We're obsessed with quality. Every line of code, every design, every strategy is crafted to perfection.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    // iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Integrity",
    text: "Honest communication, transparent pricing, and ethical practices in everything we do.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    // iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Innovation",
    text: "We stay ahead of the curve, leveraging the latest technologies and trends to give you a competitive edge.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    // iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    text: `Groodie has been a game-changer for my business. The AI chatbot helps me stay on top of industry trends and provides me with customized recommendations that help me make informed decisions. It's like having a personal assistant at my fingertips. I would highly recommend this app to any entrepreneur looking to improve their productivity and efficiency.`,
    name: "David Chen",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    text: `I was blown away by the accuracy and speed of the AI chatbot on Groodie. It was able to understand my queries and provide relevant recommendations in seconds.`,
    name: "Dash",
    role: "Creative Director @ UIS",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    text: `I have been using Groodie for several months and have been impressed with its capabilities. The AI chatbot is able to understand complex queries and provide accurate recommendations, making my life easier and more productive. I would recommend this app to anyone looking for a reliable and efficient AI assistant.`,
    name: "Michael Johnson",
    role: "Sales Executive",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    text: `Groodie has revolutionized the way I interact with digital assistants. The AI chatbot is able to understand my preferences and provide customized suggestions that are tailored to my needs. The app is user-friendly and intuitive, making it a joy to use.`,
    name: "Michael Johnson",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    text: `Groodie has been a game-changer for my business. The AI chatbot helps me stay on top of industry trends and provides me with customized recommendations that help me make more informed decisions. It's like having a personal assistant at my fingertips. I would highly recommend this app to any entrepreneur looking to improve their productivity and efficiency.`,
    name: "Jane Smith",
    role: "UX Designer",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    text: `Groodie has been a game-changer for my business. The AI chatbot helps me stay on top of industry trends and provides me with customized recommendations that help me make informed decisions. It&apos;s like having a personal assistant at my
                fingertips. I would highly recommend this app to any entrepreneur looking to improve their productivity and
                efficiency.`,
    name: "Maria Rodriguez",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
];


export const faqItems = [
  {
    id: 0,
    question: "What is Groodie – AI chat app?",
    answer:
      "Groodie is an AI-powered chat experience that helps you generate ideas, content, and answers in real time. It’s designed for both personal and professional productivity.",
  },
  {
    id: 1,
    question: "How does Groodie – AI chat app work?",
    answer:
      "You type a prompt or question and Groodie uses advanced language models to generate context-aware responses, suggestions, or actions tailored to your needs.",
  },
  {
    id: 2,
    question: "What are the core features of Groodie?",
    answer:
      "Core features include natural language chat, content generation, code assistance, brainstorming, and integrations with your existing tools and workflows.",
  },
  {
    id: 3,
    question: "How much does Groodie cost?",
    answer:
      "Groodie offers multiple plans, from a free tier for getting started to paid tiers with higher limits and advanced capabilities for teams and power users.",
  },
  {
    id: 4,
    question: "How can I get started with Groodie?",
    answer:
      "Simply sign up, create your workspace, and start chatting with the AI. You can customize settings and prompts to better match your use cases.",
  },
];

export const Webdetails = [
  {
    id: "1",
    title: "Discovery & Planning",
    text: "we start by understanding your business goals, target audience, and project requirements to create a tailored development plan.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Design & Prototyping",
    text: "Creating wireframes and interactive prototypes to visualize the user experience and interface design before development begins.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "3",
    title: "Devlopment",
    text: "Building scalable, secure, and high-performance web applications using the latest technologies and best practices.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    // iconUrl: benefitIcon3,
    // imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Testing & Quality Assurance",
    text: "Rigorous testing to ensure functionality, performance, and security standards are met before launch.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    // iconUrl: benefitIcon4,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "5",
    title: "Deployment & Maintenance",
    text: "Launching your web application and providing ongoing support, updates, and optimizations to ensure long-term success.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
];

export const pentestingdetails = [
  {
    id: "1",
    title: "Scoping",
    text: "We begin by defining the scope of the penetration test, identifying target systems, and understanding your security objectives.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Reconnaissance",
    text: "Gathering information about the target systems using both passive and active techniques to identify potential vulnerabilities.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "3",
    title: "Vulnerability Analysis",
    text: "Identifying and analyzing vulnerabilities in the target systems using automated tools and manual techniques.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    // iconUrl: benefitIcon3,
    // imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Exploitation",
    text: "Attempting to exploit identified vulnerabilities to assess their potential impact and the effectiveness of existing security controls.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    // iconUrl: benefitIcon4,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "5",
    title: "Reporting & Remediation",
    text: "Providing a detailed report of findings, including risk assessments and recommendations for remediation to enhance your security posture.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
];

export const marketingdetails = [
  {
    id: "1",
    title: "Strategy Development",
    text: "We begin by understanding your business goals and target audience to create a customized digital marketing strategy.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Campaign Setup",
    text: "Setting up targeted campaigns across various digital channels, including social media, search engines, and email marketing.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "3",
    title: "Content Creation",
    text: "Developing engaging and relevant content that resonates with your audience and drives conversions.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    // iconUrl: benefitIcon3,
    // imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Launch & Optimization",
    text: "Launching campaigns and continuously monitoring performance to optimize for better results and ROI.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    // iconUrl: benefitIcon4,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "5",
    title: "Reporting & Analysis",
    text: "Providing detailed reports on campaign performance, insights, and recommendations for future strategies.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
];

export const designdetails = [
  {
    id: "1",
    title: "Brand Discovery",
    text: "Understanding your brand values, target audience, and market positioning to inform the design process.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Creative Conceptualization",
    text: "Brainstorming and developing creative concepts that align with your brand identity and resonate with your audience.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "3",
    title: "Design Execution",
    text: "Bringing concepts to life through compelling visual designs, including logos, marketing materials, and digital assets.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    // iconUrl: benefitIcon3,
    // imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Review & Refinement",
    text: "Collaborating with you to review designs and make necessary refinements to ensure the final product meets your expectations.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    // iconUrl: benefitIcon4,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "5",
    title: "Delivery & Support",
    text: "Delivering final design assets in various formats and providing ongoing support for brand consistency across all platforms.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
];