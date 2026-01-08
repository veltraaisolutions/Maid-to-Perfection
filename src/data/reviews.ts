export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  location?: string;
  content: string;
  source: "google" | "checkatrade";
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "Paul",
    rating: 5,
    date: "11 Sept 2025",
    location: "TW20",
    content:
      "Paul was very responsive, very helpful and turned up when he said he would. I have no hesitation in using them again and in recommending PMP.",
    source: "checkatrade",
  },
  {
    id: 2,
    name: "Finbar O'Regan",
    rating: 5, // stars count
    date: "August 2025",
    // main body text
    content:
      "Paul is a great roofer and true to his word, he has helped us with anything we have asked and has even done a call out on his weekend.",
    source: "google", //A small badge on the bottom right. We use logic to show a 'G' for Google or a 'C' for Checkatrade, matching the official platform colors
  },
  {
    id: 3,
    name: "Billiejo Beldom",
    rating: 5,
    date: "June 2025",
    content:
      "I recently had a new roof installed by PMP Roofing and I'm extremely happy with the results. From start to finish, the team was professional and courteous.",
    source: "google",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    rating: 5,
    date: "Oct 2025",
    location: "RG2",
    content:
      "Excellent communication throughout the project. The price was fair and the site was left spotless every single day.",
    source: "checkatrade",
  },
];
