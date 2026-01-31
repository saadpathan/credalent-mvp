import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    number: '01',
    title: 'Join the waitlist',
    description:
      'Reserve your spot with a fully refundable RM 5 deposit. No strings attached.',
  },
  {
    number: '02',
    title: 'Get matched',
    description:
      'We connect you with industry mentors based on your field and career goals.',
  },
  {
    number: '03',
    title: 'Gain clarity',
    description:
      'Get personalized guidance, feedback, and real-world insights from professionals.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-accent/50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Simple, straightforward, no hidden steps. We've streamlined the process to help you get started quickly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="h-full border-none bg-background/50 shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground shadow-lg ring-4 ring-primary/20">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 translate-x-1/2 text-muted-foreground/30 md:block">
                  <ArrowRight className="h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
