export default function MainNavbar() {
    return (
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
    );
  }
  