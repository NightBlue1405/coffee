import { Link } from 'react-router-dom';
import { Share2, MessageSquare, Globe, Mail, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="font-headline text-xl text-primary">Artisanal Gallery</div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs opacity-70">
            Crafting intentional moments through the art of roasting and architectural space. A destination for coffee connoisseurs and art enthusiasts.
          </p>
          <div className="flex space-x-4">
            <Share2 size={20} className="text-primary cursor-pointer opacity-60 hover:opacity-100 transition-opacity" />
            <MessageSquare size={20} className="text-primary cursor-pointer opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-body text-sm tracking-wide uppercase font-bold text-primary">Experience</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/menu" className="text-on-surface-variant opacity-70 hover:text-primary transition-colors text-sm uppercase tracking-wider">Menu</Link>
              <Link to="/bookings" className="text-on-surface-variant opacity-70 hover:text-primary transition-colors text-sm uppercase tracking-wider">Bookings</Link>
              <Link to="/story" className="text-on-surface-variant opacity-70 hover:text-primary transition-colors text-sm uppercase tracking-wider">Our Story</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-body text-sm tracking-wide uppercase font-bold text-primary">Discovery</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-on-surface-variant opacity-70 hover:text-primary transition-colors text-sm uppercase tracking-wider">Brew Guides</a>
              <a href="#" className="text-on-surface-variant opacity-70 hover:text-primary transition-colors text-sm uppercase tracking-wider">Wholesale</a>
              <a href="#" className="text-on-surface-variant opacity-70 hover:text-primary transition-colors text-sm uppercase tracking-wider">Contact</a>
            </nav>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-body text-sm tracking-wide uppercase font-bold text-primary">Newsletter</h4>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body text-sm"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary">
              <Globe size={18} />
            </button>
          </div>
          <div className="flex justify-center md:justify-start space-x-6 pt-4">
            <Globe size={20} className="text-primary opacity-60" />
            <Mail size={20} className="text-primary opacity-60" />
            <Coffee size={20} className="text-primary opacity-60" />
          </div>
          <p className="font-body text-[10px] tracking-widest text-on-surface-variant opacity-50 uppercase pt-4">
            © 2024 Artisanal Gallery Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
