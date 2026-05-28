import React, { useState } from "react";
import mailjs from '@emailjs/browser'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "Dribbble", href: "#", icon: <DribbbleIcon /> },
  { label: "Google", href: "#", icon: <GoogleIcon /> },
];

export default function Contact() {

  const [status,setStatus] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();

    

    // 💡 ວິທີດຶງຂໍ້ມູນທັງໝົດໃນຟອມອອກມາເປັນ Object
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const serviceID="service_y7bzsu8"
    const templateID="template_wzz5q7p"
    const publickey="zNOIXPMbym1SH7q21"

    mailjs.send(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      publickey
    ).then(() => {
      setStatus('success')
      setForm({name: '', email: '', subject: '', message: ''})
    }).catch(() => {
      setStatus('error')
    })
    // 💡 ປ່ຽນມາເປັນ Log ຂໍ້ມູນອອກມາເບິ່ງຢູ່ໜ້າ Console
    console.log("Form Submitted Data:", data);

    alert("ສົ່ງຂໍ້ຄວາມສຳເລັດແລ້ວ! ສາມາດກວດເບິ່ງຂໍ້ມູນຢູ່ Console ໄດ້ເລີຍ.");
    
    // ລ້າງຄ່າຂໍ້ມູນໃນຟອມຫຼັງຈາກກົດສົ່ງ
    e.target.reset(); 
  };

  return (
    <section id="contact" className="bg-[#0b0917] py-24 px-6 md:px-16 text-white">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-white text-4xl font-bold tracking-tight mb-1">
          Contact
        </h2>
        <div className="w-12 h-1 bg-purple-500 rounded mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ຝັ່ງຊ້າຍ */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-300 text-base leading-relaxed">
              I&apos;m currently looking to join a cross-functional team that
              values improving people&apos;s lives through accessible design. or
              have a project in mind? Let&apos;s connect.
            </p>

            <a
              href="mailto:ibrhaimmemon930@gmail.com"
              className="inline-block text-white text-lg font-medium hover:text-purple-400 transition-colors no-underline"
            >
              ibrhaimmemon930@gmail.com
            </a>

            <div className="flex items-center gap-5 pt-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/60 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ຝັ່ງຂວາ (Form) */}
          <div className="lg:col-span-7 bg-[#16113a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-300">Full Name *</label>
                  <input
                    type="text"
                    name="fullName" // 💡 ເພີ່ມ name ເພື່ອໃຫ້ດຶງຄ່າໄປເປັນ Key ໃນ Object
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-[#0b0917] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-300">Email *</label>
                  <input
                    type="email"
                    name="email" // 💡 ເພີ່ມ name
                    required
                    placeholder="jane@example.com"
                    className="w-full bg-[#0b0917] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-300">Subject *</label>
                <input
                  type="text"
                  name="subject" // 💡 ເພີ່ມ name
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-[#0b0917] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-300">Message *</label>
                <textarea
                  name="message" // 💡 ເພີ່ມ name
                  required
                  rows={4}
                  placeholder="Tell me about your project or ideas..."
                  className="w-full bg-[#0b0917] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-medium text-sm px-8 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-purple-600/20"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 text-center space-y-2">
          <p className="text-xs text-slate-500">
            © 2026 Chin.dev. Designed & built with ❤️ and lots of ☕
          </p>
          <a href="#" className="inline-block text-xs text-purple-400 hover:underline no-underline">
            Back to top ↑
          </a>
        </div>

      </div>
    </section>
  );
}