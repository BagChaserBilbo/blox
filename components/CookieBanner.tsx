"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem("cookiesAccepted");
      if (!accepted) setVisible(true);
    } catch {
      // localStorage not available
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookiesAccepted", "true");
    } catch {
      // localStorage not available
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-near-black border-t border-light-gray dark:border-white/10 shadow-lg px-6 py-4 flex flex-wrap items-center justify-between gap-4 transition-colors duration-300"
        >
          <p className="text-near-black dark:text-white text-sm">
            Diese Website verwendet ausschließlich technisch notwendige Cookies.
          </p>
          <button
            onClick={handleAccept}
            className="bg-blox-blue text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-blue-2 transition-colors duration-200 shrink-0"
          >
            Verstanden
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
