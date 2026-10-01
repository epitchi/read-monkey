import type { SupportedUiLocale } from "@/utils/i18n/resources"

// No feedback portal of our own; GitHub issues take feedback, roadmap and tickets alike.
const ISSUES_URL = "https://github.com/epitchi/read-monkey/issues"

export type FeaturebasePortalDestination = "feedback" | "roadmap" | "tickets"

export interface FeaturebaseFeedbackMetadata {
  [key: string]: string | undefined
  browser: string
  extension_version: string
  page_url?: string
}

export function buildFeaturebasePortalUrl(_options: {
  destination: FeaturebasePortalDestination
  locale: SupportedUiLocale
  metadata?: Record<string, string | undefined>
}) {
  return ISSUES_URL
}

export function buildFeaturebaseFeedbackMetadata({
  browserName,
  extensionVersion,
  pageUrl,
}: {
  browserName: string
  extensionVersion: string
  pageUrl: string
}): FeaturebaseFeedbackMetadata {
  const metadata: FeaturebaseFeedbackMetadata = {
    browser: browserName,
    extension_version: extensionVersion,
  }

  try {
    const url = new URL(pageUrl)
    if (url.protocol === "http:" || url.protocol === "https:") {
      metadata.page_url = `${url.origin}${url.pathname}`
    }
  } catch {
    // Keep the extension version even when the current page URL is not parseable.
  }

  return metadata
}
