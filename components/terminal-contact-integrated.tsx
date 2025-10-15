"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"

export default function TerminalContactIntegrated() {
  const { ref } = useSectionInView("Contact");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [step, setStep] = useState<"email" | "message" | "summary">("email")
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [submittedMessage, setSubmittedMessage] = useState("")
  const [emailError, setEmailError] = useState("")
  const [isMac, setIsMac] = useState(false)

  const emailInputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0)

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const modKey = e.metaKey || e.ctrlKey

      if (modKey && e.key === "Enter" && step === "summary") {
        e.preventDefault()
        handleSubmit()
      }

      if (modKey && e.key === "k") {
        e.preventDefault()
        handleRestart()
      }
    }

    window.addEventListener("keydown", handleGlobalKeyDown)
    return () => window.removeEventListener("keydown", handleGlobalKeyDown)
  }, [step, submittedEmail, submittedMessage])

  useEffect(() => {
    if (step === "email") {
      emailInputRef.current?.focus()
    } else if (step === "message") {
      messageInputRef.current?.focus()
    }
  }, [step])

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (step === "email" && email.trim()) {
        if (!isValidEmail(email.trim())) {
          setEmailError("Invalid e-mail format. Please enter a valid e-mail address.")
          return
        }
        setEmailError("")
        setSubmittedEmail(email)
        setStep("message")
      } else if (step === "message" && message.trim()) {
        setSubmittedMessage(message)
        setStep("summary")
      }
    }
  }

  const handleTerminalClick = () => {
    if (step === "email") {
      emailInputRef.current?.focus()
    } else if (step === "message") {
      messageInputRef.current?.focus()
    }
  }

  const handleRestart = () => {
    setEmail("")
    setMessage("")
    setSubmittedEmail("")
    setSubmittedMessage("")
    setEmailError("")
    setStep("email")
  }

  const handleSubmit = () => {
    console.log("[v0] Form submitted:", { email: submittedEmail, message: submittedMessage })
    alert("Message sent successfully!")
    handleRestart()
  }

  return (
    <section ref={ref} id="contact" className="mb-20 sm:mb-28 text-center">
      <SectionHeading>Contact me</SectionHeading>

      <div className="rounded-2xl bg-gray-100 dark:bg-slate-900 shadow-2xl dark:shadow-none dark:border dark:border-gray-700 overflow-hidden max-w-5xl mx-auto">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-200 dark:bg-slate-800/50">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-sm text-gray-700 dark:text-gray-300">contactme.here 👇</div>
          <div className="w-16" />
        </div>

        <div className="px-8 py-8 font-mono text-base text-gray-700 dark:text-gray-300 cursor-text" onClick={handleTerminalClick}>
          <div className="flex items-center gap-2 mb-6">
            <span>Hi there! 👋 Please contact me directly here. I will reply as soon as possible.</span>
          </div>

          <div className="border-t border-dashed border-gray-400 dark:border-gray-600 mb-6" />

          <div className="mb-4">
            <span>To start, can you give me </span>
            <span className="text-blue-400">your best e-mail address</span>
            <span>?</span>
          </div>

          {step === "email" ? (
            <>
              <div className="flex items-center">
                <span className="text-green-400">→</span>
                    <span className="text-gray-500 ml-2">~</span>
                    <span className="text-gray-500 ml-2">Enter e-mail:</span>
                    <div className="ml-1 relative inline-flex items-center">
                      <span className="text-gray-700 dark:text-gray-300">{email}</span>
                  <span className="terminal-cursor-block" />
                </div>
                <input
                  ref={emailInputRef}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="absolute opacity-0 w-0 h-0"
                  autoFocus
                  autoComplete="new-password"
                  name="terminal-email-input"
                  data-form-type="other"
                />
              </div>
              {emailError && (
                <div className="mt-2 text-red-400">
                  <span>✗ Invalid e-mail format. Please enter a valid e-mail address.</span>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center gap-2 mb-6">
              <span className="text-green-400">✓</span>
              <span className="text-green-400">{submittedEmail}</span>
            </div>
          )}

          {(step === "message" || step === "summary") && (
            <>
              <div className="mb-4">
                <span>Great! Now, </span>
                <span className="text-blue-400">please write your message</span>
                <span>:</span>
              </div>

              {step === "message" ? (
                <div className="flex items-center">
                  <span className="text-green-400">→</span>
                    <span className="text-gray-500 ml-2">~</span>
                    <span className="text-gray-500 ml-2">Enter message:</span>
                    <div className="ml-1 relative inline-flex items-center">
                      <span className="text-gray-700 dark:text-gray-300">{message}</span>
                    <span className="terminal-cursor-block" />
                  </div>
                  <input
                    ref={messageInputRef}
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="absolute opacity-0 w-0 h-0"
                    autoFocus
                    autoComplete="new-password"
                    name="terminal-message-input"
                    data-form-type="other"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-green-400">✓</span>
                  <span className="text-green-400">{submittedMessage}</span>
                </div>
              )}
            </>
          )}

          {step === "summary" && (
            <>
              <div className="mt-8 mb-4">
                <span>Beautiful! Here's what we've got:</span>
              </div>

              <div className="mb-2">
                <span className="text-blue-400">e-mail:</span>
                <span className="ml-2">{submittedEmail}</span>
              </div>

              <div className="mb-6">
                <span className="text-blue-400">description:</span>
                <span className="ml-2">{submittedMessage}</span>
              </div>

              <div className="mb-4">
                <span>Look good?</span>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleRestart}
                  variant="outline"
                  className="font-mono bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-slate-700"
                >
                  Restart
                </Button>
                <Button onClick={handleSubmit} className="font-mono bg-blue-400 hover:bg-blue-500 text-white">
                  Send it!
                </Button>
              </div>
            </>
          )}

          <div className="mt-8 pt-4 border-t border-gray-400/50 dark:border-gray-700/50 text-xs text-gray-500 dark:text-gray-500">
            <div className="flex gap-4">
              {step === "summary" && (
                <span>
                  <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-slate-800 rounded border border-gray-400 dark:border-gray-600">
                    {isMac ? "⌘" : "Ctrl"}
                  </kbd>{" "}
                  + <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-slate-800 rounded border border-gray-400 dark:border-gray-600">Enter</kbd> to send
                </span>
              )}
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-slate-800 rounded border border-gray-400 dark:border-gray-600">
                      {isMac ? "⌘" : "Ctrl"}
                    </kbd>{" "}
                    + <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-slate-800 rounded border border-gray-400 dark:border-gray-600">K</kbd> to restart
                  </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
