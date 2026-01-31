'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { MentorCompanies } from '@/components/mentor-companies'
import { ValueProposition } from '@/components/value-proposition'
import { WhoIsItFor } from '@/components/who-is-it-for'
import { HowItWorks } from '@/components/how-it-works'
import { FAQSection } from '@/components/faq-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { WaitlistForm } from '@/components/waitlist-form'

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleJoinClick = () => {
    setIsFormOpen(true)
  }

  return (
    <>
      <Header onJoinClick={handleJoinClick} />
      <main className="pt-16">
        <HeroSection onJoinClick={handleJoinClick} />
        <MentorCompanies />
        <ValueProposition />
        <WhoIsItFor />
        <HowItWorks />
        <FAQSection />
        <CTASection onJoinClick={handleJoinClick} />
      </main>
      <Footer />
      <WaitlistForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
