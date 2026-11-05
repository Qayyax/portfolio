export type TrainingDay = {
  day: string;
  workout: string;
  rest?: boolean;
};

// Ordered Sunday-first to line up with Date.getDay().
export const weeklyPlan: TrainingDay[] = [
  { day: "Sun", workout: "Rest", rest: true },
  { day: "Mon", workout: "Chest and triceps" },
  { day: "Tue", workout: "Back and biceps" },
  { day: "Wed", workout: "Legs" },
  { day: "Thu", workout: "Shoulders" },
  { day: "Fri", workout: "Chest and arms" },
  { day: "Sat", workout: "Back and hamstrings" },
];
