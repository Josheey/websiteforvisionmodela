import { createFileRoute } from "@tanstack/react-router";

import heroModel from "@/assets/hero-model.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const TITLE = "Home Vision Models | 3D-Printed Architectural House Models";
const DESCRIPTION =
  "Home Vision Models creates 3D-printed architectural scale models with removable roofs and miniature furniture for Australian builders and developers. Based in Mount Gambier, SA.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "sales@homevisionmodels.com";

const nav = [
  { label: "About", href: "#about" },
  { label: "Builders", href: "#builders" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

const steps = [
  {
    n: "01",
    title: "Send your plans",
    body: "Email your floor plans, elevations or CAD files. PDF, DWG, SKP and Revit exports all work.",
  },
  {
    n: "02",
    title: "3D modelling",
    body: "We build an accurate digital model to your chosen scale and send renders for approval before printing.",
  },
  {
    n: "03",
    title: "Printing & finishing",
    body: "Each model is printed in high-resolution detail, hand finished, sealed and mounted on a display base.",
  },
  {
    n: "04",
    title: "Delivered Australia-wide",
    body: "Protective packaging and freight to your display home, office or client, anywhere in Australia.",
  },
];

const packages = [
  {
    name: "Concept",
    scale: "1:100 scale",
    priceFrom: "from $690",
    body: "A clean massing model of the home with a fixed roof and site base. Ideal for early client conversations and quick approvals.",
    items: ["Exterior detail & openings", "Mounted display base", "Single dwelling", "2–3 week turnaround"],
  },
  {
    name: "Signature",
    scale: "1:75 scale",
    priceFrom: "from $1,290",
    body: "Our most popular build. Removable roof reveals the full floor plan, internal walls and room proportions at a glance.",
    items: [
      "Removable roof section",
      "Full internal wall layout",
      "Starter furniture set",
      "Landscaped display base",
    ],
    featured: true,
  },
  {
    name: "Estate",
    scale: "1:50 & custom",
    priceFrom: "from $2,900",
    body: "Multi-dwelling and display village models for developers, land estates and sales suites, built to your masterplan.",
    items: ["Multiple dwellings & streetscape", "Lot numbering & signage", "Vehicles and landscaping", "Custom cabinetry & cases"],
  },
];

const accessories = [
  { title: "Miniature furniture", body: "Sofas, beds, dining settings, cabinetry and appliances scaled to each room." },
  { title: "Vehicles", body: "Cars, utes, boats and caravans to test garage sizing and driveway clearance." },
  { title: "Household items", body: "Rugs, planters, bins, BBQs and outdoor settings for a lived-in feel." },
  { title: "Landscaping", body: "Trees, decking, pools, fencing and driveways across the site base." },
  { title: "Figures & pets", body: "Scale figures that make room proportions instantly readable." },
  { title: "Display cases", body: "Acrylic covers, timber plinths and engraved plaques for showrooms." },
];

const gallery = [
  { src: gallery1, alt: "3D-printed house model with roof removed showing furnished interior rooms" },
  { src: gallery3, alt: "White two-storey 3D-printed scale model on a charcoal display base" },
  { src: gallery2, alt: "Miniature grey scale furniture pieces and a model car" },
  { src: gallery5, alt: "Residential estate of white scale model homes on a display base" },
  { src: gallery4, alt: "Architect holding a white 3D-printed house model beside plans" },
  { src: gallery6, alt: "3D printer producing a white architectural house model" },
];

const faqs = [
  {
    q: "What files do you need to build a model?",
    a: "Floor plans and elevations are enough to start. PDF, DWG, SKP, Revit or IFC files all work, and we can also work from marketing brochures or hand drawings if that is all you have.",
  },
  {
    q: "How long does a model take?",
    a: "A single-dwelling model typically takes two to three weeks from plan approval. Estate and multi-dwelling projects vary with size, and rush timelines can usually be arranged.",
  },
  {
    q: "Do the roofs really come off?",
    a: "Yes. On our Signature and Estate builds the roof lifts away as a single piece, exposing the internal walls so clients can read the floor plan and walk through the home in their mind.",
  },
  {
    q: "Can furniture be moved around?",
    a: "Every miniature furniture piece is loose, so buyers can rearrange lounges, beds and dining settings inside the model and settle on a layout before construction begins.",
  },
  {
    q: "Do you deliver outside South Australia?",
    a: "We are based in Mount Gambier and freight models to builders and developers in every state and territory, fully packed in protective custom packaging.",
  },
  {
    q: "How much does a model cost?",
    a: "Pricing depends on scale, size and the level of interior detail. Email your plans and we will send a fixed quote, usually within two business days.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
            Home Vision <span className="text-muted-foreground">Models</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="border border-charcoal bg-charcoal px-4 py-2 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Request a quote
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
            <div>
              <p className="eyebrow">Mount Gambier, South Australia</p>
              <h1 className="mt-5 text-4xl leading-[1.03] sm:text-6xl">Bring Your Home Designs to Life</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Precision 3D-printed architectural scale models for residential builders and developers
                across Australia. Removable roofs reveal the full floor plan, and miniature furniture,
                vehicles and household items let your clients experiment with layouts long before the
                slab is poured.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="border border-charcoal bg-charcoal px-6 py-3 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-85"
                >
                  Request a quote
                </a>
                <a
                  href="#gallery"
                  className="border border-border px-6 py-3 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-secondary"
                >
                  View models
                </a>
              </div>
            </div>
            <figure className="relative">
              <img
                src={heroModel}
                alt="3D-printed architectural scale model of a house with the roof lifted off, showing the furnished floor plan"
                width={1600}
                height={1104}
                className="w-full object-cover"
              />
              <figcaption className="mt-3 text-xs text-muted-foreground">
                Signature build, 1:75 scale — removable roof and loose furniture.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Home Vision Models</h2>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground">
                We are a South Australian studio turning building plans into tangible, hand-finished
                scale models that clients can pick up, open and understand in seconds.
              </p>
              <p className="leading-relaxed">
                Plans, renders and virtual walkthroughs are useful, but many buyers still struggle to
                translate a 2D drawing into the home they will live in. A physical model removes that
                guesswork. Lift the roof off and the entire floor plan is there — room sizes, hallway
                widths, sightlines from the kitchen to the living area, and how the home sits on the block.
              </p>
              <p className="leading-relaxed">
                Every model is drafted digitally from your documentation, printed at high resolution,
                then hand finished and mounted. We work with volume builders, custom home builders,
                architects, developers and private clients right across Australia.
              </p>
              <dl className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-4">
                {[
                  ["1:200 – 1:25", "Scales offered"],
                  ["2-3 wks", "Typical build"],
                  ["Australia", "Delivery"],
                  ["100%", "Made in SA"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-xl text-foreground">{value}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Builder Solutions */}
        <section id="builders" className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="eyebrow">Builder solutions</p>
            <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl">
              One model impresses a client. A full range wins the contract.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Builders who commission a set of models for their whole portfolio don't just
              walk clients through a single design — they let families compare layouts side
              by side, upsell on the spot, and leave the sales suite certain of their choice.
              The more designs you have on the table, the more likely a visitor finds their
              home.
            </p>

            <div className="mt-14 border border-border bg-background">
              <div className="grid gap-px sm:grid-cols-3">
                {[
                  ["Walk every buyer into their home", "With your full range on display, clients compare single and double-storey options, facades and floor plans in minutes — and commit sooner."],
                  ["Upsell at the model, not the brochure", "Premium inclusions and upgraded layouts are obvious when buyers can lift a roof and see the space. Higher-margin options sell themselves."],
                  ["A display suite that sells itself", "A row of finished models turns an empty room into a destination. Visitors stay longer, bring family back, and refer friends."],
                ].map(([title, body]) => (
                  <div key={title} className="p-7">
                    <h3 className="text-lg">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Display-home centrepiece", "Your hero design on the reception desk gives walk-ins something to hold and remember."],
                ["Estate & streetscape sets", "Masterplan models with lot numbering and landscaping for sales suites and display villages."],
                ["Trade-show & expo kits", "Portable, cased models built to draw a crowd at home shows and open days."],
                ["Handover keepsakes", "A finished miniature of the completed home — a gift that keeps referrals coming."],
              ].map(([title, body]) => (
                <article key={title} className="bg-background p-7">
                  <h3 className="text-base">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid border border-charcoal bg-charcoal text-primary-foreground lg:grid-cols-[1.4fr_1fr]">
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl">Order your whole range at once</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-85">
                  Commissioning a full set in one run keeps scales, materials and finish
                  consistent across every display — and unlocks volume pricing. Bring us
                  your range of designs and we'll build a coherent collection that travels
                  together from sales suite to handover.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 border-t border-primary-foreground/15 p-8 sm:p-10 lg:border-l lg:border-t-0">
                {[
                  "Consistent scale & finish across your portfolio",
                  "Volume pricing on sets of 3 or more",
                  "Priority build slot & dedicated production run",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <span className="opacity-60">—</span>
                    <span className="opacity-90">{item}</span>
                  </div>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-block w-fit border border-primary-foreground/40 px-5 py-3 text-center text-xs uppercase tracking-[0.16em] transition-colors hover:bg-primary-foreground hover:text-charcoal"
                >
                  Request a portfolio quote
                </a>
              </div>
            </div>

            <div className="mt-16 border-t-2 border-charcoal bg-background">
              <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-14 text-center sm:py-16">
                <p className="eyebrow">For residential builders</p>
                <h3 className="max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  Put your whole range on the table. Start with a single quote.
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Tell us how many designs you're selling and we'll build a tailored proposal —
                  with volume pricing, consistent scales and a priority build slot. No obligation,
                  no deposit; just a clear plan to get your homes in front of buyers.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-block bg-charcoal px-8 py-4 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-charcoal/85"
                  >
                    Request your builder quote
                  </a>
                  <a
                    href="mailto:sales@homevisionmodels.com"
                    className="inline-block px-2 py-4 text-xs uppercase tracking-[0.18em] underline underline-offset-4 hover:text-foreground"
                  >
                    or email sales@homevisionmodels.com
                  </a>
                </div>
                <p className="text-xs text-muted-foreground">
                  Typical reply within one business day · Freight Australia-wide
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="process" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">From plan to model in four steps</h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <li key={step.n} className="border-t border-charcoal pt-5">
                  <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">{step.n}</span>
                  <h3 className="mt-3 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="eyebrow">Models & packages</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Built to the level of detail you need</h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Three tiers, each a complete finished model — not a deposit or a rendering. Prices
              below are starting points for a standard single-dwelling home; final quotes depend on
              footprint, level of detail and quantity. All prices are in Australian dollars and
              include GST.
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={
                    pkg.featured
                      ? "relative flex flex-col bg-charcoal p-8 text-primary-foreground"
                      : "relative flex flex-col border border-border p-8"
                  }
                >
                  {pkg.featured && (
                    <span className="absolute right-6 top-6 text-[0.65rem] uppercase tracking-[0.2em] opacity-60">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-2xl">{pkg.name}</h3>
                  <p
                    className={
                      pkg.featured
                        ? "mt-1 text-xs uppercase tracking-[0.16em] opacity-70"
                        : "mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground"
                    }
                  >
                    {pkg.scale}
                  </p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span
                      className={
                        pkg.featured
                          ? "font-display text-3xl"
                          : "font-display text-3xl text-charcoal"
                      }
                    >
                      {pkg.priceFrom}
                    </span>
                    <span className={pkg.featured ? "text-xs opacity-60" : "text-xs text-muted-foreground"}>
                      inc. GST
                    </span>
                  </div>
                  <p className={pkg.featured ? "mt-5 text-sm leading-relaxed opacity-85" : "mt-5 text-sm leading-relaxed text-muted-foreground"}>
                    {pkg.body}
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className={pkg.featured ? "opacity-60" : "text-muted-foreground"}>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <a
                      href="#contact"
                      className={
                        pkg.featured
                          ? "mt-8 block border border-primary-foreground/40 px-5 py-3 text-center text-xs uppercase tracking-[0.16em] transition-colors hover:bg-primary-foreground hover:text-charcoal"
                          : "mt-8 block border border-border px-5 py-3 text-center text-xs uppercase tracking-[0.16em] transition-colors hover:bg-secondary"
                      }
                    >
                      Request a quote
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              Multi-model and portfolio orders qualify for volume pricing —{" "}
              <a href="#contact" className="underline underline-offset-4 hover:text-foreground">
                ask for a set quote
              </a>
              .
            </p>
          </div>
        </section>

        {/* Furniture & accessories */}
        <section id="furniture" className="border-b border-border bg-secondary">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <p className="eyebrow">Furniture &amp; accessories</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Lift the roof. Move the furniture. Decide with confidence.</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Our models are designed to be handled. The roof lifts away as one piece so the whole floor
                plan is visible, and every miniature piece inside is loose — lounges, beds, dining tables,
                cars in the garage, even the bins and BBQ. Clients can trial furniture placement, check that
                the king bed fits with walk-around space, and confirm the living zone works for the family
                before a single wall is framed.
              </p>
              <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {accessories.map((a) => (
                  <div key={a.title}>
                    <h3 className="text-base">{a.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={gallery2}
              alt="Miniature grey model furniture and a scale model car laid out on a white surface"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Selected work</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((img) => (
                <figure key={img.alt} className="overflow-hidden bg-secondary">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </figure>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Placeholder imagery — project photography to be supplied.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Common questions</h2>
            </div>
            <div className="border-t border-border">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-border py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base">
                    {faq.q}
                    <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-charcoal text-primary-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
                Contact
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Request a quote</h2>
              <p className="mt-6 max-w-md leading-relaxed opacity-80">
                Send through your floor plans and a note on scale, quantity and timing. We will reply with
                a fixed quote, usually within two business days.
              </p>
              <a
                href={`mailto:${EMAIL}?subject=Model%20quote%20request`}
                className="mt-8 inline-block font-display text-xl underline underline-offset-8 sm:text-2xl"
              >
                {EMAIL}
              </a>
              <p className="mt-8 text-sm opacity-70">
                Home Vision Models
                <br />
                Mount Gambier, South Australia
                <br />
                Serving builders and developers Australia-wide
              </p>
            </div>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
                window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Model quote request")}&body=${encodeURIComponent(body)}`;
              }}
            >
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "company", label: "Company", type: "text" },
                { name: "email", label: "Email", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-xs uppercase tracking-[0.16em] opacity-60"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.name !== "company"}
                    className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-2 text-base outline-none transition-colors focus:border-primary-foreground"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.16em] opacity-60">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none border-b border-primary-foreground/30 bg-transparent py-2 text-base outline-none transition-colors focus:border-primary-foreground"
                />
              </div>
              <button
                type="submit"
                className="w-full border border-primary-foreground px-6 py-3 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-primary-foreground hover:text-charcoal sm:w-auto"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-primary-foreground/15 px-5 py-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} Home Vision Models. Mount Gambier, SA.</span>
          <a href={`mailto:${EMAIL}`} className="hover:opacity-100">
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
