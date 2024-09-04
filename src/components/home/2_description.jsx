"use client"
import { motion } from "framer-motion";

export default function description() {
  return (
    <div className="flex justify-center flex-col items-center mt-28 mb-28">
      <motion.h2 initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
        viewport={{ once: true, amount: 0.3 }} className="text-2xl md:leading-snug sm:text-6xl md:max-w-5xl text-center px-10">
        Where connections thrive and loneliness fades.
      </motion.h2>
      <motion.p initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
        viewport={{ once: true, amount: 0.3 }} className="max-w-6xl md:leading-snug font-light text-sm md:text-3xl px-5 md:max-w-7xl text-center mt-4 md:mt-14 mx-8">
        Offering a seamless journey from search to connection, chat and beyond.<br /> With verified accounts and a trusted platform, finding your perfect match is easier than ever. Welcome to a new era of matchmaking, where simplicity meets security and love is just a click away. Say goodbye to complexities and hello to simplicity.
      </motion.p>
    </div>
  )
}
