import { IconBook, IconBug, IconMail, IconMessageCircle } from "@tabler/icons-react"
import { useAtomValue } from "jotai"
import {
  FluidCard,
  FluidCardDescription,
  FluidCardGroup,
  FluidCardHeader,
  FluidCardMedia,
  FluidCardTitle,
} from "@/components/ui/base-ui/fluid-card"
import { env } from "@/env"
import { configFieldsAtomMap } from "@/utils/atoms/config"
import { buildFeaturebasePortalUrl } from "@/utils/featurebase"
import { i18n } from "@/utils/i18n"
import { resolveUiLocale } from "@/utils/i18n/locale-map"
import { ConfigSection } from "../../components/config-section"
import { PageLayout } from "../../components/page-layout"

const SUPPORT_EMAIL = "thienvanlea1@gmail.com"

export function HelpAndCommunityPage() {
  const uiLanguage = useAtomValue(configFieldsAtomMap.uiLanguage)
  const locale = resolveUiLocale(uiLanguage)

  return (
    <PageLayout
      title={i18n.t("options.helpAndCommunity.title")}
      description={i18n.t("options.helpAndCommunity.pageDescription")}
      innerClassName="flex flex-col gap-10"
    >
      {/*
        The cards below already lean on their own hairline grid, so the section rule the
        settings pages draw under their headings would read as a second, competing line.
      */}
      <ConfigSection
        title={i18n.t("options.helpAndCommunity.help.title")}
        titleClassName="border-b-0"
      >
        <FluidCardGroup columns={2}>
          <FluidCard
            // The docs site picks its own locale; only Featurebase needs ours spelled out.
            href={`${env.WXT_WEBSITE_URL}/docs`}
            external
            label={i18n.t("options.helpAndCommunity.tutorial.title")}
          >
            <FluidCardHeader>
              <FluidCardMedia icon={IconBook} />
              <FluidCardTitle>{i18n.t("options.helpAndCommunity.tutorial.title")}</FluidCardTitle>
              <FluidCardDescription>
                {i18n.t("options.helpAndCommunity.tutorial.description")}
              </FluidCardDescription>
            </FluidCardHeader>
          </FluidCard>

          <FluidCard
            href={`mailto:${SUPPORT_EMAIL}`}
            external
            label={i18n.t("options.helpAndCommunity.email.title")}
          >
            <FluidCardHeader>
              <FluidCardMedia icon={IconMail} />
              <FluidCardTitle>{i18n.t("options.helpAndCommunity.email.title")}</FluidCardTitle>
              <FluidCardDescription>
                {i18n.t("options.helpAndCommunity.email.description")}
              </FluidCardDescription>
            </FluidCardHeader>
          </FluidCard>

          <FluidCard
            // The portal's own root is the feedback board; `roadmap` keeps its sidebar entry.
            href={buildFeaturebasePortalUrl({ destination: "feedback", locale })}
            external
            label={i18n.t("options.helpAndCommunity.featureRequest.title")}
          >
            <FluidCardHeader>
              <FluidCardMedia icon={IconMessageCircle} />
              <FluidCardTitle>
                {i18n.t("options.helpAndCommunity.featureRequest.title")}
              </FluidCardTitle>
              <FluidCardDescription>
                {i18n.t("options.helpAndCommunity.featureRequest.description")}
              </FluidCardDescription>
            </FluidCardHeader>
          </FluidCard>

          <FluidCard
            href={buildFeaturebasePortalUrl({ destination: "tickets", locale })}
            external
            label={i18n.t("options.helpAndCommunity.bugReport.title")}
          >
            <FluidCardHeader>
              <FluidCardMedia icon={IconBug} />
              <FluidCardTitle>{i18n.t("options.helpAndCommunity.bugReport.title")}</FluidCardTitle>
              <FluidCardDescription>
                {i18n.t("options.helpAndCommunity.bugReport.description")}
              </FluidCardDescription>
            </FluidCardHeader>
          </FluidCard>
        </FluidCardGroup>
      </ConfigSection>
    </PageLayout>
  )
}
