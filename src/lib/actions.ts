"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/lib/contact-form-email";
import { getErrorMessage, validateString } from "./validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formdata: FormData) {
  const message = formdata.get("message");
  const email = formdata.get("email");

  if (!validateString(message, 5000)) {
    return { error: "message error" };
  }

  if (!validateString(email, 500)) {
    return { error: "email error" };
  }

  let data;
  try {
    data = resend.emails.send({
      from: "Contact Form Natan <onboarding@resend.dev>",
      to: "natanoih@gmail.com",
      subject: "Message from contact form - natan oihman",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
      }),
    });
  } catch (error: unknown) {
    console.log("error", error);
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
}
