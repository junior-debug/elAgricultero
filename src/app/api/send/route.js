import { NextResponse } from "next/server";
import { Resend } from "resend";

import { EmailTemplate } from "../../../components/email-template";

const resend = new Resend("re_C2qqXQAt_FYqKogRVRsJuEUsZNLSfK3Hz");

export async function POST(request) {
  const { firstName, lastName, phone, email, comment } = await request.json();

  try {
    await resend.sendEmail({
      from: "Acme <onboarding@resend.dev>",
      to: ["juniorellol@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        firstName,
        lastName,
        phone,
        email,
        comment,
      }),
    });
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
