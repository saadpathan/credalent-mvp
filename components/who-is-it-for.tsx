import { CheckCircle2 } from 'lucide-react'

const audiences = [
  'University students preparing for internships',
  'Final year students entering the job market',
  'Students unsure which career path fits them',
  'Anyone wanting real industry insights, not just textbook knowledge',
]

export function WhoIsItFor() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Is this for you?
          </h2>
          <p className="text-muted-foreground">
            Credalent is built for students who want more than what university
            offers.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <ul className="space-y-4">
            {audiences.map((audience) => (
              <li key={audience} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
