import { Lightbulb, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery",
    description:
      "Understanding your brand, goals, and target audience to create a solid foundation",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description:
      "Crafting creative concepts and visual solutions that align with your vision",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description:
      "Bringing designs to life with attention to detail and technical excellence",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description:
      "Delivering the final product and ensuring a successful implementation",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-charcoal text-gray-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy">
            My Work Process
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A structured approach to delivering exceptional design solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full border border-white/10">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple rounded-xl mb-4 text-white">
                    <step.icon size={32} />
                  </div>
                  <div className="text-5xl font-bold text-navy mb-2">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
