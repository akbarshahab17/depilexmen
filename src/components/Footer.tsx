import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-primary/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-foreground">DEPILEX</span>
              <span className="text-primary"> MEN</span>
            </h3>
            <p className="text-muted-foreground italic">
              "For men who value silence, precision and style."
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#hours" className="text-muted-foreground hover:text-primary transition-colors">Hours & Location</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href="tel:03239856528" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                0323 9856528
              </a>
              <a 
                href="https://instagram.com/depilex_men_islamabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @depilex_men_islamabad
              </a>
              <p className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                Sector C, DHA 2, I-8 - Islamabad
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/10 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Depilex Men. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
