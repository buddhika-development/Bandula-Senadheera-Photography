export interface Photo {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  thumbnailUrl?: string;
  description?: string;
  width?: number;
  height?: number;
  featured?: boolean;
}

export interface PhotoCategory {
  id: string;
  name: string;
  slug: string;
}

export interface NavItem {
  label: string;
  href: string;
}
