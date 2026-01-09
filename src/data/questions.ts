import {
  Home,
  Building2,
  Sparkles,
  DoorOpen,
  Hammer,
  Clock,
  Calendar,
  CheckCircle2,
  Cat,
  Stethoscope,
  BedDouble,
  Repeat,
  LucideIcon,
} from "lucide-react";

export interface FormOption {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface FormField {
  id: string;
  placeholder: string;
  type?: string;
}

export interface FormStep {
  id: string;
  question: string;
  type: "choice" | "multiple-choice" | "text" | "phone"; // Add "multiple-choice" here
  options?: FormOption[];
  fields?: FormField[];
}

export interface FormConfig {
  webhookUrl: string;
  steps: FormStep[];
}

export const FORM_CONFIG: FormConfig = {
  webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK || "",
  steps: [
    {
      id: "serviceType",
      question: "What type of cleaning do you need?",
      type: "choice",
      options: [
        { label: "Domestic Clean", value: "Domestic", icon: Home },
        { label: "Commercial", value: "Commercial", icon: Building2 },
        { label: "Deep Clean", value: "deep clean", icon: Sparkles },
        { label: "End of Tenancy", value: "end of tenancy", icon: DoorOpen },
        { label: "Builders Clean", value: "builder", icon: Hammer },
      ],
    },
    {
      id: "frequency",
      question: "How often do you need the service?",
      type: "choice",
      options: [
        { label: "One-off", value: "One-off", icon: CheckCircle2 },
        { label: "Weekly", value: "Weekly", icon: Repeat },
        { label: "Fortnightly", value: "Fortnightly", icon: Calendar },
        { label: " Bi-weekly", value: " Bi-weekly", icon: Calendar },
      ],
    },
    {
      id: "propertyDetails",
      question: "Tell us a bit about the property",
      type: "text",
      fields: [
        { id: "bedrooms", placeholder: "Number of bedrooms" },
        { id: "bathrooms", placeholder: "Number of Bathrooms" },
      ],
    },
    {
      id: "history",
      question: "When was your last professional clean?",
      type: "text",
      fields: [
        {
          id: "lastCleanDate",
          placeholder: "Last time you had a cleaner",
          type: "date",
        },
      ],
    },
    {
      id: "requirements",
      question: "Specific Requirements",
      type: "multiple-choice",
      options: [
        { label: "I have Pets", value: "pets_yes", icon: Cat },
        {
          label: "I have Allergies",
          value: "allergies_yes",
          icon: Stethoscope,
        },
        { label: "Need Bed Changes", value: "beds_yes", icon: BedDouble },
      ],
    },
    {
      id: "timeline",
      question: "How soon do you need us?",
      type: "choice",
      options: [
        { label: "As soon as possible (ASAP)", value: "asap", icon: Clock },
        { label: "Within the next week", value: "next_week", icon: Calendar },
        { label: "Just looking for a quote", value: "later", icon: Calendar },
      ],
    },
    {
      id: "contactDetails",
      question: "Who should we send the quote to?",
      type: "text",
      fields: [
        { id: "fullName", placeholder: "Full Name" },
        { id: "email", placeholder: "Email" },
        { id: "phone", placeholder: "Enter Valid Phone with country code" },
      ],
    },
    {
      id: "locationDetails",
      question: "Where is the property located?",
      type: "text",
      fields: [
        { id: "fullAddress", placeholder: "Full Address" },
        { id: "postcode", placeholder: "Postcode" },
      ],
    },
  ],
};
