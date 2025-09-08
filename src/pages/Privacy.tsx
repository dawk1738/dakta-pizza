import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Mail, Phone } from "lucide-react";

export default function Privacy() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: December 2024
          </p>
        </div>

        {/* Data Protection Compliance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Data Protection Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Dakta Pizza is committed to protecting your personal data in accordance with the 
              Kenya Data Protection Act (2019) and international best practices. We implement 
              appropriate technical and organizational measures to ensure the security of your information.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Personal Information</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Name and contact details (email, phone number)</li>
                <li>Birthday information (for birthday offers)</li>
                <li>Communication preferences</li>
                <li>Order history and preferences</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Technical Information</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>IP address and browser information</li>
                <li>Website usage patterns</li>
                <li>Device information for mobile optimization</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Your Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Service Delivery</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Processing and fulfilling orders</li>
                  <li>Providing customer support</li>
                  <li>Sending order confirmations and updates</li>
                  <li>Improving our services</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Marketing (With Consent)</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Birthday pizza offers and reminders</li>
                  <li>Special promotions and discounts</li>
                  <li>New menu items and updates</li>
                  <li>Student-focused offers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Under the Kenya Data Protection Act, you have the following rights:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium">Access</h5>
                  <p className="text-sm text-muted-foreground">Request copies of your personal data</p>
                </div>
                <div>
                  <h5 className="font-medium">Rectification</h5>
                  <p className="text-sm text-muted-foreground">Request correction of inaccurate data</p>
                </div>
                <div>
                  <h5 className="font-medium">Erasure</h5>
                  <p className="text-sm text-muted-foreground">Request deletion of your data</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium">Portability</h5>
                  <p className="text-sm text-muted-foreground">Request transfer of your data</p>
                </div>
                <div>
                  <h5 className="font-medium">Restriction</h5>
                  <p className="text-sm text-muted-foreground">Request restriction of processing</p>
                </div>
                <div>
                  <h5 className="font-medium">Objection</h5>
                  <p className="text-sm text-muted-foreground">Object to certain types of processing</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Encrypted data transmission (SSL/HTTPS)</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Staff training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Data Sharing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information only in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers (under strict confidentiality agreements)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Cookies and Tracking */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cookies and Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We use minimal, privacy-friendly analytics to improve our website:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Essential cookies for website functionality</li>
                <li>Anonymous analytics for performance optimization</li>
                <li>No third-party advertising cookies</li>
                <li>You can disable cookies in your browser settings</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this privacy policy or want to exercise your rights, contact us:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:privacy@daktapizza.co.ke" className="text-primary hover:underline">
                  privacy@daktapizza.co.ke
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+254700000000" className="text-primary hover:underline">
                  +254 700 000 000
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}