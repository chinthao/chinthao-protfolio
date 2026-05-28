import { Award, Briefcase, Code, Download, FlaskConical, Phone, User, Menu, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'

export default function Navbar() {
  // 1. ເພີ່ມ State ສໍາລັບເປີດ/ປິດ ເມນູມືຖື
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  const link = [
    {name: "About", href: "#about", icon: <User size={15}/>},
    {name: "Skills", href: "#skills", icon: <FlaskConical size={15}/>}, // ແປງຊື່ຈາກ kills ເປັນ Skills
    {name: "Experience", href: "#experience", icon: <Briefcase size={15}/>}, // ແປງຊື່ໃຫ້ຖືກ
    {name: "Certificates", href: "#certificates", icon: <Award size={15}/>}, // ແປງຊື່ໃຫ້ຖືກ
    {name: "Contact", href: "#contact", icon: <Phone size={15}/>},
  ]

  // 2. ເພີ່ມ function Scrollspy ກວດຈັບຕໍາແໜ່ງ Section ເມື່ອເລື່ອນໜ້າຈໍ
  useEffect(() => {
    const sections = link.map((l) => l.href.replace("#", ""));
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { 
          if (entry.isIntersecting) {
            // ແປງ id ໃຫ້ກັບມາເປັນຊື່ເມນູ (ເຊັ່ນ: 'about' -> 'About')
            const currentLink = link.find(l => l.href === `#${id}`);
            if (currentLink) setActive(currentLink.name);
          } 
        },
        { threshold: 0.5 } // ເມື່ອ Section ປະກົດຂຶ້ນມາ 50%
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-white/10 bg-purple-600`}>
  
      <div className="max-w-5xl mx-auto flex items-center justify-between h-[68px] px-4 md:h-[80px]">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div>
            <Code size={24} color="white"/>
          </div>
          <span className='text-white text-[15px] font-medium tracking-wide'>
            Chin<span className="text-purple-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {link.map(({name, icon, href})=>(
            <li key={name} className="">
              <a href={href} className={`relative flex items-center gap-1 px-3.5 py-3 
               text-sm rounded-lg no-underline transition-all duration-300
               ${active === name ? 'text-white' : 'text-white/50 hover:text-white'} 
              `}
              onClick={() => setActive(name)}
              >
                {icon}{name}

                {active === name && 
                    <span className='absolute bottom-1 left-1/2 -translate-x-1/2  
                                    w-10 h-0.5 bg-purple-400 rounded-full'/>
                }
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button (Desktop) */}
        <div className="hidden md:flex items-center gap-1">
          <button className='flex items-center gap-1 px-4 py-2 rounded-lg border
           border-white/50 bg-transparent hover:bg-white/10 transition-all
           duration-200 cursor-pointer text-purple-200'>
            <Download size={15} /> Resume
          </button>
        </div>

        {/* 3. ເພີ່ມປຸ່ມ Hamburger Menu ສໍາລັບມືຖື */}
        <button 
          className="md:hidden text-white p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* 4. ເພີ່ມໜ້າຈໍເມນູສະແດງຜົນໃນມືຖື (Mobile Drawer) */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-purple-600 px-4 py-3 flex flex-col gap-1.5 animate-fadeIn">
          {link.map(({name, icon, href}) => (
            <a
              key={name}
              href={href}
              onClick={() => { 
                setActive(name); 
                setMenuOpen(false); // ກົດແລ້ວໃຫ້ປິດເມນູມືຖືທັນທີ
              }}
              className={`flex items-center gap-2 px-4 py-3 text-sm rounded-lg no-underline transition-all duration-200
                ${active === name ? 'bg-white/10 text-white font-medium' : 'text-white/70 hover:bg-white/5 hover:text-white'}
              `}
            >
              {icon}
              {name}
            </a>
          ))}
          
          {/* ປຸ່ມ Resume ໃນມືຖື */}
          <button className='mt-2 flex items-center justify-center gap-1 w-full px-4 py-2.5 rounded-lg border
           border-white/50 bg-transparent hover:bg-white/10 transition-all duration-200 cursor-pointer text-purple-200 text-sm'>
            <Download size={15} /> Resume
          </button>
        </div>
      )}

    </nav>
  )
}