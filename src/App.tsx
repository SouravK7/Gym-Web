import { useState, useEffect } from "react";

// ---------- Data ----------
const NAV = [
  { label: "Home", href: "#home" },
  { label: "Classes", href: "#classes" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { num: "12K+", label: "Active Members" },
  { num: "45", label: "Expert Trainers" },
  { num: "120+", label: "Weekly Classes" },
  { num: "8", label: "Locations" },
];

const FEATURES = [
  {
    icon: "💪",
    title: "Strength Training",
    desc: "Olympic platforms, racks, and free weights to build raw, functional power.",
  },
  {
    icon: "🔥",
    title: "HIIT & Cardio",
    desc: "High intensity circuits engineered to torch calories and crank up endurance.",
  },
  {
    icon: "🧘",
    title: "Yoga & Recovery",
    desc: "Mobility, breathwork, and recovery rooms to keep you moving for life.",
  },
  {
    icon: "🥗",
    title: "Nutrition Coaching",
    desc: "Personal meal plans tailored to your goals, lifestyle, and training load.",
  },
];

const CLASSES = [
  {
    name: "PowerLift",
    tag: "Strength",
    img: "https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    desc: "Heavy compound lifts under expert coaching.",
    time: "Mon · Wed · Fri",
  },
  {
    name: "Forge HIIT",
    tag: "Cardio",
    img: "https://images.pexels.com/photos/4854299/pexels-photo-4854299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    desc: "45-minute interval intensity that delivers real results.",
    time: "Tue · Thu · Sat",
  },
  {
    name: "Flow Yoga",
    tag: "Mobility",
    img: "https://images.pexels.com/photos/8436610/pexels-photo-8436610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    desc: "Move with breath. Recover, restore, and reset your body.",
    time: "Daily · 7AM & 6PM",
  },
  {
    name: "Battle Box",
    tag: "Combat",
    img: "https://images.pexels.com/photos/6390234/pexels-photo-6390234.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    desc: "Boxing drills, pad work, and conditioning. Hit hard, breathe harder.",
    time: "Mon · Wed · Sat",
  },
];

const TRAINERS = [
  {
    name: "Marcus Cole",
    role: "Head Strength Coach",
    img: "https://images.pexels.com/photos/5808332/pexels-photo-5808332.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Sienna Vega",
    role: "HIIT & Mobility",
    img: "https://images.pexels.com/photos/15586393/pexels-photo-15586393.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Devon Riggs",
    role: "Performance Coach",
    img: "https://images.pexels.com/photos/10551491/pexels-photo-10551491.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    name: "Asher Knox",
    role: "Bodybuilding Specialist",
    img: "https://images.pexels.com/photos/10305231/pexels-photo-10305231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: 29,
    period: "/mo",
    desc: "Get into the rhythm.",
    features: ["Gym floor access", "2 group classes / week", "Locker access", "App workouts"],
    cta: "Start Training",
    highlight: false,
  },
  {
    name: "Athlete",
    price: 59,
    period: "/mo",
    desc: "Most popular for serious training.",
    features: [
      "Unlimited gym access",
      "Unlimited classes",
      "1 PT session / month",
      "Nutrition app",
      "Sauna & recovery zone",
    ],
    cta: "Join Athlete",
    highlight: true,
  },
  {
    name: "Elite",
    price: 119,
    period: "/mo",
    desc: "Full coaching, total results.",
    features: [
      "Everything in Athlete",
      "4 PT sessions / month",
      "Custom meal plan",
      "Body composition scans",
      "Guest passes",
    ],
    cta: "Go Elite",
    highlight: false,
  },
];

const TESTIMONIALS = [
  {
    name: "Jordan M.",
    quote:
      "Lost 28 lbs in 5 months and feel stronger than I did in my twenties. The coaches actually care.",
    rating: 5,
  },
  {
    name: "Priya S.",
    quote:
      "The community is unreal. Walking in at 6AM feels like coming home. Best decision I made this year.",
    rating: 5,
  },
  {
    name: "Tom R.",
    quote:
      "Hit a 405 lb deadlift thanks to the programming. Equipment is top-tier and the gym is always spotless.",
    rating: 5,
  },
];

// ---------- Components ----------
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="w-9 h-9 grid place-items-center bg-lime-400 text-black font-black rounded-md">
            IF
          </span>
          <span className="text-white font-black tracking-widest">
            IRON<span className="text-lime-400">FORGE</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm uppercase tracking-wider text-zinc-300 hover:text-lime-400 transition-colors font-semibold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="hidden md:inline-flex bg-lime-400 hover:bg-lime-300 text-black font-bold px-5 py-2.5 rounded-md text-sm uppercase tracking-wider transition-colors"
        >
          Join Now
        </a>

        <button
          aria-label="Menu"
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-lime-400 uppercase tracking-wider text-sm font-semibold"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="bg-lime-400 text-black font-bold px-5 py-2.5 rounded-md text-sm uppercase tracking-wider text-center"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/17956264/pexels-photo-17956264.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            New members get 7 days free
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] uppercase">
            Unleash the
            <br />
            <span className="text-lime-400">beast</span> within
          </h1>

          <p className="mt-6 text-lg text-zinc-300 max-w-xl leading-relaxed">
            More than a gym. IRONFORGE is where ordinary people forge
            extraordinary bodies. World-class equipment, elite coaches, and a
            community that pushes you harder.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="bg-lime-400 hover:bg-lime-300 text-black font-bold px-8 py-4 rounded-md uppercase tracking-wider transition-all hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="#classes"
              className="border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-md uppercase tracking-wider transition-colors"
            >
              View Classes
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  {s.num}
                </div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side label */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right text-xs uppercase tracking-[0.4em] text-zinc-500">
        Est. 2014 — Train Hard
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-zinc-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-lime-400 text-xs uppercase tracking-[0.3em] font-bold mb-3">
              What we offer
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase max-w-xl leading-tight">
              Built for every kind of <span className="text-lime-400">athlete</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md">
            Whether you're chasing your first pull-up or your tenth marathon, we
            have the tools, classes, and people to get you there.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative bg-zinc-900 border border-white/5 rounded-xl p-7 hover:border-lime-400/50 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-5">{f.icon}</div>
              <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-2">
                {f.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              <div className="absolute top-7 right-7 text-zinc-700 group-hover:text-lime-400 transition-colors">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Classes() {
  return (
    <section id="classes" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-lime-400 text-xs uppercase tracking-[0.3em] font-bold mb-3">
            Our Programs
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase">
            Find your <span className="text-lime-400">fight</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLASSES.map((c) => (
            <div
              key={c.name}
              className="group relative h-96 rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={c.img}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-lime-400 text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                {c.tag}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-black uppercase mb-1">
                  {c.name}
                </h3>
                <p className="text-zinc-300 text-sm mb-3">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lime-400 text-xs uppercase tracking-wider font-bold">
                    {c.time}
                  </span>
                  <span className="text-white text-xl transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section id="trainers" className="bg-zinc-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-lime-400 text-xs uppercase tracking-[0.3em] font-bold mb-3">
              The team
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
              Coaches who <span className="text-lime-400">push</span> you
            </h2>
          </div>
          <a
            href="#contact"
            className="text-zinc-300 hover:text-lime-400 text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2"
          >
            Meet all trainers <span>→</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAINERS.map((t) => (
            <div key={t.name} className="group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-lime-400 text-xs uppercase tracking-wider font-bold">
                    {t.role}
                  </div>
                  <h3 className="text-white text-xl font-black uppercase mt-1">
                    {t.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-black py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-lime-400 text-xs uppercase tracking-[0.3em] font-bold mb-3">
            Membership
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase">
            Pick your <span className="text-lime-400">plan</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            No contracts. Cancel anytime. Every plan includes a 7-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 border transition-all ${
                p.highlight
                  ? "bg-lime-400 border-lime-400 text-black scale-105 shadow-2xl shadow-lime-400/20"
                  : "bg-zinc-900 border-white/10 text-white hover:border-lime-400/40"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-lime-400 text-xs uppercase tracking-wider font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="uppercase tracking-wider text-xs font-bold opacity-70">
                {p.desc}
              </div>
              <h3
                className={`text-2xl font-black uppercase mt-2 ${
                  p.highlight ? "text-black" : "text-white"
                }`}
              >
                {p.name}
              </h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-black">${p.price}</span>
                <span className="opacity-70">{p.period}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 ${
                        p.highlight ? "text-black" : "text-lime-400"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={p.highlight ? "text-black/80" : "text-zinc-300"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full font-bold uppercase tracking-wider py-3.5 rounded-md transition-colors ${
                  p.highlight
                    ? "bg-black text-lime-400 hover:bg-zinc-900"
                    : "bg-lime-400 text-black hover:bg-lime-300"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-zinc-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-lime-400 text-xs uppercase tracking-[0.3em] font-bold mb-3">
            Real results
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase">
            From our <span className="text-lime-400">tribe</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-zinc-900 border border-white/5 rounded-xl p-7 hover:border-lime-400/30 transition-colors"
            >
              <div className="text-lime-400 mb-4">
                {"★".repeat(t.rating)}
              </div>
              <p className="text-zinc-300 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-lime-400 text-black grid place-items-center font-black">
                  {t.name[0]}
                </div>
                <div className="text-white font-bold">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7672106/pexels-photo-7672106.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1800')",
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-6xl font-black text-white uppercase leading-tight">
          Stop wishing.
          <br />
          <span className="text-lime-400">Start lifting.</span>
        </h2>
        <p className="text-zinc-300 mt-6 max-w-xl mx-auto">
          Your free 7-day trial includes full gym access, a personal walkthrough,
          and one PT session. No card required.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Welcome to IRONFORGE! We'll be in touch.");
          }}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-zinc-400 px-5 py-4 rounded-md focus:outline-none focus:border-lime-400"
          />
          <button
            type="submit"
            className="bg-lime-400 hover:bg-lime-300 text-black font-bold px-8 py-4 rounded-md uppercase tracking-wider transition-colors"
          >
            Claim Trial
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 grid place-items-center bg-lime-400 text-black font-black rounded-md">
                IF
              </span>
              <span className="text-white font-black tracking-widest">
                IRON<span className="text-lime-400">FORGE</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Premium fitness clubs built for people who refuse to settle for
              average.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-lime-400 transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-4">
              Visit
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>1245 Iron St.</li>
              <li>Brooklyn, NY 11201</li>
              <li>Open 24 / 7</li>
              <li className="text-lime-400">(555) 010-FORGE</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-4">
              Follow
            </h4>
            <div className="flex gap-3">
              {["IG", "TT", "YT", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 grid place-items-center bg-zinc-900 border border-white/10 rounded-md text-zinc-300 font-bold text-xs hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} IRONFORGE Fitness Club. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lime-400">Privacy</a>
            <a href="#" className="hover:text-lime-400">Terms</a>
            <a href="#" className="hover:text-lime-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- App ----------
export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans antialiased selection:bg-lime-400 selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <Trainers />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
