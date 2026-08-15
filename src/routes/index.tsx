import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { StorySection } from "@/components/StorySection";
import { IngredientsSection } from "@/components/IngredientsSection";
import { DeliverySection } from "@/components/DeliverySection";
import { InstagramSection } from "@/components/InstagramSection";
import { ContactSection } from "@/components/ContactSection";
import { pageMeta } from "@/lib/metadata";

const title = "Bakllavë e Shtëpisë | Bakllavë e bërë në shtëpi | Podujevë & Prishtinë";
const description =
  "Bakllavë e shtëpisë me arra dhe pa arra, e bërë me dorë në Podujevë. Porosit online, dërgesa falas në Podujevë dhe Prishtinë.";

export const Route = createFileRoute("/")({
  head: ({ match }) => ({
    meta: pageMeta({
      title,
      description,
      path: "/",
      origin: match.context.siteOrigin,
    }),
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          name: "Bakllavë e Shtëpisë",
          servesCuisine: "Bakllavë",
          address: { "@type": "PostalAddress", addressLocality: "Podujevë", addressCountry: "XK" },
          telephone: "+383 43 963 564",
          areaServed: ["Podujevë", "Prishtinë"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ProductSection />
      <StorySection />
      <IngredientsSection />
      <DeliverySection />
      <InstagramSection />
      <ContactSection />
    </>
  );
}
