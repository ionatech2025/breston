'use client';

import { useState, useEffect } from 'react';
import { Send, Loader as Loader2, CircleCheck as CheckCircle } from 'lucide-react';
import type { ContactFormData } from '@/types';

const SUBJECTS = [
  'Product Inquiry',
  'Request a Quote',
  'Cylinder Hire',
  'Medical Gas Pipeline Installation',
  'Technical Support',
  'Emergency Gas Supply',
  'Careers',
  'Other',
];

const INITIAL_STATE: ContactFormData = {
  full_name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Auto hide success message after 30 seconds
  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [success]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "90867117-3ed1-43ec-b20b-731138443a46");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setForm(INITIAL_STATE);
      } else {
        setError(data.message || 'Something went wrong. Please try again or contact us by phone.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or contact us by phone.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-green-100 flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-brand-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
        <p className="text-gray-600 max-w-md mb-6">
          Thank you for reaching out. Our team will get back to you as soon as possible, typically within one business day.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-brand-blue-500 font-semibold hover:text-brand-blue-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="full_name">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={form.full_name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100 outline-none transition-all text-gray-900 bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="company">
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100 outline-none transition-all text-gray-900 bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100 outline-none transition-all text-gray-900 bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+256 700 000 000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100 outline-none transition-all text-gray-900 bg-white"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="subject">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100 outline-none transition-all text-gray-900 bg-white"
        >
          <option value="">Select a subject</option>
          {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={10}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100 outline-none transition-all text-gray-900 bg-white resize-none"
        />
      </div>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg"
      >
        {loading ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-4 h-4" /> Send Message</>
        )}
      </button>
    </form>
  );
}
