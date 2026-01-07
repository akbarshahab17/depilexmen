import { Clock, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const hours = [
  { day: "Monday", time: "11 AM – 10 PM" },
  { day: "Tuesday", time: "10 AM – 10 PM" },
  { day: "Wednesday", time: "10 AM – 10 PM" },
  { day: "Thursday", time: "10 AM – 10 PM" },
  { day: "Friday", time: "11 AM – 10 PM" },
  { day: "Saturday", time: "9 AM – 10 PM" },
  { day: "Sunday", time: "11 AM – 10 PM" },
];

const Hours = () => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
  return (
    <section id="hours" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Visit Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Hours & Location</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Hours Card */}
          <Card className="bg-card/50 border-primary/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Opening Hours</h3>
              </div>
              
              <div className="space-y-3">
                {hours.map((item) => (
                  <div 
                    key={item.day} 
                    className={`flex justify-between py-2 px-3 rounded-lg transition-colors ${
                      item.day === today ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <span className={item.day === today ? 'font-semibold' : 'text-muted-foreground'}>
                      {item.day}
                      {item.day === today && <span className="ml-2 text-xs">(Today)</span>}
                    </span>
                    <span className={item.day === today ? 'font-semibold' : ''}>{item.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Location Card */}
          <Card className="bg-card/50 border-primary/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Our Locations</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="font-semibold mb-2">Sector C Branch</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Building A-32 (Basement), A, Opposite Zoo, Sector C, Islamabad, 44000
                  </p>
                  <a href="tel:03239856528" className="text-primary text-sm flex items-center gap-2 hover:underline">
                    <Phone className="w-4 h-4" />
                    0323 9856528
                  </a>
                </div>
                
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="font-semibold mb-2">DHA 2 Branch</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Plaza 21 E, Jinnah Boulevard, Sector E Commercial, DHA Islamabad
                  </p>
                  <a href="tel:0515419101" className="text-primary text-sm flex items-center gap-2 hover:underline">
                    <Phone className="w-4 h-4" />
                    051-5419101
                  </a>
                </div>
                
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="font-semibold mb-2">I-8 Branch</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    1st Floor, Al-Madina Plaza, Sangam Market, I-8/3, Islamabad
                  </p>
                  <a href="tel:03473374539" className="text-primary text-sm flex items-center gap-2 hover:underline">
                    <Phone className="w-4 h-4" />
                    0347-3374539
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hours;
