import { FaInstagram, FaTiktok } from "react-icons/fa";
import MasonryGallery from "./MasonryGallery";
import AutoSlider from "./AutoSlider";
import StickyNavbar from './StickyNavbar';

export default function Header() {
  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Gradient background spread */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-400 via-purple-300 to-transparent rounded-full blur-3xl opacity-60 z-0" />

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 relative z-10">
        <div className="text-xl font-semibold">co:brand</div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#">Analytics</a>
          <a href="#">Community</a>
          <a href="#">Advertising</a>
          <a href="#">Stories</a>
        </nav>
        <div className="space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Book a Demo
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <main className="flex flex-col items-center justify-center text-center mt-24 px-6 relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
          Music marketing,
          <br /> revolutionized.
        </h1>
        <button className="mt-10 px-6 py-3 text-white font-semibold bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 transition">
          Book a Demo
        </button>
      </main>

    
        {/* Social Media Cards */}
        <div className=" mt-16 mx-30 px-4 sm:px-0">
          <MasonryGallery />
        </div>

        {/* { Auto Slider } */}
        <div  className="mx-10 mt-10">
          <AutoSlider />
        </div>
      <StickyNavbar />
      <div style={{ height: '2000px', paddingTop: '100px' }}>
        <h1 className="text-4xl text-center">Scroll Down to See the Navbar</h1>
        {/* Page content */}
      </div>    
    </div>
  );
}
