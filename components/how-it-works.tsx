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
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="text-muted-foreground">
            Simple, straightforward, no hidden steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 left-8 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex items-start gap-6 md:items-center"
              >
                {/* Step number */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:ml-auto md:pl-24'}`}
                >
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
