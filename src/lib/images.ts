/**
 * Fotografitë e faqes.
 * Për t'i zëvendësuar: ngarko foton e re dhe ndrysho vetëm `url` këtu.
 */
import heroImage from "@/assets/hero-image.png";
import bakllaveMeArra from "@/assets/bakllavë-me-arra.png";
import bakllavePaArra from "@/assets/bakllavë-pa-arra.png";
import aboutUs from "@/assets/about-us.png";
import ingredientsImage from "@/assets/ingredients.png";
import instagramPost1 from "@/assets/instagram-post-1.jpeg";
import instagramPost2 from "@/assets/instagram-post-2.jpg";
import instagramPost3 from "@/assets/instagram-post-3.png";
import instagramPost4 from "@/assets/instagram-post-4.png";

export const images = {
  heroImage: { url: heroImage, alt: "Tepsi e plotë me bakllavë të prerë në copa" },
  bakllaveMeArra: { url: bakllaveMeArra, alt: "Tepsi me bakllavë me arra" },
  bakllavePaArra: { url: bakllavePaArra, alt: "Tepsi me bakllavë pa arra" },
  aboutUs: { url: aboutUs, alt: "Petë bakllave duke u holluar me dorë" },
  ingredientsImage: { url: ingredientsImage, alt: "Përbërës dhe petë bakllave duke u përgatitur" },
  instagramPost1: { url: instagramPost1, alt: "Postim në Instagram me bakllavë" },
  instagramPost2: { url: instagramPost2, alt: "Postim në Instagram nga përgatitja e bakllavës" },
  instagramPost3: { url: instagramPost3, alt: "Postim në Instagram me bakllavë të prerë" },
  instagramPost4: { url: instagramPost4, alt: "Postim në Instagram me tepsi bakllave" },
} as const;

export type ImageKey = keyof typeof images;
