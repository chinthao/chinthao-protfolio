import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init("zNOIXPMbym1SH7q21"); // Public Key ຂອງທ່ານ

        window.emailjs.send(
          "service_y7bzsu8", // Service ID ຂອງທ່ານ
          "template_wzz5q7p", // Template ID ຂອງທ່ານ
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }
        ).then(() => {
          setStatus("success");
          alert("Message sent successfully! Thank you for reaching out.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        }).catch((error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          alert("Something went wrong. Please try sending again.");
        });
      } else {
        setStatus("error");
        alert("Unable to load email system client side.");
      }
    };
    script.onerror = () => {
      setStatus("error");
      alert("Error loading dynamic scripts.");
    };
    document.body.appendChild(script);
  };

  return (
    <section id="contact" className="bg-[#0b0917] py-24 px-6 md:px-16 relative overflow-hidden text-white">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="text-white text-4xl font-bold tracking-tight relative inline-block">
            Contact Me
            <span className="absolute bottom-[-8px] left-0 w-16 h-[3px] bg-purple-500 rounded-full" />
          </h2>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info + Find Me On */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info box */}
            <div className="bg-[#120d35]/40 border border-purple-900/40 p-6 rounded-3xl backdrop-blur-md space-y-5">
              <h3 className="text-white text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-purple-500 rounded-full" /> Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0e0a1f] border border-purple-500/25 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase font-semibold tracking-wider">Email</p>
                  <a href="mailto:chint9662@gmail.com" className="text-white hover:text-purple-400 transition-colors text-sm font-medium">chint9662@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0e0a1f] border border-purple-500/25 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase font-semibold tracking-wider">Phone</p>
                  <a href="tel:+8562099367747" className="text-white hover:text-purple-400 transition-colors text-sm font-medium">+856 20 9936 7747</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0e0a1f] border border-purple-500/25 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase font-semibold tracking-wider">Location</p>
                  <p className="text-white text-sm font-medium">Vientiane, Laos — Remote OK</p>
                </div>
              </div>
            </div>

            {/* Social Grid (FIND ME ON) */}
            <div className="bg-[#120d35]/40 border border-purple-900/40 p-6 rounded-3xl backdrop-blur-md">
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">FIND ME ON</h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://github.com/chinthao" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#0e0a1f]/60 border border-purple-900/40 p-3 rounded-xl hover:border-purple-500/50 transition-all group no-underline text-inherit">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-400 group-hover:text-purple-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <div>
                    <p className="text-white text-xs font-semibold mb-0">GitHub</p>
                    <p className="text-[10px] text-slate-500 mb-0">@chinthao</p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-3 bg-[#0e0a1f]/60 border border-purple-900/40 p-3 rounded-xl hover:border-purple-500/50 transition-all group no-underline text-inherit">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-400 group-hover:text-purple-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" w="4" h="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <div>
                    <p className="text-white text-xs font-semibold mb-0">LinkedIn</p>
                    <p className="text-[10px] text-slate-500 mb-0">in/chinthao</p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-3 bg-[#0e0a1f]/60 border border-purple-900/40 p-3 rounded-xl hover:border-purple-500/50 transition-all group no-underline text-inherit">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-400 group-hover:text-purple-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  <div>
                    <p className="text-white text-xs font-semibold mb-0">Twitter</p>
                    <p className="text-[10px] text-slate-500 mb-0">@chin_codes</p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-3 bg-[#0e0a1f]/60 border border-purple-900/40 p-3 rounded-xl hover:border-purple-500/50 transition-all group no-underline text-inherit">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-400 group-hover:text-purple-400" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"></path></svg>
                  <div>
                    <p className="text-white text-xs font-semibold mb-0">Dribbble</p>
                    <p className="text-[10px] text-slate-500 mb-0">@chinthao</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-[#120d35]/50 border border-purple-900/40 p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-2xl">
            <h3 className="text-white text-xl font-bold mb-6 tracking-tight">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full bg-[#0e0a1f]/80 border border-purple-900/60 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full bg-[#0e0a1f]/80 border border-purple-900/60 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full bg-[#0e0a1f]/80 border border-purple-900/60 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Message *</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or ideas..."
                  className="w-full bg-[#0e0a1f]/80 border border-purple-900/60 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold tracking-wider uppercase px-8 py-3.5 rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-purple-900/30 cursor-pointer flex items-center justify-center gap-2"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 text-center space-y-2">
          <p className="text-xs text-slate-500 mb-0">
            © 2026 Chinthao.dev. Designed & built with ❤️ and lots of ☕
          </p>
          <p className="text-[10px] text-slate-600">Soutsaka Institute of Technology</p>
        </div>
      </div>
    </section>
  );
}