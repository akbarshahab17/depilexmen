import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Wind, Crown } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Precision Haircuts",
    description: "Expert cuts tailored to your face shape and style preferences",
    price: "From PKR 800",
  },
  {
    icon: Crown,
    title: "Royal Shave",
    description: "Traditional hot towel shave with premium products",
    price: "From PKR 600",
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Deep cleansing and rejuvenating facials for men",
    price: "From PKR 1,500",
  },
  {
    icon: Wind,
    title: "Hair Styling",
    description: "Professional styling for any occasion",
    price: "From PKR 500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience premium grooming services in a relaxed, sophisticated environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="text-primary font-semibold">{service.price}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
