import { NavItem, PhotoCategory } from "@/types";

export const SITE_CONFIG = {
  name: "Bandula Senadheera Photography",
  description: "Official portfolio of Bandula Senadheera Photography - Capturing timeless moments.",
  contactEmail: "contact@bandulasenadheera.com",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PHOTO_CATEGORIES: PhotoCategory[] = [
  { id: "all", name: "All", slug: "all" },
  { id: "portrait", name: "Portrait", slug: "portrait" },
  { id: "wedding", name: "Wedding", slug: "wedding" },
  { id: "landscape", name: "Landscape", slug: "landscape" },
  { id: "event", name: "Event", slug: "event" },
];
