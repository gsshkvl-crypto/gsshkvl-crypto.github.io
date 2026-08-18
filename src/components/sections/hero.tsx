import { personalData } from '@/lib/portfolio-data';
import SocialLinks from '@/components/social-links';
import AiBioGenerator from '@/components/ai-bio-generator';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollReveal } from '../scroll-reveal';
import profile from '../../assets/shakthivel_image.jpg';

export default function HeroSection() {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <ScrollReveal>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold">
              <span className="block text-primary/80">Hi, I'm {personalData.name}</span>
              <span>{personalData.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {personalData.bio}
            </p>
            <SocialLinks />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
               <Image 
                src={profile}
                alt="Portrait of a developer"
                width={400}
                height={400}
                priority
                className="rounded-full border-4 border-primary shadow-lg object-cover w-full h-full"
                data-ai-hint="developer portrait"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

     

    </section>
  );
}
