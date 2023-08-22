import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";
const resend = new Resend("re_C2qqXQAt_FYqKogRVRsJuEUsZNLSfK3Hz");

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["juniorellol@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
