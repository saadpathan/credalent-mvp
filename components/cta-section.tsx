'use client'

import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  onJoinClick: () => void
}

export function CTASection({ onJoinClick }: CTASectionProps) {
  return (
    <section className="bg-primary px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready to get ahead?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
          Join our founding community of students who are serious about bridging
          the gap between university and industry. Limited to 50 founding members.
        </p>

        <Button
          size="lg"
          variant="secondary"
          onClick={onJoinClick}
          className="group h-14 px-8 text-lg"
        >
          Join the Waitlist — RM 5 (Refundable)
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
          <Shield className="h-4 w-4" />
          <span>100% money-back guarantee</span>
        </div>
      </div>
    </section>
  )
}
