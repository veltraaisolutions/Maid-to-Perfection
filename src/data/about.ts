export interface AboutData {
  ownerName: string;
  role: string;
  bio: string;
  stats: { label: string; value: string }[];
  points: string[];
  imageUrl: string;
}

export const ABOUT_DATA: AboutData = {
  ownerName: "Eamon Orfally",
  role: "Founder & Lead Surveyor",
  bio: "With over 15 years of hands-on experience in the roofing industry, I founded this company on a simple principle: doing things right the first time. We don't just fix roofs; we protect homes and families.",
  stats: [
    { label: "Years Exp.", value: "15+" },
    { label: "Local Jobs", value: "2k+" },
  ],
  points: [
    "Fully Licensed & Insured",
    "Insurance Claim Specialist",
    "Garantueed Workmanship",
    "No Hidden Costs",
  ],
  //   imageUrl: "https://picsum.photos/seed/owner/800/1000",
  imageUrl:
    "https://res.cloudinary.com/di611res2/image/upload/v1767285045/Gemini_Generated_Image_ki7yo9ki7yo9ki7y_hnu8cg.png",
};
