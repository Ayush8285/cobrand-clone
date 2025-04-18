// Autoslider.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaFacebook,
} from "react-icons/fa";

export default function Autoslider() {
  const icons = [
    <FaApple />,
    <FaGoogle />,
    <FaAmazon />,
    <FaMicrosoft />,
    <FaFacebook />,
  ];

  const repeatedIcons = [...icons, ...icons, ...icons]; // Repeat to ensure smooth looping

  return (
    <div className="w-full py-6 overflow-hidden relative">
      <div
        className="relative z-10"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 40%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 40%, black 90%, transparent 100%)",
        }}
      >
        <Marquee
          gradient={false}
          speed={50}
          direction="left"
          pauseOnHover={false}
          loop={0}
        >
          <div className="flex text-black text-5xl min-w-full">
            {repeatedIcons.map((icon, index) => (
              <div
                key={index}
                className="w-[11.28vw] text-gray-400 flex justify-center items-center"
              >
                {icon}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
