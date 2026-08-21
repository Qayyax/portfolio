export type JournalEntry = {
  date: string;
  text: string;
};

export const journalEntries: JournalEntry[] = [
  {
    date: "AUG 19 2026",
    text: "Le futur simple finally clicked this week. Small win, felt big.",
  },
  {
    date: "AUG 12 2026",
    text: "Broke a personal pace record on the morning run. Cutting is working.",
  },
  {
    date: "AUG 03 2026",
    text: "New portrait study up — first one in a while I'm actually proud of.",
  },
];

export const frenchStreak = { active: 11, total: 14 };
