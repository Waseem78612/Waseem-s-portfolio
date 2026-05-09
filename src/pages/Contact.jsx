// src/pages/Contact.jsx
// Keys are loaded from the .env file (VITE_EMAILJS_* variables).
// To update: edit .env in project root — never hardcode here.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// importing React hooks and the EmailJS library for handling form submission and email sending.
import { useState, useCallback, useRef } from "react";
import emailjs from "@emailjs/browser";

import { OWNER } from "../data/portfolioData";
// The Contact component is a functional React component that renders the contact section of the portfolio website. It includes direct contact information, quick action buttons for calling and WhatsApp, and a contact form powered by EmailJS. The form allows users to send messages directly to the owner's email without needing a backend server. The component also handles form state, submission status, and error messages to provide feedback to the user.
const INITIAL = { name: "", email: "", message: "" };

export default function Contact() {
  // useRef to reference the form element, useState to manage form data, submission status, and error messages. The handleChange function updates the form state as the user types, while the handleSubmit function validates the form and sends the email using EmailJS when the form is submitted.
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");
  // Handler for input changes, updates the form state based on the input's name and value. Wrapped in useCallback for performance optimization, ensuring that the function is only recreated if necessary.
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    // Update the form state by spreading the previous state and updating the specific field that changed. This allows for controlled form inputs that reflect the current state of the form.
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);
  // Handler for form submission, validates the form fields and sends the email using EmailJS. It updates the status and error message state based on the outcome of the email sending process, providing feedback to the user. Wrapped in useCallback to prevent unnecessary re-renders.
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        setErrorMsg("Please fill in all fields.");
        return;
      }
      // Clear any previous error messages and set the status to "sending" before attempting to send the email. This provides immediate feedback to the user that their message is being processed.
      setErrorMsg("");
      setStatus("sending");
      // Attempt to send the email using EmailJS with the provided service ID, template ID, form data, and public key. If successful, update the status to "sent" and reset the form. If there's an error, log it and update the status to "error" with an appropriate message.
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
          },
          EMAILJS_PUBLIC_KEY,
        );
        setStatus("sent");
        setForm(INITIAL);
        setTimeout(() => setStatus("idle"), 6000);
      } catch (err) {
        console.error("EmailJS error:", err);
        setErrorMsg("Something went wrong. Please try emailing directly.");
        setStatus("error");
      }
    },
    [form],
  );
  // Contact information items with icons, labels, values, and links. This array is used to render the direct contact section of the page, providing users with multiple ways to get in touch with the owner. Each item includes an icon for visual identification, a label for clarity, the contact value (such as email or phone number), and a link that allows users to interact with the contact information directly (e.g., clicking on the email opens the mail client).
  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: OWNER.email,
      href: `mailto:${OWNER.email}`,
      external: false,
    },
    {
      icon: "📞",
      label: "Call",
      value: OWNER.phone,
      href: `tel:${OWNER.phone}`,
      external: false,
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: OWNER.whatsapp,
      href: `https://wa.me/${OWNER.whatsapp.replace(/\+/g, "")}`,
      external: true,
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/Waseem78612",
      href: OWNER.github,
      external: true,
    },
    {
      icon: "📍",
      label: "Based",
      value: OWNER.location,
      href: null,
      external: false,
    },
  ];

  return (
    // The main section of the contact page, including a heading, introductory text, and a grid layout that divides the content into two columns: one for direct contact information and quick action buttons, and another for the contact form. The section is styled with padding and responsive design to ensure it looks good on various screen sizes.
    <section
      aria-labelledby="contact-heading"
      className="min-h-screen pt-24 sm:pt-28 pb-20 px-5 sm:px-8"
    >
      {/*The content is wrapped in a container with a maximum width and centered
      alignment. An animation class is applied for a fade-up effect when the
      section comes into view. */}
      <div className="max-w-5xl mx-auto animate-fadeUp">
        <p className="text-xs font-semibold tracking-[4px] uppercase text-violet-400 mb-2">
          04 / Contact
        </p>
        <h1
          id="contact-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          Get in Touch
        </h1>
        <p className="text-gray-600 mb-10 sm:mb-16 max-w-xl text-sm">
          Have an opportunity or just want to say hi? Send a message, call, or
          WhatsApp — I respond fast.
        </p>
        {/* A grid layout that divides the content into  contact information and contact form*/}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
          {/* ── Left: contact info ── */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="p-5 sm:p-7 rounded-2xl bg-[#13131F] border border-[#1E1E30]">
              <h2 className="text-white font-bold text-sm sm:text-base mb-5 sm:mb-6">
                Direct Contact
              </h2>
              <div
                className="flex flex-col gap-4 sm:gap-5"
                role="list"
                aria-label="Contact information"
              >
                {/* Mapping over the contactItems array to render each piece of
                contact information with its corresponding icon, label, and
                value. If a href is provided, the value is rendered as a
                clickable link that opens in a new tab if it's an external link.
                Otherwise, it's rendered as plain text. This provides users with
                multiple ways to get in touch with the owner directly from the */}
                contact page.
                {contactItems.map(({ icon, label, value, href, external }) => (
                  <div
                    key={label}
                    role="listitem"
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div
                      aria-hidden="true"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-500/8 border border-violet-500/12 flex items-center justify-center text-sm sm:text-base flex-shrink-0"
                    >
                      {icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-violet-400 text-xs font-semibold uppercase tracking-wider">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors duration-200 break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-500 text-xs sm:text-sm">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${OWNER.phone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#13131F] border border-[#1E1E30] text-gray-400 text-xs font-semibold hover:border-violet-500/30 hover:text-white transition-all duration-200"
              >
                📞 Call Me
              </a>
              <a
                href={`https://wa.me/${OWNER.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#13131F] border border-[#1E1E30] text-gray-400 text-xs font-semibold hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-200"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Availability */}
            <div className="p-4 sm:p-5 rounded-2xl bg-violet-500/5 border border-violet-500/12">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <p className="text-emerald-400 font-semibold text-sm">
                  Open to opportunities
                </p>
              </div>
              <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                Available for Full Stack / MERN Stack roles. Based in Pakistan,
                open to remote work.
              </p>
            </div>
          </div>

          {/* Right: EmailJS form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-7 rounded-2xl bg-[#13131F] border border-[#1E1E30]"
          >
            {/* Feedback messages for form submission status, including success and error states. These messages provide immediate feedback to the user about the outcome of their form submission, enhancing the user experience by confirming when a message has been sent or alerting them to any issues that occurred during the process. */}
            {status === "sent" && (
              <div
                role="alert"
                className="p-3 sm:p-4 rounded-xl bg-emerald-500/8 border border-emerald-500/20 text-emerald-400 text-sm font-medium"
              >
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            {/*Error message is shown if the status is "error" or if there's an error message set. It provides feedback to the user that something went wrong during the form submission process, prompting them to try again or use direct contact methods. */}
            {(status === "error" || errorMsg) && (
              <div
                role="alert"
                className="p-3 sm:p-4 rounded-xl bg-red-500/8 border border-red-500/20 text-red-400 text-sm font-medium"
              >
                ⚠️ {errorMsg || "Something went wrong. Please try again."}
              </div>
            )}

            {[
              {
                id: "name",
                label: "Your Name",
                type: "text",
                placeholder: "Your name",
              },
              {
                id: "email",
                label: "Your Email",
                type: "email",
                placeholder: "your@email.com",
              },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} className="flex flex-col gap-1.5">
                <label
                  htmlFor={id}
                  className="text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  value={form[id]}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#080810] border border-[#1E1E30] text-white placeholder-gray-700 text-sm focus:border-violet-500/40 focus:outline-none transition-all duration-200 disabled:opacity-50"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Hey Waseem, I wanted to reach out about..."
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === "sending"}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#080810] border border-[#1E1E30] text-white placeholder-gray-700 text-sm resize-none focus:border-violet-500/40 focus:outline-none transition-all duration-200 disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm hover:opacity-90 hover:scale-[1.01] active:scale-95 transition-all duration-200 shadow-lg shadow-violet-500/15 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
            >
              {status === "sending" ? "Sending…" : "Send Message →"}
            </button>

            <p className="text-center text-gray-700 text-[11px]">
              Powered by EmailJS · Your message goes directly to my inbox
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
