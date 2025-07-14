'use client';

import React, { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { generateBioAction } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Wand2, Copy, Check, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from './ui/skeleton';

const initialState = {
  drafts: [],
  error: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Wand2 className="mr-2 h-4 w-4 animate-pulse" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Drafts
        </>
      )}
    </Button>
  );
}

export default function AiBioGenerator() {
  const [state, formAction] = useFormState(generateBioAction, initialState);
  const { toast } = useToast();
  const [copiedStates, setCopiedStates] = React.useState<boolean[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();


  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
    if (state.drafts && state.drafts.length > 0) {
      formRef.current?.reset();
    }
  }, [state, toast]);
  
  useEffect(() => {
    if (state.drafts) {
      setCopiedStates(new Array(state.drafts.length).fill(false));
    }
  }, [state.drafts]);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    const newCopiedStates = [...copiedStates];
    newCopiedStates.fill(false);
    newCopiedStates[index] = true;
    setCopiedStates(newCopiedStates);
    toast({
        title: "Copied to clipboard!",
    })
    setTimeout(() => {
      const resetCopiedStates = [...newCopiedStates];
      resetCopiedStates[index] = false;
      setCopiedStates(resetCopiedStates);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <form ref={formRef} action={formAction} className="flex flex-col md:flex-row items-center gap-4">
        <Input
          name="keywords"
          placeholder="e.g., flutter, node.js, problem-solver"
          className="flex-1 bg-background"
          required
        />
        <SubmitButton />
      </form>

      {pending && (
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
             <Card key={i} className="bg-card">
               <CardContent className="p-4 space-y-2">
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-5/6" />
                 <Skeleton className="h-4 w-3/4" />
               </CardContent>
             </Card>
          ))}
        </div>
      )}

      {!pending && state.drafts && state.drafts.length > 0 && (
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
          {state.drafts.map((draft, index) => (
            <Card key={index} className="bg-card relative group">
              <CardContent className="p-4">
                <p className="text-muted-foreground">{draft}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleCopy(draft, index)}
                  aria-label="Copy bio"
                >
                  {copiedStates[index] ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!pending && state.drafts.length === 0 && (
        <Alert className="bg-transparent border-primary/20">
          <Info className="h-4 w-4" />
          <AlertTitle>No drafts generated yet</AlertTitle>
          <AlertDescription>
            Enter some keywords to see AI-powered suggestions for your bio.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
