import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm bg-black/10">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-lg font-medium text-white tracking-wide">
            LANDING<span className="text-gray-400">TP</span>
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            How it Works
          </Link>
          <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            Pricing
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm text-gray-300 hover:text-white transition-colors duration-200 hidden sm:block"
          >
            Sign in
          </Link>
          <button className="px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
