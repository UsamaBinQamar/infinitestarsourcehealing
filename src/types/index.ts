export interface EnergyHealingMethod {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ReikiBenefit {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface SubscriptionOption {
  id: number;
  type: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: number;
  text: string;
  name: string;
  position: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  alt: string;
  width: number;
  height: number;
}

export interface Contributor {
  id: number;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  socials: Social[];
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string[];
  hours: {
    [key: string]: string;
  };
}
