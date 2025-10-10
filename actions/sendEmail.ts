"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const honeypot = formData.get("company");
  const formStart = formData.get("formStart");

  // 1) Honeypot check
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return { error: "Spam detected" };
  }

  // 2) Submission timing check (require at least 3 seconds on page)
  const now = Date.now();
  const startTs = typeof formStart === "string" ? parseInt(formStart, 10) : 0;
  if (!Number.isNaN(startTs) && startTs > 0 && now - startTs < 3000) {
    return { error: "Please take a moment before submitting." };
  }

  // 3) Basic content heuristics
  const combined = `${String(senderEmail ?? "")}\n${String(message ?? "")}`.toLowerCase();
  const badPhrases = [
    "viagra", "crypto", "binary options", "seo service",
    "guest post", "backlinks", "adult", "porn", "casino",
  ];
  if (badPhrases.some((p) => combined.includes(p))) {
    return { error: "Message flagged as spam." };
  }

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "danysalgueiro80@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
