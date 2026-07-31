import AnimatedSection from "@/components/AnimatedSection";
import PhoneMockup from "@/components/PhoneMockup";
import { APP_NAME } from "@/lib/constants";
import screen1 from "@/assets/dostana/AI Girlfriend App Redesign.png";
import screen2 from "@/assets/dostana/AI Girlfriend App Redesign-1.png";

const screenshots = [
  { src: screen1, alt: `${APP_NAME} Main Chat Interface` },
  { src: screen2, alt: `${APP_NAME} Counsellor Profile Screen` },
];

const ScreenshotsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-rose-600 font-semibold text-xs uppercase tracking-widest font-body">
            App Interface
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">
            Inside the {APP_NAME} App
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto mt-4">
            A serene, comforting, and intuitive environment for heartfelt conversations.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-12">
          {screenshots.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="flex justify-center">
                <PhoneMockup src={s.src} alt={s.alt} label={s.alt} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
