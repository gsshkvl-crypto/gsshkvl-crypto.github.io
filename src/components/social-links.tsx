import { personalData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {personalData.socials.map((social) => (
        <Button key={social.name} variant="outline" size="icon" asChild className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            <social.icon className="h-5 w-5" />
          </Link>
        </Button>
      ))}
    </div>
  );
}
