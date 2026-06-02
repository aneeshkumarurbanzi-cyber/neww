"use client";

import Image from "next/image";
import { FaEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function HeroSection() {
  const socials = [
    { icon: <FaEnvelope />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ];

  return (
    <section className="relative h-screen overflow-hidden bg-[#d9d9d7]">

  {/* Hero Image */}
<div className="absolute -top-155 -right-25 bottom-0 w-full md:w-[100%]">
  <Image
  src="/hero.jpg"
  alt="Abhishek VS"
  fill
  priority
  quality={100}
  className="
    object-cover
    grayscale
    object-[65%_210px]
    md:object-[65%_top]
  "
/>
  {/* Left Fade */}
<div
    className="absolute inset-y-0 left-0 w-24 md:w-40 pointer-events-none"
    style={{
      background:
        "linear-gradient(to right, #d9d9d7 0%, rgba(217,217,215,0) 100%)",
    }}
  />

        {/* Right Fade */}
        <div
          className="absolute inset-y-0 right-0 w-40 md:w-32"
          style={{
            background:
              "linear-gradient(to left, #d9d9d7 0%, rgba(217,217,215,0) 5 0%)",
          }}
        />
      </div>

      {/* Social Icons */}
      <div className="absolute top-5 right-4 md:top-8 md:right-10 z-20 flex items-center gap-2 md:gap-3">
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-black hover:text-white transition-all duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-5 md:px-10 w-full md:max-w-[620px] mt-5 md:mt-0">

          <p className="uppercase tracking-[0.18em] text-[18px] md:text-[32px] font-semibold mb-2 md:mb-2">
            <span className="text-black">HI</span>{" "}
            <span className="text-black/35">I'M</span>
          </p>

          <h1 className="font-serif font-bold leading-none mb-5 md:mb-5">
            <span className="text-[38px] md:text-[76px] text-black">ABHISHEK</span>
            <span className="ml-5 text-[38px] md:text-[76px] text-black/30">VS</span>
          </h1>

       <div
  className="text-[13px] md:text-[18px] leading-[1.9] max-w-[260px] md:max-w-[620px] text-transparent bg-clip-text"
  style={{
    backgroundImage:
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.35) 100%)",
  }}
>
  <p>Driven by ambition and guided by creativity, I'm a startup founder</p>
  <p>building modern digital brands with confidence and purpose.</p>
  <p>I believe every small beginning has the power to create</p>
  <p>something extraordinary.</p>
</div>

        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden">
        <div className="py-3 md:py-4 whitespace-nowrap animate-marquee text-white text-[11px] md:text-[13px] tracking-wide">
          EVERY GREAT ACHIEVEMENT STARTS WITH A DREAM AND THE DETERMINATION TO CHASE IT RELENTLESSLY. • I CREATE, INSPIRE, AND EVOLVE THROUGH EVERY CHALLENGE AND EVERY OPPORTUNITY. • EVERY GREAT ACHIEVEMENT STARTS WITH A DREAM AND THE DETERMINATION TO CHASE IT RELENTLESSLY. • I CREATE, INSPIRE, AND EVOLVE THROUGH EVERY CHALLENGE AND EVERY OPPORTUNITY. •
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          min-width: 200%;
          animation: marquee 20s linear infinite;
        }
      `}</style>

    </section>
  );
}