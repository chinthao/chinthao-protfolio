import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  
  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
       
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -40% 0px", 
      threshold: 0.2,
    });

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect(); 
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0917]/80 backdrop-blur-md z-50 border-b border-white/5 px-6 md:px-16 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white text-xl font-bold cursor-pointer tracking-tight select-none hover:opacity-80 transition-opacity"
        >
          &lt;<span className="text-purple-400">Chin</span>.dev /&gt;
        </div>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative py-1 cursor-pointer group
                  ${isActive ? "text-purple-400 font-semibold" : "text-slate-400 hover:text-white"}`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-purple-500 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>
            );
          })}
        </div>

        <div className="hidden md:block">
          <a
            href="#resume" // 💡 ສາມາດປ່ຽນເປັນລິ້ງ Google Drive ທີ່ຝາກໄຟລ໌ PDF Resume ຂອງທ່ານໄດ້
            className="border border-purple-500/50 text-white text-sm font-medium px-5 py-2 rounded-xl hover:bg-purple-500/10 transition-all flex items-center gap-2 no-underline cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b0917] border-b border-white/5 py-5 px-6 flex flex-col gap-4 shadow-2xl animate-fadeIn">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)} 
              className={`text-left text-sm py-2 transition-colors cursor-pointer
                ${activeSection === item.id ? "text-purple-400 font-bold" : "text-slate-300 hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}

          <a 
            href="#resume" 
            className="border border-purple-500/50 text-center text-white text-sm py-2.5 rounded-xl hover:bg-purple-500/10 transition-all no-underline mt-2 cursor-pointer"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}