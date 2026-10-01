import { browser } from "#imports"

const THOUSANDS_SEPARATOR_PATTERN = /\B(?=(?:\d{3})+(?!\d))/g

export function isNonNullish<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined
}

export function getActiveTabUrl() {
  return browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => tabs[0]!.url)
}

/**
 * Get value from map; if not exists, create it with factory and return it.
 */
export function ensureKeyInMap<K, V>(map: Map<K, V>, key: K, factory: () => V): V {
  let val = map.get(key)
  if (val === undefined) {
    val = factory()
    map.set(key, val)
  }
  return val
}

export function addThousandsSeparator(num: number) {
  return num.toString().replace(THOUSANDS_SEPARATOR_PATTERN, ",")
}

export function numberToPercentage(num: number) {
  return `${(num * 100).toFixed(2)}%`
}

export function getDateFromDaysBack(daysBack: number) {
  const date = new Date()
  date.setDate(date.getDate() - daysBack)
  return date
}

// ponytail: Read Monkey has no store listings yet, so "rate us" lands on the repo.
// Restore per-store review URLs once the listings exist.
export function getReviewUrl(_utmSource: string = "extension"): string {
  return "https://github.com/epitchi/read-monkey"
}
