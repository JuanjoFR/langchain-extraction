import { z } from 'zod';

const personSchema = z.object({
  name: z.optional(z.string()).describe('The name of the person'),
  hair_color: z
    .optional(z.string())
    .describe("The color of the person's hair if known"),
  height_in_meters: z.optional(z.string()).describe('Height measured in meters')
});

type Person = z.infer<typeof personSchema>;

export { personSchema };
export type { Person };
