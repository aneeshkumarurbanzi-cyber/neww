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

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            left: "0%",
            right: "-20%",
          }}
        >
          <Image
            src="/hero.jpg"
            alt="Abhishek VS"
            fill
            priority
            className="object-cover"
            style={{
              objectPosition: "60% 41%",   // mobile: person shifted right, face visible
            }}
          />
        </div>

        

        {/* Right Fade */}
        <div
          className="absolute inset-y-0 right-0 w-20 md:w-32"
          style={{
            background:
              "linear-gradient(to left, #d9d9d7 0%, rgba(217,217,215,0) 90%)",
          }}
        />
      </div>

      {/* Social Icons */}
      <div className="absolute top-5 right-4 md:top-8 md:right-10 z-20 flex items-center gap-2 md:gap-3">
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-5 md:px-10 w-full md:max-w-[620px] mt-20 md:mt-0">

          <p className="uppercase tracking-[0.18em] text-[18px] md:text-[32px] font-semibold mb-2 md:mb-4">
            <span className="text-black">HI</span>{" "}
            <span className="text-black/35">I'M</span>
          </p>

          <h1 className="font-serif font-bold leading-none mb-5 md:mb-10">
            <span className="text-[38px] md:text-[72px] text-black">ABHISHEK</span>
            <span className="ml-1 text-[38px] md:text-[72px] text-black/30">VS</span>
          </h1>

          <div className="text-[13px] md:text-[15px] leading-[1.9] max-w-[260px] md:max-w-[620px]">
            <p>
              <span className="text-black">Driven by ambition and guided by creativity, I'm a</span>{" "}
              <span className="text-black/35">startup founder</span>
            </p>
            <p>
              <span className="text-black">building modern digital brands</span>{" "}
              <span className="text-black/35">with confidence and purpose.</span>
            </p>
            <p>
              <span className="text-black">I believe every small beginning has the power to create</span>{" "}
              <span className="text-black/35">something</span>
            </p>
            <p>
              <span className="text-black">extraordinary.</span>
            </p>
          </div>

        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden">
        <div className="py-3 md:py-4 whitespace-nowrap animate-marquee text-gray-400 text-[11px] md:text-[13px] tracking-wide">
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