import { NextResponse } from "next/server";
import * as sgMail from "@sendgrid/mail";

import { formSchema } from "@/lib/utils";

export async function POST(req: Request, res: Response) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const data = await req.json();

  // Validate the form data
  const validatedData = formSchema.safeParse(data);

  if (!validatedData.success) {
    return NextResponse.json({ error: validatedData.error.issues });
  }

  // Construct the email message

  // TODO: Update your TO and FROM address as well as subject (if you wish)
  const msg = {
    to: "me@me.com",
    from: "contact@me.com",
    subject: `[Website Contact Form] Message from ${data.name} (${data.email})`,
    text: `${data.message}`,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
