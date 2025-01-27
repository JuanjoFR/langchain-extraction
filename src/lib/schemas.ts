import { z } from 'zod';

const personSchema = z.object({
  name: z.optional(z.string()).describe('The name of the person'),
  hair_color: z
    .optional(z.string())
    .describe("The color of the person's hair if known"),
  height_in_meters: z.number().nullish().describe('Height measured in meters')
});

const dataSchema = z.object({
  people: z.array(personSchema).describe('Extracted data about people')
});

type Person = z.infer<typeof personSchema>;
type Data = z.infer<typeof dataSchema>;

export { personSchema, dataSchema };
export type { Person, Data };
