import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Mic2, Ticket, Network, Users, Star, Store, Megaphone, Sparkles,
  Check, Instagram, MessageCircle, Phone, Mail, ArrowRight, MapPin,
} from "lucide-react";
import logoAsset from "@/assets/aadhya-logo.asset.json";
import heroConcert from "@/assets/hero-concert-gold.jpg";
import gNavratri from "@/assets/gallery-navratri.jpg";
import gArtist from "@/assets/gallery-artist.jpg";
import gHospitality from "@/assets/gallery-hospitality.jpg";
import gCrowd from "@/assets/gallery-crowd.jpg";
import gPasses from "@/assets/gallery-passes.jpg";
import gConcert from "@/assets/gallery-concert.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aadhya Events — Ahmedabad's Premier Event Management Network" },
      { name: "description", content: "Concerts, Navratri festivals, pass distribution, event manpower, artist management & B2B reselling — Aadhya Events delivers unforgettable experiences." },
      { property: "og:title", content: "Aadhya Events — Creating Experiences. Building Communities." },
      { property: "og:description", content: "Ahmedabad's trusted event management, pass distribution & manpower network." },
      { property: "og:image", content: heroConcert },
    ],
  }),
  component: AadhyaLanding,
});

const WHATSAPP_URL = "https://chat.whatsapp.com/DAfc2GlccG2DxLh86XflW9";
const INSTAGRAM_URL = "https://www.instagram.com/aadhya.events";
const PHONE = "9227117871";
const EMAIL = "aadhya.events0512@gmail.com";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

function AadhyaLanding() {
  return (
    <div id="home" className="relative min-h-screen overflow-x-hidden text-foreground">
      <AmbientBackdrop />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChoose />
      <Community />
      <Gallery />
      <ContactCTA />
      <Footer />
    </div>
  );
}

/* --------------------------- Ambient backdrop --------------------------- */
function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0" style={{ background: "var(--gradient-ivory)" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />
      <div
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 -right-40 h-[32rem] w-[32rem] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--emerald-glow) 0%, transparent 70%)" }}
      />
    </div>
  );
}

/* --------------------------- Navbar --------------------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-2" : "glass-nav py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Aadhya Events" className="h-12 w-12 rounded-full object-cover ring-1 ring-[var(--gold)]/40" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-wide" style={{ color: "var(--emerald-deep)" }}>AADHYA EVENTS</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold-deep)]">Elegance In Every Event</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-[var(--emerald-deep)] transition-colors hover:text-[var(--gold-deep)]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-gold hover:btn-gold-hover hidden rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" /> Join Community
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-md border border-[var(--gold)]/30 p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex h-5 w-5 flex-col justify-between">
              <span className="h-0.5 w-full bg-[var(--gold)]" />
              <span className="h-0.5 w-full bg-[var(--gold)]" />
              <span className="h-0.5 w-full bg-[var(--gold)]" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-nav lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-base font-semibold text-[var(--emerald-deep)] hover:text-[var(--gold-deep)]">
                {n.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold mt-2 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
              <Sparkles className="h-4 w-4" /> Join Community
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* --------------------------- Hero --------------------------- */
function Hero() {
  return (
    <section className="on-dark relative isolate flex min-h-screen items-center pt-28">
      <div className="absolute inset-0 -z-10">
        <img src={heroConcert} alt="" className="h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a1208]/85 to-[#0b0805]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[var(--label-gold)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Ahmedabad · Est. Event Network
          </div>
          <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-foreground">Creating Experiences.</span>
            <br />
            <span className="text-gold-gradient italic">Building Communities.</span>
          </h1>
          <p className="mt-7 max-w-2xl font-display text-2xl font-light leading-[1.5] tracking-[0.005em] text-foreground/90 sm:text-3xl">
            Aadhya Events is Ahmedabad's trusted partner for event management,
            pass distribution, and event manpower — from concerts and Navratri
            festivals to artist management and large-scale productions, we
            craft <em className="text-gold-gradient not-italic font-medium">unforgettable experiences</em>.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold hover:btn-gold-hover">
              <MessageCircle className="h-4 w-4" /> Join WhatsApp Community
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]">
              Contact Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
            <span>Concerts</span>
            <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
            <span>Navratri</span>
            <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
            <span>Artist Mgmt</span>
            <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
            <span>Pass Paradise</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Stats --------------------------- */
function useCountUp(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function StatNumber({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const { val, ref } = useCountUp(target);
  return <div ref={ref} className="font-display text-5xl font-semibold text-gold-gradient sm:text-6xl">{val}{suffix}</div>;
}

function Stats() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--label-gold)]">Our Growing Network</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Trusted across <em className="text-gold-gradient not-italic">Ahmedabad</em></h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {[
            { n: 2000, s: "+", label: "Community Members" },
            { n: 200, s: "+", label: "Volunteers & Event Crew" },
            { n: 50, s: "+", label: "B2B Pass Partners" },
            { n: 0, s: "Multiple", label: "Events & Festivals Managed" },
          ].map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 text-center transition hover:-translate-y-1">
              {s.n > 0 ? <StatNumber target={s.n} suffix={s.s} /> : (
                <div className="font-display text-5xl font-semibold text-gold-gradient sm:text-6xl">{s.s}</div>
              )}
              <div className="mt-3 text-sm tracking-wide text-foreground/75">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- About --------------------------- */
function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative">
          <div className="glass-card relative overflow-hidden rounded-3xl">
            <img src={gConcert} alt="Live concert" width={1280} height={1024} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--label-gold)]">About Us</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Crafting <em className="text-gold-gradient not-italic">Unforgettable</em> Experiences
          </h2>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>Aadhya Events is a full-service event management and promotions company dedicated to creating memorable experiences through concerts, cultural festivals, corporate events, exhibitions, artist management, and large-scale celebrations.</p>
            <p>Beyond event execution, we specialize in pass distribution, ticket sales, promotional partnerships, and event manpower solutions, helping organizers successfully manage and scale their events.</p>
            <p>Through our extensive network, we provide trained and reliable manpower for crowd management, hospitality, registration desks, backstage operations, artist coordination, vendor support, and overall event execution.</p>
            <p>We also operate <span className="text-[var(--gold)] font-semibold">Pass Paradise</span>, our B2B pass distribution network that connects event organizers with resellers, boosting event reach, attendance, and sales while creating earning opportunities for our partners.</p>
            <p>From celebrity concerts and live shows to grand Navratri festivals and brand activations, Aadhya Events delivers end-to-end solutions with professionalism, creativity, and attention to detail.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Services --------------------------- */
const SERVICES = [
  { icon: Mic2, title: "Concert & Live Event Management", desc: "Full-stack execution for concerts, live shows and large-scale productions." },
  { icon: Ticket, title: "Pass Distribution & Ticket Sales", desc: "Reach, sales and on-ground distribution across Ahmedabad." },
  { icon: Network, title: "B2B Pass Reselling — Pass Paradise", desc: "Our reseller network that scales attendance and partner earnings." },
  { icon: Users, title: "Event Manpower Solutions", desc: "Trained crew for crowd, registration, hospitality and backstage." },
  { icon: Star, title: "Artist Management & Hospitality", desc: "Coordination, logistics and white-glove artist hospitality." },
  { icon: Store, title: "Stall Booking & Vendor Management", desc: "End-to-end vendor onboarding and stall operations." },
  { icon: Megaphone, title: "Event Promotions & Marketing", desc: "On-ground, digital and influencer-led event promotions." },
  { icon: Sparkles, title: "Navratri Festival Management", desc: "Ahmedabad's signature garba festivals, executed at scale." },
];

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--label-gold)]">What We Do</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Our <em className="text-gold-gradient not-italic">Services</em></h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75">End-to-end event solutions designed for organizers, brands and partners.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <div key={i} className="glass-card group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-[var(--gold)]/50">
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 transition group-hover:opacity-100"
                style={{ background: "var(--gradient-gold)" }}
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/10">
                <s.icon className="h-6 w-6 text-[var(--gold)]" />
              </div>
              <h3 className="mt-5 font-display text-xl leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Why choose --------------------------- */
const WHY = [
  "End-to-End Event Solutions",
  "Strong Pass Distribution Network",
  "Professional Event Manpower Team",
  "Experienced Crowd & Hospitality Management",
  "Trusted by Event Organizers & Partners",
  "Seamless Event Execution",
];
function WhyChoose() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-10 sm:p-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--label-gold)]">Why Choose Us</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Why Choose <em className="text-gold-gradient not-italic">Aadhya Events?</em>
              </h2>
              <p className="mt-5 max-w-md text-foreground/75">A network built on trust, executed with precision — across every kind of event.</p>
              <a href="#contact" className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:btn-gold-hover">
                Work With Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {WHY.map((w) => (
                <li key={w} className="flex items-start gap-3 rounded-xl border border-[var(--gold)]/15 bg-white/[0.03] p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
                    <Check className="h-3.5 w-3.5 text-[var(--emerald-deep)]" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-foreground/90">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Community --------------------------- */
function Community() {
  return (
    <section id="community" className="relative py-24">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-5xl rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--label-gold)]">The Inner Circle</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Join Ahmedabad's <em className="not-italic font-bold text-glow-gold" style={{ color: "var(--gold-deep)" }}>Fast-Growing</em> Event Community
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-foreground/80">
            Get event updates, pass offers, concert announcements, Navratri launches, stall opportunities, and exclusive event access.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* WhatsApp */}
          <div className="glass-card group relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "var(--gradient-gold)" }}>
                <MessageCircle className="h-7 w-7 text-[var(--emerald-deep)]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--label-gold)]">WhatsApp Community</p>
                <h3 className="font-display text-2xl">Instant Event Updates</h3>
              </div>
            </div>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Get instant updates on concerts, Navratri events, pass launches, stall opportunities, manpower requirements, and exclusive offers.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:btn-gold-hover">
                <MessageCircle className="h-4 w-4" /> Join WhatsApp Community
              </a>
              <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-[var(--gold)]/30 bg-white p-2">
                <img alt="QR code" className="h-full w-full object-contain"
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&bgcolor=ffffff&color=0F4D32&data=${encodeURIComponent(WHATSAPP_URL)}`} />
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="glass-card group relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "var(--gradient-gold)" }}>
                <Instagram className="h-7 w-7 text-[var(--emerald-deep)]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--label-gold)]">Instagram</p>
                <h3 className="font-display text-2xl">Behind The Scenes</h3>
              </div>
            </div>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Explore our events, artist collaborations, behind-the-scenes moments, event highlights, and latest announcements.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:btn-gold-hover">
                <Instagram className="h-4 w-4" /> Follow @aadhya.events
              </a>
              <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-[var(--gold)]/30 bg-white p-2">
                <img alt="QR code" className="h-full w-full object-contain"
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&bgcolor=ffffff&color=0F4D32&data=${encodeURIComponent(INSTAGRAM_URL)}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Gallery --------------------------- */
const GALLERY = [
  { src: gConcert, cat: "Concerts", h: "row-span-2" },
  { src: gNavratri, cat: "Navratri", h: "" },
  { src: gArtist, cat: "Artist Management", h: "" },
  { src: gHospitality, cat: "Hospitality", h: "" },
  { src: gCrowd, cat: "Crowd Management", h: "row-span-2" },
  { src: gPasses, cat: "Pass Distribution", h: "" },
];

function Gallery() {
  const cats = ["Concerts","Navratri","Artist Management","Hospitality","Crowd Management","Pass Distribution"];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--label-gold)]">Gallery</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Moments We've <em className="text-gold-gradient not-italic">Created</em></h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <span key={c} className="rounded-full border border-[var(--gold)]/25 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-wider text-foreground/80">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-2xl ${g.h}`}>
              <img src={g.src} alt={g.cat} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--emerald-deep)]/95 via-[var(--emerald-deep)]/45 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-xl font-semibold text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]">{g.cat}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Contact CTA --------------------------- */
function ContactCTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-16">
          <div aria-hidden className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-radial-glow)" }} />
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--label-gold)]">Let's Talk</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            Planning an <em className="text-gold-gradient not-italic">Event?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-foreground/80">
            Need event management, pass distribution, manpower, artist coordination, or stall booking? Let's craft something unforgettable together.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${PHONE}`} className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold hover:btn-gold-hover">
              <Phone className="h-4 w-4" /> Get In Touch
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-[var(--gold)]/10">
              <Mail className="h-4 w-4" /> Email Us
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Phone, label: "Call", value: PHONE, href: `tel:${PHONE}` },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MapPin, label: "Based In", value: "Ahmedabad, India" },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl border border-[var(--gold)]/20 bg-white/[0.03] p-5 text-left">
                <c.icon className="h-5 w-5 text-[var(--gold)]" />
                <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[var(--label-gold)]">{c.label}</div>
                {c.href ? (
                  <a href={c.href} className="mt-1 block break-all text-sm text-foreground/90 hover:text-[var(--gold)]">{c.value}</a>
                ) : (
                  <div className="mt-1 text-sm text-foreground/90">{c.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Footer --------------------------- */
function Footer() {
  return (
    <footer className="on-dark relative mt-12 border-t border-[var(--gold)]/20" style={{ background: "var(--gradient-emerald)" }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="Aadhya Events" className="h-12 w-12 rounded-full ring-1 ring-[var(--gold)]/40" />
              <div>
                <div className="font-display text-lg text-gold-gradient">AADHYA EVENTS</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--label-gold)]/80">Elegance In Every Event</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-foreground/70 leading-relaxed">
              Aadhya Events — Creating Events, Managing Experiences, Driving Attendance, and Delivering Excellence.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-[var(--gold)]">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[var(--gold)]" /> <a href={`tel:${PHONE}`} className="hover:text-[var(--gold)]">{PHONE}</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--gold)]" /> <a href={`mailto:${EMAIL}`} className="break-all hover:text-[var(--gold)]">{EMAIL}</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--gold)]" /> Ahmedabad, India</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-[var(--gold)]">Follow</h4>
            <div className="mt-4 flex gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--emerald-deep)]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--emerald-deep)]">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-[var(--gold)]">{n.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--gold)]/15 pt-6 text-xs text-foreground/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Aadhya Events. All rights reserved.</div>
          <div>Crafted in Ahmedabad · Powered by Pass Paradise</div>
        </div>
      </div>
    </footer>
  );
}
