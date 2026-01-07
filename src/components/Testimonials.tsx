import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ahmed K.",
    text: "Best grooming experience in Islamabad. The attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Hassan R.",
    text: "Finally found a place that understands men's grooming. Clean, professional, and premium service.",
    rating: 5,
  },
  {
    name: "Bilal M.",
    text: "The atmosphere is incredibly relaxing. Perfect escape from the daily hustle.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 border-primary/10">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
