import { personalData } from '@/lib/portfolio-data';
import { SectionTitle } from '@/components/ui/heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from '../scroll-reveal';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 overflow-hidden">
      <ScrollReveal>
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle>Get In Touch</SectionTitle>
          <Card className="max-w-2xl mx-auto bg-card border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-center">Contact Information</CardTitle>
              <CardDescription className="text-center">
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {personalData.contacts.map((contact) => (
                  <div key={contact.type} className="flex items-center justify-center gap-4 text-lg">
                    <contact.icon className="h-6 w-6 text-primary" />
                    <a href={contact.type === 'Email' ? `mailto:${contact.value}` : `tel:${contact.value}`} className="hover:text-primary transition-colors">
                      {contact.value}
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollReveal>
    </section>
  );
}
