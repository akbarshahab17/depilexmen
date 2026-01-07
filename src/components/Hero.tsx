import haircut from "@/assets/haircut.jpg";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      
      <div><img src={haircut} alt="hairstyle" className="relative z-20 mx-auto pt-auto h-full rounded-full" /></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
          
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm font-medium tracking-widest text-primary border border-primary/30 rounded-full uppercase">
            Premium Men's Grooming
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-foreground">DEPILEX</span>
          <span className="block text-primary">MEN</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light italic">
          "For men who value silence, precision and style."
        </p>
        
        <div className="flex items-center justify-center gap-2 text-primary mb-10">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-foreground font-semibold">5.0</span>
          <span className="text-muted-foreground">(9 reviews)</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Phone className="mr-2 h-5 w-5" />
            Book Now: 0323 9856528
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 text-white">
            <MapPin className="mr-2 h-5 w-5" />
            Get Directions
          </Button>
          
        </div>
             
        
      </div>
    </section>
  );
};

export default Hero;
