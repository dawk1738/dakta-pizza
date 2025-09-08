import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Star, Percent } from "lucide-react";
import { Link } from "react-router-dom";

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: Date;
  terms: string[];
  active: boolean;
  code?: string;
}

const currentOffers: Offer[] = [
  {
    id: 1,
    title: "Student Monday Special",
    description: "Every Monday, students get 20% off any pizza with valid student ID",
    discount: "20% OFF",
    validUntil: new Date("2024-12-31"),
    terms: [
      "Valid student ID required",
      "Available every Monday",
      "Cannot be combined with other offers",
      "Dine-in and pickup only"
    ],
    active: true,
    code: "STUDENT20"
  },
  {
    id: 2,
    title: "Birthday Pizza Special",
    description: "Free personal pizza on your birthday! Sign up to claim your special offer.",
    discount: "FREE PIZZA",
    validUntil: new Date("2024-12-31"),
    terms: [
      "Must register with birthday information",
      "Valid for 7 days from birthday",
      "One coupon per customer per year",
      "Photo ID required for verification"
    ],
    active: true,
    code: "BIRTHDAY"
  },
  {
    id: 3,
    title: "Study Group Deal",
    description: "Order 3 or more pizzas and get 15% off your total order",
    discount: "15% OFF",
    validUntil: new Date("2024-11-30"),
    terms: [
      "Minimum 3 pizzas required",
      "Valid for pickup orders only",
      "Cannot be combined with student discount",
    ],
    active: true,
    code: "STUDYGROUP"
  }
];

export default function Offers() {
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const newTimeLeft: { [key: number]: string } = {};

      currentOffers.forEach((offer) => {
        const difference = offer.validUntil.getTime() - now.getTime();
        
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          
          if (days > 0) {
            newTimeLeft[offer.id] = `${days} days left`;
          } else if (hours > 0) {
            newTimeLeft[offer.id] = `${hours} hours left`;
          } else {
            newTimeLeft[offer.id] = "Expiring soon";
          }
        } else {
          newTimeLeft[offer.id] = "Expired";
        }
      });

      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Current Offers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these amazing deals! Save money while enjoying our quality pizzas.
          </p>
        </div>

        {/* Birthday Offer CTA */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <Gift className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-4">🎉 Get Your Birthday Pizza!</h2>
              <p className="text-muted-foreground mb-6">
                Sign up with your birthday and get a FREE personal pizza every year on your special day.
              </p>
              <Button size="lg" asChild>
                <Link to="/login">
                  <Gift className="h-5 w-5 mr-2" />
                  Sign Up for Birthday Offer
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Current Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentOffers.map((offer) => (
            <Card key={offer.id} className={offer.active ? "" : "opacity-60"}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={offer.active ? "default" : "secondary"} className="mb-2">
                    {offer.active ? "Active" : "Expired"}
                  </Badge>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{offer.discount}</div>
                    {offer.code && (
                      <div className="text-xs text-muted-foreground">Code: {offer.code}</div>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{offer.description}</p>
                
                {/* Countdown */}
                {offer.active && (
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">{timeLeft[offer.id] || "Calculating..."}</span>
                  </div>
                )}

                {/* Terms and Conditions */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Terms & Conditions:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {offer.terms.map((term, index) => (
                      <li key={index} className="flex items-start gap-1">
                        <span className="text-primary mt-1">•</span>
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {offer.active && (
                  <Button className="w-full mt-4" asChild>
                    <Link to="/menu">
                      Order Now
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Redeem Section */}
        <div className="bg-card p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Percent className="h-6 w-6" />
            How to Redeem Offers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">📞 Phone Orders</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Mention the offer code when placing your order by phone.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">💬 WhatsApp Orders</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Include the offer code in your WhatsApp message.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">🎂 Birthday Offers</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Automatic email notification on your birthday with unique coupon code.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">📱 Account Dashboard</h4>
              <p className="text-muted-foreground text-sm mb-3">
                View all your available coupons and offers in your account.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Can I combine multiple offers?</h4>
                <p className="text-muted-foreground text-sm">
                  Generally, offers cannot be combined unless specifically stated. Birthday offers can typically be used alone.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">How do I sign up for the birthday offer?</h4>
                <p className="text-muted-foreground text-sm">
                  Create an account with us and provide your birthday information. We'll send you a special coupon code on your birthday.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Do offers apply to delivery?</h4>
                <p className="text-muted-foreground text-sm">
                  Most offers are for pickup only, but some may apply to delivery. Check the terms and conditions for each offer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}