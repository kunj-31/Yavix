export interface SeoLocation {
  slug: string;
  name: string;
  type: "ahmedabad" | "nearby";
  nearbyAreas: string[];
  dustNote: string;
  landmarks?: string;
  /** Extra SEO names e.g. "Naroda GIDC" */
  aliases?: string[];
  zone?: "locality" | "industrial-east" | "industrial-south" | "industrial-west";
}

function loc(
  slug: string,
  name: string,
  nearbyAreas: string[],
  dustNote: string,
  type: "ahmedabad" | "nearby" = "ahmedabad",
  landmarks?: string,
  aliases: string[] = [],
  zone: SeoLocation["zone"] = "locality",
): SeoLocation {
  return { slug, name, type, nearbyAreas, dustNote, landmarks, aliases, zone };
}

export const SEO_LOCATIONS: SeoLocation[] = [
  loc("ahmedabad", "Ahmedabad", ["Naroda", "Nikol", "Satellite", "Bopal", "Maninagar"], "Ahmedabad's dry climate and construction dust cause rapid panel soiling across the city."),
  loc("naroda", "Naroda", ["Nikol", "Odhav", "Vastral", "Bapunagar", "Kathwada GIDC"], "Industrial emissions and GIDC dust make Naroda one of the highest-soiling zones for solar panels.", "ahmedabad", undefined, ["Naroda GIDC", "East Ahmedabad industrial"], "industrial-east"),
  loc("nikol", "Nikol", ["Naroda", "Vastral", "Odhav", "Bapunagar", "Thakkarbapanagar"], "Nikol's mix of residential growth and nearby industrial activity increases airborne dust on rooftops."),
  loc("bapunagar", "Bapunagar", ["Naroda", "Nikol", "Odhav", "Amraiwadi", "Khokhra"], "Dense urban housing and road dust in Bapunagar quickly coat solar panels between rains."),
  loc("odhav", "Odhav", ["Vastral", "Nikol", "Naroda", "CTM", "Amraiwadi"], "Odhav industrial and residential zones experience heavy particulate buildup on solar arrays.", "ahmedabad", undefined, ["Odhav GIDC", "East Ahmedabad industrial"], "industrial-east"),
  loc("vastral", "Vastral", ["Odhav", "Nikol", "CTM", "Amraiwadi", "Narol"], "Vastral's expanding housing and proximity to industrial belts accelerates solar soiling."),
  loc("maninagar", "Maninagar", ["Isanpur", "CTM", "Khokhra", "Narol", "Vatva"], "Central Ahmedabad dust and pollution affect Maninagar rooftop solar performance."),
  loc("satellite", "Satellite", ["Prahlad Nagar", "Bodakdev", "Jodhpur", "Memnagar", "Ambawadi"], "Satellite's high solar adoption means regular professional cleaning is essential for ROI."),
  loc("bopal", "Bopal", ["South Bopal", "Shela", "Gota", "Science City", "SG Highway"], "Bopal's construction activity and dry-season dust reduce panel output without regular cleaning."),
  loc("gota", "Gota", ["Chandkheda", "Motera", "Science City", "Bopal", "SG Highway"], "Gota and New Gota areas see fast dust accumulation on residential solar systems."),
  loc("chandkheda", "Chandkheda", ["Motera", "Gota", "Sabarmati", "New Ranip", "Ranip"], "Chandkheda's highway dust and construction sites increase solar panel maintenance needs."),
  loc("motera", "Motera", ["Chandkheda", "Sabarmati", "Ranip", "Gota", "Thaltej"], "Motera rooftops near main roads collect fine dust that blocks sunlight within weeks."),
  loc("south-bopal", "South Bopal", ["Bopal", "Shela", "Gota", "Science City", "SG Highway"], "South Bopal villas and societies benefit from bi-weekly solar cleaning schedules."),
  loc("prahlad-nagar", "Prahlad Nagar", ["Satellite", "Bodakdev", "SG Highway", "Thaltej", "Ambawadi"], "Commercial and residential towers in Prahlad Nagar need scheduled solar maintenance."),
  loc("sg-highway", "SG Highway", ["Prahlad Nagar", "Thaltej", "Bodakdev", "Satellite", "Science City"], "SG Highway corporate campuses and malls require enterprise solar cleaning programs."),
  loc("thaltej", "Thaltej", ["SG Highway", "Bodakdev", "Science City", "Gota", "Prahlad Nagar"], "Thaltej's premium residential and commercial solar installations demand professional care."),
  loc("science-city", "Science City", ["Thaltej", "Bopal", "Gota", "SG Highway", "Shela"], "Science City area solar owners see strong ROI gains from regular dust removal."),
  loc("navrangpura", "Navrangpura", ["Naranpura", "Paldi", "Ambawadi", "Ellisbridge", "Shahibaug"], "Central city pollution affects Navrangpura solar panel efficiency year-round."),
  loc("naranpura", "Naranpura", ["Navrangpura", "Memnagar", "Gurukul", "Paldi", "Ambawadi"], "Naranpura residential rooftops need frequent cleaning during dry Gujarat months."),
  loc("sabarmati", "Sabarmati", ["Motera", "Chandkheda", "Ranip", "New Ranip", "Naranpura"], "Sabarmati riverfront and highway dust settles quickly on nearby solar arrays."),
  loc("ranip", "Ranip", ["New Ranip", "Chandkheda", "Sabarmati", "Motera", "Gota"], "Ranip and New Ranip see construction dust impacting solar generation."),
  loc("new-ranip", "New Ranip", ["Ranip", "Chandkheda", "Sabarmati", "Motera", "Gota"], "Growing residential solar adoption in New Ranip requires reliable cleaning partners."),
  loc("isanpur", "Isanpur", ["Maninagar", "CTM", "Vatva", "Narol", "Amraiwadi"], "Isanpur's industrial proximity increases soot and dust on solar panels."),
  loc("ctm", "CTM", ["Amraiwadi", "Vastral", "Maninagar", "Isanpur", "Narol"], "CTM area combines traffic dust and industrial fallout affecting solar output."),
  loc("amraiwadi", "Amraiwadi", ["CTM", "Vastral", "Odhav", "Maninagar", "Rakhial"], "Amraiwadi dense housing means bird droppings and road dust are common panel issues.", "ahmedabad", undefined, ["East Ahmedabad"], "industrial-east"),
  loc("vatva", "Vatva", ["Isanpur", "Narol", "Vejalpur", "CTM", "Hathijan"], "Vatva GIDC industrial soot can reduce solar output by up to 35% without cleaning.", "ahmedabad", undefined, ["Vatva GIDC", "East Ahmedabad industrial"], "industrial-east"),
  loc("narol", "Narol", ["Vatva", "Isanpur", "Vejalpur", "CTM", "Lambha"], "Narol's industrial belt requires aggressive solar cleaning schedules.", "ahmedabad", undefined, ["Narol GIDC", "East Ahmedabad industrial"], "industrial-east"),
  loc("vejalpur", "Vejalpur", ["Jodhpur", "Satellite", "Vatva", "Narol", "Shela"], "Vejalpur residential and commercial sites benefit from Yavix AMC plans."),
  loc("jodhpur", "Jodhpur", ["Satellite", "Vejalpur", "Memnagar", "Ambawadi", "Bodakdev"], "Jodhpur Village and nearby societies are high-demand solar cleaning zones."),
  loc("memnagar", "Memnagar", ["Navrangpura", "Naranpura", "Ambawadi", "Paldi", "Jodhpur"], "Memnagar bungalows and apartments need scratch-free professional cleaning."),
  loc("bodakdev", "Bodakdev", ["Thaltej", "SG Highway", "Satellite", "Prahlad Nagar", "Shilaj"], "Bodakdev corporate offices and homes rely on consistent solar maintenance."),
  loc("shilaj", "Shilaj", ["Bodakdev", "Shela", "Bopal", "Science City", "Thaltej"], "Shilaj's rapid development increases construction dust on new solar installs."),
  loc("shela", "Shela", ["Bopal", "South Bopal", "Shilaj", "Science City", "Vejalpur"], "Shela villa communities are ideal for scheduled residential solar cleaning."),
  loc("gurukul", "Gurukul", ["Naranpura", "Memnagar", "Navrangpura", "Paldi", "Ambawadi"], "Gurukul area homes with solar need demineralized water cleaning to prevent stains."),
  loc("paldi", "Paldi", ["Navrangpura", "Ambawadi", "Ellisbridge", "Naranpura", "Memnagar"], "Paldi central location means pollution-related soiling is a constant factor."),
  loc("ambawadi", "Ambawadi", ["Paldi", "Navrangpura", "Satellite", "Memnagar", "Ellisbridge"], "Ambawadi rooftops accumulate urban dust and bird droppings quickly."),
  loc("ellisbridge", "Ellisbridge", ["Paldi", "Navrangpura", "Ambawadi", "Shahibaug", "Naranpura"], "Ellisbridge commercial and residential solar systems need regular professional washing."),
  loc("shahibaug", "Shahibaug", ["Navrangpura", "Ellisbridge", "Paldi", "Naranpura", "Gurukul"], "Shahibaug heritage and commercial buildings with solar require careful cleaning access."),

  // East Ahmedabad industrial / GIDC (new + mapped)
  loc("kathwada-gidc", "Kathwada GIDC", ["Naroda", "Odhav", "Singarva", "Kuha"], "Kathwada GIDC factories face heavy industrial dust requiring frequent solar washing.", "ahmedabad", "East Ahmedabad industrial", ["Kathwada"], "industrial-east"),
  loc("rakhial", "Rakhial", ["Amraiwadi", "CTM", "Odhav", "Bapunagar"], "Rakhial industrial and warehouse dust coats rooftop solar quickly.", "ahmedabad", "East Ahmedabad", [], "industrial-east"),
  loc("ramol", "Ramol", ["Vatva", "Narol", "CTM", "Amraiwadi"], "Ramol's mix of industry and logistics increases airborne soiling on panels.", "ahmedabad", "East Ahmedabad", [], "industrial-east"),
  loc("hathijan", "Hathijan", ["Vatva", "Narol", "Pirana", "Lambha"], "Hathijan industrial belt needs weekly solar cleaning for soot and dust.", "ahmedabad", "East Ahmedabad", [], "industrial-east"),
  loc("lambha", "Lambha", ["Narol", "Vatva", "Aslali", "Pirana"], "Lambha warehouses and plants accumulate road and industrial dust on solar arrays.", "ahmedabad", "East Ahmedabad", [], "industrial-east"),
  loc("pirana", "Pirana", ["Vatva", "Narol", "Hathijan", "Lambha"], "Pirana industrial zone soiling is among the heaviest in east Ahmedabad.", "ahmedabad", "East Ahmedabad", [], "industrial-east"),
  loc("kubadthal", "Kubadthal Industrial Area", ["Kathwada GIDC", "Naroda", "Kuha", "Singarva"], "Kubadthal industrial area plants need aggressive solar maintenance schedules.", "ahmedabad", "East Ahmedabad industrial", ["Kubadthal"], "industrial-east"),
  loc("singarva", "Singarva", ["Kathwada GIDC", "Kuha", "Bhuvaldi", "Naroda"], "Singarva industrial surroundings cause rapid dust buildup on solar panels.", "ahmedabad", "East Ahmedabad", [], "industrial-east"),
  loc("bhuvaldi", "Bhuvaldi", ["Singarva", "Kuha", "Zanu", "Kathwada GIDC"], "Bhuvaldi industrial dust reduces factory solar output without regular cleaning.", "ahmedabad", "East Ahmedabad", [], "industrial-east"),
  loc("kuha", "Kuha", ["Singarva", "Bhuvaldi", "Zanu", "Kathwada GIDC"], "Kuha area industrial units rely on frequent professional solar washing.", "ahmedabad", "East Ahmedabad", [], "industrial-east"),
  loc("zanu", "Zanu", ["Kuha", "Bhuvaldi", "Bakrol", "Singarva"], "Zanu industrial dust and dry climate accelerate soiling loss on solar plants.", "ahmedabad", "East Ahmedabad", [], "industrial-east"),
  loc("bakrol", "Bakrol", ["Zanu", "Kuha", "Kathwada GIDC", "Naroda"], "Bakrol factories and warehouses need scheduled industrial solar cleaning.", "ahmedabad", "East Ahmedabad", [], "industrial-east"),

  // South Ahmedabad industrial
  loc("aslali", "Aslali", ["Bareja", "Lambha", "Narol", "Kanbha"], "Aslali logistics and industrial dust requires frequent solar panel washing.", "ahmedabad", "South Ahmedabad", [], "industrial-south"),
  loc("bareja", "Bareja", ["Aslali", "Kanbha", "Dholka", "Vatva"], "Bareja industrial corridor soiling impacts commercial and plant solar ROI.", "ahmedabad", "South Ahmedabad", [], "industrial-south"),
  loc("changodar-gidc", "Changodar GIDC", ["Moraiya GIDC", "Sanand", "Bavla", "Sarkhej"], "Changodar GIDC is a high-dust manufacturing belt needing weekly solar cleans.", "ahmedabad", "South Ahmedabad industrial", ["Changodar"], "industrial-south"),
  loc("moraiya-gidc", "Moraiya GIDC", ["Changodar GIDC", "Sanand", "Bavla", "Sanathal"], "Moraiya GIDC automotive and industrial soot rapidly reduces panel output.", "ahmedabad", "South Ahmedabad industrial", ["Moraiya"], "industrial-south"),
  loc("bavla", "Bavla", ["Changodar GIDC", "Moraiya GIDC", "Dholka", "Sanand"], "Bavla industrial growth increases airborne dust on rooftop and plant solar.", "ahmedabad", "South Ahmedabad", [], "industrial-south"),
  loc("sarkhej", "Sarkhej", ["Sanathal", "Bopal", "Changodar GIDC", "Sanand"], "Sarkhej commercial and industrial sites need regular solar maintenance.", "ahmedabad", "South / West Ahmedabad", [], "industrial-south"),
  loc("sanathal", "Sanathal", ["Sarkhej", "Sanand", "Moraiya GIDC", "Bopal"], "Sanathal industrial dust near Sanand corridor coats solar arrays quickly.", "ahmedabad", "South Ahmedabad", [], "industrial-south"),
  loc("kanbha", "Kanbha", ["Aslali", "Bareja", "Dholka", "Vatva"], "Kanbha industrial surroundings call for frequent professional solar cleaning.", "ahmedabad", "South Ahmedabad", [], "industrial-south"),

  // West / North Ahmedabad industrial
  loc("santej-gidc", "Santej GIDC", ["Kalol", "Kadi", "Chhatral GIDC", "Rakanpur GIDC"], "Santej GIDC industrial emissions demand weekly factory solar cleaning.", "ahmedabad", "North Ahmedabad industrial", ["Santej"], "industrial-west"),
  loc("chhatral-gidc", "Chhatral GIDC", ["Kalol", "Santej GIDC", "Kadi", "Rakanpur GIDC"], "Chhatral GIDC plants lose significant output without scheduled solar washing.", "ahmedabad", "North Ahmedabad industrial", ["Chhatral"], "industrial-west"),
  loc("rakanpur-gidc", "Rakanpur GIDC", ["Santej GIDC", "Khatraj GIDC", "Kalol", "Kadi"], "Rakanpur GIDC dust and process emissions require aggressive solar AMC plans.", "ahmedabad", "North Ahmedabad industrial", ["Rakanpur"], "industrial-west"),
  loc("khatraj-gidc", "Khatraj GIDC", ["Rakanpur GIDC", "Kalol", "Santej GIDC", "Kadi"], "Khatraj GIDC manufacturing units need frequent industrial solar cleaning.", "ahmedabad", "North Ahmedabad industrial", ["Khatraj"], "industrial-west"),
  loc("dahegam", "Dahegam", ["Gandhinagar", "Kalol", "Ahmedabad", "Chhatral GIDC"], "Dahegam industrial and warehouse solar needs regular professional washing.", "ahmedabad", "North Ahmedabad", [], "industrial-west"),
  loc("vithalapur", "Vithalapur", ["Becharaji GIDC", "Kadi", "Mehsana", "Sachana GIDC"], "Vithalapur industrial belt soiling is severe — weekly cleans recommended.", "nearby", "North Gujarat industrial", [], "industrial-west"),
  loc("becharaji-gidc", "Becharaji GIDC", ["Vithalapur", "Mehsana", "Kadi", "Sachana GIDC"], "Becharaji GIDC factories need dedicated industrial solar cleaning crews.", "nearby", "North Gujarat industrial", ["Becharaji"], "industrial-west"),
  loc("sachana-gidc", "Sachana GIDC", ["Vithalapur", "Becharaji GIDC", "Kadi", "Mehsana"], "Sachana GIDC industrial dust quickly blocks solar generation without cleaning.", "nearby", "North Gujarat industrial", ["Sachana"], "industrial-west"),
  loc("dholka-gidc", "Dholka GIDC", ["Bavla", "Bareja", "Kanbha", "Aslali"], "Dholka GIDC plants benefit from scheduled solar washing and AMC.", "ahmedabad", "South Ahmedabad industrial", ["Dholka"], "industrial-south"),

  // Nearby cities
  loc("gandhinagar", "Gandhinagar", ["Motera", "Chandkheda", "Kalol", "Science City", "Gota"], "Gandhinagar government and residential solar sites face seasonal dust storms.", "nearby", "Capital city solar installations"),
  loc("kalol", "Kalol", ["Gandhinagar", "Kadi", "Santej GIDC", "Chhatral GIDC"], "Kalol industrial dust affects nearby rooftop and ground-mount solar.", "ahmedabad", undefined, ["Kalol GIDC"], "industrial-west"),
  loc("sanand", "Sanand", ["Changodar GIDC", "Moraiya GIDC", "Bopal", "Sarkhej"], "Sanand's automotive and industrial growth increases airborne particulates on panels.", "ahmedabad", undefined, ["Sanand GIDC"], "industrial-south"),
  loc("mehsana", "Mehsana", ["Kalol", "Kadi", "Becharaji GIDC", "Vithalapur"], "Mehsana district solar farms and rooftops need scheduled Gujarat dust management.", "nearby"),
  loc("kadi", "Kadi", ["Kalol", "Mehsana", "Chhatral GIDC", "Santej GIDC"], "Kadi industrial corridors produce heavy soiling on commercial solar arrays.", "ahmedabad", undefined, ["Kadi GIDC"], "industrial-west"),
  loc("anand", "Anand", ["Nadiad", "Ahmedabad", "Gandhinagar"], "Anand dairy and industrial facilities with solar benefit from professional cleaning.", "nearby"),
  loc("nadiad", "Nadiad", ["Anand", "Ahmedabad", "Gandhinagar"], "Nadiad residential and commercial solar owners trust Yavix for maintenance.", "nearby"),
];

export function locationPageSlug(areaSlug: string) {
  return `solar-panel-cleaning-${areaSlug}`;
}

export function getLocationBySlug(areaSlug: string) {
  return SEO_LOCATIONS.find((l) => l.slug === areaSlug);
}

export function getLocationByPageSlug(pageSlug: string) {
  const prefix = "solar-panel-cleaning-";
  if (!pageSlug.startsWith(prefix)) return undefined;
  return getLocationBySlug(pageSlug.slice(prefix.length));
}

export function getAllLocationPageSlugs() {
  return SEO_LOCATIONS.map((l) => locationPageSlug(l.slug));
}

export function getAhmedabadLocations() {
  return SEO_LOCATIONS.filter((l) => l.type === "ahmedabad");
}

export function getNearbyLocations() {
  return SEO_LOCATIONS.filter((l) => l.type === "nearby");
}

export function getIndustrialLocations(zone?: SeoLocation["zone"]) {
  const industrial = SEO_LOCATIONS.filter(
    (l) =>
      l.zone === "industrial-east" ||
      l.zone === "industrial-south" ||
      l.zone === "industrial-west",
  );
  if (!zone) return industrial;
  return industrial.filter((l) => l.zone === zone);
}

export function getLocationKeywords(location: SeoLocation): string[] {
  const name = location.name;
  const base = [
    `solar panel cleaning in ${name}`,
    `best solar panel cleaning in ${name}`,
    `solar panel cleaning ${name}`,
    `solar panel cleaning service in ${name}`,
    `best solar panel cleaning company in ${name}`,
    `professional solar panel cleaning ${name}`,
    `solar AMC ${name}`,
    `industrial solar panel cleaning ${name}`,
    `factory solar panel cleaning ${name}`,
  ];
  const aliasKw = (location.aliases ?? []).flatMap((a) => [
    `solar panel cleaning ${a}`,
    `solar panel cleaning in ${a}`,
    `solar panel cleaning service ${a}`,
    `industrial solar cleaning ${a}`,
    `factory solar panel cleaning ${a}`,
  ]);
  return [...base, ...aliasKw];
}

export function buildLocationContent(location: SeoLocation) {
  const { name, nearbyAreas, dustNote, aliases } = location;
  const aliasText =
    aliases && aliases.length > 0
      ? ` We also target searches for ${aliases.join(", ")} with the same professional cleaning service.`
      : "";

  return {
    intro: `Looking for professional solar panel cleaning in ${name}? Yavix Energy is ${name}'s trusted solar panel cleaning service provider, helping homeowners, businesses and industries restore peak solar output.${aliasText} Our ${name} team removes dust, bird droppings, pollution film and hard water stains using demineralized water and scratch-free equipment — the same methods used by 200+ satisfied clients across Gujarat.`,
    whyLocal: `${dustNote} Whether you have a 5 kW home system or a multi-MW plant, regular solar panel cleaning in ${name} protects your investment and lowers electricity bills.`,
    residential: `Our residential solar panel cleaning in ${name} covers villas, apartments, bungalows and housing societies. We use safe telescopic poles and never stand on panels. Best solar panel cleaning in ${name} starts with a free inspection — book today.`,
    commercial: `Commercial solar panel cleaning in ${name} serves offices, hospitals, schools, hotels, malls and warehouses. We schedule around your operations for minimal disruption. Professional solar panel cleaning in ${name} for enterprises includes AMC options.`,
    industrial: `Industrial solar panel cleaning in ${name} tackles heavy soot, factory dust and bird droppings common near industrial belts and GIDC areas. Solar panel maintenance in ${name} for factories helps recover up to 30% lost generation.`,
    nearby: `We also serve ${nearbyAreas.slice(0, 4).join(", ")} and surrounding areas. Solar panel cleaning near ${name} is available with same-day WhatsApp booking.`,
    cta: `Get the best solar panel cleaning service in ${name}. Affordable solar panel cleaning in ${name} with transparent pricing — top solar panel cleaning company in ${name} for residential, commercial and industrial clients.`,
  };
}

export function buildLocationFaqs(location: SeoLocation) {
  const { name } = location;
  return [
    {
      question: `How much does solar panel cleaning cost in ${name}?`,
      answer: `Solar panel cleaning cost in ${name} depends on system size, roof access and frequency. Contact Yavix on WhatsApp for an instant quote. AMC plans offer the best value for regular solar panel maintenance in ${name}.`,
    },
    {
      question: `How often should I clean solar panels in ${name}?`,
      answer: `Most properties in ${name} need solar panel cleaning every 10–14 days. Industrial and high-dust zones may need weekly cleaning to maintain maximum output.`,
    },
    {
      question: `Do you offer commercial solar panel cleaning in ${name}?`,
      answer: `Yes. Yavix provides commercial, residential and industrial solar panel cleaning in ${name} with flexible scheduling and documented results.`,
    },
    {
      question: `Why choose Yavix for solar panel cleaning in ${name}?`,
      answer: `We are a professional solar panel cleaning company serving ${name} with demineralized water, soft brushes, safety-certified crews and 200+ happy clients across Ahmedabad and Gujarat.`,
    },
  ];
}
