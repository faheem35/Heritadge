import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Heritage</h3>
            <p className="text-gray-400">
              Creating exceptional exhibition experiences that elevate brands.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-600 transition">Exhibition Design</a></li>
              <li><a href="#" className="hover:text-gray-600 transition">Event Management</a></li>
              <li><a href="#" className="hover:text-gray-600 transition">Branding</a></li>
              <li><a href="#" className="hover:text-gray-600 transition">Production</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-gray-600 transition">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-gray-600 transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-gray-600 transition">Contact</a></li>
              <li><a href="#" className="hover:text-secondary transition">Blog</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Heritadge Exhibition Management. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-600 transition">Privacy Policy</a>
              <a href="#" className="hover:text-gray-600 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
