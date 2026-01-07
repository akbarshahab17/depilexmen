import haircut from "@/assets/haircut.jpg";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder with decorative styling */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-auto h-auto mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <img className="rounded-xl shadow-xl" src={haircut} alt="hairstlye" />
                  </div>
                  <p className="text-muted-foreground">Premium Grooming Experience</p>
                </div>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
          </div>
          
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Where Tradition Meets Modern Style
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Depilex Men, we believe grooming is not just about appearance—it's about confidence, 
              self-care, and taking a moment for yourself in the midst of a busy life.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our skilled barbers combine time-honored techniques with contemporary styles, 
              ensuring every client leaves looking and feeling their absolute best. With multiple 
              locations across Islamabad, we bring premium grooming closer to you.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <span className="text-4xl font-bold text-primary">5.0</span>
                <p className="text-muted-foreground text-sm mt-1">Star Rating</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-primary">3+</span>
                <p className="text-muted-foreground text-sm mt-1">Locations</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-primary">10+</span>
                <p className="text-muted-foreground text-sm mt-1">Expert Barbers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
