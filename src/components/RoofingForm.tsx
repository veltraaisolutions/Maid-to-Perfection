/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { FORM_CONFIG, FormStep } from "../data/questions";
import parsePhoneNumber from "libphonenumber-js/max";

// Updated type to support arrays for multiple-choice
type FormAnswers = Record<string, string | number | boolean | string[]>;

export default function RoofingForm() {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [formData, setFormData] = useState<FormAnswers>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const currentStep: FormStep = FORM_CONFIG.steps[stepIndex];
  const progress = ((stepIndex + 1) / FORM_CONFIG.steps.length) * 100;

  const validateStep = () => {
    // 1. Validation for Multiple Choice (Ensure at least one is selected)
    if (currentStep.type === "multiple-choice") {
      const selections = (formData[currentStep.id] as string[]) || [];
      if (selections.length === 0) {
        setError("Please select at least one option");
        return false;
      }
      return true;
    }

    // 2. Simple choice steps are always valid
    if (currentStep.type === "choice") return true;

    const fields = currentStep.fields || [];
    const updatedData = { ...formData };

    for (const field of fields) {
      const val = formData[field.id];
      const stringVal = String(val || "").trim();

      // Basic empty field validation
      const isNumberField = field.id === "bedrooms" || field.id === "bathrooms";
      const minLength = isNumberField ? 1 : 2;

      if (stringVal.length < minLength) {
        const fieldName = field.placeholder.split("(")[0].toLowerCase();
        setError(`Please enter your ${fieldName}`);
        return false;
      }

      // 3. Robust Phone Validation (Handles 07... -> +44 automatically)
      if (field.id === "phone") {
        try {
          const phoneNumber = parsePhoneNumber(stringVal, "GB");

          if (!phoneNumber || !phoneNumber.isValid()) {
            setError("Please enter a valid UK mobile number");
            return false;
          }

          // phoneNumber.number converts 07123456789 into +447123456789
          updatedData[field.id] = phoneNumber.number;
        } catch (e) {
          setError("Invalid phone format. Try 07123 456789");
          return false;
        }
      }
    }

    // Save the normalized data (with the +44 version) back to state
    setFormData(updatedData);
    setError(null);
    return true;
  };

  const handleNext = async (value?: string) => {
    const updatedData = { ...formData };

    // If a value is passed (single choice), save it
    if (value && currentStep.type === "choice") {
      updatedData[currentStep.id] = value;
    }

    setFormData(updatedData);

    // Validate before moving (for text fields)
    if (!value && !validateStep()) return;

    if (stepIndex < FORM_CONFIG.steps.length - 1) {
      setStepIndex(stepIndex + 1);
      setError(null);
    } else {
      setIsCalculating(true);
      setTimeout(() => submitToN8N(updatedData), 1800);
    }
  };

  const toggleOption = (value: string) => {
    const currentSelections = (formData[currentStep.id] as string[]) || [];
    const newSelections = currentSelections.includes(value)
      ? currentSelections.filter((item) => item !== value)
      : [...currentSelections, value];

    setFormData((prev) => ({
      ...prev,
      [currentStep.id]: newSelections,
    }));
  };

  const submitToN8N = async (finalData: FormAnswers) => {
    setLoading(true);
    try {
      await fetch(FORM_CONFIG.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...finalData,
          source: "Cleaning Website Template",
          timestamp: new Date().toISOString(),
          status: "lead_generated",
        }),
      });

      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 150,
        zIndex: 0,
      };
      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        confetti({
          ...defaults,
          particleCount: 80,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#dc2626", "#ffffff", "#1e293b"],
        });

        confetti({
          ...defaults,
          particleCount: 80,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#dc2626", "#ffffff", "#1e293b"],
        });
      }, 250);

      setSubmitted(true);
    } catch (err) {
      alert("Submission error. Please check your connection.");
    } finally {
      setLoading(false);
      setIsCalculating(false);
    }
  };

  if (isCalculating) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mb-6 text-brand"
        >
          <Sparkles
            size={60}
            strokeWidth={1.5}
          />
        </motion.div>
        <h2 className="text-2xl font-bold mb-2">Generating Estimate...</h2>
        <p className="text-muted-foreground text-base max-w-xs">
          Matching local rates and contractors...
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-10 bg-card border rounded-[2.5rem] shadow-2xl max-w-md mx-auto"
      >
        <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6 border border-brand/20">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-black mb-3 text-foreground uppercase italic tracking-tight">
          Success!
        </h2>
        <p className="text-muted-foreground text-base mb-8 leading-relaxed">
          Thanks,{" "}
          <span className="text-foreground font-bold">
            {String(formData.fullName || "User")}
          </span>
          ! Our team will contact you shortly.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="w-full py-4 bg-brand text-white rounded-xl font-black text-lg hover:brightness-110 shadow-lg shadow-brand/20 cursor-pointer"
        >
          RETURN
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4">
      <div className="mb-8 text-center mt-5">
        <h1 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter italic">
          Maid To <span className="text-brand">Perfection</span>
        </h1>
        <div className="w-full bg-muted h-2 rounded-full overflow-hidden max-w-[250px] mx-auto border border-border">
          <motion.div
            animate={{ width: `${progress}%` }}
            className="h-full bg-brand"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={stepIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="bg-card backdrop-blur-2xl border rounded-[2.5rem] p-8 md:p-10 shadow-2xl min-h-[450px] flex flex-col relative overflow-hidden"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 text-foreground leading-tight">
            {currentStep.question}
          </h2>

          <div className="flex-grow flex flex-col justify-center">
            {(currentStep.type === "choice" ||
              currentStep.type === "multiple-choice") && (
              <div className="grid grid-cols-2 gap-4">
                {currentStep.options?.map((opt) => {
                  const isSelected =
                    currentStep.type === "multiple-choice"
                      ? ((formData[currentStep.id] as string[]) || []).includes(
                          opt.value
                        )
                      : formData[currentStep.id] === opt.value;

                  return (
                    <button
                      key={opt.value}
                      onClick={() => {
                        if (currentStep.type === "multiple-choice") {
                          toggleOption(opt.value);
                        } else {
                          handleNext(opt.value);
                        }
                      }}
                      className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all group active:scale-[0.96] ${
                        isSelected
                          ? "border-brand bg-brand/10"
                          : "bg-muted/40 border-transparent hover:border-brand/50"
                      }`}
                    >
                      <opt.icon
                        className={`mb-3 transition-all ${
                          isSelected
                            ? "text-brand"
                            : "text-muted-foreground group-hover:text-brand"
                        }`}
                        size={36}
                        strokeWidth={1.5}
                      />
                      <span
                        className={`font-bold text-sm text-center uppercase tracking-tight ${
                          isSelected
                            ? "text-foreground"
                            : "text-foreground/70 group-hover:text-foreground"
                        }`}
                      >
                        {opt.label}
                      </span>
                    </button>
                  );
                })}

                {/* Manual Continue button for multiple-choice */}
                {currentStep.type === "multiple-choice" && (
                  <button
                    onClick={() => handleNext()}
                    className="col-span-2 mt-4 w-full h-14 bg-brand text-white font-black text-lg rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand/20 active:scale-[0.98] uppercase cursor-pointer"
                  >
                    Continue <ChevronRight size={22} />
                  </button>
                )}
              </div>
            )}

            {(currentStep.type === "text" || currentStep.type === "phone") && (
              <div className="space-y-4 w-full max-w-sm mx-auto">
                {currentStep.fields?.map((f) => (
                  <div
                    key={f.id}
                    className="space-y-1"
                  >
                    <input
                      type={currentStep.type === "phone" ? "tel" : "text"}
                      placeholder={f.placeholder}
                      className="w-full h-14 px-6 bg-muted/50 border-2 border-border rounded-xl focus:border-brand focus:outline-none text-lg text-foreground transition-all"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          [f.id]: e.target.value,
                        }));
                        if (error) setError(null);
                      }}
                      value={(formData[f.id] as string) || ""}
                      onKeyDown={(e) => e.key === "Enter" && handleNext()}
                    />
                  </div>
                ))}

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-brand text-xs font-bold text-center uppercase tracking-wider"
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  disabled={loading}
                  onClick={() => handleNext()}
                  className="w-full h-14 bg-brand text-white font-black text-lg rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand/20 active:scale-[0.98] mt-4 uppercase cursor-pointer"
                >
                  {loading ? (
                    <Loader2
                      className="animate-spin"
                      size={20}
                    />
                  ) : (
                    <>
                      {stepIndex === FORM_CONFIG.steps.length - 1
                        ? "Get Quote"
                        : "Continue"}
                      <ChevronRight size={22} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-between items-center border-t border-border/50 pt-6">
            {stepIndex > 0 ? (
              <button
                onClick={() => setStepIndex(stepIndex - 1)}
                className="flex items-center text-muted-foreground hover:text-brand font-bold text-xs uppercase tracking-widest cursor-pointer"
              >
                <ChevronLeft
                  size={16}
                  className="mr-1"
                />{" "}
                Back
              </button>
            ) : (
              <div />
            )}
            <span className="text-muted-foreground font-mono text-xs font-bold bg-muted px-3 py-1 rounded-md border border-border">
              {stepIndex + 1} / {FORM_CONFIG.steps.length}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
