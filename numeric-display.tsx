import React from "react";
import { motion } from "framer-motion";

export function NumberTicker({ value }) {
  const digits = Math.abs(value).toString().split("");
  const isNegative = value < 0;

  return (
    <div 
      style={{ 
        display: "flex", 
        fontSize: "5rem", 
        fontWeight: "800", 
        lineHeight: 1 
      }}
    >
      {isNegative && <span>-</span>}
      {digits.map((digit, i) => (
        <div 
          key={i} 
          style={{ height: "1em", width: "0.6em", overflow: "hidden" }}
        >
          <Digit n={parseInt(digit)} />
        </div>
      ))}
    </div>
  );
}

function Digit({ n }) {
  return (
    <motion.div
      animate={{ y: `-${n * 100}%` }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <div 
          key={i} 
          style={{ height: "1em", display: "flex", justifyContent: "center" }}
          aria-hidden={i !== n}
        >
          {i}
        </div>
      ))}
    </motion.div>
  );
}
