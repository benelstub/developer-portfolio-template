import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email(),
  message: z.string().min(2).max(500),
});

export async function sendEmail(formData: z.infer<typeof formSchema>) {
  console.log(JSON.stringify(formData));
  try {
    const response = await fetch("/api/email", {
      method: "POST",

      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    return response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
