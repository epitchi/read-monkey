import { describe, expect, it } from "vitest"
import { buildFeaturebaseFeedbackMetadata, buildFeaturebasePortalUrl } from "@/utils/featurebase"

const SUPPORTED_UI_LOCALES = ["en", "es", "ja", "ko", "ru", "tr", "vi", "zh-CN", "zh-TW"] as const

describe("buildFeaturebasePortalUrl", () => {
  it.each(SUPPORTED_UI_LOCALES)("sends every destination to GitHub issues for %s", (locale) => {
    for (const destination of ["feedback", "roadmap", "tickets"] as const) {
      expect(buildFeaturebasePortalUrl({ destination, locale })).toBe(
        "https://github.com/epitchi/read-monkey/issues",
      )
    }
  })
})

describe("buildFeaturebaseFeedbackMetadata", () => {
  it("keeps only the origin and pathname for HTTP(S) pages", () => {
    expect(
      buildFeaturebaseFeedbackMetadata({
        browserName: "edge",
        extensionVersion: "1.43.3",
        pageUrl: "https://user:password@example.com/private/path?token=secret#section",
      }),
    ).toEqual({
      browser: "edge",
      extension_version: "1.43.3",
      page_url: "https://example.com/private/path",
    })
  })

  it.each(["file:///Users/example/private.html", "about:blank", "not a URL"])(
    "omits page_url for unsupported or invalid URL %s",
    (pageUrl) => {
      expect(
        buildFeaturebaseFeedbackMetadata({
          browserName: "firefox",
          extensionVersion: "1.43.3",
          pageUrl,
        }),
      ).toEqual({
        browser: "firefox",
        extension_version: "1.43.3",
      })
    },
  )
})
