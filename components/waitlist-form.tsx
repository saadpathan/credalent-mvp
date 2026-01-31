'use client'

import React from "react"

import { useState } from 'react'
import { ArrowRight, Shield, X, Copy, Check, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface WaitlistFormProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistForm({ isOpen, onClose }: WaitlistFormProps) {
  const [step, setStep] = useState<'form' | 'payment'>('form')
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    fieldOfStudy: '',
    tngWalletNumber: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handleClose = () => {
    setStep('form')
    onClose()
  }

  const handleCopyNumber = () => {
    navigator.clipboard.writeText('0123456789') // Replace with your actual TnG number
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl md:p-8">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>

        {step === 'form' ? (
          <>
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-foreground">
                Join the waitlist
              </h2>
              <p className="text-muted-foreground">
                Reserve your early access spot with a fully refundable RM 5
                deposit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tngWalletNumber">TnG Wallet Number</Label>
                <Input
                  id="tngWalletNumber"
                  type="tel"
                  placeholder="e.g., 0123456789"
                  value={formData.tngWalletNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, tngWalletNumber: e.target.value })
                  }
                  required
                />
                <p className="text-xs text-muted-foreground">
                  We&apos;ll use this to send your refund and contact you
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="university">
                  University{' '}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="university"
                  type="text"
                  placeholder="e.g., University of Malaya"
                  value={formData.university}
                  onChange={(e) =>
                    setFormData({ ...formData, university: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fieldOfStudy">
                  Field of Study{' '}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="fieldOfStudy"
                  type="text"
                  placeholder="e.g., Computer Science"
                  value={formData.fieldOfStudy}
                  onChange={(e) =>
                    setFormData({ ...formData, fieldOfStudy: e.target.value })
                  }
                />
              </div>

              <Button type="submit" className="group w-full" size="lg">
                Continue to Payment — RM 5
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>100% refundable, cancel anytime</span>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-foreground">
                Complete your payment
              </h2>
              <p className="text-muted-foreground">
                Scan the QR code below with Touch &apos;n Go eWallet to pay RM 5.
              </p>
            </div>

            {/* Payment Summary */}
            <div className="mb-6 rounded-lg bg-accent/50 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Name</span>
                <span className="font-medium text-foreground">{formData.name}</span>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Email</span>
                <span className="font-medium text-foreground">{formData.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">TnG Number</span>
                <span className="font-medium text-foreground">{formData.tngWalletNumber}</span>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="mb-6 flex flex-col items-center">
              <div className="mb-4 rounded-2xl border-2 border-primary/20 bg-background p-4 shadow-lg">
                {/* Placeholder for QR Code - Replace with actual QR image */}
                <div className="flex h-48 w-48 items-center justify-center rounded-xl bg-muted">
                  <div className="text-center">
                    <Smartphone className="mx-auto mb-2 h-12 w-12 text-primary" />
                    <p className="text-xs text-muted-foreground">TnG QR Code</p>
                    <p className="text-xs font-medium text-primary">RM 5.00</p>
                  </div>
                </div>
              </div>

              <p className="mb-2 text-center text-sm font-medium text-foreground">
                Or transfer to this number:
              </p>
              
              <button
                onClick={handleCopyNumber}
                className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-foreground transition-colors hover:bg-accent/80"
              >
                <span className="font-mono font-bold">012-345 6789</span>
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Instructions */}
            <div className="mb-6 rounded-lg border border-border bg-muted/30 p-4">
              <h3 className="mb-2 font-semibold text-foreground">Payment Instructions:</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="font-bold text-primary">1.</span>
                  Open your Touch &apos;n Go eWallet app
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">2.</span>
                  Scan the QR code above or transfer RM 5 to the number shown
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">3.</span>
                  Use your email as the payment reference
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">4.</span>
                  You&apos;ll receive a confirmation email within 24 hours
                </li>
              </ol>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>100% refundable if we don&apos;t launch</span>
            </div>

            <Button
              variant="outline"
              className="mt-4 w-full bg-transparent"
              onClick={() => setStep('form')}
            >
              Back to form
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
