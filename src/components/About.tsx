import { Award, Users, Coffee, Briefcase } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Award, value: "30+", label: "Awards Won" },
  { icon: Coffee, value: "500+", label: "Projects Done" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 ">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src="about-me.png"
              alt="About Brooklyn"
              className="rounded-2xl shadow-xl w-full"
            />
            {/* <div className="absolute -bottom-8 -right-8 bg-purple text-white p-8 rounded-2xl shadow-xl"> */}
            {/* <div className="text-4xl font-bold">5+</div> */}
            {/* <div className="text-sm">Years of Experience</div> */}
            {/* </div> */}
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-purple/10 text-purple rounded-full text-sm font-medium">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Building Digital Solutions That Make a Difference
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              As a developer, I build clean, responsive front-ends using HTML,
              CSS, JavaScript, and React. I'm proficient in version control with
              Git and GitHub, ensuring clean code and team collaboration. I also
              specialize in mobile development, building native Android
              applications using Java. My skill set includes managing and
              querying databases using SQL.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              I believe in the power of technology to transform businesses and
              improve lives. Every project is an opportunity to learn, innovate,
              and deliver solutions that exceed expectations.
            </p>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-lg">
                    <stat.icon className="text-purple" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-navy">
                      {stat.value}
                    </div>
                    <div className="text-sm text-charcoal/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
