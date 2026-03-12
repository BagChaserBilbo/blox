"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
  budget: z.string().min(1, "Bitte wählen Sie ein Budget"),
});

type FormData = z.infer<typeof schema>;

type FormStatus = "idle" | "loading" | "success" | "error";

const budgetOptions = [
  { value: "", label: "Bitte wählen..." },
  { value: "unter-1000", label: "Unter 1.000 €" },
  { value: "1000-3000", label: "1.000–3.000 €" },
  { value: "3000-5000", label: "3.000–5.000 €" },
  { value: "ueber-5000", label: "Über 5.000 €" },
];

const inputClass =
  "w-full bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder:text-mid-gray focus:border-blox-blue focus:outline-none transition-colors duration-200";

const labelClass = "block text-white text-sm font-medium mb-1.5";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    void data; // TODO: replace with fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    reset();
  };

  return (
    <section
      id="kontakt"
      className="bg-near-black py-24 px-6 scroll-mt-[52px]"
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <p className="text-blox-blue text-xs uppercase tracking-widest font-semibold text-center">
          Kontakt
        </p>
        <h2 className="text-4xl font-bold text-white mt-2 font-display tracking-tight text-center">
          Bereit für Ihr nächstes Projekt?
        </h2>
        <p className="text-mid-gray text-lg mt-4 mb-12 leading-relaxed text-center">
          Erzählen Sie uns von Ihrem Vorhaben — wir melden uns innerhalb von 24
          Stunden.
        </p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center gap-4 py-16 text-center"
            >
              <CheckCircle2 className="w-14 h-14 text-green-400" />
              <h3 className="text-white text-xl font-semibold font-display">
                Anfrage gesendet!
              </h3>
              <p className="text-mid-gray text-base">
                Vielen Dank — wir melden uns so schnell wie möglich bei Ihnen.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-blox-blue text-sm hover:underline"
              >
                Weitere Anfrage senden
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Max Mustermann"
                  {...register("name")}
                  className={inputClass}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="max@beispiel.at"
                  {...register("email")}
                  className={inputClass}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Projektbeschreibung
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Beschreiben Sie Ihr Vorhaben..."
                  {...register("message")}
                  className={`${inputClass} resize-y`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Budget
                </label>
                <select
                  id="budget"
                  {...register("budget")}
                  className={`${inputClass} appearance-none cursor-pointer`}
                  defaultValue=""
                >
                  {budgetOptions.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      disabled={opt.value === ""}
                      className="bg-[#2a2a2a] text-white"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.budget.message}
                  </p>
                )}
              </div>

              {/* Error state */}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blox-blue text-white rounded-full py-4 text-base font-medium mt-2 hover:bg-blue-2 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  "Anfrage senden"
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Below form */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <a
            href="mailto:hello@blox.studio"
            className="text-white text-sm hover:text-blox-blue transition-colors duration-200"
          >
            hello@blox.studio
          </a>
        </div>
      </div>
    </section>
  );
}
