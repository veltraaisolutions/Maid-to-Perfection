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
  LucideIcon,
} from "lucide-react";

// Added 'export' to all interfaces so they can be imported in your Form component
export interface FormOption {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface FormField {
  id: string;
  placeholder: string;
}

export interface FormStep {
  id: string;
  question: string;
  type: "choice" | "text" | "phone";
  options?: FormOption[];
  fields?: FormField[];
}

export interface FormConfig {
  webhookUrl: string;
  steps: FormStep[];
}

export const FORM_CONFIG: FormConfig = {
  // Ensure this is set in your .env.local file
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
      question: "How often would you like us to visit?",
      type: "choice",
      options: [
        { label: "One-off", value: "One-off", icon: CheckCircle2 },
        { label: "Weekly", value: "Weekly", icon: Calendar },
        { label: "Fortnightly", value: "Fortnightly", icon: Calendar },
      ],
    },
    {
      id: "propertyDetails",
      question: "Tell us a bit about your property",
      type: "text",
      fields: [
        { id: "bedrooms", placeholder: "Number of Bedrooms" },
        { id: "bathrooms", placeholder: "Number of Bathrooms" },
      ],
    },
    {
      id: "additionalInfo",
      question: "Any specific requirements?",
      type: "choice",
      options: [
        { label: "I have Pets", value: "pets_yes", icon: Cat },
        {
          label: "I have Allergies",
          value: "allergies_yes",
          icon: Stethoscope,
        },
        { label: "Need Bed Changes", value: "beds_yes", icon: BedDouble },
        { label: "Standard Clean", value: "none", icon: CheckCircle2 },
      ],
    },
    {
      id: "timeline",
      question: "How soon do you need us?",
      type: "choice",
      options: [
        { label: "ASAP", value: "asap", icon: Clock },
        { label: "This Week", value: "this_week", icon: Calendar },
        { label: "Just a Quote", value: "later", icon: Calendar },
      ],
    },
    {
      id: "finalDetails",
      question: "Where should we send your quote?",
      type: "text", // Note: The form component handles phone validation internally
      fields: [
        { id: "fullName", placeholder: "Full Name" },
        { id: "email", placeholder: "Email Address" },
        { id: "phone", placeholder: "UK Phone Number (e.g. 07123 456789)" },
        { id: "address", placeholder: "Full Address & Postcode" },
      ],
    },
  ],
};
