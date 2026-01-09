export interface GalleryProject {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export const GALLERY_DATA: GalleryProject[] = [
  {
    id: 1,
    title: "Weekly Domestic Maintenance",
    category: "Domestic",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Professional Office Care",
    category: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Move-Out Deep Clean",
    category: "End of Tenancy",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Post-Construction Refresh",
    category: "Deep Clean",
    imageUrl:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "Fortnightly Family Home Clean",
    category: "Domestic",
    imageUrl:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    title: "High-Traffic Retail Cleaning",
    category: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=600",
  },
];

export const GALLERY_STATS = {
  projectCount: "1,500+",
  rating: "5.0",
  reviewCount: "320+",
};
