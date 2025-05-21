import {
  ContactInfo,
  Contributor,
  EnergyHealingMethod,
  FaqItem,
  GalleryImage,
  ReikiBenefit,
  SubscriptionOption,
  Testimonial,
} from "@/types";

export const energyHealingMethods: EnergyHealingMethod[] = [
  {
    id: 1,
    icon: "hand-sparkles",
    title: "Distance Healing",
    description:
      "Experience the power of energy healing from any location. Our practitioners can send healing energy across any distance to support your wellbeing.",
  },
  {
    id: 2,
    icon: "brain",
    title: "Chakra Balancing",
    description:
      "Restore harmony to your energy centers through specialized chakra balancing techniques that clear blockages and promote flow.",
  },
  {
    id: 3,
    icon: "sun",
    title: "Aura Cleansing",
    description:
      "Clear negative energies from your aura and create a protective shield around your energy field for improved wellbeing.",
  },
];

export const reikiBenefits: ReikiBenefit[] = [
  {
    id: 1,
    title: "What is Reiki?",
    description:
      'Reiki is a Japanese form of energy healing—a type of alternative medicine. Reiki practitioners use a technique called palm healing or hands-on healing through which a "universal energy" is said to be transferred through the palms of the practitioner to the patient in order to encourage emotional or physical healing.',
    imageUrl:
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Benefits of Reiki",
    description:
      "Reiki promotes relaxation, reduces stress and anxiety, and may help relieve pain. Many people report feeling clearheaded and physically refreshed after a session. Regular Reiki treatments can bring about a calmer and more peaceful state of being, in which you feel more able to cope with the challenges of life.",
    imageUrl:
      "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export const subscriptionOptions: SubscriptionOption[] = [
  {
    id: 1,
    type: "weekly",
    title: "Weekly Session",
    description:
      "Receive a weekly distance Reiki session for general wellbeing and maintenance.",
    icon: "leaf",
    color: "primary",
  },
  {
    id: 2,
    type: "healing",
    title: "Healing Focus",
    description:
      "Target specific health concerns with customized distance Reiki sessions.",
    icon: "heart",
    color: "secondary",
  },
  {
    id: 3,
    type: "emotional",
    title: "Emotional Support",
    description:
      "Receive energy work focused on emotional healing and spiritual growth.",
    icon: "brain",
    color: "accent",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I was skeptical at first, but after my first distance Reiki session, I felt a remarkable sense of calm that I hadn't experienced in years. My chronic shoulder pain has also significantly reduced.",
    name: "Sarah J.",
    position: "Weekly subscriber",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    text: "The emotional healing focus has been transformative for me during a difficult period in my life. I feel more centered, grounded, and able to process my emotions in a healthy way.",
    name: "Michael T.",
    position: "Emotional support subscriber",
    imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    text: "As someone with chronic health issues, the healing focus subscription has been a wonderful complement to my medical treatments. I notice improved sleep and reduced anxiety levels.",
    name: "Lisa R.",
    position: "Healing focus subscriber",
    imageUrl: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1474418397713-2f2a2a5a1795?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Peaceful meditation scene",
    width: 500,
    height: 333,
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Crystal healing arrangement",
    width: 500,
    height: 333,
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Chakra alignment visualization",
    width: 500,
    height: 333,
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Hands channeling energy",
    width: 500,
    height: 333,
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Serene natural setting for healing",
    width: 500,
    height: 333,
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1517097973722-d45948f7f5f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Spiritual energy visualization",
    width: 500,
    height: 333,
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Reiki healing session in progress",
    width: 500,
    height: 333,
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Energy field visualization",
    width: 500,
    height: 333,
  },
];

export const contributors: Contributor[] = [
  {
    id: 1,
    name: "Jennifer Wilson",
    position: "Reiki Master, Level III",
    bio: "Jennifer has been practicing Reiki for over 15 years and specializes in distance healing. She focuses on emotional healing and stress reduction.",
    imageUrl: "https://randomuser.me/api/portraits/women/76.jpg",
    socials: [
      { platform: "Facebook", url: "#", icon: "facebook-f" },
      { platform: "Instagram", url: "#", icon: "instagram" },
      { platform: "Website", url: "#", icon: "globe" },
    ],
  },
  {
    id: 2,
    name: "David Chen",
    position: "Energy Healer & Chakra Specialist",
    bio: "David combines traditional chakra healing with modern energy techniques to help clients restore balance and vitality to their energy systems.",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: [
      { platform: "Twitter", url: "#", icon: "twitter" },
      { platform: "YouTube", url: "#", icon: "youtube" },
      { platform: "Website", url: "#", icon: "globe" },
    ],
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    position: "Spiritual Healer & Meditation Guide",
    bio: "Maria specializes in combining meditation techniques with energy healing to provide comprehensive spiritual and emotional support.",
    imageUrl: "https://randomuser.me/api/portraits/women/42.jpg",
    socials: [
      { platform: "Instagram", url: "#", icon: "instagram" },
      { platform: "Spotify", url: "#", icon: "spotify" },
      { platform: "Email", url: "#", icon: "envelope" },
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "What is distance Reiki and how does it work?",
    answer:
      "Distance Reiki works on the principle that energy is not bound by physical distance. The practitioner connects to the recipient's energy field using specific techniques and symbols, allowing healing energy to be transmitted across any distance. Many people report feeling sensations of warmth, tingling, or deep relaxation during distance sessions, similar to in-person treatments.",
  },
  {
    id: 2,
    question: "Is energy healing compatible with my religious beliefs?",
    answer:
      "Energy healing works with the natural energy fields of the body and is not tied to any specific religious system. It can be compatible with any faith tradition or philosophical outlook. Many practitioners and recipients come from diverse spiritual backgrounds, and the techniques can be adapted to align with individual beliefs.",
  },
  {
    id: 3,
    question: "How can I prepare for a distance healing session?",
    answer:
      "To prepare for a distance healing session, find a quiet, comfortable place where you won't be disturbed. Wear loose, comfortable clothing and have water nearby. Set an intention for your healing if you wish. During the scheduled time, you can lie down or sit comfortably with your eyes closed. Some people find soft, calming music helpful. There's no need to concentrate—simply relax and be open to receiving the energy.",
  },
  {
    id: 4,
    question: "Why are your services offered for free?",
    answer:
      "Our services are offered for free because we believe that healing energy should be accessible to everyone, regardless of financial circumstances. Our practitioners volunteer their time and expertise as a form of service to the community. Many find that offering healing to others enhances their own wellbeing and spiritual growth. We are supported by optional donations and community contributions.",
  },
  {
    id: 5,
    question: "How often should I receive energy healing?",
    answer:
      "The frequency of energy healing sessions depends on your individual needs and circumstances. For acute situations or intense healing periods, more frequent sessions (even daily) may be beneficial. For general wellbeing maintenance, weekly or bi-weekly sessions are common. Some people find that monthly sessions help them stay balanced. Listen to your body and intuition—you'll likely develop a sense of when you would benefit from additional energy support.",
  },
];

export const contactInfo: ContactInfo = {
  email: "contactus@infinitestarsourcehealing.com",
  phone: "+1 (312) 612-0610",
  address: [
    "123 Healing Center Ave",
    "Serenity Valley, CA 90210",
    "United States",
  ],
  hours: {
    "Monday - Friday": "9:00 AM - 9:00 PM EST",
    Saturday: "10:00 AM - 6:00 PM EST",
    Sunday: "12:00 PM - 5:00 PM EST",
  },
};
