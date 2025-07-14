import { personalData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { SectionTitle } from '@/components/ui/heading';
import { ScrollReveal } from '../scroll-reveal';

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-card/30 py-16 md:py-24 overflow-hidden">
      <ScrollReveal>
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle>My Skills</SectionTitle>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {personalData.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-base md:text-lg px-6 py-2 bg-accent/50 border-primary/20 text-foreground hover:bg-accent/80 transition-colors cursor-default shadow-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
