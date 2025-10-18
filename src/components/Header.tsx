import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img className="w-40" src="logo.png" alt="" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-charcoal hover:text-purple transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-charcoal hover:text-purple transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-charcoal hover:text-purple transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-charcoal hover:text-purple transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-charcoal hover:text-purple transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-purple hover:bg-purple-light text-white"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-charcoal hover:text-purple transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-charcoal hover:text-purple transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-charcoal hover:text-purple transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-charcoal hover:text-purple transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-charcoal hover:text-purple transition-colors text-left"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-purple hover:bg-purple-light text-white w-full"
            >
              Get in Touch
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
