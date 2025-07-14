import { personalData } from '@/lib/portfolio-data';
import SocialLinks from './social-links';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card/50 py-8 border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold font-headline text-primary">
            Versafolio
          </Link>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
