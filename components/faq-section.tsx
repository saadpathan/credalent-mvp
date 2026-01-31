import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Why RM 5?',
    answer:
      "The small deposit helps us validate real interest and ensures we're building for people who are genuinely committed to their growth. It's not about the money — it's about finding our founding community of serious students.",
  },
  {
    question: 'Is the RM 5 refundable?',
    answer:
      "Yes, 100%. If you change your mind for any reason, just reach out and we'll process your refund — no questions asked. There's zero risk to you.",
  },
  {
    question: 'When will I hear back?',
    answer:
      "We'll send you regular updates as we build. Expect your first email within a week of joining, with progress updates, early previews, and opportunities to share your input.",
  },
  {
    question: 'Am I committing to pay for future packages?',
    answer:
      "Not at all. Joining the waitlist gives you early access and founding member benefits, but you're under no obligation to purchase any future mentorship packages. You decide when and if you want to engage further.",
  },
  {
    question: 'Does Credalent guarantee jobs or internships?',
    answer:
      "No. Credalent is about clarity, guidance, and mentorship — not job placement. We connect you with industry professionals who can help you understand your options, build relevant skills, and navigate your career path. What you do with that guidance is up to you.",
  },
]

export function FAQSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
