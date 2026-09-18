import { createFileRoute } from "@tanstack/react-router";
import { NewsletterHeader } from "@/components/newsletter-header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fast Movers top 10 — maandelijkse nieuwsbrief bewegingsapparaat" },
      {
        name: "description",
        content:
          "Fast Movers top 10: de maandelijkse nieuwsbrief over innovatie in de zorg voor het bewegingsapparaat — orthopedie, revalidatiegeneeskunde, reumatologie, farmacie en artrose.",
      },
      { property: "og:title", content: "Fast Movers top 10" },
      {
        property: "og:description",
        content:
          "De snelst bewegende innovaties in de zorg voor het bewegingsapparaat — elke maand vers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-cream">
      <NewsletterHeader
        issueLabel="Maart 2025"
        issueNumber="Nr. 07"
        tagline="De snelst bewegende innovaties in de zorg voor het bewegingsapparaat — helder geselecteerd, elke maand vers op je inbak."
        focusAreas={[
          { label: "Orthopedie", color: "coral" },
          { label: "Revalidatiegeneeskunde", color: "mint" },
          { label: "Reumatologie", color: "sun" },
          { label: "Farmacie", color: "sky" },
          { label: "Artrose", color: "grape" },
        ]}
      />
    </main>
  );
}
