import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
export function Footer() {
  return <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">DAKTA PIZZA</h3>
            <p className="text-sm text-muted-foreground">
              "Something about the pizza."
            </p>
            <p className="text-sm text-muted-foreground">
              Quality, affordable pizza for students and the community around University of Eastern Africa, Baraton.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-foreground transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Current Offers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+254700000000" className="text-muted-foreground hover:text-foreground transition-colors">+254 717480207</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@daktapizza.co.ke" className="text-muted-foreground hover:text-foreground transition-colors">
                  hello@daktapizza.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-muted-foreground">
                  Service Area: University of Eastern Africa, Baraton & Surrounding Areas
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold">Operating Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon - Thu: 10:00 AM - 10:00 PM</span>
              </li>
              <li className="ml-6">Fri - Sat: 10:00 AM - 11:00 PM</li>
              <li className="ml-6">Sunday: 12:00 PM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 DAKTA PIZZA. All rights reserved. | 
            <Link to="/privacy" className="hover:text-foreground transition-colors ml-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>;
}