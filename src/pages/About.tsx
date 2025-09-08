import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Award, Users, Pizza, Heart } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Dakta Pizza</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            More than just pizza - we're part of the University of Eastern Africa, Baraton community. 
            Our mission is to serve quality, affordable food that brings students and neighbors together.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-8">
              <Award className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide fresh, quality pizza at student-friendly prices while maintaining the highest 
                standards of food safety and customer service. We believe great food shouldn't break the bank.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <Heart className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Community first, quality always, and affordability without compromise. We're committed to 
                being a positive part of the Baraton community for students, faculty, and local residents.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quality Standards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Quality Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Pizza className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Fresh Ingredients Daily</h4>
                <p className="text-sm text-muted-foreground">
                  We source fresh vegetables, premium cheese, and quality meats daily to ensure every pizza meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Food Safety Certified</h4>
                <p className="text-sm text-muted-foreground">
                  Our kitchen follows strict food safety protocols and maintains all required certifications from local health authorities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Trained Staff</h4>
                <p className="text-sm text-muted-foreground">
                  Our team receives ongoing training in food preparation, customer service, and hygiene to deliver consistent quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Area */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Service Area</h3>
                  <p className="text-muted-foreground">
                    We proudly serve the University of Eastern Africa, Baraton campus and surrounding areas. 
                    Our strategic location ensures quick pickup times for students, faculty, and local residents.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Primary Service Areas:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">Campus</Badge>
                      University of Eastern Africa, Baraton
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">Student</Badge>
                      Student Hostels & Residences
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">Faculty</Badge>
                      Staff Housing Areas
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">Local</Badge>
                      Surrounding Community
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Pickup Information:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Central campus location for easy access</li>
                    <li>• Wheelchair accessible entrance</li>
                    <li>• Designated parking for quick pickup</li>
                    <li>• Clear signage and directions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operating Hours */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Operating Hours</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Regular Hours</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Monday - Thursday</span>
                      <span className="text-muted-foreground">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Friday - Saturday</span>
                      <span className="text-muted-foreground">10:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground">12:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Special Notes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Extended hours during exam periods</li>
                    <li>• Holiday hours may vary - check our offers page</li>
                    <li>• Last orders accepted 30 minutes before closing</li>
                    <li>• Phone lines open during all operating hours</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Phone Orders</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+254700000000" className="hover:text-foreground transition-colors">
                      +254 700 000 000
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">WhatsApp</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="https://wa.me/254700000000" className="hover:text-foreground transition-colors">
                      +254 700 000 000
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:hello@daktapizza.co.ke" className="hover:text-foreground transition-colors">
                      hello@daktapizza.co.ke
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}