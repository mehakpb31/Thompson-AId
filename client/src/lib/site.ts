/**
 * DESIGN: "Kamloops Workshop" — single source of truth for brand,
 * image assets, navigation, and contact info. Keep in sync with
 * index.html JSON-LD and sitemap.xml.
 */

export const SITE = {
  name: "Thompson Aid",
  tagline: "To Your Destination",
  description:
    "Kamloops' trusted moving and cleaning company. Local and long-distance moves, packing, deep cleaning, move-in/move-out and post-renovation cleaning.",
  phone: "+1 778-522-1667",
  phoneHref: "tel:+17785221667",
  email: "thompsonaid@outlook.com",
  emailHref: "mailto:thompsonaid@outlook.com",
  address: "673 Lombard St, Kamloops, BC V2C 1B5",
  hours: {
    weekdays: "All week · 8:00 AM – 6:00 PM",
    weekends: "Open 7 days a week",
  },
  socials: {
    facebook:
      "https://www.facebook.com/profile.php?id=100094174641945",
    instagram: "#",
    google: "#",
  },
  established: "2023",
};

// ------------------------------------------------------------------
// Image assets (cloud URLs — persistent with project)
// ------------------------------------------------------------------
export const IMG = {
  logo: "/manus-storage/logo_07533e69.png",
  heroTruck:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/hero-moving-truck-Syyth5nz3MvvQ7winKMDJc.webp",
  cleaningKitchen:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/cleaning-service-kitchen-jiVRt3FYMSfvKkRUjxJddM.webp",
  packingBoxes:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/packing-boxes-NjQjXpCQ8RKa3kBXZGHHsE.webp",
  team:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/team-portrait-V3ZHJ2deT9dy73foQ5SdDx.webp",
  kamloopsLandscape:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/kamloops-landscape-BJ2vDCSqRzHbwghnqebUrX.webp",
  deepCleaningBathroom:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/deep-cleaning-bathroom-cGnVXeKsjn7na6PLE2duPd.webp",
  furnitureAssembly:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/furniture-assembly-A8hiCTZ4NkQPi2qMGiR9wD.webp",
  longDistance:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/long-distance-highway-Q7pYCpZvDAvTcTBnmkqDgY.webp",
  blogChecklist:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/blog-moving-checklist-JYAvaVhRMHBmEq5mVPgviF.webp",
  blogEcoCleaning:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/blog-eco-cleaning-8i6vv3Lth8geBgEHwubr3X.webp",
  blogCommercial:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/blog-commercial-move-QEhWV7NfM2CBoMJqrpDzTV.webp",
  blogWinter:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/blog-winter-moving-WsYojw8aN9zjWfFYqrJfAA.webp",
  blogPiano:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/blog-piano-moving-gLdEmxZY8ShL2xx7GGQsMQ.webp",
  blogHotTub:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/blog-hot-tub-moving-SzXKZ29Ut6aZuaMacP9PuP.webp",
  blogSafe:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663026714743/mQRa4ygfVAD9ddC4mTDZNZ/blog-safe-moving-hqCu2rLzsMFt8wCAyE58Eu.webp",
};

// ------------------------------------------------------------------
// Navigation
// ------------------------------------------------------------------
export const NAV = [
  { label: "Home", href: "/" },
  { label: "Moving", href: "/services/moving" },
  { label: "Cleaning", href: "/services/cleaning" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ------------------------------------------------------------------
// Service catalog
// ------------------------------------------------------------------
export const MOVING_SERVICES = [
  {
    code: "MV-01",
    title: "Local & Long-Distance Moves",
    summary:
      "Residential and commercial moves across Kamloops, the Thompson region, and beyond.",
    bullets: [
      "Apartment, condo & house moves",
      "Dedicated long-distance trips",
      "Senior & specialty moves",
      "Commercial & office relocations",
    ],
  },
  {
    code: "MV-02",
    title: "Packing & Unpacking",
    summary:
      "Careful wrapping, labelling and organised set-up on arrival — full or partial service.",
    bullets: [
      "Full-service packing",
      "Fragile, art & specialty items",
      "Wardrobe boxes & protective padding",
      "Boxes, tape & supplies available",
    ],
  },
  {
    code: "MV-03",
    title: "Loading & Unloading",
    summary:
      "Heavy lifting handled safely with the right tools, straps and techniques — no damage to floors or walls.",
    bullets: [
      "Furniture pads & moving blankets",
      "Stairs, tight hallways, elevators",
      "Floor runners & door protection",
      "Dolly / appliance lift included",
    ],
  },
  {
    code: "MV-04",
    title: "Furniture Assembly",
    summary:
      "Disassemble at origin, reassemble at destination — beds, desks, tables, IKEA and more.",
    bullets: [
      "Beds, desks, tables, wardrobes",
      "TV mounts (basic, on request)",
      "Protective floor runners",
      "Placement at destination",
    ],
  },
  {
    code: "MV-05",
    title: "Storage Coordination",
    summary:
      "Short-term storage to bridge gaps between closing dates and move-in days.",
    bullets: [
      "Secure, climate-aware facilities",
      "Flexible durations",
      "Pickup & re-delivery",
      "Single-team continuity",
    ],
  },
  {
    code: "MV-06",
    title: "Commercial & Office",
    summary:
      "After-hours office relocations with minimal downtime for your business.",
    bullets: [
      "Weekend & after-hours crews",
      "IT equipment care",
      "Labelled floor plans",
      "Certificates of insurance",
    ],
  },
  {
    code: "MV-07",
    title: "Piano Moving",
    summary:
      "Upright, baby grand and full grand pianos moved with purpose-built skids, straps, and padding — in and out of Kamloops homes.",
    bullets: [
      "Upright, baby grand & grand pianos",
      "Stairs, tight doorways & elevators",
      "Custom padding & crating on request",
      "Fully insured specialty handling",
    ],
  },
  {
    code: "MV-08",
    title: "Hot Tub Moving",
    summary:
      "Hot tub removal, relocation and placement — drained, dollied, transported and set level on the new pad with no damage to deck or fence.",
    bullets: [
      "Drain, wrap & secure for transport",
      "Heavy-duty hot-tub dollies & straps",
      "Deck, gate & fence protection",
      "Level placement on new pad",
    ],
  },
  {
    code: "MV-09",
    title: "Safe & Gun-Safe Moving",
    summary:
      "Home safes, gun safes and commercial safes moved safely — including basement, upstairs and multi-storey relocations.",
    bullets: [
      "Residential & commercial safes",
      "Gun safes up to 1,500+ lbs",
      "Stair-climbing dollies & cribbing",
      "Floor protection guaranteed",
    ],
  },
];

export const CLEANING_SERVICES = [
  {
    code: "CL-01",
    title: "Move-In / Move-Out Cleaning",
    summary:
      "Wall-to-wall cleaning to pass inspections or start fresh in a pristine space.",
    bullets: [
      "Kitchen & bath deep sanitization",
      "Inside cabinets & closets",
      "Inside appliances (oven, fridge)",
      "Walls, baseboards, windows",
    ],
  },
  {
    code: "CL-02",
    title: "Deep Cleaning",
    summary:
      "High-touch disinfection plus detailing of every hard-to-reach corner.",
    bullets: [
      "Baseboards, vents, blinds",
      "Grout, tile & hard surfaces",
      "Dust & allergen reduction",
      "Hand-wiped light fixtures",
    ],
  },
  {
    code: "CL-03",
    title: "Post-Renovation Cleaning",
    summary:
      "Construction dust, drywall grit and debris handled with care.",
    bullets: [
      "Fine dust extraction",
      "Window, frame & track cleaning",
      "Paint & adhesive spot removal",
      "Final polish walk-through",
    ],
  },
  {
    code: "CL-04",
    title: "Recurring Home Cleaning",
    summary:
      "Weekly, bi-weekly or monthly plans tailored to your home and schedule.",
    bullets: [
      "Custom room-by-room checklist",
      "Same team each visit when possible",
      "Pet- & kid-safe products",
      "Easy reschedule",
    ],
  },
  {
    code: "CL-05",
    title: "Kitchen & Appliance Detailing",
    summary:
      "Grease, scale and buildup removed — inside ovens, fridges, range hoods.",
    bullets: [
      "Stainless polishing",
      "Range-hood degreasing",
      "Microwave & dishwasher",
      "Cabinet face wipe-down",
    ],
  },
  {
    code: "CL-06",
    title: "Commercial & Office Cleaning",
    summary:
      "Reliable, discreet commercial cleaning with flexible scheduling.",
    bullets: [
      "After-hours cleans",
      "Restrooms & breakrooms",
      "Floor & carpet detailing",
      "Customizable scope",
    ],
  },
];

// ------------------------------------------------------------------
// Service areas
// ------------------------------------------------------------------
export const SERVICE_AREAS = [
  { name: "Kamloops (all neighbourhoods)", note: "Sahali, Aberdeen, Juniper Ridge, Batchelor Heights, North Shore, Valleyview, Westsyde, Dallas, Brocklehurst, Dufferin." },
  { name: "Sun Peaks", note: "Alpine moves & seasonal relocations." },
  { name: "Logan Lake", note: "Full residential coverage." },
  { name: "Chase", note: "Along the Shuswap corridor." },
  { name: "Barriere", note: "North Thompson corridor." },
  { name: "Merritt", note: "Nicola Valley service route." },
  { name: "Clearwater", note: "North Thompson long-distance." },
  { name: "Salmon Arm", note: "Shuswap long-distance moves." },
];

// ------------------------------------------------------------------
// Testimonials
// ------------------------------------------------------------------
export const TESTIMONIALS = [
  {
    name: "Jessica R.",
    area: "Aberdeen, Kamloops",
    rating: 5,
    text:
      "Thompson Aid moved us from our condo in Sahali up to a house in Aberdeen in a single day — nothing was scratched, nothing was lost. They even placed the furniture exactly where I asked.",
  },
  {
    name: "Mark D.",
    area: "Juniper Ridge",
    rating: 5,
    text:
      "I booked the move + move-out clean bundle. Massive time saver. The cleaning team got us our full deposit back.",
  },
  {
    name: "Priya S.",
    area: "North Shore",
    rating: 5,
    text:
      "Professional, on-time, respectful — and the price matched the quote exactly. Will hire again without hesitation.",
  },
  {
    name: "Brent K.",
    area: "Batchelor Heights",
    rating: 5,
    text:
      "We had a long-distance move to the Okanagan. Packing was meticulous, and their communication on the road was top-notch.",
  },
  {
    name: "Taylor H.",
    area: "Valleyview",
    rating: 5,
    text:
      "The deep clean before our open house was unreal. Every baseboard, every vent — the place sparkled.",
  },
  {
    name: "Omar J.",
    area: "Westsyde",
    rating: 5,
    text:
      "Booked last-minute on a Saturday. They made it work, showed up with a smile, and finished ahead of schedule.",
  },
];

// ------------------------------------------------------------------
// FAQ
// ------------------------------------------------------------------
export const FAQ = [
  {
    q: "Do you offer bundled moving + cleaning packages?",
    a: "Yes. Our most popular service is a same-day move-out clean or move-in clean paired with your move, coordinated by one team with one invoice.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Thompson Aid carries commercial liability insurance and cargo insurance for every move, plus general liability for cleaning work. Certificates are available on request for commercial clients.",
  },
  {
    q: "How far in advance should I book?",
    a: "1 to 2 weeks is ideal for residential moves and 2 to 4 weeks during peak summer season (late June to early September). Urgent and same-week bookings are often possible — give us a call.",
  },
  {
    q: "What areas do you service?",
    a: "All of Kamloops and the Thompson region — plus Sun Peaks, Logan Lake, Chase, Merritt, Barriere, Clearwater, and long-distance trips across British Columbia and Alberta.",
  },
  {
    q: "Do you provide packing materials?",
    a: "Yes — we can supply new and recycled moving boxes, bubble wrap, packing paper, mattress bags, wardrobe boxes, and specialty crates. You can also use your own.",
  },
  {
    q: "How do you price jobs?",
    a: "Moves are quoted hourly or as flat rates depending on scope and distance. Cleaning is quoted by the square footage and scope. All quotes are free and itemised — no surprises.",
  },
  {
    q: "Can you handle pianos, gun safes, or hot tubs?",
    a: "Heavier specialty items are handled case-by-case. Mention the item when you request a quote and we will confirm if our crew can do it in-house or coordinate a specialty partner.",
  },
  {
    q: "Do you move on weekends?",
    a: "Yes — weekends and evenings are available by booking. We recommend locking in weekend dates early.",
  },
];

// ------------------------------------------------------------------
// Blog posts
// ------------------------------------------------------------------
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  category: "Moving" | "Cleaning" | "Kamloops" | "Business";
  cover: string;
  tags: string[];
  body: string; // markdown
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ultimate-kamloops-moving-checklist",
    title: "The Ultimate Kamloops Moving Checklist (8 Weeks Out → Move Day)",
    excerpt:
      "A complete, locally-tested timeline for a smooth move in Kamloops — from utilities and school transfers to the exact day you hand over the keys.",
    date: "2026-03-18",
    readMinutes: 9,
    category: "Moving",
    cover: IMG.blogChecklist,
    tags: ["checklist", "kamloops", "moving tips"],
    body: `
## Eight weeks out

Moving in Kamloops has its own rhythm. Summer is competitive — trucks, movers and storage all get tight between late June and early September — so the earlier you lock your date, the easier every other piece becomes. Start by writing down your **confirmed possession date** and your **must-be-out-by** date. These two numbers drive everything else.

At the eight-week mark, start sorting your home into **keep, donate, sell, toss**. Kamloops has excellent donation options (Mustard Seed, Salvation Army, New Life Community) and the Mission Flats Landfill for true disposal. A trip to the landfill *now* is a hundred boxes you do not have to pay movers to lift later.

## Six weeks out

Request a quote from **Thompson Aid** (or two other companies for comparison). A proper estimate for a Kamloops move includes walk-through or video inventory, origin and destination access notes (stairs, elevators, long carries), and any specialty items. Ask every company for proof of **cargo insurance** and **commercial liability** — not every truck on Craigslist carries it.

Start collecting boxes. We recommend **small for books and dense items, medium for kitchen and general, large for linens and pillows** only. A common rookie mistake is over-packing large boxes with books — they rip on the bottom and are brutal on backs.

## Four weeks out

Notify your current landlord in writing if you are renting. Kamloops uses BC's standard Residential Tenancy Act timelines — one full rental month of notice. Book your **move-out cleaning** at the same time you book movers; if you bundle both with Thompson Aid, you get one coordinated day.

Change your address on:

- BC driver's licence and ICBC
- Canada Post mail forwarding
- CRA (My Account → Address)
- Banks, credit cards, employer payroll
- Doctor, dentist, pharmacy
- Subscription services

## Two weeks out

Confirm the truck size with your mover. For a typical Kamloops two-bedroom condo, a 20–24 ft cube van is standard. For a three-to-four-bedroom house in Aberdeen or Juniper Ridge, plan for a 26 ft truck or a two-trip arrangement.

Schedule BC Hydro, Fortis (gas), and your internet provider (Telus/Shaw) for **cutover on move day or the morning after**. Internet in particular — book a technician, not self-install, if you are on a tight timeline.

## Move day

Label every box by room **and** number. "Kitchen 3 of 8" lets your crew and you know if anything is missing at the destination. Keep a clearly-marked **Essentials Box** open and in your own vehicle: toilet paper, phone chargers, soap, a few plates, basic tools, medications, a change of clothes. You will thank yourself at 9 PM.

Do a final walk-through before the truck leaves — check closets, the garage, under beds, inside the dishwasher. At the destination, before the crew goes, **sign nothing until you have walked through with them** and inspected large items and any visible damage claims.

## The day after

Rest. Tip your crew if they did well (industry standard in Kamloops is $10–$30 per mover for residential, or 10–15% of the labour portion for larger jobs). Order pizza. Celebrate — you just moved.

Need help? [Get a free quote from Thompson Aid](/contact) and we will map out the exact timeline with you.
`,
  },
  {
    slug: "move-out-cleaning-guide-kamloops",
    title: "Move-Out Cleaning in Kamloops: Exactly What Landlords Check",
    excerpt:
      "The room-by-room checklist your Kamloops landlord or property manager uses during move-out inspections — and how to pass it the first time.",
    date: "2026-02-22",
    readMinutes: 7,
    category: "Cleaning",
    cover: IMG.deepCleaningBathroom,
    tags: ["cleaning", "move-out", "deposit"],
    body: `
## The rule of thumb

In BC, your landlord can only keep your damage deposit for **actual damage beyond normal wear and tear** — not for "not clean enough to my standard." But *clean* is still where 80% of disputes start. Pass the clean and you usually walk away with the full deposit.

## Kitchen — the #1 reason deposits are withheld

The kitchen is the number-one place inspectors focus. Here is the exact order we use:

1. **Empty everything**, including under the fridge and stove.
2. **Inside the oven** — including racks, glass door, and the drawer under it. Baking soda + vinegar paste, 20 min, then scrub.
3. **Range hood filter** — pop it out, soak in hot water + dish soap.
4. **Inside the fridge and freezer** — shelves out, wipe top-down, defrost if needed.
5. **Inside the dishwasher** — run an empty hot cycle with vinegar.
6. **Cabinet interiors and exteriors** — wipe shelves, degrease handles.
7. **Backsplash, countertops, sink and taps** — descale with vinegar.
8. **Floor last** — sweep, then mop.

## Bathrooms

Hard water is real in Kamloops, so expect mineral scale on taps, glass doors and toilet rims. Use a descaling cleaner (CLR or a vinegar soak). Don't forget the **exhaust fan cover** — it collects dust and is an easy inspection flag.

## Living areas and bedrooms

Walls get more attention than people expect. Use a magic eraser gently on scuffs — test a corner first, because some latex paints will rub off. Wipe **baseboards, switch plates, and door frames**. Vacuum carpet edges and corners with the crevice tool, not just the centre.

## Windows, tracks and blinds

Open every window. Vacuum the track, then damp-wipe. Wipe both sides of each pane if accessible. Slat blinds get a microfiber cloth, one slat at a time — yes, it's tedious, yes, it's inspected.

## Floors

- **Hardwood / laminate**: damp (not wet) mop with appropriate cleaner.
- **Carpet**: vacuum, spot-treat visible stains. If the carpet was professionally cleaned at move-in, your landlord can legally require the same at move-out in some BC tenancies — check your lease.

## The smart shortcut

A professional move-out clean from Thompson Aid covers all of the above and carries a **re-clean guarantee** — if the property manager flags something within 24 hours, we come back to fix it at no extra cost. That single line is often the difference between a full deposit refund and a dispute.

[Book your move-out clean](/contact) or bundle it with your move for one coordinated day.
`,
  },
  {
    slug: "eco-friendly-cleaning-tips",
    title: "Eco-Friendly Cleaning Tips That Actually Work in Kamloops Homes",
    excerpt:
      "Seven natural cleaning methods our professional cleaners genuinely use — plus three that sound eco but perform poorly.",
    date: "2026-01-30",
    readMinutes: 6,
    category: "Cleaning",
    cover: IMG.blogEcoCleaning,
    tags: ["eco", "natural", "green cleaning"],
    body: `
## Why this matters in Kamloops

Kamloops has relatively **hard water** (high calcium and magnesium) and dry interior air for most of the year. Those two facts change which "eco" cleaners actually work. Water plus vinegar is a hero here; essential-oil-only sprays are not.

## What actually works

### 1. White vinegar + water (1:1) for hard-water descaling
Works on taps, shower glass, kettles, coffee makers. Not safe on natural stone (marble, granite) — it etches.

### 2. Baking soda for gentle scrub
Sprinkle on sinks, tubs, grout. Scrub with a damp brush. Great for polishing stainless steel sinks.

### 3. Lemon for grease and smell
Cut in half, rub on cutting boards, wooden spoons, and the inside of the microwave (nuke a bowl of water + lemon for 2 min, then wipe easily).

### 4. Castile soap (Dr. Bronner's) for floors
Diluted: 1 tbsp per bucket. Works on hardwood, tile and laminate.

### 5. Hydrogen peroxide 3% for mildew
Spray undiluted on grout mildew, leave 10 minutes, scrub. A safer alternative to bleach.

### 6. Microfiber everything
A good microfiber cloth removes 90% of dust and light grease **with water only**. This is the single biggest upgrade to a greener routine.

### 7. Steam cleaner for floors and soft surfaces
A decent entry-level steam mop does sealed hardwood, tile, grout and sofas — no chemicals.

## What sounds eco but disappoints

- **Essential-oil-only sprays** smell lovely but do not disinfect.
- **DIY citrus vinegar cleaners** are fun, but the acid from citrus is not strong enough to tackle heavy scale.
- **Soap nuts in laundry** do okay on lightly-soiled clothes but struggle with grime — not what you want if you have kids or pets.

## Pro tip

For professional-grade eco cleaning, Thompson Aid uses **EWG-verified and Green Seal–certified** cleaners — same performance as conventional, much safer for pets, kids and allergies. Ask for our eco-only add-on when booking.
`,
  },
  {
    slug: "winter-moving-tips-kamloops",
    title: "Winter Moving in Kamloops: 10 Tips Nobody Tells You",
    excerpt:
      "Moving between November and March in Kamloops? These are the cold-weather moving tricks our crew uses every season.",
    date: "2025-12-12",
    readMinutes: 6,
    category: "Kamloops",
    cover: IMG.blogWinter,
    tags: ["winter", "kamloops", "tips"],
    body: `
## Winter in Kamloops is not as harsh as the coast thinks

Kamloops sits in the semi-arid interior — we usually get **less snow than the Lower Mainland** but sharp temperature drops, hard freezes, and early-morning black ice on shaded side streets. With the right prep, winter moving is actually smoother than summer: less traffic, easier booking, no dehydration.

## 1. Book morning slots

Temperatures rise through the day. An 8 AM start means your crew is loading the truck while everything is still dry frozen — better than slushy afternoon loading.

## 2. Clear both driveways and walkways first

Salt and sand walkways 24 hours before. Use a push shovel, not just a broom. Icy steps are the #1 winter injury risk.

## 3. Protect the floors you love

Snow + dirt + moisture becomes mud the moment it crosses your threshold. Lay **floor runners, cardboard, or old towels** from the front door down the main hallway. Professional movers bring ram-board or adhesive carpet film.

## 4. Wrap upholstery in plastic, not blankets

Moving blankets absorb moisture in winter and transfer it to your couch. Use plastic shrink-wrap for fabric items, blankets for wood.

## 5. Disconnect electronics the night before

Bring TVs, monitors and speakers inside to **room temperature for at least 24 hours** before powering on. Cold glass + warm room = internal condensation = dead screens.

## 6. Charge your phone and the movers' phones

Cold batteries drain fast. Keep one power bank for the day.

## 7. Warm up the new place in advance

If you can, turn the heat up at the destination the night before. Unloading into a warm home makes the last hour of the move 10x more pleasant.

## 8. Hydrate — yes, even when cold

Kamloops winter air is very dry. Water bottles and hot drinks for the crew go a long way.

## 9. Clothes in soft garment bags, not boxes

Winter coats are bulky and fill boxes fast. Vacuum bags cut volume by 60%.

## 10. Book the move-out clean for the next morning

Let the house breathe and dry out overnight — footprints and snow melt will be gone, and the clean finishes in half the time.

Thompson Aid runs year-round and our crews are winter-trained. [Book your winter move](/contact) and we will take the weather off your checklist.
`,
  },
  {
    slug: "commercial-office-move-guide",
    title: "How to Plan a Commercial Office Move in Kamloops (Zero Downtime Playbook)",
    excerpt:
      "The operational checklist our commercial-move clients use to relocate a Kamloops office without losing a single business day.",
    date: "2025-11-04",
    readMinutes: 8,
    category: "Business",
    cover: IMG.blogCommercial,
    tags: ["commercial", "office", "business"],
    body: `
## The goal: close on Friday, open on Monday

The best commercial moves happen between **Friday 5 PM and Monday 8 AM**. Your team walks out of the old office, and on Monday they walk into the new office with internet, phones, and workstations already running. Here is how we make that happen.

## 6 weeks out — governance

Appoint one **move captain** per department. They will own the inventory and the unpacking priority list for their team. Without this, everything takes three times longer.

Visit the new space with a tape measure. Confirm:

- Elevator access + freight elevator hours
- Loading bay height and time restrictions
- Door widths for your largest desks and printers
- Who owns the parking lot between the two buildings

## 4 weeks out — IT first

IT is the bottleneck in every commercial move. Schedule the following **in this exact order**:

1. New office internet install (Telus/Shaw Business) — book the technician, not self-install.
2. Phone system cutover (VoIP numbers should travel; no change needed except confirming network).
3. Printer and copier relocation booked with the vendor.
4. Server / network rack move — usually a separate, insured, careful process.

## 2 weeks out — labelling system

We use a simple three-part label: **Department — Desk # — Priority (A/B/C)**. Priority A boxes go on the truck last and off the truck first — those are things your team needs Monday morning. C boxes go to the basement or storage room.

## Move weekend

Friday 5 PM: your team packs their own personal items (photos, snacks, headphones) — tag these with coloured tape per person.

Friday 6 PM – Saturday morning: Thompson Aid crew handles workstations, chairs, files, and general boxes. Each desk is disassembled, wrapped, and labelled by seat number.

Saturday: unload and place at new office. **Furniture layout should already be marked on the floor with tape** matching the floorplan so the crew places every desk without a project manager standing over them.

Sunday: IT team connects and tests. Your move captain does a personal-items distribution walk-through.

Monday 8 AM: the team walks in, sits down, logs in. Day zero of downtime.

## What Thompson Aid provides

- Insurance certificates (general liability + cargo) at your requested coverage amounts
- After-hours / weekend crews
- Custom labels, inventory manifest, and chain-of-custody sign-off
- Storage coordination if you need staging time

Planning a Kamloops office move? [Request a commercial quote](/contact) and we will build the weekend playbook with your team.
`,
  },
  {
    slug: "cost-of-moving-in-kamloops",
    title: "How Much Does It Cost to Move in Kamloops in 2026?",
    excerpt:
      "A transparent breakdown of typical Kamloops moving costs — local, long-distance, packing, and add-ons — with real-world examples.",
    date: "2025-10-10",
    readMinutes: 7,
    category: "Moving",
    cover: IMG.packingBoxes,
    tags: ["pricing", "cost", "kamloops"],
    body: `
## The short answer

For most local Kamloops moves in 2026, expect:

- **Studio / 1-bed apartment**: $400 – $700 (2 movers, truck, 3–4 hrs)
- **2-bed apartment or small house**: $700 – $1,200 (2–3 movers, truck, 4–6 hrs)
- **3-bed house**: $1,200 – $2,000 (3 movers, larger truck, 6–8 hrs)
- **4-bed house**: $2,000 – $3,500+ (3–4 movers, 26 ft truck, full day)

Long-distance moves (Kamloops → Vancouver / Calgary / Kelowna) are typically $2,500 – $6,500 depending on volume.

## What actually drives the price

**Crew size.** Two movers is fine for a condo; three or four saves hours on a house and often costs the same total thanks to speed.

**Truck size.** A 17 ft cube vs a 26 ft cube is the difference between two trips and one.

**Access.** Stairs, elevator waits, long carries from the truck to the door all add time. A ground-floor, short-carry move is the cheapest per cubic foot.

**Packing.** Full-service packing typically adds $300 – $900 for a 2-bed home. DIY packing is free but eats your weekend.

**Specialty items.** Pianos, safes, hot tubs, large aquariums and gym equipment may require a specialty team or an extra mover.

## What to watch out for

- **"$75/hr" quotes with no mention of travel time.** Most Kamloops movers charge portal-to-portal (including travel from their yard to your place and back).
- **Fuel surcharges** on long-distance moves — ask for them up front.
- **Stair / elevator fees** — some companies add these separately.
- **Minimum hours** — most moves have a 2 or 3-hour minimum.

At Thompson Aid, every quote is **itemised and in writing** — travel, hourly labour, materials and any specialty items all called out clearly.

## Two real examples

**Example A — Sahali condo → Aberdeen townhouse**
- 2-bed condo, ground floor pickup, walk-up townhouse drop-off
- 2 movers, 20 ft truck, 5 hours
- Total: **$840** including travel and materials

**Example B — Juniper Ridge → Kelowna**
- 3-bed house, long distance
- 3 movers + 26 ft truck, packing day + move day
- Total: **$4,200** itemised including fuel, packing materials, and cargo insurance

## How to lower your cost

1. Book off-peak (mid-month, mid-week, off-summer).
2. Declutter aggressively before quote day — you pay for what gets loaded.
3. Do your own packing if you have the time.
4. Bundle your move with your move-in/move-out clean for a package discount.

[Get a free, itemised quote](/contact) and we will talk through the best mix for your move.
`,
  },
  {
    slug: "how-to-move-a-piano-in-kamloops",
    title: "How to Move a Piano in Kamloops — A Professional Guide",
    excerpt:
      "Everything Kamloops homeowners need to know about moving an upright or grand piano safely: cost, crew size, stairs, tuning, and when to hire specialists.",
    date: "2026-04-22",
    readMinutes: 8,
    category: "Moving",
    cover: IMG.blogPiano,
    tags: ["piano", "specialty move", "kamloops"],
    body: `
## Why pianos need a specialty move

A piano is not "just a heavy piece of furniture." A spinet weighs around 300 lbs, an upright 400–800 lbs, a baby grand 500–800 lbs, and a full concert grand can exceed 1,200 lbs. The weight is also **top-heavy and unevenly distributed**, which is why a simple four-wheel dolly and a couple of friends is the single fastest way to end up with a damaged instrument, a cracked doorframe, or an injured back.

In Kamloops, where many homes have split-level entries, basement suites, tight stairwells in Sahali condos, and narrow doorways in older North Shore bungalows, piano moving is almost always a specialty job.

## How much does it cost to move a piano in Kamloops?

For most local Kamloops piano moves in 2026:

- **Upright piano, single floor, easy access**: $250 – $450
- **Upright piano with stairs (up to 8 steps)**: $400 – $650
- **Baby grand, single floor**: $500 – $800
- **Full grand or concert grand**: $800 – $1,500+
- **Long-distance (Kamloops → Kelowna / Vancouver)**: quoted separately

Pricing depends on stairs, doorway widths, whether the piano needs to be partially disassembled (grand pianos always do), and whether it is being moved between Kamloops neighbourhoods or further.

## What we bring to a piano move

- A **piano board (skid board)** — the long padded board the piano is strapped onto
- **Heavy-duty ratchet straps** (not ropes)
- A **four-wheel piano dolly** rated for 1,500+ lbs
- A **stair-climbing dolly** where needed
- Extra-thick moving blankets, corner protectors, shrink wrap
- Floor-protecting ram board or carpet film
- At least three movers for any upright, four for any grand

## The professional process, step by step

### 1. Walk-through and measurement
Before move day we confirm doorway widths, hallway turns, stair landings, and truck access. For grand pianos we confirm whether the legs can be removed (almost always yes) and where the piano will re-assemble at the destination.

### 2. Protect the piano
Pedals and music stand come off and are padded separately. The entire body is wrapped in moving blankets and shrink-wrap. On a grand, the lid is closed, locked if possible, and cushioned.

### 3. Tilt and strap
Uprights are kept upright on the skid board and strapped. Grands are carefully tilted onto their straight side (never the bent side) onto the skid board, legs removed, then strapped.

### 4. Navigate the route
Floor protection down first. Then we walk the piano — never rushed, communicating every step, with one mover always acting as the "eyes" for corners and stairs.

### 5. Truck placement
Pianos ride against the bulkhead (cab wall), on the skid board, strapped to the E-track. They should not move at all during transit.

### 6. Delivery and re-assembly
Reverse the process at the destination. Grand legs go back on. Pedals re-attached. Piano is positioned **exactly where you want it** — away from heating vents, exterior walls, and direct sunlight if possible.

## Should you tune the piano after moving?

Yes, but **wait at least 2–3 weeks**. The piano needs to acclimatise to the humidity and temperature of the new room before a tuner can set it accurately. In the Kamloops climate (dry, with big seasonal temperature swings) a fresh tune before acclimatisation will drift out again within weeks.

## Common Kamloops piano-moving questions

**"Can you move a piano upstairs in a split-level home?"**
Yes. Most Kamloops split-levels have 6–8 steps to the main floor, which is well within range for a three-mover upright crew.

**"Our piano hasn't been played in years. Is it worth moving?"**
If it has sentimental value or quality action, yes. If it's a low-end upright with cracked soundboard and rusted strings, the cost of moving may exceed the replacement cost — call us for an honest opinion.

**"Do you move pianos in winter?"**
Yes, year-round. We salt walkways the night before and use tarps to keep the instrument dry between the house and the truck.

## Book your Kamloops piano move

Thompson Aid moves uprights, baby grands and full grands across Kamloops, Sun Peaks, Logan Lake and the Thompson region. Every piano move is fully insured.

[Request your piano-moving quote](/contact) and tell us the make, approximate age, stairs at both ends, and your preferred dates — we will get back within the business day.
`,
  },
  {
    slug: "moving-a-hot-tub-in-kamloops",
    title: "Moving a Hot Tub in Kamloops: What It Costs and How We Do It",
    excerpt:
      "A practical, transparent guide to hot tub moving in Kamloops — draining, dollying, deck access, costs, and what to ask before you hire a company.",
    date: "2026-04-15",
    readMinutes: 7,
    category: "Moving",
    cover: IMG.blogHotTub,
    tags: ["hot tub", "specialty move", "kamloops"],
    body: `
## Why a hot tub is harder than it looks

A typical four-to-six-person hot tub weighs **600–1,000 lbs dry** and up to **4,500 lbs full of water**. It is wide, awkward, and usually lives in a spot that was never designed to let it leave again — behind a gate, on a raised deck, or tucked between two fence sections.

Kamloops hot tubs add two extra layers of complexity:

1. **Deck moves.** Many homes in Sahali, Aberdeen, and Juniper Ridge have multi-level backyard decks. Getting a tub off a 5-foot-high deck requires ramping or crane work.
2. **Seasonal access.** Winter snow melts and refreezes on wooden deck boards, making surfaces slick. We move year-round but we plan for it.

## What does it cost to move a hot tub in Kamloops?

Most local Kamloops hot-tub moves in 2026 price as follows:

- **Standard residential hot tub, easy ground-level access, single-address relocation**: $450 – $700
- **Deck stairs, gate removal, or long carry**: $650 – $1,100
- **Hot tub removal and disposal**: $350 – $600 (depending on disposal fees)
- **Long-distance hot tub move (e.g., Kamloops → Kelowna)**: quoted based on route and crane needs

On quote day we ask for photos of the hot tub, the path from the tub to the street, any stairs, and the destination. A 10-minute video walkthrough beats any verbal description.

## The day-before prep you need to do

1. **Drain the tub fully.** A submersible pump empties a six-person tub in 30–60 minutes. Don't skip this — every 100 L of water left inside adds 100 kg.
2. **Remove the cover and lifter.** Cover bagged separately, lifter disassembled if needed.
3. **Disconnect power.** Shut off the breaker. If hard-wired, have a licensed electrician disconnect before move day, or schedule it with us as part of the job.
4. **Clear the path.** Open gates, move patio furniture, stack firewood somewhere else.

## How we move it

### Step 1: Lift and dolly
We use specialty **hot-tub dollies** (wheeled skids designed for tubs) rather than furniture dollies. The tub is slowly tilted onto its side, then slid onto the dollies by a three-person crew using lift-and-shift technique.

### Step 2: Protect surfaces
Ram board on the deck. Blankets on the cabinet. If we're going over grass or gravel, we lay plywood tracks to prevent ruts.

### Step 3: Navigate the route
This is the part that separates professional movers from two guys with a truck. Hot tubs get stuck on gates, fences, and the back of houses all the time. We bring **fence panels come off if needed**, plus spare fence screws to reattach.

### Step 4: Ramp or crane onto the trailer
For standard moves, we use an **incline ramp with a winch**. For tubs on elevated decks with no ramp option, we book a crane service — this is rare but worth mentioning in advance.

### Step 5: Secure for transport
The tub rides on its side or upright (depending on cabinet strength) strapped against the trailer bulkhead. Ratchet straps, not tie-downs.

### Step 6: Delivery and set
At destination we reverse the process, set the tub level on its new pad (a few mm matters — uneven tubs stress-crack over time), reconnect the cover lifter, and leave the power reconnection to your electrician.

## What to ask any hot-tub mover

- "Do you carry cargo insurance for the replacement value of my hot tub?" (The answer should be yes, with a specified coverage amount.)
- "Do you have hot-tub-specific dollies?" (Not furniture dollies.)
- "What happens if my deck or fence is damaged?" (There should be a clear answer, backed by liability coverage.)
- "Is the disposal / recycling fee included if I'm scrapping it?"

## Book your Kamloops hot tub move

Thompson Aid handles hot-tub moves, removals, and long-distance relocations across Kamloops and the Thompson region — year-round, fully insured, with honest, written quotes.

[Request your hot-tub moving quote](/contact) with a few photos and the approximate dry weight of your model. We will confirm crew size, access plan, and a fixed price within the business day.
`,
  },
  {
    slug: "moving-a-safe-in-kamloops",
    title: "Moving a Safe in Kamloops — Safely, Legally, and Without Damaging Floors",
    excerpt:
      "How Kamloops homeowners and businesses move home safes and gun safes without cracking tile, gouging hardwood, or risking injury — plus realistic costs.",
    date: "2026-04-08",
    readMinutes: 7,
    category: "Moving",
    cover: IMG.blogSafe,
    tags: ["safe", "gun safe", "specialty move", "kamloops"],
    body: `
## Safes are a uniquely dangerous move

A residential fireproof safe can weigh 400–700 lbs. A mid-size gun safe easily passes 800 lbs. A premium vault-style gun safe can exceed **1,500 lbs** — often concentrated on four very small feet that destroy any floor they sit on if tipped wrong.

Three things go wrong most often when people try to move a safe themselves:

1. **Dropped safe.** Usually on stairs. The result is cracked steps, a damaged safe, and (almost always) an injured person.
2. **Gouged floor.** Sliding a safe even a few feet on hardwood or vinyl leaves deep scratches that require refinishing.
3. **Stuck safe.** The safe fits through the doorway by a quarter-inch — until the movers realise there is a 90-degree hallway turn they didn't measure.

## How much does it cost to move a safe in Kamloops?

- **Home safe, up to 400 lbs, single floor**: $200 – $350
- **Home safe with stairs (up to 8 steps)**: $300 – $500
- **Gun safe, 500–1,000 lbs, single floor**: $400 – $700
- **Gun safe, 1,000–1,500+ lbs, with stairs**: $600 – $1,200
- **Multi-storey relocations / basement-to-upstairs**: quoted per job

Pricing varies by weight, access, stairs, and whether the origin or destination has steps the safe must climb. For long-distance safe moves we quote separately.

## Before we arrive

1. **Know the weight.** Check the manufacturer label inside the door or on the back. If you don't know, send us the make and model and we will look it up.
2. **Empty the safe.** Remove firearms (legally) and valuables before move day. We do not transport loaded firearms or ammunition — both for safety and for Canadian transport regulations.
3. **Measure the tightest doorway and hallway** on the route. A 30-inch-wide gun safe needs at least a 32-inch-wide passage.
4. **Let us know about stairs** — number of steps, turns at the top or bottom, and whether they're carpeted or hardwood.

## How we do it

### Proper equipment, every time
- **Stair-climbing appliance dolly** rated to 1,500+ lbs (with powered track for the heaviest safes)
- **Ratchet straps**, not bungees
- **Floor protection**: ram board on hardwood/laminate, carpet film on carpeted stairs
- **Corner protectors** for tight 90-degree turns
- **Cribbing blocks** (hardwood) for tilting and re-setting the safe

### Crew size
Minimum three movers for any safe over 500 lbs. Minimum four for anything over 1,000 lbs or any multi-storey move. We do not cut crew size to save money — that is how accidents happen.

### Placement
Where the safe lands matters. Ideal: against an interior load-bearing wall, on a ground floor or reinforced floor. For upstairs placements in older Kamloops homes we occasionally recommend a structural review — a 1,200 lb point load is not trivial for a bedroom floor built in the 1970s.

## Legal notes for gun-safe moves in BC

- We move **unloaded, empty gun safes only**. Firearms and ammunition must be transported separately by the owner following BC and federal storage and transport regulations.
- We do not open, drill, or tamper with safes. If your safe is locked and the combination is lost, contact a locksmith first.
- We carry cargo insurance for the replacement value of your safe; confirm your coverage when booking.

## Questions to ask any safe mover in Kamloops

- "Do you have a stair-climbing dolly rated for my safe's weight?"
- "What's your plan for floor protection?"
- "How many movers will be on the job?"
- "Are you insured, and for what amount?"
- "Can you provide references for similar safe moves in Kamloops?"

## Book your Kamloops safe move

Thompson Aid moves home safes, gun safes, and commercial safes across Kamloops and the Thompson region. Fully insured, careful, and honest about what we can and cannot do.

[Request your safe-moving quote](/contact) with make, model, approximate weight, and stairs at both ends. We will confirm crew size, equipment, and a fixed written price.
`,
  },
];
