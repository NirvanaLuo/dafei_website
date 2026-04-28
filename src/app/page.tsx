import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { PainPointSection } from '@/components/sections/PainPointSection';
import { AdvantageSection } from '@/components/sections/AdvantageSection';
import { CourseSection } from '@/components/sections/CourseSection';
import { TeacherSection } from '@/components/sections/TeacherSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { GuaranteeSection } from '@/components/sections/GuaranteeSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PainPointSection />
      <AdvantageSection />
      <CourseSection />
      <TeacherSection />
      <TestimonialSection />
      <GuaranteeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
