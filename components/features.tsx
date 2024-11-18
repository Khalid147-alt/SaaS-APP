import { Bot, FileSearch, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Bot className="h-10 w-10" />,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms process and understand your documents like a human would."
  },
  {
    icon: <FileSearch className="h-10 w-10" />,
    title: "Smart Summaries",
    description: "Get concise, accurate summaries of long documents in seconds, saving hours of reading time."
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Instant Insights",
    description: "Extract key information, trends, and patterns from your documents automatically."
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Analytics Dashboard",
    description: "Visualize document insights with beautiful charts and actionable metrics."
  }
];

export function Features() {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border bg-background p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              {feature.icon}
            </div>
            <h3 className="mt-4 font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}