export interface AboutData {
  ownerName: string;
  role: string;
  bio: string;
  stats: { label: string; value: string }[];
  points: string[];
  imageUrl: string;
}

export const ABOUT_DATA: AboutData = {
  ownerName: "Kayleigh-Anne,",
  role: "Founder & Lead Coordinator",
  bio: "With a passion for detail and 16 dedicated staff, I founded this company to give families their time back. We don't just clean; we create a sanctuary for your family.",
  stats: [
    { label: "Years Exp.", value: "15+" },
    { label: "Local Jobs", value: "2k+" },
  ],
  points: [
    "DBS Checked",
    "Regular & One-Off Specialists",
    "Satisfaction Guaranteed",
    "16+ Professional Staff",
  ],
  imageUrl: "/Img/Kayleigh-Anne.jpeg",
};
