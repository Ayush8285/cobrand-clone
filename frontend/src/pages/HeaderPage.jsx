import { FaInstagram, FaTiktok } from "react-icons/fa";
import MasonryGallery from "../components/header/MasonryGallery";
import AutoSlider from "../components/header/AutoSlider";
import StickyNavbar from "../components/header/StickyNavbar";
import MainNavbar from "../components/header/MainNavbar";
import HeroContent from "../components/header/HeroContent";

export default function Header() {
  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Gradient background spread */}
      <div className="absolute top-[35%] left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-[90%] bg-gradient-to-br from-blue-400 via-purple-300 to-transparent rounded-full blur-3xl opacity-60 z-0" />

      <MainNavbar />

      {/* Hero Section */}
      <HeroContent />

      {/* Social Media Cards */}
      <div className="mt-16 mx-30 px-4 sm:px-0">
        <MasonryGallery />
      </div>

      {/* Auto Slider */}
      <div className="mx-10 mt-10">
        <AutoSlider />
      </div>

      <StickyNavbar />
    </div>
  );
}
