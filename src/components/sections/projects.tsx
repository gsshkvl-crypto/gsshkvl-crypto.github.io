import { personalData } from '@/lib/portfolio-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/heading';
import { ScrollReveal } from '../scroll-reveal';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionTitle>Projects</SectionTitle>
        </ScrollReveal>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {personalData.projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 200}>
              <Card className="flex flex-col h-full overflow-hidden bg-card hover:shadow-primary/10 hover:shadow-xl transition-shadow duration-300 border-primary/20">
                {/* <CardHeader className="p-0">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                </CardHeader> */}
                <CardContent className="flex-1 p-6 space-y-4">
                  <CardTitle className="text-xl font-headline text-primary">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/50 text-primary/90">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {/* <CardFooter className="p-6 pt-0">
                  <Button asChild variant="link" className="text-primary p-0">
                    <Link href={project.link}>
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter> */}
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
