export type Referral = {
  title: string;
  description: string;
  code: { type: "code" | "link"; link: string; code: string };
};

export const referrals: Referral[] = [
  {
    title: "Preply",
    description: "One-on-one online language tutors",
    code: {
      type: "link",
      link: "https://preply.com/en/?pref=Mjg0MzY3NTg=&id=1791767857.613128&ep=w1",
      code: "Mjg0MzY3NTg=",
    },
  },
  {
    title: "Lemfi",
    description: "For sending & receiving money overseas",
    code: {
      type: "code",
      link: "https://referral.lemfi.com/N2HUdSJaO7b",
      code: "ABDUO3MP",
    },
  },
  {
    title: "SkillShare",
    description: "One month free on SkillShare",
    code: {
      type: "link",
      link: "https://skl.sh/4oDFtkn",
      code: "4oDFtkn",
    },
  },
  {
    title: "Square One",
    description: "For home and tenant insurance",
    code: {
      type: "link",
      link: "https://www.squareone.ca/ref/PAVUQEVYXY",
      code: "PAVUQEVYXY",
    },
  },
  {
    title: "BorderPass",
    description: "Canadian immigration lawyers",
    code: {
      type: "link",
      link: "https://app.borderpass.ai/refer/zRUmrb",
      code: "zRUmrb",
    },
  },
];
