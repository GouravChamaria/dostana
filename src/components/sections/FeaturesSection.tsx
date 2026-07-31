import { Users, Lock, Heart, Clock, Sparkles, Smile } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { APP_NAME } from "@/lib/constants";

const features = [
  {
    icon: Users,
    title: "Verified Counsellors & Listeners",
    description: "Connect directly with trained, compassionate professionals who provide empathetic guidance without any judgment.",
  },
  {
    icon: Lock,
    title: "100% Confidential & Secure",
    description: "Your privacy is our utmost priority. All 1-on-1 chats and voice calls are private, safe, and anonymous.",
  },
  {
    icon: Clock,
    title: "24/7 Support Whenever You Need",
    description: "Never feel alone. Reach out to a supportive listener or counsellor anytime — day or night.",
  },
  {
    icon: Heart,
    title: "Relationship & Stress Support",
    description: "Get guidance on personal relationships, stress management, career anxiety, and emotional clarity.",
  },
  {
    icon: Sparkles,
    title: "Guided Self-Care & Relaxation",
    description: "Access curated mindfulness exercises, mood check-ins, and calming audio tools for daily emotional well-being.",
  },
  {
    icon: Smile,
    title: "Empathetic AI Companion",
    description: "Enjoy friendly, 24/7 non-judgmental conversations with an intelligent AI listener to vent and reflect.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest font-body">
            Why Choose {APP_NAME}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">
            Empathy, Guidance & Complete Peace of Mind
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto mt-4">
            Designed to help you feel heard, supported, and empowered through life's ups and downs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 border border-rose-500/10 hover:border-rose-500/30 transition-all hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-rose-100/80 flex items-center justify-center mb-6 text-rose-700 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
