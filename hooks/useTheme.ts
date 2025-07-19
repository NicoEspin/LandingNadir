"use client"

import { useTheme as useCustomTheme } from "@/providers/theme-provider"

export function useTheme() {
  return useCustomTheme()
}