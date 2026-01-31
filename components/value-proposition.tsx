import { GraduationCap, Compass, Rocket, Gift } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: GraduationCap,
    title: 'Early Access',
    description:
      'Be among the first to connect with vetted industry mentors before the public launch.',
  },
  {
    icon: Compass,
    title: 'Priority Matching',
    description:
      'Get matched with mentors in your field of interest ahead of everyone else.',
  },
  {
    icon: Rocket,
    title: 'Founding Member Pricing',
    description:
      'Lock in special pricing on future mentorship packages as a founding member.',
  },
  {
    icon: Gift,
    title: 'Shape the Product',
    description:
      'Your feedback directly influences what packages and features we build.',
  },
]

export function ValueProposition() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What early members get
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Join now and secure exclusive benefits that won&apos;t be available
            after launch.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="border-border bg-card transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
