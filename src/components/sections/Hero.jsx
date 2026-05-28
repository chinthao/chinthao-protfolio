import { useEffect, useState } from "react";

const roles = [
  "Software Engineer.",
  "UI/UX Designer.",
  "Front-End Developer.",
  "Creative Thinker.",
];

function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), deletingSpeed);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return display;
}

export default function Hero() {
  const typedText = useTypingEffect(roles);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0e0a1f] flex flex-col justify-center px-6 md:px-20 pt-20 pb-16 overflow-hidden relative"
    >
      {/* Radial glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      {/* ─── Top: Avatar + intro card ─── */}
      <div className="relative max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-20">

        {/* Avatar */}
        <div className="relative flex-shrink-0">
          {/* Arrow label */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
            <svg viewBox="0 0 60 40" className="w-14 h-10 text-white/50" fill="none">
              <path d="M50 4 C30 4, 10 20, 18 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M14 30 L18 37 L24 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Avatar circle with glow */}
          <div className="relative w-52 h-52 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-purple-700/30 blur-2xl" />
            {/* Replace this div with your actual avatar image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-purple-500/20 bg-gradient-to-b from-purple-900/40 to-[#0e0a1f] flex items-end justify-center">
              {/* <img src="/avatar.png" alt="Ibrahim Memon" className="w-full h-full object-cover object-top" /> */}
              <span className="text-white/20 text-xs mb-4">Your Avatar</span>
            </div>
          </div>
        </div>

        {/* Intro text */}
        <div className="flex flex-col justify-center space-y-3 pt-4 md:pt-8">
          {/* Greeting */}
          <p className="text-white text-base font-medium">
            Hello! I Am{" "}
            <span className="text-purple-400 font-semibold">Ibrahim Memon</span>
          </p>

          {/* Tagline */}
          <div className="space-y-0">
            <p className="text-white/60 text-base">A Designer who</p>
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Judges a book
              <br />
              by its{" "}
              <span className="relative inline-block">
                {/* oval border around "cover" */}
                <span className="relative z-10 text-purple-400 px-2">cover</span>
                <svg
                  className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+10px)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 110 44"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <ellipse
                    cx="55" cy="22" rx="52" ry="19"
                    stroke="#7c3aed"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              ...
            </h1>
            <p className="text-white/40 text-sm mt-2">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
      </div>

      {/* ─── Bottom: Typing role + description ─── */}
      <div className="relative max-w-6xl mx-auto w-full space-y-6">

        {/* Typing headline */}
        <div>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
            I&apos;m a{" "}
            <span className="text-white">
              {typedText}
            </span>
            <span className="inline-block w-[3px] h-10 bg-white ml-1 align-middle animate-pulse" />
          </h2>

          {/* Current role line */}
          <p className="text-white/60 text-base mt-3 flex items-center gap-2 flex-wrap">
            Currently, I&apos;m a Software Engineer at
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              {/* Facebook icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Facebook
            </a>
            ,
          </p>
        </div>

        {/* Bio paragraph */}
        <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
          A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          <br />
          I make meaningful and delightful digital products that create an equilibrium
          <br />
          between user needs and business goals.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            className="border border-purple-500 text-purple-300 text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-md hover:bg-purple-500/15 transition-all duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-white/20 text-white/80 text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-md hover:bg-white/5 transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 select-none">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <svg viewBox="0 0 24 24" className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </section>
  );
}