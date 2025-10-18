import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold">Muzammil</div>

          <div className="flex items-center gap-2 text-gray-300">
            <span>Made with</span>
            <Heart className="text-purple fill-purple" size={18} />
            <span>© 2025 Muzammil. All rights reserved.</span>
          </div>

          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-purple transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
