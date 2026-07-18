export interface SeoService {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  intro: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  /** core = main services; commercial = niche commercial landing pages */
  group?: "core" | "commercial";
}

export const SEO_SERVICES: SeoService[] = [
  {
    slug: "solar-panel-cleaning-ahmedabad",
    title: "Professional Solar Panel Cleaning Services in Ahmedabad",
    h1: "Solar Panel Cleaning Services in Ahmedabad",
    metaDescription:
      "Professional solar panel cleaning services in Ahmedabad for residential, commercial, industrial and solar farm installations. Improve efficiency, reduce bills. Book free inspection.",
    keywords: [
      "Solar Panel Cleaning Services",
      "Solar Panel Cleaning Ahmedabad",
      "Professional Solar Panel Cleaning",
      "Solar Panel Washing",
      "Solar Cleaning Company",
      "Solar Panel Cleaning Gujarat",
      "solar panel cleaning Ahmedabad",
      "solar panel cleaning service Ahmedabad",
      "professional solar panel cleaning Ahmedabad",
      "best solar panel cleaning company in Ahmedabad",
      "solar cleaning Ahmedabad",
    ],
    image: "/images/service/Service_1.avif",
    intro:
      "Yavix Energy provides professional solar panel cleaning services in Ahmedabad for homes, offices, factories, hospitals, schools, warehouses and large solar farms. Dust, pollution, bird droppings and hard water stains reduce solar output across Gujarat's dry climate. Our trained team uses demineralized water, soft microfiber brushes and safe telescopic equipment to restore panel performance without damaging anti-reflective coatings or voiding warranties.",
    benefits: [
      "Restore up to 30% lost energy output from dust and soiling",
      "Scratch-free cleaning with industry-approved equipment",
      "Residential, commercial, industrial and utility-scale coverage",
      "Flexible scheduling with minimal business disruption",
      "Before-and-after performance documentation",
      "Annual Maintenance Contracts (AMC) available",
    ],
    process: [
      { step: "Free Site Inspection", desc: "We assess panel condition, soiling level, access and safety requirements." },
      { step: "Safe Cleaning Setup", desc: "Harnesses, soft brushes and purified water systems are prepared on-site." },
      { step: "Professional Wash", desc: "Panels are cleaned without standing on modules, using demineralized water." },
      { step: "Quality Check", desc: "Final inspection and optional generation comparison after cleaning." },
    ],
    industries: ["Residential rooftops", "Offices & IT parks", "Hospitals & schools", "Hotels & malls", "Factories & warehouses", "Solar farms"],
    faqs: [
      { question: "How often should solar panels be cleaned in Ahmedabad?", answer: "Most Ahmedabad sites need cleaning every 10–14 days. Industrial areas like Naroda, Vatva and Odhav may need weekly cleaning due to higher dust and pollution." },
      { question: "What is the cost of solar panel cleaning in Ahmedabad?", answer: "Pricing depends on system size, roof access and frequency. Contact Yavix for an instant quote via WhatsApp — residential visits start affordably with AMC discounts available." },
      { question: "Does cleaning solar panels increase output?", answer: "Yes. Studies show dirty panels in Gujarat can lose 20–35% efficiency. Professional cleaning removes soiling and helps panels generate closer to rated capacity." },
    ],
  },
  {
    slug: "residential-solar-panel-cleaning",
    title: "Residential Solar Panel Cleaning in Ahmedabad",
    h1: "Residential Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Home, villa, apartment and society solar panel cleaning in Ahmedabad. Safe rooftop cleaning with demineralized water. Book your residential solar wash today.",
    keywords: [
      "Rooftop Solar Panel Cleaning",
      "residential solar panel cleaning Ahmedabad",
      "home solar panel cleaning Ahmedabad",
      "villa solar panel cleaning Ahmedabad",
      "society solar panel cleaning Ahmedabad",
      "Solar Panel Cleaning Services",
    ],
    image: "/images/service/Service_1.avif",
    intro: "Keep your home solar system performing at peak output with Yavix residential solar panel cleaning in Ahmedabad. We service villas, bungalows, apartments, row houses, farmhouses and housing societies across Satellite, Bopal, Maninagar, Nikol, Naroda and all major areas.",
    benefits: ["Safe cleaning without standing on panels", "Ideal for 3–20 kW home systems", "Removes bird droppings and calcification", "Morning/evening scheduling to avoid thermal shock", "AMC plans for hassle-free maintenance"],
    process: [
      { step: "Roof Assessment", desc: "We check access, panel tilt and safety anchor points." },
      { step: "Soft Brush Wash", desc: "Microfiber brushes lift dust without scratching glass." },
      { step: "Purified Water Rinse", desc: "Demineralized water prevents white mineral stains." },
      { step: "Output Advice", desc: "We share cleaning frequency tips for your locality." },
    ],
    industries: ["Villas & bungalows", "Apartments", "Housing societies", "Farmhouses", "Row houses"],
    faqs: [
      { question: "Can I clean solar panels myself?", answer: "DIY cleaning with hard tap water often leaves permanent stains. Professional cleaning is safer for your roof, panels and warranty." },
      { question: "How long does residential cleaning take?", answer: "Most home systems are completed in 30–90 minutes depending on array size and access." },
    ],
  },
  {
    slug: "commercial-solar-panel-cleaning",
    title: "Commercial Solar Panel Cleaning in Ahmedabad",
    h1: "Commercial Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Commercial solar panel cleaning in Ahmedabad for offices, hospitals, schools, malls, hotels and warehouses. Enterprise scheduling and AMC. Get a quote.",
    keywords: [
      "Commercial Solar Panel Cleaning",
      "commercial solar panel cleaning Ahmedabad",
      "office solar panel cleaning Ahmedabad",
      "hospital solar panel cleaning Ahmedabad",
      "school solar panel cleaning Ahmedabad",
      "mall solar panel cleaning Ahmedabad",
      "warehouse solar panel cleaning Ahmedabad",
      "hotel solar panel cleaning Ahmedabad",
      "factory solar panel cleaning Ahmedabad",
      "Rooftop Solar Panel Cleaning",
    ],
    image: "/images/service/Service_2.avif",
    intro:
      "Commercial solar panel cleaning in Ahmedabad from Yavix covers every major property type: offices, hospitals, schools, colleges, malls, hotels, warehouses and factories. Dust and pollution cut commercial solar ROI fast — our enterprise crews deliver purified-water cleaning with flexible after-hours scheduling and multi-site AMC contracts. Explore dedicated pages for office, hospital, school, mall, warehouse, hotel and factory solar cleaning linked below.",
    benefits: ["After-hours and weekend scheduling", "Multi-site corporate contracts", "Compliance-focused safety protocols", "Documented cleaning reports", "High-volume rooftop and carport arrays"],
    process: [
      { step: "Site Walkthrough", desc: "Identify array layout, inverter locations and safety zones." },
      { step: "Team Deployment", desc: "Certified crew with harnesses and water-fed poles." },
      { step: "Zone-by-Zone Clean", desc: "Systematic cleaning across rooftops and carports." },
      { step: "Handover Report", desc: "Before/after photos and maintenance recommendations." },
    ],
    industries: ["Office buildings", "Hospitals", "Schools & colleges", "Hotels", "Shopping malls", "Warehouses", "Factories"],
    faqs: [
      { question: "Do you clean solar carports and canopies?", answer: "Yes. We clean rooftop, carport, canopy and ground-mounted commercial arrays." },
      { question: "Can you service multiple branches?", answer: "Yes. We offer multi-location AMC contracts across Ahmedabad and nearby cities." },
      { question: "Which commercial property types do you cover?", answer: "Offices, hospitals, schools, malls, hotels, warehouses and factories — each with a dedicated service page for local SEO and tailored scheduling." },
    ],
    group: "core",
  },
  {
    slug: "industrial-solar-panel-cleaning",
    title: "Industrial Solar Panel Cleaning in Ahmedabad",
    h1: "Industrial Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Factory, manufacturing plant and warehouse solar cleaning in Ahmedabad GIDC areas. Remove industrial soot and dust. Maximize industrial solar ROI.",
    keywords: [
      "Industrial Solar Panel Cleaning",
      "Factory Solar Panel Cleaning",
      "industrial solar cleaning Ahmedabad",
      "factory solar panel cleaning Ahmedabad",
      "manufacturing plant solar cleaning Ahmedabad",
      "warehouse solar cleaning Ahmedabad",
      "Solar Panel Maintenance",
      "Solar Maintenance Services",
    ],
    image: "/images/service/Service_3.avif",
    intro: "Industrial zones in Naroda, Vatva, Odhav, Changodar and Sanand accumulate heavy soot, metal dust and pollution that rapidly reduce solar output. Yavix industrial solar panel cleaning is built for factories, manufacturing plants, textile units and large warehouses.",
    benefits: ["Handles heavy industrial soiling", "Large MW-scale capability", "Rapid turnaround for production sites", "Salt and mineral deposit treatment", "Dedicated AMC for GIDC clients"],
    process: [
      { step: "Soiling Analysis", desc: "Assess industrial dust type and cleaning frequency needs." },
      { step: "Safety Briefing", desc: "Full PPE, harness and hot-work coordination if needed." },
      { step: "Deep Clean", desc: "Multi-pass wash for soot, grease film and bird droppings." },
      { step: "Performance Log", desc: "Track cleaning impact on generation over time." },
    ],
    industries: ["Manufacturing plants", "Textile units", "Pharma facilities", "Food processing", "Logistics warehouses"],
    faqs: [
      { question: "How often should industrial panels be cleaned?", answer: "Most GIDC sites need weekly or bi-weekly cleaning due to airborne particulates and factory emissions." },
    ],
  },
  {
    slug: "solar-farm-cleaning",
    title: "Solar Farm Cleaning Services in Ahmedabad & Gujarat",
    h1: "Solar Farm & Utility-Scale Cleaning",
    metaDescription:
      "Utility-scale and solar farm cleaning across Ahmedabad and Gujarat. Large-array specialists for ground-mount and tracker systems.",
    keywords: [
      "Solar Farm Cleaning",
      "Solar Plant Cleaning",
      "solar farm cleaning Ahmedabad",
      "utility scale solar cleaning Gujarat",
      "ground mount solar cleaning",
      "solar plant cleaning Ahmedabad",
      "solar plant cleaning Gujarat",
    ],
    image: "/images/service/Service_4.avif",
    intro: "Utility-scale solar farms demand systematic, high-volume cleaning programs. Yavix supports ground-mount arrays, tracker systems and large rooftop plants across Ahmedabad district and Gujarat with scalable crews and equipment.",
    benefits: ["Ground-mount and tracker expertise", "Scalable team deployment", "Seasonal and AMC programs", "Dust storm recovery cleaning", "Minimal downtime planning"],
    process: [
      { step: "Array Mapping", desc: "Segment the farm into cleaning zones for efficiency." },
      { step: "Equipment Mobilization", desc: "Deploy brushes, poles and water systems across blocks." },
      { step: "Block Cleaning", desc: "Sequential zone cleaning with quality checkpoints." },
      { step: "Recovery Report", desc: "Document soiling removal and recommended schedule." },
    ],
    industries: ["Solar parks", "Ground-mount farms", "Tracker installations", "IPPs and EPC clients"],
    faqs: [
      { question: "Do you handle multi-MW solar farms?", answer: "Yes. Contact us with your MW capacity and location for a tailored cleaning plan." },
    ],
  },
  {
    slug: "solar-panel-amc",
    title: "Solar Panel AMC in Ahmedabad | Annual Maintenance Contract",
    h1: "Solar Panel AMC in Ahmedabad",
    metaDescription:
      "Solar panel annual maintenance contract (AMC) in Ahmedabad. Scheduled cleaning, inspection and performance care. Request AMC pricing today.",
    keywords: [
      "Solar AMC Services",
      "Annual Solar Panel Cleaning",
      "Solar Panel Maintenance",
      "Solar Maintenance Services",
      "solar AMC Ahmedabad",
      "solar panel annual maintenance contract Ahmedabad",
      "solar maintenance company Ahmedabad",
      "annual solar panel cleaning Ahmedabad",
    ],
    image: "/images/service/Service_5.avif",
    intro: "A solar panel AMC with Yavix ensures your system stays clean, efficient and protected year-round. Our Annual Maintenance Contracts include scheduled cleaning visits, inspection checks and priority support for residential, commercial and industrial clients across Ahmedabad.",
    benefits: ["Fixed annual pricing", "Priority scheduling", "Regular cleaning calendar", "Inspection with each visit", "Discounted emergency call-outs"],
    process: [
      { step: "System Survey", desc: "Document array size, access and current condition." },
      { step: "AMC Plan", desc: "Choose monthly, bi-weekly or custom frequency." },
      { step: "Scheduled Visits", desc: "Automatic cleaning on your calendar." },
      { step: "Annual Review", desc: "Year-end performance and maintenance summary." },
    ],
    industries: ["Homes", "Offices", "Factories", "Schools", "Solar farms"],
    faqs: [
      { question: "What is included in solar AMC?", answer: "Scheduled cleaning, basic visual inspection, soiling removal and maintenance recommendations. Repairs are quoted separately." },
      { question: "Is AMC cheaper than one-time cleaning?", answer: "Yes. AMC clients receive discounted per-visit rates and priority booking." },
    ],
  },
  {
    slug: "salt-deposit-removal",
    title: "Solar Panel Salt Deposit Removal in Ahmedabad",
    h1: "Salt & Mineral Deposit Removal for Solar Panels",
    metaDescription:
      "Remove hard water stains, salt deposits and calcification from solar panels in Ahmedabad. Restore clarity and solar output with expert treatment.",
    keywords: ["solar panel salt deposit cleaning Ahmedabad", "solar panel hard water stain removal Ahmedabad", "solar panel calcification removal"],
    image: "/images/service/Service_6.avif",
    intro: "Hard water and mineral deposits create a white haze on solar glass that blocks sunlight permanently if untreated. Yavix specializes in salt deposit removal and calcification treatment for panels damaged by borewell water or coastal mineral exposure in Gujarat.",
    benefits: ["Removes stubborn white scaling", "Restores glass clarity", "Prevents permanent efficiency loss", "Uses approved treatment methods", "Follow-up purified water wash"],
    process: [
      { step: "Deposit Assessment", desc: "Identify calcification severity and panel condition." },
      { step: "Gentle Treatment", desc: "Apply safe descaling without damaging AR coating." },
      { step: "Purified Rinse", desc: "Final wash with demineralized water." },
      { step: "Prevention Plan", desc: "Recommend only soft-water cleaning going forward." },
    ],
    industries: ["Residential", "Commercial rooftops", "Industrial plants", "Coastal-adjacent sites"],
    faqs: [
      { question: "Can hard water stains be fully removed?", answer: "Most early-stage calcification can be significantly reduced or removed. Severe cases may need multiple treatments." },
    ],
  },
  {
    slug: "bird-dropping-removal",
    title: "Solar Panel Bird Dropping Cleaning in Ahmedabad",
    h1: "Bird Dropping Removal for Solar Panels",
    metaDescription:
      "Professional bird dropping and pigeon nest cleaning for solar panels in Ahmedabad. Prevent hotspots and restore panel efficiency.",
    keywords: ["solar panel bird dropping cleaning Ahmedabad", "pigeon solar panel cleaning Ahmedabad"],
    image: "/images/service/Service_1.avif",
    intro: "Bird droppings block sunlight completely and cause hotspot damage on solar cells. Yavix provides bird dropping removal, nest area cleaning and preventive advice for homes and businesses across Ahmedabad where pigeons are common on rooftops.",
    benefits: ["Removes opaque droppings safely", "Reduces hotspot risk", "Nest area inspection", "Gentle, scratch-free methods", "Recommended cleaning frequency"],
    process: [
      { step: "Hotspot Check", desc: "Inspect for shadowing and cell damage risk." },
      { step: "Dropping Removal", desc: "Soft brush and purified water treatment." },
      { step: "Nest Area Clean", desc: "Clear debris around panel edges where safe." },
      { step: "Prevention Tips", desc: "Advise on bird deterrent options." },
    ],
    industries: ["Residential rooftops", "Commercial buildings", "Hospitals", "Warehouses"],
    faqs: [
      { question: "Can bird droppings damage solar panels permanently?", answer: "Yes. Prolonged droppings cause hotspots and can lead to cell damage. Regular cleaning prevents this." },
    ],
  },
  {
    slug: "solar-performance-inspection",
    title: "Solar Performance Inspection in Ahmedabad",
    h1: "Solar Panel Performance Inspection",
    metaDescription:
      "Solar panel performance inspection and efficiency audit in Ahmedabad. Identify soiling loss, hotspots and maintenance issues before they cost you.",
    keywords: ["solar panel inspection Ahmedabad", "solar performance audit Ahmedabad", "solar panel maintenance Ahmedabad"],
    image: "/images/service/Service_2.avif",
    intro: "Not sure if your panels need cleaning or repair? Yavix solar performance inspection identifies soiling loss, wiring issues, shading problems and maintenance gaps. Ideal before signing an AMC or after dust storms in Gujarat.",
    benefits: ["Visual and output-based assessment", "Soiling loss estimation", "Safety and wiring check", "Actionable maintenance report", "Free with cleaning booking"],
    process: [
      { step: "Generation Review", desc: "Compare output vs expected for weather conditions." },
      { step: "Physical Inspection", desc: "Check glass, frames, wiring and inverter status." },
      { step: "Soiling Report", desc: "Estimate efficiency recovery from cleaning." },
      { step: "Recommendations", desc: "Cleaning schedule and AMC options." },
    ],
    industries: ["All system sizes"],
    faqs: [
      { question: "Is solar inspection free?", answer: "We offer complimentary inspection when you book a cleaning service. Standalone audits are available on request." },
    ],
    group: "core",
  },

  // ── Point 4: Commercial niche landing pages ──
  {
    slug: "office-solar-panel-cleaning-ahmedabad",
    title: "Office Solar Panel Cleaning in Ahmedabad",
    h1: "Office Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Office solar panel cleaning in Ahmedabad for IT parks, corporate campuses and business towers. Flexible after-hours scheduling. Book a commercial quote.",
    keywords: [
      "office solar panel cleaning Ahmedabad",
      "commercial solar panel cleaning Ahmedabad",
      "corporate solar cleaning Ahmedabad",
      "IT park solar panel cleaning",
    ],
    image: "/images/service/Service_2.avif",
    intro:
      "Office buildings and IT parks across SG Highway, Prahlad Nagar, Satellite and Thaltej rely on rooftop and carport solar to cut commercial electricity costs. Dust and pollution quickly reduce output. Yavix delivers professional office solar panel cleaning in Ahmedabad with after-hours and weekend slots so your operations stay uninterrupted. We use demineralized water, soft brushes and safety harnesses — never standing on panels — and provide before/after documentation for facility managers.",
    benefits: [
      "After-hours & weekend cleaning windows",
      "Multi-tower / multi-branch corporate AMC",
      "Rooftop and solar carport coverage",
      "Facility-manager friendly reports",
      "Minimal disruption to office operations",
    ],
    process: [
      { step: "Site Access Coordination", desc: "We align with security and facility teams for roof/carport access." },
      { step: "Safety Setup", desc: "Harnesses, zone marking and PPE for high-rise or terrace arrays." },
      { step: "Professional Wash", desc: "Scratch-free cleaning with purified water across all strings." },
      { step: "Handover", desc: "Photos, notes and recommended cleaning frequency for your campus." },
    ],
    industries: ["IT parks", "Corporate offices", "Business towers", "Co-working campuses", "Bank buildings"],
    faqs: [
      { question: "Can you clean office solar carports?", answer: "Yes. We clean rooftop and carport/canopy arrays common at office campuses in Ahmedabad." },
      { question: "Do you offer AMC for multiple office locations?", answer: "Yes. Corporate AMC covers multiple branches across Ahmedabad and nearby cities." },
    ],
    group: "commercial",
  },
  {
    slug: "hospital-solar-panel-cleaning-ahmedabad",
    title: "Hospital Solar Panel Cleaning in Ahmedabad",
    h1: "Hospital Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Hospital solar panel cleaning in Ahmedabad with hygiene-aware scheduling and safety compliance. Keep medical campus solar at peak output.",
    keywords: [
      "hospital solar panel cleaning Ahmedabad",
      "healthcare solar cleaning Ahmedabad",
      "clinic solar panel cleaning Ahmedabad",
      "commercial solar panel cleaning Ahmedabad",
    ],
    image: "/images/service/Service_2.avif",
    intro:
      "Hospitals and healthcare campuses need reliable solar generation to offset high daytime loads. Bird droppings, dust and pollution on medical rooftops reduce output and create hotspot risks. Yavix provides hospital solar panel cleaning in Ahmedabad with coordinated scheduling around sensitive operations, full safety compliance and documented visits suitable for facility and biomedical engineering teams.",
    benefits: [
      "Scheduling that respects hospital operations",
      "Safety-certified crew with harnesses",
      "Bird dropping & dust removal focus",
      "Documented cleaning logs for audits",
      "AMC plans for continuous uptime",
    ],
    process: [
      { step: "Facility Briefing", desc: "Coordinate with hospital engineering / facility management." },
      { step: "Restricted-Zone Planning", desc: "Define safe work zones near patient-care areas." },
      { step: "Clinical-Grade Care Clean", desc: "Soft-brush wash with purified water; no abrasive chemicals." },
      { step: "Compliance Report", desc: "Visit log, photos and next-schedule recommendation." },
    ],
    industries: ["Hospitals", "Multispecialty clinics", "Diagnostic centres", "Medical colleges"],
    faqs: [
      { question: "Do you work with hospital facility teams?", answer: "Yes. We follow site SOPs, badge/access rules and preferred time windows." },
      { question: "How often should hospital panels be cleaned?", answer: "Typically every 10–14 days in Ahmedabad; more often if bird activity is high." },
    ],
    group: "commercial",
  },
  {
    slug: "school-solar-panel-cleaning-ahmedabad",
    title: "School Solar Panel Cleaning in Ahmedabad",
    h1: "School & College Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "School solar panel cleaning in Ahmedabad for schools, colleges and campuses. Safe weekend scheduling. Improve campus solar efficiency.",
    keywords: [
      "school solar panel cleaning Ahmedabad",
      "college solar panel cleaning Ahmedabad",
      "campus solar cleaning Ahmedabad",
      "commercial solar panel cleaning Ahmedabad",
    ],
    image: "/images/service/Service_1.avif",
    intro:
      "Schools and colleges across Ahmedabad use rooftop solar to lower electricity costs and support green-campus goals. Dust and bird droppings reduce generation during peak classroom hours. Yavix offers school solar panel cleaning in Ahmedabad with preferred weekend and holiday slots, child-safe work practices and clear communication with school administration.",
    benefits: [
      "Weekend / holiday preferred slots",
      "Safety-first crews on campus roofs",
      "Affordable AMC for educational institutions",
      "Supports green-campus sustainability goals",
      "Scratch-free purified water cleaning",
    ],
    process: [
      { step: "Admin Coordination", desc: "Plan around exams, events and school hours." },
      { step: "Campus Safety Setup", desc: "Secure access and keep students clear of work zones." },
      { step: "Full Array Clean", desc: "Clean all rooftop strings with soft brushes and demineralized water." },
      { step: "Report to Admin", desc: "Share photos and recommended frequency for the campus." },
    ],
    industries: ["Schools", "Colleges", "Universities", "Coaching campuses", "Hostels"],
    faqs: [
      { question: "Can cleaning happen on Sundays?", answer: "Yes. Weekend and holiday slots are ideal for schools and colleges." },
      { question: "Do you cover college hostels too?", answer: "Yes. Any campus rooftop or carport solar array in Ahmedabad can be included." },
    ],
    group: "commercial",
  },
  {
    slug: "mall-solar-panel-cleaning-ahmedabad",
    title: "Mall Solar Panel Cleaning in Ahmedabad",
    h1: "Mall & Shopping Complex Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Mall solar panel cleaning in Ahmedabad for shopping centres and retail complexes. Large-array cleaning with flexible off-peak scheduling.",
    keywords: [
      "mall solar panel cleaning Ahmedabad",
      "shopping complex solar cleaning Ahmedabad",
      "retail solar panel cleaning Ahmedabad",
      "commercial solar panel cleaning Ahmedabad",
    ],
    image: "/images/service/Service_2.avif",
    intro:
      "Shopping malls and retail complexes run large rooftop solar plants that suffer heavy dust and pollution buildup along busy corridors like SG Highway and central Ahmedabad. Yavix provides mall solar panel cleaning in Ahmedabad with scalable crews, night/early-morning windows and documentation for mall operations and sustainability teams.",
    benefits: [
      "Large commercial array capacity",
      "Off-peak / night scheduling options",
      "Minimal disruption to mall operations",
      "Before/after performance documentation",
      "Enterprise AMC contracts",
    ],
    process: [
      { step: "Ops Coordination", desc: "Align with mall facility and security management." },
      { step: "Zone Mapping", desc: "Split large roofs into cleanable zones for efficiency." },
      { step: "High-Volume Clean", desc: "Deploy team with water-fed poles and soft brushes." },
      { step: "Ops Handover", desc: "Photos, notes and next AMC visit date." },
    ],
    industries: ["Shopping malls", "Retail plazas", "Hypermarkets", "Mixed-use complexes"],
    faqs: [
      { question: "Can you handle very large mall rooftops?", answer: "Yes. We scale crew size to array area and complete zone-by-zone." },
      { question: "Do you clean after events or festivals?", answer: "Yes. Extra visits can be booked after high-dust periods or construction nearby." },
    ],
    group: "commercial",
  },
  {
    slug: "warehouse-solar-panel-cleaning-ahmedabad",
    title: "Warehouse Solar Panel Cleaning in Ahmedabad",
    h1: "Warehouse Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Warehouse solar panel cleaning in Ahmedabad for logistics hubs and storage facilities. Remove dust and industrial fallout. Book AMC.",
    keywords: [
      "warehouse solar panel cleaning Ahmedabad",
      "warehouse solar cleaning Ahmedabad",
      "logistics solar panel cleaning Ahmedabad",
      "commercial solar panel cleaning Ahmedabad",
    ],
    image: "/images/service/Service_3.avif",
    intro:
      "Warehouses and logistics hubs in Ahmedabad — including Narol, Vatva, Changodar and Sanand corridors — accumulate road dust and industrial fallout that slash solar yield. Yavix warehouse solar panel cleaning restores output on large shed roofs with efficient crew deployment and schedules that work around loading docks and shift timings.",
    benefits: [
      "Built for large shed / metal-roof arrays",
      "Handles heavy dust and industrial soiling",
      "Flexible around warehouse shift operations",
      "AMC for logistics & 3PL operators",
      "Safety compliance on high roofs",
    ],
    process: [
      { step: "Roof & Access Survey", desc: "Assess roof type, height and loading-bay constraints." },
      { step: "Safety Plan", desc: "Harnesses and fall protection for warehouse heights." },
      { step: "Deep Dust Clean", desc: "Multi-pass wash for fine dust common on logistics roofs." },
      { step: "Ops Report", desc: "Document recovery and set AMC cadence." },
    ],
    industries: ["Warehouses", "3PL hubs", "Cold storage", "Distribution centres", "Godowns"],
    faqs: [
      { question: "How often should warehouse panels be cleaned?", answer: "Often weekly or bi-weekly near industrial corridors due to heavy dust." },
      { question: "Do you clean metal-shed rooftop mounts?", answer: "Yes. We are experienced with typical warehouse roof mounting systems." },
    ],
    group: "commercial",
  },
  {
    slug: "hotel-solar-panel-cleaning-ahmedabad",
    title: "Hotel Solar Panel Cleaning in Ahmedabad",
    h1: "Hotel Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Hotel solar panel cleaning in Ahmedabad for hotels and resorts. Discreet scheduling, guest-friendly operations, peak solar efficiency.",
    keywords: [
      "hotel solar panel cleaning Ahmedabad",
      "resort solar panel cleaning Ahmedabad",
      "hospitality solar cleaning Ahmedabad",
      "commercial solar panel cleaning Ahmedabad",
    ],
    image: "/images/service/Service_2.avif",
    intro:
      "Hotels need quiet, discreet solar maintenance that never disturbs guests. Dust and bird droppings on hotel rooftops reduce generation used for lighting, HVAC offset and hot water systems. Yavix provides hotel solar panel cleaning in Ahmedabad with early-morning slots, professional appearance standards and reliable AMC for hospitality groups.",
    benefits: [
      "Guest-friendly early-morning scheduling",
      "Discreet, professional crew conduct",
      "Bird dropping & dust focus for rooftops",
      "Chain / multi-property AMC available",
      "Purified water — no white stain risk",
    ],
    process: [
      { step: "GM / Engineering Sync", desc: "Confirm time windows around occupancy and events." },
      { step: "Quiet Operations", desc: "Low-disruption cleaning with clear roof access paths." },
      { step: "Full Clean", desc: "Soft-brush wash of all hotel rooftop arrays." },
      { step: "Engineering Report", desc: "Photos and schedule for hospitality maintenance teams." },
    ],
    industries: ["Hotels", "Resorts", "Serviced apartments", "Banquet venues"],
    faqs: [
      { question: "Will cleaning disturb guests?", answer: "We schedule early mornings and keep noise and visibility minimal." },
      { question: "Can hotel chains get one AMC?", answer: "Yes. Multi-property hospitality AMC is available across Ahmedabad." },
    ],
    group: "commercial",
  },
  {
    slug: "factory-solar-panel-cleaning-ahmedabad",
    title: "Factory Solar Panel Cleaning in Ahmedabad",
    h1: "Factory Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Factory solar panel cleaning in Ahmedabad for manufacturing plants and GIDC units. Remove soot and industrial dust. Maximize factory solar ROI.",
    keywords: [
      "Factory Solar Panel Cleaning",
      "factory solar panel cleaning Ahmedabad",
      "industrial solar cleaning Ahmedabad",
      "manufacturing plant solar cleaning Ahmedabad",
      "commercial solar panel cleaning Ahmedabad",
      "Industrial Solar Panel Cleaning",
    ],
    image: "/images/service/Service_3.avif",
    intro:
      "Factories in Naroda, Vatva, Odhav, Changodar and Sanand face the heaviest soiling in Ahmedabad — soot, metal dust and process emissions. Factory solar panel cleaning from Yavix is built for manufacturing plants: weekly/bi-weekly cadence options, PPE-compliant crews and deep cleans that recover lost kWh on industrial rooftops and ground mounts.",
    benefits: [
      "Industrial soot & dust specialty",
      "Weekly cleaning programs available",
      "GIDC / factory safety compliance",
      "Large kW to multi-MW capability",
      "Plant-manager AMC with visit logs",
    ],
    process: [
      { step: "Plant Coordination", desc: "Align with EHS and maintenance around production." },
      { step: "Soiling Assessment", desc: "Identify soot, grease film and bird dropping hotspots." },
      { step: "Industrial Deep Clean", desc: "Multi-pass wash suitable for heavy industrial soiling." },
      { step: "Generation Log", desc: "Track recovery and lock AMC frequency." },
    ],
    industries: ["Manufacturing plants", "Textile units", "Pharma", "Auto ancillaries", "Chemical units"],
    faqs: [
      { question: "Is factory cleaning different from office cleaning?", answer: "Yes. Factories need more frequent visits and deeper cleaning for soot and industrial particulates." },
      { question: "Do you serve Vatva and Naroda GIDC?", answer: "Yes. These are core industrial service zones for Yavix." },
    ],
    group: "commercial",
  },

  // Extra keyword landing pages (user-requested)
  {
    slug: "rooftop-solar-panel-cleaning",
    title: "Rooftop Solar Panel Cleaning in Ahmedabad",
    h1: "Rooftop Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Rooftop solar panel cleaning in Ahmedabad for homes, societies and commercial buildings. Safe terrace cleaning with demineralized water. Book today.",
    keywords: [
      "Rooftop Solar Panel Cleaning",
      "rooftop solar panel cleaning Ahmedabad",
      "terrace solar cleaning Ahmedabad",
      "Solar Panel Cleaning Services",
      "Professional Solar Panel Cleaning",
    ],
    image: "/images/service/Service_1.avif",
    intro:
      "Most solar systems in Ahmedabad are rooftop-mounted. Yavix specializes in rooftop solar panel cleaning with harness-safe access, soft brushes and demineralized water — protecting panels, roofs and warranties while restoring generation for homes, societies and commercial terraces across Gujarat.",
    benefits: [
      "Safe rooftop / terrace access methods",
      "No standing on solar modules",
      "Ideal for 3–500 kW rooftop plants",
      "Scratch-free purified water wash",
      "Residential & commercial rooftop AMC",
    ],
    process: [
      { step: "Roof Access Check", desc: "Assess terrace access, parapets and safety anchors." },
      { step: "Safe Setup", desc: "Harnesses and soft equipment ready for rooftop work." },
      { step: "Rooftop Clean", desc: "Full array wash without damaging waterproofing or panels." },
      { step: "Handover", desc: "Photos and recommended rooftop cleaning frequency." },
    ],
    industries: ["Home rooftops", "Housing societies", "Office terraces", "Hospital roofs", "Factory sheds"],
    faqs: [
      { question: "Is rooftop cleaning safe for my building?", answer: "Yes. We use safety harnesses and never stand on panels or damage terrace waterproofing." },
      { question: "How often should rooftop panels be cleaned in Ahmedabad?", answer: "Every 10–14 days for most homes; weekly near industrial dust zones." },
    ],
    group: "core",
  },
  {
    slug: "solar-panel-cleaning-gujarat",
    title: "Solar Panel Cleaning Gujarat | Statewide Service",
    h1: "Solar Panel Cleaning in Gujarat",
    metaDescription:
      "Solar panel cleaning Gujarat — Ahmedabad hub serving Sanand, Kalol, Gandhinagar, Mehsana and industrial GIDC belts. Professional solar washing & AMC.",
    keywords: [
      "Solar Panel Cleaning Gujarat",
      "solar panel cleaning Gujarat",
      "solar cleaning Gujarat",
      "Solar Panel Cleaning Services",
      "Professional Solar Panel Cleaning",
      "Solar Cleaning Company",
    ],
    image: "/images/service/Service_2.avif",
    intro:
      "Yavix Energy provides solar panel cleaning across Gujarat from our Ahmedabad base — covering residential, commercial, industrial and solar plant sites in Ahmedabad district, Sanand, Changodar, Kalol, Kadi, Gandhinagar, Mehsana and major GIDC corridors. Dust across Gujarat’s dry climate makes professional solar panel washing and AMC essential for ROI.",
    benefits: [
      "Statewide Gujarat coverage from Ahmedabad",
      "Industrial GIDC specialty teams",
      "Residential, commercial & utility plants",
      "Solar AMC across Gujarat sites",
      "Demineralized water cleaning standard",
    ],
    process: [
      { step: "Site Survey", desc: "Confirm location, kW size and soiling type across Gujarat." },
      { step: "Crew Dispatch", desc: "Deploy trained team to your city or GIDC." },
      { step: "Professional Wash", desc: "Scratch-free cleaning with purified water." },
      { step: "AMC Option", desc: "Schedule recurring Gujarat-wide maintenance." },
    ],
    industries: ["Ahmedabad", "Sanand", "Kalol", "Gandhinagar", "Mehsana", "GIDC plants"],
    faqs: [
      { question: "Do you clean outside Ahmedabad city?", answer: "Yes. We serve Gujarat industrial belts and nearby cities including Sanand, Kalol, Kadi and Gandhinagar." },
      { question: "Can factories in GIDC get AMC?", answer: "Yes. Industrial AMC is available for GIDC and manufacturing sites across Gujarat." },
    ],
    group: "core",
  },
  {
    slug: "solar-plant-cleaning",
    title: "Solar Plant Cleaning in Ahmedabad & Gujarat",
    h1: "Solar Plant Cleaning Services",
    metaDescription:
      "Solar plant cleaning for ground-mount and large rooftop plants in Ahmedabad & Gujarat. Recover generation with professional solar plant washing & AMC.",
    keywords: [
      "Solar Plant Cleaning",
      "solar plant cleaning Ahmedabad",
      "solar plant cleaning Gujarat",
      "Solar Farm Cleaning",
      "Solar Panel Cleaning Services",
      "utility scale solar cleaning",
    ],
    image: "/images/service/Service_4.avif",
    intro:
      "Solar plant cleaning requires systematic zone-by-zone washing for ground-mount parks and large commercial plants. Yavix delivers solar plant cleaning across Ahmedabad and Gujarat with scalable crews, dust-storm recovery cleans and plant AMC programs that protect IPP and captive power ROI.",
    benefits: [
      "Ground-mount and large plant expertise",
      "Scalable multi-crew deployment",
      "Dust storm recovery cleaning",
      "Generation recovery documentation",
      "Plant AMC calendars",
    ],
    process: [
      { step: "Plant Mapping", desc: "Divide arrays into cleaning blocks." },
      { step: "Mobilization", desc: "Deploy brushes, poles and water systems." },
      { step: "Block Cleaning", desc: "Sequential plant cleaning with QC checks." },
      { step: "Performance Report", desc: "Soiling removal notes and next schedule." },
    ],
    industries: ["Solar parks", "Captive plants", "Open access plants", "Ground-mount farms"],
    faqs: [
      { question: "Is solar plant cleaning different from home cleaning?", answer: "Yes. Plants need zone planning, larger crews and higher frequency in dusty Gujarat belts." },
      { question: "Do you handle MW-scale plants?", answer: "Yes. Share your MW capacity and location for a custom plant cleaning plan." },
    ],
    group: "core",
  },
];

export function getServiceBySlug(slug: string) {
  return SEO_SERVICES.find((s) => s.slug === slug);
}

export function getServiceSlugs() {
  return SEO_SERVICES.map((s) => s.slug);
}

export function getCoreServices() {
  return SEO_SERVICES.filter((s) => s.group !== "commercial");
}

export function getCommercialServices() {
  return SEO_SERVICES.filter((s) => s.group === "commercial");
}
