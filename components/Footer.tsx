import { Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import logoImg from '@/public/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md">
                <Image src={logoImg} alt="DietWise Logo" fill className="object-cover" />
              </div>
              <span className="text-2xl font-heading font-bold tracking-tight text-white">DietWise</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering you to live your healthiest life through personalized, science-backed nutrition plans.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#4CAF50] hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#4CAF50] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#4CAF50] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-[#4CAF50] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#4CAF50] transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-[#4CAF50] transition-colors">How It Works</a></li>
              <li><a href="#results" className="hover:text-[#4CAF50] transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>123 Health Avenue, Wellness City</li>
              <li>hello@dietwise.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} DietWise. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
