export interface GalleryProject {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export const GALLERY_DATA: GalleryProject[] = [
  {
    id: 1,
    title: "Slate Roof Installation",
    category: "Residential",
    imageUrl: "https://picsum.photos/seed/roof1/600/400",
  },
  {
    id: 2,
    title: "Commercial Metal Roofing",
    category: "Commercial",
    imageUrl: "https://picsum.photos/seed/roof2/600/400",
  },
  {
    id: 3,
    title: "Emergency Leak Repair",
    category: "Repair",
    imageUrl: "https://picsum.photos/seed/roof3/600/400",
  },
  {
    id: 4,
    title: "Flat Roof GRP System",
    category: "Flat Roof",
    imageUrl: "https://picsum.photos/seed/roof4/600/400",
  },
  {
    id: 5,
    title: "Chimney Re-pointing",
    category: "Maintenance",
    imageUrl: "https://picsum.photos/seed/roof5/600/400",
  },
  {
    id: 6,
    title: "Tiled Roof Replacement",
    category: "Residential",
    imageUrl: "https://picsum.photos/seed/roof6/600/400",
  },
];

export const GALLERY_STATS = {
  projectCount: "2,400+",
  rating: "5.0",
  reviewCount: "490+",
};
