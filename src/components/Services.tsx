import { Card } from "@/components/ui/card";
import { Code, Smartphone, Database, Globe, Zap, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building responsive, performant websites using modern frameworks like React, Next.js, and Vue.js",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications with Java",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Improving application speed, SEO, and overall user experience",
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-purple/10 text-purple rounded-full text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            What I Offer
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Comprehensive development services tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-purple group cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-purple/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple group-hover:scale-110 transition-all duration-300">
                <service.icon
                  className="text-purple group-hover:text-white transition-colors"
                  size={32}
                />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
