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
}

export const SEO_SERVICES: SeoService[] = [
  {
    slug: "solar-panel-cleaning-ahmedabad",
    title: "Professional Solar Panel Cleaning Services in Ahmedabad",
    h1: "Solar Panel Cleaning Services in Ahmedabad",
    metaDescription:
      "Professional solar panel cleaning services in Ahmedabad for residential, commercial, industrial and solar farm installations. Improve efficiency, reduce bills. Book free inspection.",
    keywords: [
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
    keywords: ["residential solar panel cleaning Ahmedabad", "home solar panel cleaning Ahmedabad", "villa solar panel cleaning Ahmedabad", "society solar panel cleaning Ahmedabad"],
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
      "Office, hospital, school, mall and hotel solar panel cleaning in Ahmedabad. Enterprise-grade cleaning with flexible scheduling. Get a commercial quote.",
    keywords: ["commercial solar panel cleaning Ahmedabad", "office solar panel cleaning Ahmedabad", "hospital solar panel cleaning Ahmedabad", "mall solar panel cleaning Ahmedabad"],
    image: "/images/service/Service_2.avif",
    intro: "Commercial solar assets in Ahmedabad require consistent maintenance to protect ROI. Yavix provides commercial solar panel cleaning for offices, hospitals, schools, colleges, hotels, malls, warehouses and business parks with minimal operational disruption.",
    benefits: ["After-hours and weekend scheduling", "Multi-site corporate contracts", "Compliance-focused safety protocols", "Documented cleaning reports", "High-volume rooftop and carport arrays"],
    process: [
      { step: "Site Walkthrough", desc: "Identify array layout, inverter locations and safety zones." },
      { step: "Team Deployment", desc: "Certified crew with harnesses and water-fed poles." },
      { step: "Zone-by-Zone Clean", desc: "Systematic cleaning across rooftops and carports." },
      { step: "Handover Report", desc: "Before/after photos and maintenance recommendations." },
    ],
    industries: ["Office buildings", "Hospitals", "Schools & colleges", "Hotels", "Shopping malls", "Warehouses"],
    faqs: [
      { question: "Do you clean solar carports and canopies?", answer: "Yes. We clean rooftop, carport, canopy and ground-mounted commercial arrays." },
      { question: "Can you service multiple branches?", answer: "Yes. We offer multi-location AMC contracts across Ahmedabad and nearby cities." },
    ],
  },
  {
    slug: "industrial-solar-panel-cleaning",
    title: "Industrial Solar Panel Cleaning in Ahmedabad",
    h1: "Industrial Solar Panel Cleaning in Ahmedabad",
    metaDescription:
      "Factory, manufacturing plant and warehouse solar cleaning in Ahmedabad GIDC areas. Remove industrial soot and dust. Maximize industrial solar ROI.",
    keywords: ["industrial solar cleaning Ahmedabad", "factory solar panel cleaning Ahmedabad", "manufacturing plant solar cleaning Ahmedabad", "warehouse solar cleaning Ahmedabad"],
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
    keywords: ["solar farm cleaning Ahmedabad", "utility scale solar cleaning Gujarat", "ground mount solar cleaning"],
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
    keywords: ["solar AMC Ahmedabad", "solar panel annual maintenance contract Ahmedabad", "solar maintenance company Ahmedabad"],
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
  },
];

export function getServiceBySlug(slug: string) {
  return SEO_SERVICES.find((s) => s.slug === slug);
}

export function getServiceSlugs() {
  return SEO_SERVICES.map((s) => s.slug);
}
