'use client'

import { ArrowRight, Shield, Users, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  onJoinClick: () => void
}

export function HeroSection({ onJoinClick }: HeroSectionProps) {
  return (
    <section className="relative px-4 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm text-accent-foreground">
          <Sparkles className="h-4 w-4" />
          <span>Limited Early Access</span>
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Bridge the gap between
          <span className="text-primary"> university </span>
          and
          <span className="text-primary"> industry</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Universities teach theory. Employers want experience. Credalent
          connects you with real industry mentors who help you build the skills
          and clarity you actually need.
        </p>

        {/* Trust signals */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>100% Refundable</span>
          </div>
          <div className="hidden h-4 w-px bg-border md:block" />
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>No commitment required</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          onClick={onJoinClick}
          className="group h-14 px-8 text-lg"
        >
          Join the Early Access Waitlist — RM 5
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>

        <p className="mt-4 text-sm text-muted-foreground">
          Fully refundable. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
