"use client";

import Image from "next/image";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#d9d9d7] ">
      {/* Background Image */}
     <div className="absolute inset-0">
  <Image
    src="/hero.jpg"
    alt="Abhishek VS"
    fill
    className="object-cover scale-110 translate-x-16 translate-y-8"
  />
        {/* Left Fade */}
        <div
          className=""
          style={{
            background:
              "linear-gradient(to right, #d9d9d7 0%, #d9d9d7 100%, rgba(217,217,215,0.9) 50%, rgba(217,217,215,0) 100%)",
          }}
        />

        {/* Right Fade */}
        <div
          className="absolute inset-y-0 right-0 w-24"
          style={{
            background:
              "linear-gradient(to left, #d9d9d7 0%, rgba(217,217,215,0) 100%)",
          }}
        />
      </div>

      {/* Social Icons */}
      <div className="absolute top-8 right-10 z-20 flex gap-3">
        {[
          { icon: <FaEnvelope />, href: "#" },
          { icon: <FaInstagram />, href: "#" },
          { icon: <FaXTwitter />, href: "#" },
          { icon: <FaLinkedinIn />, href: "#" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="pl-4 md:pl-10 lg:pl-8 max-w-[700px]">
         <p className="uppercase tracking-[.10em] text-5xl font-bold md:text-4xl mb-4">
  <span className="text-black">HI</span>{" "}
  <span className="bg-gradient-to-r from-black/60 to-black/20 bg-clip-text text-transparent">
    I'M
  </span>
</p>
          <h1 className="font-serif font-bold leading-none mb-8">
            <span className="text-[40px] md:text-[90px] lg:text-[80px] text-black">
              ABHISHEK
            </span>

            <span className="ml-4 text-[40px] md:text-[90px] lg:text-[80px] text-black/30">
              VS
            </span>
          </h1>

          <div className="space-y-1 text-[15px] leading-[1.7]">
  <p>
    <span className="text-black">
      Driven by ambition
    </span>

    <span className="text-black">
      {" "}and guided by creativity, I'm a startup founder building modern{" "}
    </span>

    <span className="bg-gradient-to-r from-black/60 to-black/20 bg-clip-text text-transparent">
       digital brands with 
    </span>

    <span className="text-black">
      {" "}confidence and purpose. I believe every small beginning has the power to 
    </span>
     <span className="bg-gradient-to-r from-black/60 to-black/20 bg-clip-text text-transparent">
       create something 
    </span>
<span className="text-black">
      {" "}exdraordinary.
    </span>
  </p>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full border-t border-black/10">
        <div className="py-4 whitespace-nowrap animate-marquee text-gray-300 text-sm tracking-wider">
          EVERY GREAT ACHIEVEMENT STARTS WITH A DREAM AND THE DETERMINATION TO
          CHASE IT RELENTLESSLY. • I CREATE, INSPIRE, AND EVOLVE THROUGH EVERY
          CHALLENGE AND EVERY OPPORTUNITY. • EVERY GREAT ACHIEVEMENT STARTS WITH
          A DREAM AND THE DETERMINATION TO CHASE IT RELENTLESSLY. •
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}