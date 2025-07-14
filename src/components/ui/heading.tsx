import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

export function SectionTitle({ children, as: Component = 'h2', className }: HeadingProps) {
  return (
    <Component className={cn("text-3xl md:text-4xl font-bold font-headline text-primary mb-12 text-center", className)}>
      {children}
    </Component>
  );
}
