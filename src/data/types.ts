export interface HeadlinePart {
  text: string;
  fontWeight?: number | string;
  fontSize?: string;
  fontFamily: string;
  color?: string;
  verticalAlign?: string;
  marginRight?: number;
}

export interface AboutContent {
  title: string;
  paragraph: string;
  bullets: string[];
  ctaText: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  highlights: { icon: string; text: string; subtext: string }[];
  cta: { text: string; link: string };
  bgImage: string;
}
export interface GalleryData {
  images: { src: string; alt: string, title?: string, description?: string }[];
  buttonText?: string;
}
export interface PlanData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  gallery: string[];
  cta: string;
  urnDescription: string;
  urnMeasures: string;
  description: string; // <-- keep this for card!
  includes: string[];
  boldIncludes?: number[];
}
