'use server';

/**
 * @fileOverview An AI agent that generates drafts of a short 'About Me' summary.
 *
 * - generateBioDrafts - A function that generates bio drafts.
 * - GenerateBioDraftsInput - The input type for the generateBioDrafts function.
 * - GenerateBioDraftsOutput - The return type for the generateBioDrafts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBioDraftsInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'A comma-separated list of keywords describing the user, their skills, and their experience.'
    ),
});
export type GenerateBioDraftsInput = z.infer<typeof GenerateBioDraftsInputSchema>;

const GenerateBioDraftsOutputSchema = z.object({
  drafts: z.array(z.string()).describe('An array of generated bio drafts.'),
  progress: z.string().describe('Progress of the bio generation process.'),
});
export type GenerateBioDraftsOutput = z.infer<typeof GenerateBioDraftsOutputSchema>;

export async function generateBioDrafts(
  input: GenerateBioDraftsInput
): Promise<GenerateBioDraftsOutput> {
  return generateBioDraftsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBioDraftsPrompt',
  input: {schema: GenerateBioDraftsInputSchema},
  output: {schema: GenerateBioDraftsOutputSchema},
  prompt: `You are a professional resume writer. Generate 3 different drafts of a short "About Me" summary using the following keywords: {{{keywords}}}.  The drafts should be creative and engaging, and highlight the user's skills and experience. Each draft should be no more than 3 sentences long.`,
});

const generateBioDraftsFlow = ai.defineFlow(
  {
    name: 'generateBioDraftsFlow',
    inputSchema: GenerateBioDraftsInputSchema,
    outputSchema: GenerateBioDraftsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input, { config: { numGenerations: 3 }});
    return {
      drafts: output!.drafts,
      progress: 'Generated three bio drafts from the given keywords.',
    };
  }
);
