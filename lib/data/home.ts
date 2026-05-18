import { Stethoscope, Zap, RefreshCw, Wrench, Hospital, Factory, Flame, FlaskConical, Utensils, Construction, Droplet, Briefcase, GraduationCap } from "lucide-react";

export const services = [
  {
    title: "Medical Gases",
    description: "High-purity gases meeting strict medical standards for hospitals and clinics.",
    Icon: Stethoscope,
    href: "/products",
  },
  {
    title: "Industrial Gases",
    description: "Reliable supply for manufacturing, welding, cutting, and processing operations.",
    Icon: Zap,
    href: "/products",
  },
  {
    title: "Cylinder Services",
    description: "Flexible hire, safe refilling, and reliable exchange programs.",
    Icon: RefreshCw,
    href: "/services",
  },
  {
    title: "Technical Support",
    description: "Professional guidance, system installation, and maintenance services.",
    Icon: Wrench,
    href: "/services",
  },
];

export const industries = [
  { name: "Hospitals & Healthcare", Icon: Hospital },
  { name: "Manufacturing Industries", Icon: Factory },
  { name: "Welding & Fabrication", Icon: Flame },
  { name: "Laboratories & Research", Icon: FlaskConical },
  { name: "Food & Beverage Industry", Icon: Utensils },
  { name: "Mining & Construction", Icon: Construction },
  { name: "Oil & Gas Sector", Icon: Droplet },
  { name: "Commercial Businesses", Icon: Briefcase },
  { name: "Educational Institutions", Icon: GraduationCap },
];

export const safetyCommitments = [
  "Gas handling",
  "Cylinder storage",
  "Transportation",
  "Equipment installation",
  "Operational safety",
  "Customer service",
];

export const featuredItems = [
  {
    type: "Product",
    title: "Medical Oxygen",
    description: "High-purity medical grade oxygen meeting strict quality standards for hospitals and clinics.",
    image: "/images/medical-oxygen.png",
    href: "/products",
  },
  {
    type: "Product",
    title: "Oxy-Acetylene Set",
    description: "Complete solution for welding, cutting, brazing, and heating operations.",
    image: "/images/oxy-acetylene.png",
    href: "/products",
  },
  {
    type: "Service",
    title: "Cylinder Hire Services",
    description: "Flexible and affordable cylinder rental options for short-term or long-term use.",
    image: "/images/cylinder-hire.png",
    href: "/services",
  },
];


