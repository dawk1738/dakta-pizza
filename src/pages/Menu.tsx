import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Plus } from "lucide-react";

const menuCategories = [
  {
    name: "Classic Pizzas",
    items: [
      {
        id: 1,
        name: "Margherita",
        description: "Fresh mozzarella, basil, tomato sauce on our signature crust",
        price: 650,
        available: true,
      },
      {
        id: 2,
        name: "Pepperoni Classic",
        description: "Premium pepperoni, mozzarella cheese, tangy tomato sauce",
        price: 750,
        available: true,
      },
      {
        id: 3,
        name: "Vegetarian Supreme",
        description: "Bell peppers, onions, mushrooms, olives, fresh tomatoes",
        price: 700,
        available: true,
      },
    ],
  },
  {
    name: "Premium Pizzas",
    items: [
      {
        id: 4,
        name: "Meat Lovers",
        description: "Pepperoni, sausage, ham, bacon on a cheese base",
        price: 900,
        available: true,
      },
      {
        id: 5,
        name: "BBQ Chicken",
        description: "Grilled chicken, BBQ sauce, red onions, bell peppers",
        price: 850,
        available: true,
      },
      {
        id: 6,
        name: "Hawaiian Delight",
        description: "Ham, pineapple, extra cheese with sweet & savory flavors",
        price: 800,
        available: false,
      },
    ],
  },
  {
    name: "Student Specials",
    items: [
      {
        id: 7,
        name: "Campus Classic",
        description: "Perfect student-sized pizza with cheese and your choice of one topping",
        price: 500,
        available: true,
      },
      {
        id: 8,
        name: "Study Buddy Combo",
        description: "Two personal pizzas - perfect for sharing during study sessions",
        price: 900,
        available: true,
      },
    ],
  },
  {
    name: "Sides & Drinks",
    items: [
      {
        id: 9,
        name: "Garlic Bread",
        description: "Freshly baked bread with garlic butter and herbs",
        price: 250,
        available: true,
      },
      {
        id: 10,
        name: "Soft Drinks",
        description: "Coca-Cola, Sprite, Orange - 500ml bottles",
        price: 100,
        available: true,
      },
      {
        id: 11,
        name: "Fresh Juice",
        description: "Orange, Passion, or Mixed fruit - locally sourced",
        price: 150,
        available: true,
      },
    ],
  },
];

const addOns = [
  { name: "Extra Cheese", price: 100 },
  { name: "Extra Pepperoni", price: 150 },
  { name: "Mushrooms", price: 80 },
  { name: "Bell Peppers", price: 80 },
  { name: "Onions", price: 60 },
  { name: "Olives", price: 100 },
];

export default function Menu() {
  const whatsappNumber = "+254700000000";
  const phoneNumber = "+254700000000";

  const handleWhatsAppOrder = (itemName: string, price: number) => {
    const message = encodeURIComponent(
      `Hi! I'd like to order a ${itemName} (KSh ${price}). Please let me know the total with delivery and estimated time. Thank you!`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handlePhoneOrder = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality ingredients, authentic flavors, and student-friendly prices. 
            All pizzas are hand-tossed and made fresh to order.
          </p>
        </div>

        {/* Quick Order Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" onClick={handlePhoneOrder} className="text-lg px-8 py-6">
            <Phone className="h-5 w-5 mr-2" />
            Call to Order: {phoneNumber}
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            <MessageCircle className="h-5 w-5 mr-2" />
            Order via WhatsApp
          </Button>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {menuCategories.map((category) => (
            <section key={category.name}>
              <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">
                {category.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className={!item.available ? "opacity-60" : ""}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <div className="text-right">
                          <div className="text-xl font-bold">KSh {item.price}</div>
                          {!item.available && (
                            <Badge variant="secondary" className="mt-1">
                              Unavailable
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      
                      {item.available && (
                        <div className="space-y-2">
                          <Button
                            className="w-full"
                            onClick={() => handleWhatsAppOrder(item.name, item.price)}
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Order via WhatsApp
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full"
                            onClick={handlePhoneOrder}
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            Call to Order
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Add-ons Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">
            Add-ons & Extras
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {addOns.map((addon) => (
              <Card key={addon.name} className="text-center">
                <CardContent className="p-4">
                  <Plus className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                  <h3 className="font-medium mb-1">{addon.name}</h3>
                  <p className="text-sm text-muted-foreground">+KSh {addon.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ordering Info */}
        <div className="mt-16 bg-card p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">How to Order</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">📞 Phone Orders</h4>
              <p className="text-muted-foreground text-sm">
                Call us directly at {phoneNumber}. Our friendly staff will take your order and provide pickup time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">💬 WhatsApp Orders</h4>
              <p className="text-muted-foreground text-sm">
                Click any "Order via WhatsApp" button to send us your order directly. We'll confirm details and timing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">⏰ Pickup Times</h4>
              <p className="text-muted-foreground text-sm">
                Most orders ready in 15-20 minutes. We'll notify you when your order is ready for pickup.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">💰 Payment</h4>
              <p className="text-muted-foreground text-sm">
                Cash payment on pickup. Mobile money options available (M-Pesa, Airtel Money).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}