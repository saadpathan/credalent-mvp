'use client'

import { Button } from '@/components/ui/button'

interface HeaderProps {
  onJoinClick: () => void
}

export function Header({ onJoinClick }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-foreground">
          Credalent
        </a>

        {/* CTA */}
        <Button size="sm" onClick={onJoinClick}>
          Join Waitlist
        </Button>
      </div>
    </header>
  )
}
