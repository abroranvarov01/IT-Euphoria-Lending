import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "StreamLine has transformed how our team works. We've automated 80% of our repetitive tasks and saved countless hours every week.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "TechCorp",
    avatar: "/professional-woman-diverse.png",
    initials: "SC",
  },
  {
    quote:
      "The visual workflow builder is incredibly intuitive. We went from idea to production in less than an hour. Absolutely game-changing.",
    author: "Michael Rodriguez",
    role: "Engineering Lead",
    company: "DataFlow Inc",
    avatar: "/professional-man.jpg",
    initials: "MR",
  },
  {
    quote:
      "Best automation platform we've used. The analytics give us insights we never had before, and the support team is phenomenal.",
    author: "Emily Watson",
    role: "Product Manager",
    company: "CloudScale",
    avatar: "/professional-woman-glasses.png",
    initials: "EW",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border/40 bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Loved by teams worldwide
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Join thousands of companies that trust StreamLine to power their workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mb-6 leading-relaxed text-card-foreground">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
