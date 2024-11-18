import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out our service",
    features: [
      "5 documents per month",
      "Basic summaries",
      "Export to PDF",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$15",
    description: "For professionals and small teams",
    features: [
      "50 documents per month",
      "Advanced AI analysis",
      "Priority support",
      "Custom templates",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited documents",
      "Custom AI models",
      "24/7 support",
      "Advanced security",
      "Custom integration",
      "Dedicated account manager"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{tier.price}</span>
                {tier.price !== "Custom" && <span>/month</span>}
              </div>
              <p className="text-sm text-muted-foreground">{tier.description}</p>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button className="mt-8 w-full">
              {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}