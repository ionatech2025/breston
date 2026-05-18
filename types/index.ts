export interface ContactFormData {
    full_name: string;
    company: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface ProductRow {
    product: string;
    characteristics?: string;
    grade?: string;
    purity?: string;
    container?: string;
    applications: string;
}

export interface ProductCategory {
    id: string;
    title: string;
    subtitle: string;
    columns: string[];
    rows: string[][];
}

export interface ServiceItem {
    title: string;
    description: string;
    details: string[];
    icon: string;
}

export interface CareerRole {
    title: string;
    department: string;
    responsibilities: string[];
    requirements: string[];
}

export interface CoreValue {
    title: string;
    description: string;
    icon: string;
}
