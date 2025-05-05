import { scoreFormSchema } from "@/schemas";
import { z } from "zod";

export type ScoreFormType = z.infer<typeof scoreFormSchema>;
