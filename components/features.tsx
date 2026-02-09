import { Card, CardContent } from "@/components/ui/card"
import { Workflow, Zap, Shield, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description: "Create complex automation workflows with our intuitive drag-and-drop interface. No coding required.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description:
      "Execute workflows in milliseconds with our optimized infrastructure. Scale to millions of operations.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and advanced access controls keep your data safe.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor workflow performance with detailed analytics and insights. Optimize as you grow.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border/40 bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Everything you need to automate
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Powerful features designed to help teams work smarter, not harder. Build, deploy, and scale your workflows
            with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
