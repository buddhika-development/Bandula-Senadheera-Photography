/**
 * Utility functions for Bandula Senadheera Photography web app
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
