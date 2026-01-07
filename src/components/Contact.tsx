import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-6 text-center">
        <span className="text-primary font-medium tracking-widest uppercase text-sm">Ready?</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Book Your Appointment</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Experience the Depilex difference. Call us or send a WhatsApp message to book your slot today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="tel:03239856528">
              <Phone className="mr-2 h-5 w-5" />
              Call: 0323 9856528
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="https://wa.me/923161542078" target="_blank" rel="noopener noreferrer" className="text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp: 0316-1542078
            </a>
          </Button>
        </div>
        
        <p className="text-muted-foreground mt-8 text-sm">
          Up to 50% OFF – Book your slot now!
        </p>
      </div>
    </section>
  );
};

export default Contact;
