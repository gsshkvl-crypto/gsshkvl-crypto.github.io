'use server';

import { generateBioDrafts, GenerateBioDraftsInput, GenerateBioDraftsOutput } from '@/ai/flows/generate-bio-drafts';
import { z } from 'zod';

const formSchema = z.object({
  keywords: z.string().min(3, { message: 'Please enter at least 3 characters.' }),
});

type FormState = {
  drafts: string[];
  error?: string;
};

export async function generateBioAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    keywords: formData.get('keywords'),
  });

  if (!validatedFields.success) {
    return {
      drafts: [],
      error: validatedFields.error.errors.map((e) => e.message).join(', '),
    };
  }

  try {
    const input: GenerateBioDraftsInput = { keywords: validatedFields.data.keywords };
    const output: GenerateBioDraftsOutput = await generateBioDrafts(input);
    if (!output.drafts || output.drafts.length === 0) {
      return { drafts: [], error: 'Could not generate drafts. Try different keywords.' };
    }
    return { drafts: output.drafts };
  } catch (e) {
    console.error(e);
    return { drafts: [], error: 'An unexpected error occurred. Please try again.' };
  }
}
