import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  Beaker,
  Pill,
  BarChart3,
  Shield,
  Clock,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/30 to-secondary/50">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">HMS</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
          <Link to="/login">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Modern Hospital <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Management System</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Streamline your hospital operations with our comprehensive management system. From patient records to pharmacy inventory, manage everything efficiently in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/dashboard">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg gap-2 w-full sm:w-auto">
                  Access Dashboard
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <button className="px-8 py-6 text-lg font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="h-4 bg-primary/20 rounded-full w-3/4"></div>
                <div className="h-4 bg-accent/20 rounded-full w-1/2"></div>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-24 bg-secondary/50 rounded-lg border border-border"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your hospital efficiently and securely
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Patient Management",
              description: "Comprehensive patient profiles, medical history, and appointment scheduling",
            },
            {
              icon: Beaker,
              title: "Lab Management",
              description: "Track lab tests, results, and generate reports with automated workflows",
            },
            {
              icon: Pill,
              title: "Pharmacy System",
              description: "Manage medicine inventory, stock levels, and expiry dates efficiently",
            },
            {
              icon: BarChart3,
              title: "Advanced Reports",
              description: "Generate detailed analytics and insights for better decision making",
            },
            {
              icon: Shield,
              title: "Security & Privacy",
              description: "Enterprise-grade security with data encryption and access controls",
            },
            {
              icon: Clock,
              title: "Real-time Updates",
              description: "Live notifications and instant updates across all departments",
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-4 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Our HMS?
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Optimized performance for instant data retrieval and smooth operations",
                },
                {
                  icon: Shield,
                  title: "Secure & Compliant",
                  description: "Meets all healthcare compliance standards and data protection regulations",
                },
                {
                  icon: Users,
                  title: "User Friendly",
                  description: "Intuitive interface that requires minimal training for staff",
                },
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="p-3 w-fit h-fit rounded-lg bg-success/10">
                      <Icon className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "1000+", label: "Healthcare Facilities" },
              { value: "5M+", label: "Patient Records" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Core Modules
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything integrated into a single unified platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Dashboard", icon: BarChart3, color: "from-blue-500 to-blue-600" },
            { title: "Patient File", icon: Users, color: "from-cyan-500 to-cyan-600" },
            { title: "Lab Master", icon: Beaker, color: "from-teal-500 to-teal-600" },
            { title: "Pharmacy", icon: Pill, color: "from-green-500 to-green-600" },
          ].map((module, idx) => {
            const Icon = module.icon;
            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-gradient-to-br ${module.color} text-white shadow-lg hover:shadow-xl transition-shadow`}
              >
                <Icon className="w-8 h-8 mb-4 opacity-90" />
                <h3 className="text-lg font-semibold">{module.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12 md:p-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Hospital?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare facilities using our system to improve patient care and operational efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg gap-2">
                Start Using HMS
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <button className="px-8 py-6 text-lg font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-foreground">HMS</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Modern Hospital Management System
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 Hospital Management System. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
