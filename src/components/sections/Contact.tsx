"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Terminal } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!form.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
      isValid = false;
    } else if (form.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Simulating API integration / form submission network delay
    // Note for User: You can connect this to EmailJS, Web3Forms, or a custom route
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <Mail size={20} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Get In Touch</h2>
          <p className="text-sm text-muted-foreground">Let's discuss internship opportunities, project collaborations, or research roles</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Contact Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="glass-card p-6 flex-1 flex flex-col justify-center space-y-6 relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-300" />
            
            <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="text-primary animate-pulse" size={18} />
              <span>Contact Coordinates</span>
            </h3>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Direct Email</h4>
                <a href="mailto:prakashkmp12@gmail.com" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5 block">
                  prakashkmp12@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm">LinkedIn</h4>
                <a href="https://linkedin.com/in/prakash-k-239846283/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5 block">
                  linkedin.com/in/prakash-k-239846283/
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Location</h4>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                  Coimbatore, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 md:p-8 h-full">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center h-full py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                    className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 mb-6"
                  >
                    <CheckCircle size={48} />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-xs md:text-sm text-muted-foreground max-w-sm">
                    Thank you for reaching out! I will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-4 py-2 text-xs font-semibold rounded-xl border border-border hover:bg-muted transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border bg-card/30 focus:outline-none focus:ring-1 ${
                          errors.name 
                            ? "border-rose-500/50 focus:ring-rose-500/50" 
                            : "border-border focus:border-primary/50 focus:ring-primary/50"
                        }`}
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p className="text-[10px] text-rose-400 flex items-center gap-1">
                          <AlertCircle size={10} />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border bg-card/30 focus:outline-none focus:ring-1 ${
                          errors.email 
                            ? "border-rose-500/50 focus:ring-rose-500/50" 
                            : "border-border focus:border-primary/50 focus:ring-primary/50"
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="text-[10px] text-rose-400 flex items-center gap-1">
                          <AlertCircle size={10} />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground">Subject (Optional)</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border border-border bg-card/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none"
                      placeholder="Collaboration opportunity..."
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-muted-foreground">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border bg-card/30 focus:outline-none focus:ring-1 resize-none ${
                        errors.message 
                          ? "border-rose-500/50 focus:ring-rose-500/50" 
                          : "border-border focus:border-primary/50 focus:ring-primary/50"
                      }`}
                      placeholder="Hi Prakash K, I'd like to chat about a role at..."
                    />
                    {errors.message && (
                      <p className="text-[10px] text-rose-400 flex items-center gap-1">
                        <AlertCircle size={10} />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md shadow-primary/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Analyzing and Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
