"use client";

import React, { useEffect, useState, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [formStartTs, setFormStartTs] = useState<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    // Capture when the user first saw the form (used to block instant bot submits)
    setFormStartTs(String(Date.now()));
  }, []);

  // Load reCAPTCHA v3 script
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) return; // allow local dev without key
    const id = "recaptcha-v3-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly through this form. I will reply as soon as possible.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={async (e) => {
          const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
          if (siteKey && (window as any).grecaptcha) {
            e.preventDefault();
            try {
              const token: string = await (window as any).grecaptcha.execute(siteKey, { action: "contact_submit" });
              // inject token
              const input = document.createElement("input");
              input.type = "hidden";
              input.name = "recaptchaToken";
              input.value = token;
              e.currentTarget.appendChild(input);
              // also ensure formStart present
              if (!e.currentTarget.querySelector('input[name="formStart"]')) {
                const ts = document.createElement("input");
                ts.type = "hidden";
                ts.name = "formStart";
                ts.value = formStartTs;
                e.currentTarget.appendChild(ts);
              }
              e.currentTarget.submit();
            } catch (err) {
              // fall back to normal submit without token
              e.currentTarget.submit();
            }
          }
          // else let native submit continue and server will handle missing token
        }}
        action={async (formData) => {
          // Ensure the timestamp is submitted (SSR fallback)
          if (!formData.get("formStart")) {
            formData.set("formStart", formStartTs);
          }
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        {/* Honeypot field (hidden from real users) */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        {/* Submission timing trap */}
        <input type="hidden" name="formStart" value={formStartTs} />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your best e-mail address goes here"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="And your message, here"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
