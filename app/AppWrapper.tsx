"use client"

import { Header } from '@/components/Header'
import { ReactNode } from 'react'

interface AppWrapperProps {
  children: ReactNode
  activeSection?: string
}

export function AppWrapper({ children, activeSection = "home" }: AppWrapperProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Header activeSection={activeSection} />
      <main className="pt-16 sm:pt-18 lg:pt-20">
        {children}
      </main>
    </div>
  )
}