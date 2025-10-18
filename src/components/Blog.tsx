import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Brand Design in 2024",
    excerpt: "Exploring emerging trends and technologies shaping the future of brand identity design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
    date: "March 15, 2024",
    category: "Design Trends"
  },
  {
    title: "Creating Memorable User Experiences",
    excerpt: "Best practices for designing intuitive and engaging digital experiences that users love",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80",
    date: "March 10, 2024",
    category: "UI/UX"
  },
  {
    title: "Color Psychology in Design",
    excerpt: "Understanding how colors influence emotions and decision-making in visual design",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80",
    date: "March 5, 2024",
    category: "Design Theory"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple/10 text-purple rounded-full text-sm font-medium mb-4">
            Blog
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on design and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-0">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-charcoal/70 mb-3">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-purple transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-purple font-medium group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
