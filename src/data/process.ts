import { ClipboardCheck, Search, HardHat, ShieldCheck } from 'lucide-react';

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

export const PROCESS_DATA: ProcessStep[] = [
  {
    id: 1,
    title: "Instant Quote",
    description: "Fill out our smart form to receive a preliminary estimate within minutes.",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: "Free Inspection",
    description: "Our experts visit your property to verify measurements and assess roof health.",
    icon: Search,
  },
  {
    id: 3,
    title: "Expert Fitting",
    description: "Our certified team installs your high-performance roofing system safely.",
    icon: HardHat,
  },
  {
    id: 4,
    title: "Lifetime Support",
    description: "Enjoy peace of mind with our industry-leading guarantee and aftercare.",
    icon: ShieldCheck,
  },
];