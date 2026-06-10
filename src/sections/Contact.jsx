import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('anuradreddy@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email format is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Trigger world-class particle success celebration
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#14b8a6', '#ec4899']
        });

        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative select-text">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200/10 dark:border-white/5 pb-8 mb-16 relative">
          <div className="text-left">
            <span className="coordinate-mono text-xs text-cyber-indigo dark:text-cyber-teal mb-3 block">
              // CONNECT_REF // 08
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Contact <span className="font-editorial italic font-normal text-cyber-indigo dark:text-cyber-teal">Me</span>
            </h2>
          </div>
          <div className="coordinate-mono text-xs text-slate-400 dark:text-slate-500 mt-4 md:mt-0 select-none">
            [CONNECT // COLLABORATE]
          </div>
          {/* Blueprint Crosshairs */}
          <div className="absolute -bottom-1 -left-1 text-[10px] text-cyber-teal/30 select-none">+</div>
          <div className="absolute -bottom-1 -right-1 text-[10px] text-cyber-teal/30 select-none">+</div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 text-left uppercase tracking-wider">
              Contact Information
            </h3>
            <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed text-left mb-8">
              Have a project proposal, workspace opportunity, or just want to exchange technical notes? Feel free to reach out via form or copy my email details directly.
            </p>

            {/* Email Card with Clipboard Copy */}
            <div className="glass-panel p-6 asymmetric-rounded flex items-center justify-between border-slate-200/10 dark:border-white/5 relative overflow-hidden group">
              <div className="flex items-center gap-4 text-left">
                <span className="p-3.5 rounded-full bg-cyber-indigo/5 text-cyber-indigo dark:text-cyber-teal dark:bg-cyber-teal/5 border border-cyber-indigo/15">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">// Email Address</h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">anuradreddy@gmail.com</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-full border border-slate-200/50 dark:border-white/10 hover:border-cyber-indigo/35 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all bg-white/5 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 asymmetric-rounded flex items-center border-slate-200/10 dark:border-white/5 relative overflow-hidden group">
              <div className="flex items-center gap-4 text-left">
                <span className="p-3.5 rounded-full bg-cyber-pink/5 text-cyber-pink border border-cyber-pink/15">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500">// Location</h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>

            {/* Vector Tech Map Mockup placeholder */}
            <div className="glass-panel asymmetric-rounded h-44 border-slate-200/10 dark:border-white/5 relative overflow-hidden flex items-center justify-center p-6 bg-[#020304]/60 select-none">
              {/* Minimal SVG Grid mockup of a map grid */}
              <svg className="absolute inset-0 w-full h-full opacity-5 text-cyber-indigo" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 0,10 L 100,10 M 0,30 L 100,30 M 0,50 L 100,50 M 0,70 L 100,70 M 0,90 L 100,90 M 10,0 L 10,100 M 30,0 L 30,100 M 50,0 L 50,100 M 70,0 L 70,100 M 90,0 L 90,100" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <div className="relative z-10 flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-cyber-pink animate-ping mb-3" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">// Remote Active Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 asymmetric-rounded-lg border border-slate-200/10 dark:border-white/5 relative">
              {/* Corner crosshairs */}
              <div className="absolute top-3 left-3 coordinate-mono select-none">+</div>
              <div className="absolute top-3 right-3 coordinate-mono select-none">+</div>

              <form onSubmit={handleSubmit} className="space-y-8 text-left" noValidate>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="coordinate-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">// 01_Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`py-3.5 bg-transparent border-b text-sm outline-none text-slate-900 dark:text-white transition-all duration-300 ${
                        errors.name 
                          ? 'border-rose-500/50 focus:border-rose-500' 
                          : 'border-slate-200/60 dark:border-white/5 focus:border-cyber-indigo dark:focus:border-cyber-teal'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <span className="text-[10px] text-rose-500 mt-1 font-semibold font-mono">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="coordinate-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">// 02_Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`py-3.5 bg-transparent border-b text-sm outline-none text-slate-900 dark:text-white transition-all duration-300 ${
                        errors.email 
                          ? 'border-rose-500/50 focus:border-rose-500' 
                          : 'border-slate-200/60 dark:border-white/5 focus:border-cyber-indigo dark:focus:border-cyber-teal'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <span className="text-[10px] text-rose-500 mt-1 font-semibold font-mono">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="coordinate-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">// 03_Message Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`py-3.5 bg-transparent border-b text-sm outline-none text-slate-900 dark:text-white transition-all duration-300 ${
                      errors.subject 
                        ? 'border-rose-500/50 focus:border-rose-500' 
                        : 'border-slate-200/60 dark:border-white/5 focus:border-cyber-indigo dark:focus:border-cyber-teal'
                    }`}
                    placeholder="Project Proposal, Workspace Collaboration..."
                  />
                  {errors.subject && <span className="text-[10px] text-rose-500 mt-1 font-semibold font-mono">{errors.subject}</span>}
                </div>

                {/* Message field */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="coordinate-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">// 04_Project Details</label>
                  <textarea
                    id="message"
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`py-3.5 bg-transparent border-b text-sm outline-none text-slate-900 dark:text-white resize-none transition-all duration-300 ${
                      errors.message 
                        ? 'border-rose-500/50 focus:border-rose-500' 
                        : 'border-slate-200/60 dark:border-white/5 focus:border-cyber-indigo dark:focus:border-cyber-teal'
                    }`}
                    placeholder="Describe your project specification..."
                  />
                  {errors.message && <span className="text-[10px] text-rose-500 mt-1 font-semibold font-mono">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-cyber-indigo text-white hover:bg-cyber-indigo/95 disabled:opacity-50 transition-all text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer select-none"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Sending Specifications...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Ledger Message</span>
                    </>
                  )}
                </button>

                {/* Success message banner */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl border border-green-500/20 bg-green-500/10 text-green-400 font-semibold text-xs sm:text-sm text-center"
                  >
                    Your message has been sent successfully! I will reply shortly.
                  </motion.div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
