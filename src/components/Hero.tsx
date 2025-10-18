import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-purple/10 text-black rounded-full text-xl font-medium">
              Syed Muzammil Ali
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight">
              <span className="block text-purple">Web Developer</span>
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              I'm a front-end developer passionate about building clean and
              responsive websites using HTML, CSS, and JavaScript. I specialize
              in crafting dynamic and interactive user interfaces with React.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-purple hover:bg-purple-light text-white px-8 py-6 text-lg"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative z-10">
              <img
                src="APC_0631g.jpg"
                alt="Brooklyn - Web Developer"
                className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple rounded-full -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
