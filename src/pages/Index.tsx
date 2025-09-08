import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { Pizza, Clock, DollarSign, Star, Gift, Phone } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            DAKTA PIZZA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            "Something about the pizza."
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Quality, affordable pizza crafted for students and the community around University of Eastern Africa, Baraton.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/menu">
                <Pizza className="h-5 w-5 mr-2" />
                View Menu
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/offers">
                <Gift className="h-5 w-5 mr-2" />
                Get Birthday Offer
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Dakta Pizza Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Dakta Pizza?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Fresh ingredients, authentic recipes, and careful preparation in every pizza we make.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Student-Friendly Prices</h3>
                <p className="text-muted-foreground">
                  Affordable pricing designed with student budgets in mind, without compromising on quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Fast Pickup</h3>
                <p className="text-muted-foreground">
                  Quick preparation and convenient pickup near campus. Call or WhatsApp to order.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Best pizza near campus! Great taste and the prices are perfect for students like me."
                </p>
                <p className="font-medium">— A.M., Baraton Student</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The birthday offer is amazing! Free pizza on your special day - couldn't ask for more."
                </p>
                <p className="font-medium">— J.K., Regular Customer</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Quick service and consistently good quality. My go-to spot for affordable meals."
                </p>
                <p className="font-medium">— S.W., Local Resident</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Browse our menu or give us a call. We're here to serve you quality pizza at student-friendly prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/menu">
                View Full Menu
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
              <a href="tel:+254700000000">
                <Phone className="h-5 w-5 mr-2" />
                Call to Order
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
