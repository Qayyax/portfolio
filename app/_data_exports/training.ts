export type TrainingDay = {
  day: string;
  workout: string;
  rest?: boolean;
};

export const pplSplit: TrainingDay[] = [
  { day: "Mon", workout: "Push" },
  { day: "Tue", workout: "Pull" },
  { day: "Wed", workout: "Legs" },
  { day: "Thu", workout: "Push" },
  { day: "Fri", workout: "Pull" },
  { day: "Sat", workout: "Legs" },
  { day: "Sun", workout: "Rest", rest: true },
];
