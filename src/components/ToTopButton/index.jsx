import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ToTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      className={`transition-all duration-300 p-3 bg-white/15 fixed bottom-10 right-12 z-20 rounded-md shadow-md shadow-black/40 text-white/90 hover:text-white/50 hover:bg-white/5 max-md:right-8  ${
        showScroll ? "opacity-100 z-10" : "opacity-0 z-[-1]"
      }`}
    >
      <FaArrowUp className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
    </button>
  );
}
