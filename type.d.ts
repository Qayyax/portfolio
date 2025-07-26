export type NavProperty = {
  title: string;
  to: string;
};

export type ProjectAction = {
  type: "code" | "challenge" | "live-site";
  link: string;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  code: string;
  challenge: string;
  liveSite: string;
};

export type ReferralBtnType = {
  type: "code" | "link";
  link?: string;
  code?: string;
};

export type InterestingAppType = {
  name: string;
  platform: string;
  description: string;
  link: string;
};
