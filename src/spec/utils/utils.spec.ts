import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white')
    })

    it('should handle conditional classes', () => {
      const isTrue = true
      const isFalse = false
      expect(cn('base', isTrue && 'active', isFalse && 'inactive')).toBe('base active')
    })

    it('should merge tailwind classes properly', () => {
      expect(cn('p-4', 'p-8')).toBe('p-8') // tailwind-merge should resolve this to p-8
    })
  })
})
