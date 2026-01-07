import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#hours", label: "Hours" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            <span className="text-foreground">DEPILEX</span>
            <span className="text-primary"> MEN</span>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://instagram.com/depilex_men_islamabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button asChild>
              <a href="tel:03239856528">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-primary/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-4" asChild>
                <a href="tel:03239856528">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
