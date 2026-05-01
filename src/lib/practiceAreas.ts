export interface PracticeAreaContent {
  slug: string;
  title: string;
  description: string;
  icon: string;
  body: string[];
  highlights: string[];
}

export const practiceAreas: PracticeAreaContent[] = [
  {
    slug: "corporate-law",
    title: "Corporate Law",
    description:
      "Strategic counsel for businesses through every stage, from incorporation to exit.",
    icon: "account_balance",
    body: [
      "Businesses today operate in a tightening regulatory environment. From incorporation to exit, every stage carries compliance obligations that, if ignored, become expensive.",
      "We advise founders, family-run businesses, and growing companies on incorporation, shareholder agreements, contract drafting, regulatory filings, mergers, and dispute resolution. Our work is practical and oriented toward keeping your business operational.",
      "We act as the legal firewall between your business and avoidable risk.",
    ],
    highlights: [
      "Company incorporation and structuring",
      "Shareholder and founder agreements",
      "Commercial contract drafting and review",
      "Regulatory and ROC compliance",
      "Mergers, acquisitions, and dissolutions",
    ],
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    description:
      "Effective representation in civil disputes and litigation proceedings.",
    icon: "balance",
    body: [
      "Civil litigation rewards preparation. The party that arrives in court with cleaner pleadings, clearer evidence, and a tighter strategy almost always sets the pace of the case.",
      "We handle a broad range of civil matters including contract disputes, recovery suits, specific performance, declaratory suits, injunctions, and writ petitions. Our clients include individuals, businesses, and institutions across Kerala.",
    ],
    highlights: [
      "Contract and commercial disputes",
      "Recovery and money suits",
      "Specific performance and injunctions",
      "Declaratory and partition suits",
      "Writ petitions before the High Court",
    ],
  },
  {
    slug: "criminal-law",
    title: "Criminal Law",
    description:
      "Decisive defense strategies and representation in criminal proceedings.",
    icon: "gavel",
    body: [
      "A criminal allegation is rarely just a legal problem. It affects reputation, employment, and family. The first 48 hours often determine the trajectory of a case.",
      "We represent clients at every stage of criminal proceedings, from anticipatory and regular bail applications through trial and appeal. Our practice covers white-collar matters, IPC offences, cybercrime, and quashing petitions.",
      "We move quickly, communicate plainly, and build defenses that hold up in court.",
    ],
    highlights: [
      "Anticipatory and regular bail applications",
      "Trial representation in Sessions and Magistrate courts",
      "White-collar and economic offences",
      "Cybercrime and IT Act matters",
      "Quashing and revision petitions",
    ],
  },
  {
    slug: "ipr-entertainment-law",
    title: "IPR & Entertainment Law",
    description:
      "Counsel to production houses, broadcasters, and creative talent across the entertainment industry.",
    icon: "movie",
    body: [
      "Intellectual property is the most valuable asset most creative businesses own, and also the most difficult to protect. Our practice sits at the intersection of copyright, trademark, contract, and the commercial reality of the entertainment industry.",
      "We act for major production houses, broadcasters and channels, music labels, OTT platforms, and individual celebrities and creators. Our work spans the full life of creative content, from rights acquisition and talent agreements to syndication, licensing, and infringement litigation.",
      "When a brand, a script, a performance, or a personality right is at stake, the response has to be both legally precise and commercially sensible. We deliver both.",
    ],
    highlights: [
      "Copyright, trademark, and design registration",
      "Production, distribution, and syndication agreements",
      "Talent, artist, and influencer contracts",
      "Personality rights and image protection",
      "Anti-piracy actions, takedowns, and infringement litigation",
      "Music, OTT, and broadcast licensing",
    ],
  },
  {
    slug: "technology-law",
    title: "Technology Law",
    description:
      "Trusted advisors to early-stage and growth-stage technology companies.",
    icon: "memory",
    body: [
      "Technology businesses move fast, and their legal needs change just as quickly. The wrong founder agreement, an overlooked privacy clause, or an unenforceable SaaS contract can quietly cap a company's value years before anyone notices.",
      "We work with founders and operators of new-age technology start-ups across SaaS, fintech, consumer apps, AI, and platform businesses. Our role is to put the right legal foundations in place early, and to handle the specialised work, data protection, IP assignment, regulatory exposure, that generalist counsel often miss.",
      "We aim to be the kind of counsel a founder calls before signing, not after.",
    ],
    highlights: [
      "Founder, co-founder, and ESOP agreements",
      "SaaS, platform, and end-user agreements",
      "Privacy policies and DPDP Act compliance",
      "IP assignment, source code, and trade secret protection",
      "Investor term sheets, SHA, and SSA review",
      "Regulatory advisory for fintech, AI, and emerging tech",
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    description:
      "Compassionate legal support for divorce, custody, and domestic matters.",
    icon: "diversity_3",
    body: [
      "Family disputes are rarely just legal matters. They sit at the intersection of personal history, finances, and the wellbeing of children. We approach every case with discretion and care.",
      "Our family law practice covers divorce, mutual consent separations, child custody, maintenance, domestic violence cases, adoption, and succession. We work toward outcomes that protect our clients while preserving dignity wherever possible.",
      "When negotiation is the right path, we negotiate. When the courtroom is unavoidable, we advocate firmly.",
    ],
    highlights: [
      "Contested and mutual consent divorce",
      "Child custody and visitation",
      "Maintenance and alimony",
      "Domestic violence proceedings",
      "Succession and inheritance disputes",
    ],
  },
  {
    slug: "property-law",
    title: "Property Law",
    description:
      "Expert guidance on property transactions, disputes, and regulations in Kerala.",
    icon: "real_estate_agent",
    body: [
      "Property matters in Kerala carry both legal and emotional weight. From ancestral land partitions to contemporary apartment purchases, the documentation, registration, and verification processes demand precision.",
      "Our property practice covers title verification, sale deed drafting, registration assistance, partition suits, encumbrance disputes, and litigation involving builders and developers. We work closely with clients to ensure that ownership is clean, transferable, and free of latent risk.",
      "Whether you are buying your first home, transferring ancestral property, or resolving a long-standing boundary dispute, we bring clarity to every step.",
    ],
    highlights: [
      "Title and document verification",
      "Sale deed and gift deed drafting",
      "Partition suits and family settlements",
      "Builder and RERA disputes",
      "Encumbrance and boundary litigation",
    ],
  },
  {
    slug: "employment-and-service-law",
    title: "Employment & Service Law Matters",
    description:
      "Representation in employment disputes and service law matters before tribunals and courts.",
    icon: "work",
    body: [
      "Employment and service disputes turn on documentation, timelines, and procedure. A small misstep early, on a charge memo, an inquiry report, or a termination letter, can foreclose options later.",
      "We advise both private-sector employers and employees, as well as public servants, on the full range of employment and service-related issues. Our practice includes service matters before tribunals such as the Central Administrative Tribunal and Kerala Administrative Tribunal, departmental inquiries, and writ petitions challenging service action.",
      "On the employment side, we handle contract review, terminations, sexual harassment proceedings under the POSH Act, and disputes before labour courts. We aim for resolution without unnecessary escalation, but we are prepared to litigate where needed.",
    ],
    highlights: [
      "Service matters before CAT, KAT, and the High Court",
      "Departmental inquiries and disciplinary proceedings",
      "Promotion, seniority, and pension disputes",
      "Wrongful termination and reinstatement",
      "Employment contract drafting and review",
      "POSH Act compliance and inquiries",
      "Wage, gratuity, and PF disputes",
    ],
  },
];

export function getPracticeArea(slug: string): PracticeAreaContent | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
