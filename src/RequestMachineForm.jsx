import React, { useState } from 'react';
import useScrollEffect from "./useScrollEffect";
import FloatingInput from './FloatingInput';
import { supabase } from './supabaseClient';
import emailjs from '@emailjs/browser';

const SUBMIT_COOLDOWN_MS = 60_000;
const LAST_SUBMIT_KEY = 'popndrop_last_lead_submit';

function RequestMachineForm() {
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [ref, visible] = useScrollEffect();

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    const trimmed = digits.slice(0, 10);
    

    if (trimmed.length === 0) return '';
    if (trimmed.length < 4) return `(${trimmed}`;
    if (trimmed.length < 7) return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3)}`;
    return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const lastSubmit = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0);
    const msSinceLastSubmit = Date.now() - lastSubmit;
    if (msSinceLastSubmit < SUBMIT_COOLDOWN_MS) {
      const secondsLeft = Math.ceil((SUBMIT_COOLDOWN_MS - msSinceLastSubmit) / 1000);
      setErrorMsg(`Please wait ${secondsLeft}s before submitting again.`);
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.functions.invoke('submit-lead', {
      body: {
        company_name: companyName,
        name: name,
        email: email,
        phone: phone,
        reason: reason,
        message: message,
      },
    });

    if (error) {
      console.error('Error submitting lead:', error);
      let serverMessage = '';
      try {
        const body = await error.context?.json();
        serverMessage = body?.error || '';
      } catch {
        // response body wasn't JSON (e.g. network failure) - fall through to generic message
      }
      setErrorMsg(
        serverMessage === 'rate_limited'
          ? 'Too many requests. Please try again in a few minutes.'
          : 'Failed to submit request. Please try again.'
      );
      setLoading(false);
      return;
    }

    localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));

    // Send email notification to Pop & Drop team
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            company_name: companyName,
            name: name,
            email: email,
            phone: phone,
            reason: reason,
            message: message,
            time: new Date().toLocaleString(),
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } catch {
        // The lead is already saved; a failed notification email must not block the user.
      }

      setSubmittedName(name);
      setSubmitted(true);
      setLoading(false);
      setCompanyName('');
      setName('');
      setEmail('');
      setPhone('');
      setReason('');
      setMessage('');
  };

  // Shared input classes
  const inputClass = `w-full border border-gray-300 h-11 px-4 rounded-lg text-sm
                      text-gray-800 placeholder-gray-400 font-sans
                      focus:outline-none focus:ring-2 focus:ring-amber-400
                      focus:border-transparent transition`;

  // Success state
  if (submitted) {
    return (
      <section
        id="form"
        className="flex flex-col items-center justify-center min-h-screen px-4 font-serif"
      >
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="text-amber-400 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Sent!</h2>
          <p className="text-gray-500 text-sm">
            Thanks, <span className="font-semibold text-gray-700">{submittedName.charAt(0).toUpperCase() + submittedName.slice(1)}</span>! We'll be in
            touch with you shortly about your request.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm text-amber-500 hover:text-amber-400 underline transition cursor-pointer"
          >
            Submit another request
          </button>
        </div>
      </section>
    );
  }
  return (
    <section
      id="form"
      ref={ref}
      className={`flex flex-col items-center justify-center min-h-screen px-4 py-20
                  font-serif transition duration-1000 ease-in bg-gray-50
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
    >
      <div className="w-full max-w-lg">

        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-1 text-center">
          Shoot Us a Message 
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8">
          Fill out the form below and we'll get back to you within <span className="font-bold text-amber-400">1–2</span> business days.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4"
        >
          {/* Company Name */}
            <FloatingInput
              label="Company Name"
              name="companyName"
              type="text"
              value={companyName}
              required
              onChange={(e) => setCompanyName(e.target.value)}
            />

          {/* Your Name */}
            <FloatingInput
              label="Your Name"
              name="name"
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />

          {/* Email + Phone side by side on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <FloatingInput
                label="Email"
                name="email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-1 flex-1">
              <FloatingInput
                label="Phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                required

              />
            </div>
          </div>

          {/* Reason */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Reason for Contact
            </label>
            <select
              className={inputClass}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            >
              <option value="" disabled>Select a reason…</option>
              <option value="request-machine">Request a Machine</option>
              <option value="customer-support">Customer Support</option>
              <option value="partnership">Partnership / Business Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Message
            </label>
            <textarea
              className={`${inputClass} h-32 py-3 resize-none`}
              value={message}
              placeholder="Tell us about your location, how many machines you need, etc."
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Error */}
          {errorMsg && <p className="text-red-500 text-sm text-center mt-2">{errorMsg}</p>}


          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-gray-800 hover:bg-amber-400 hover:text-gray-900
                       text-white font-bold font-serif tracking-wide py-3 rounded-lg
                       transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending…" : "Submit Request"}
          </button>
        </form>

      </div>
    </section>
  );
}

export default RequestMachineForm;