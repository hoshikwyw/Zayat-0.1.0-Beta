import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 px-8 border-b z-50 transition-all duration-300
      backdrop-blur-md mx-12 my-6 w-[95%] rounded-2xl border border-white ${
        scrolled
          ? "bg-white/50 border-white/30 py-2"
          : "bg-white/30 border-white/20"
      }`}
    >
      <div className=" flex items-center justify-between gap-10 py-1">
        <Link to="/">
          <img
            src="/zayat.png"
            alt=""
            className=" w-12 h-12 object-cover rounded-md border border-white/30"
          />
        </Link>
        <div className=" flex items-center gap-10">
          <Link to="/" className=" title">Home</Link>
          <Link to="/vlogs" className=" title">Vlogs</Link>
          <Link to="/detail:id" className=" title">Detail</Link>
          <Link to="/contact" className=" title">Contact</Link>
          <Link to="/about" className=" title">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
