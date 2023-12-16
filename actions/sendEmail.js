"use server";

import { validateString, getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/components/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData) => {
  console.log("Running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 200)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 1000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact form <formonboarding@resend.dev>",
      to: "g.flambard@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};

export default sendEmail;
