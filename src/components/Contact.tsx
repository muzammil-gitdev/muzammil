import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-navy via-charcoal to-navy text-navy relative overflow-hidden"
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple/20 text-purple-light rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-navy placeholder:text-gray-400 shadow-gray-500"
                  required
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-navy placeholder:text-gray-400 shadow-gray-500"
                  required
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-navy placeholder:text-gray-400 shadow-gray-500"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[150px] shadow-gray-500"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple hover:bg-purple-light text-white py-6 text-lg"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Feel free to reach out through any of these channels. I
                typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple/20 p-3 rounded-lg">
                  <Mail className="text-purple-light" size={24} />
                </div>
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a
                    href="mailto:hello@brooklyn.design"
                    className="text-gray-500 hover:text-purple-light transition-colors"
                  >
                    muzammil.uiit@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple/20 p-3 rounded-lg">
                  <Phone className="text-purple-light" size={24} />
                </div>
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-500 hover:text-purple-light transition-colors"
                  >
                    +923444344448
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple/20 p-3 rounded-lg">
                  <MapPin className="text-purple-light" size={24} />
                </div>
                <div>
                  <div className="font-medium mb-1">Location</div>
                  <div className="text-gray-500">
                    Rawalpindi, Punjab
                    <br />
                    Pakistan
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="font-medium mb-4">Follow Me</div>
              <div className="flex gap-4">
                {["Instagram", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-white/10 hover:bg-purple transition-all duration-300 px-4 py-2 rounded-lg text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
