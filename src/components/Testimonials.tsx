import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "Brooklyn's design work transformed our brand identity. Her creativity and attention to detail exceeded all expectations. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content: "Working with Brooklyn was an absolute pleasure. She understood our vision perfectly and delivered stunning designs that resonated with our audience.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Creative Studio",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content: "Professional, talented, and incredibly responsive. Brooklyn brought our ideas to life in ways we never imagined. A true design expert!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple/10 text-purple rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 relative">
              <Quote className="absolute top-6 right-6 text-purple/20" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-purple text-purple" size={20} />
                ))}
              </div>

              <p className="text-charcoal/80 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full bg-purple/10"
                />
                <div>
                  <div className="font-bold text-navy">{testimonial.name}</div>
                  <div className="text-sm text-charcoal/70">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
