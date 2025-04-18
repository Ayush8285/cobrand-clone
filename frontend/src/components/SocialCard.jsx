/* eslint-disable no-unused-vars */
// SocialCard.jsx
import { motion } from "framer-motion";

export default function SocialCard({ image, icon, bottomText }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="relative group overflow-hidden rounded-2xl shadow-md w-full cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        width: "220px",
        borderRadius: "25px",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 z-10" />
      <div className="absolute top-2 left-2 z-20 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="bg-white text-black text-xs px-2 py-1 rounded-full shadow">{icon}</div>
      </div>
      <div className="absolute bottom-2 left-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="bg-white/60 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-semibold text-black shadow">
          {bottomText}
        </div>
      </div>
    </motion.div>
  );
}
