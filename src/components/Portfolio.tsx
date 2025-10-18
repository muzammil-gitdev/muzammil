import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80",
    description: "Modern e-commerce platform with React, Node.js, and MongoDB",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "React & TypeScript",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    description: "Real-time task management application with drag-and-drop",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    category: "Next.js",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    description: "Analytics dashboard with data visualization and insights",
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Explore my latest web development projects across various
            technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300"
                    style={{
                      transform:
                        hoveredId === project.id
                          ? "translateY(0)"
                          : "translateY(20px)",
                    }}
                  >
                    <div className="text-purple text-sm font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center text-purple hover:text-purple-light transition-colors">
                      <span className="text-sm font-medium">View Project</span>
                      <ExternalLink size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
