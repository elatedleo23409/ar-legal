export interface TeamMemberContent {
  slug: string;
  name: string;
  role: string;
  specialty?: string;
  image: string;
  bio?: string[];
  education: string[];
  bar: string;
}

export const team: TeamMemberContent[] = [
  {
    slug: "anil-prabha",
    name: "Adv. Anil Prabha",
    role: "Senior Partner",
    // specialty: "",
    image: "/team/Anil_Prabha.png",
    bio: [],
    education: [
      "B.A. LL.B.",
    ],
    bar: "Enrolled with the Bar Council of Kerala, 2002",
  },
  {
    slug: "rajeswary-k",
    name: "Adv. Rajeswary Kappachery",
    role: "Founder, Senior Partner",
    // specialty: "",
    image: "/team/Rajeswary.png",
    bio: [],
    education: [
      "M.Sc. LL.B.",
    ],
    bar: "Enrolled with the Bar Council of Kerala, 1999",
  },
  {
    slug: "aleena-anabelly",
    name: "Adv. Aleena Anabelly A",
    role: "Associate",
    // specialty: "",
    image: "/team/Aleena_Anabelly.png",
    bio: [],
    education: [
      "BBA. LL.B. (Hons.)",
    ],
    bar: "Enrolled with the Bar Council of Kerala, 2024",
  },
  {
    slug: "haripriya-g",
    name: "Adv. Haripriya G",
    role: "Associate",
    // specialty: "",
    image: "/team/Haripriya.png",
    bio: [],
    education: [
      "B.A. LL.B.",
    ],
    bar: "Enrolled with the Bar Council of Kerala, 2020",
  },
  {
    slug: "surya-v",
    name: "Adv. Surya V",
    role: "Associate",
    specialty: "",
    image: "/team/Surya.png",
    bio: [],
    education: [
      "B.A. LL.B.",
    ],
    bar: "Enrolled with the Bar Council of Kerala, 2020",
  }
];

export function getTeamMember(slug: string): TeamMemberContent | undefined {
  return team.find((member) => member.slug === slug);
}
