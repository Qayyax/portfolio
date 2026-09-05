export type Vital = {
  num: string;
  unit: string;
  label: string;
};

const vitals: Vital[] = [
  { num: "85→75", unit: "kg", label: "Current Cut" },
  { num: "10", unit: "km", label: "Daily Run" },
  { num: "6", unit: "/wk", label: "PPL Split" },
  { num: "NCLC 7", unit: "", label: "French Target" },
];

export default vitals;
