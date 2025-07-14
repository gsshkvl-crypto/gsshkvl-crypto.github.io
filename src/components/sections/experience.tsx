import { personalData } from '@/lib/portfolio-data';
import { Briefcase } from 'lucide-react';
import { SectionTitle } from '@/components/ui/heading';
import { ScrollReveal } from '../scroll-reveal';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-card/30 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionTitle>Work Experience</SectionTitle>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-12">
          {personalData.experience.map((job, index) => (
            <ScrollReveal key={job.company} delay={index * 200}>
              <div className="flex gap-6">
                <div className="mt-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-primary/90">{job.role}</h3>
                  <p className="font-semibold text-lg">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                  <p className="mt-2 text-muted-foreground">{job.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
