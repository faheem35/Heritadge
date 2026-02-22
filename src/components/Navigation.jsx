// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-50">
//           {/* <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-primary">Heritadge</h1>
//           </div> */}

//           <div className="flex-shrink-0">
//   <img
//     src="src/assets/navigation/logo.png"
//     alt="Heritadge Logo"
//     className="h-28 w-auto"
//   />
// </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#home" className="text-2xl font-semibold text-primary hover:text-secondary transition">
//               Home
//             </a>
//             <a href="#about" className="text-2xl font-semibold text-primary hover:text-secondary transition">
//               About
//             </a>
//             <a href="#services" className="text-2xl font-semibold text-primary hover:text-secondary transition">
//               Services
//             </a>
//             <a href="#portfolio" className="text-2xl font-semibold text-primary hover:text-secondary transition">
//               Portfolio
//             </a>
//             <a href="#contact" className="text-2xl font-semibold text-primary hover:text-secondary transition">
//               Contact
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-primary"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden pb-4">
//             <a href="#home" className="block py-2 text-primary hover:text-secondary">
//               Home
//             </a>
//             <a href="#about" className="block py-2 text-primary hover:text-secondary">
//               About
//             </a>
//             <a href="#services" className="block py-2 text-primary hover:text-secondary">
//               Services
//             </a>
//             <a href="#portfolio" className="block py-2 text-primary hover:text-secondary">
//               Portfolio
//             </a>
//             <a href="#contact" className="block py-2 text-primary hover:text-secondary">
//               Contact
//             </a>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }


import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/navigation/logo.png"; // adjust path

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Navbar */}
        <div className="flex justify-between items-center py-4 md:py-6">
          
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Heritadge Logo"
              className="h-16 md:h-20 w-auto"
            />
          </div> */}

          <div className="flex-shrink-0">
  <a href="#home">
    <img
      src={logo}
      alt="Heritadge Logo"
      className="h-16 md:h-20 w-auto cursor-pointer"
    />
  </a>
</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <a href="#home" className="text-lg md:text-xl font-medium text-primary hover:text-secondary transition">
              Home
            </a>
            <a href="#about" className="text-lg md:text-xl font-medium text-primary hover:text-secondary transition">
              About
            </a>
            <a href="#services" className="text-lg md:text-xl font-medium text-primary hover:text-secondary transition">
              Services
            </a>
            <a href="#portfolio" className="text-lg md:text-xl font-medium text-primary hover:text-secondary transition">
              Portfolio
            </a>
            <a href="#contact" className="text-lg md:text-xl font-medium text-primary hover:text-secondary transition">
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 text-center">
            <a href="#home" className="block text-lg font-medium text-primary hover:text-secondary ">
              Home
            </a>
            <a href="#about" className="block text-lg font-medium text-primary hover:text-secondary">
              About
            </a>
            <a href="#services" className="block text-lg font-medium text-primary hover:text-secondary">
              Services
            </a>
            <a href="#portfolio" className="block text-lg font-medium text-primary hover:text-secondary">
              Portfolio
            </a>
            <a href="#contact" className="block text-lg font-medium text-primary hover:text-secondary">
              Contact
            </a>
          </div>
        )}

      </div>
    </nav>
  );
}