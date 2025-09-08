import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Gift, User, Calendar, Mail, Lock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export default function Login() {
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    consentEmail: false,
    consentSMS: false,
    consentWhatsApp: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate auth process
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (isLogin) {
      toast({
        title: "Welcome back!",
        description: "You've been successfully logged in.",
      });
    } else {
      toast({
        title: "Account created!",
        description: "Welcome to Dakta Pizza! Check your account for birthday offers.",
      });
    }

    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Coming Soon!",
      description: `${provider} login will be available soon.`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{isLogin ? "Welcome Back" : "Join Dakta Pizza"}</h1>
          <p className="text-muted-foreground">
            {isLogin ? "Sign in to your account" : "Create an account to get birthday offers"}
          </p>
        </div>

        {/* Birthday Offer Highlight */}
        {!isLogin && (
          <Card className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-4 text-center">
              <Gift className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">🎉 Birthday Pizza Offer!</h3>
              <p className="text-sm text-muted-foreground">
                Sign up and get a FREE personal pizza every year on your birthday!
              </p>
            </CardContent>
          </Card>
        )}

        {/* Auth Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {isLogin ? "Sign In" : "Create Account"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field for signup */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={!isLogin}
                    placeholder="Your full name"
                  />
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Create a strong password"
                />
              </div>

              {/* Birthday and Phone for signup */}
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="birthday">Birthday (for special offers) *</Label>
                    <Input
                      id="birthday"
                      name="birthday"
                      type="date"
                      value={formData.birthday}
                      onChange={handleInputChange}
                      required={!isLogin}
                    />
                    <p className="text-xs text-muted-foreground">
                      We'll send you a free pizza coupon on your birthday!
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="space-y-3 p-4 bg-muted/20 rounded-md">
                    <Label className="text-sm font-medium">Notification Preferences</Label>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="consentEmail"
                        name="consentEmail"
                        checked={formData.consentEmail}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, consentEmail: checked as boolean }))
                        }
                      />
                      <Label htmlFor="consentEmail" className="text-sm flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email notifications (offers, birthday reminders)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="consentSMS"
                        name="consentSMS"
                        checked={formData.consentSMS}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, consentSMS: checked as boolean }))
                        }
                      />
                      <Label htmlFor="consentSMS" className="text-sm flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        SMS notifications (order updates, special offers)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="consentWhatsApp"
                        name="consentWhatsApp"
                        checked={formData.consentWhatsApp}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, consentWhatsApp: checked as boolean }))
                        }
                      />
                      <Label htmlFor="consentWhatsApp" className="text-sm flex items-center gap-2">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        WhatsApp notifications (order confirmations, offers)
                      </Label>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      You can change these preferences anytime in your account settings.
                    </p>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  "Please wait..."
                ) : (
                  <>
                    {isLogin ? "Sign In" : "Create Account"}
                    {!isLogin && <Gift className="h-4 w-4 ml-2" />}
                  </>
                )}
              </Button>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <Button
                  variant="outline"
                  onClick={() => handleSocialLogin("Google")}
                  className="w-full"
                >
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleSocialLogin("Facebook")}
                  className="w-full"
                >
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>

            {/* Toggle Auth Mode */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <Button
                  variant="link"
                  className="p-0 ml-1 h-auto font-normal"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign up for free" : "Sign in"}
                </Button>
              </p>
            </div>

            {/* Privacy Note */}
            {!isLogin && (
              <div className="mt-4 p-3 bg-muted/20 rounded-md">
                <p className="text-xs text-muted-foreground">
                  By creating an account, you agree to our terms of service and privacy policy. 
                  We comply with Kenya Data Protection Act (2019) and will never share your 
                  personal information with third parties.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Back to Menu */}
        <div className="mt-6 text-center">
          <Button variant="ghost" asChild>
            <Link to="/menu">← Back to Menu</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}