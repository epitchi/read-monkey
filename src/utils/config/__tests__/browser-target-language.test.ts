import { afterEach, describe, expect, it, vi } from "vitest"
import { browser } from "wxt/browser"
import { DEFAULT_CONFIG } from "@/utils/constants/config"
import { withBrowserTargetLanguage } from "../init"

// WxtVitest rewrites source `#imports` to wxt/browser, so the spy goes on that object.
const ui = (value: string) => vi.spyOn(browser.i18n, "getUILanguage").mockReturnValue(value)

describe("withBrowserTargetLanguage", () => {
  afterEach(() => vi.restoreAllMocks())

  it.each([
    ["vi", "vie"],
    ["ja-JP", "jpn"],
    ["ko", "kor"],
  ])("targets the browser language %s", (lang, expected) => {
    ui(lang)
    expect(withBrowserTargetLanguage(DEFAULT_CONFIG).language.targetCode).toBe(expected)
  })

  it("keeps the default for English browsers", () => {
    ui("en-US")
    expect(withBrowserTargetLanguage(DEFAULT_CONFIG)).toBe(DEFAULT_CONFIG)
  })

  it("keeps the default when the browser API throws", () => {
    vi.spyOn(browser.i18n, "getUILanguage").mockImplementation(() => {
      throw new Error("no i18n")
    })
    expect(withBrowserTargetLanguage(DEFAULT_CONFIG)).toBe(DEFAULT_CONFIG)
  })
})
