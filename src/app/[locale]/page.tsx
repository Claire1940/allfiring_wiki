import { BookOpen, Gift, Shield, RotateCcw, Users, Swords, Download, Trophy, Sparkles, ArrowRight, Check, Flame } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getLatestArticles } from '@/lib/getLatestArticles'
import type { Language } from '@/lib/content'
import { LatestGuidesAccordion } from '@/components/home/LatestGuidesAccordion'
import HeroStats from '@/components/home/HeroStats'
import { NativeBannerAd, AdBanner } from '@/components/ads'
import { SidebarAd } from '@/components/ads/SidebarAd'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale })
  const latestArticles = await getLatestArticles(locale as Language, 30)

  const tools = t.raw('tools.cards') as Array<{ title: string; description: string }>
  const codeItems = t.raw('modules.allFiringCodes.items') as Array<Record<string, string>>
  const beginnerSteps = t.raw('modules.allFiringBeginnerGuide.steps') as Array<Record<string, string>>
  const tierRows = t.raw('modules.allFiringTierList.tiers') as Array<Record<string, string>>
  const rerollSteps = t.raw('modules.allFiringRerollGuide.steps') as Array<Record<string, string>>
  const characters = t.raw('modules.allFiringCharactersGuide.items') as Array<Record<string, string>>
  const teams = t.raw('modules.allFiringTeamBuildingGuide.items') as Array<Record<string, string>>
  const combatSteps = t.raw('modules.allFiringCombatGuide.steps') as Array<Record<string, string>>
  const downloadRows = t.raw('modules.allFiringDownloadLaunchGuide.rows') as Array<Record<string, string>>
  const faqItems = t.raw('faq.questions') as Array<Record<string, string>>

  return (
    <div className="home-shell min-h-screen bg-background text-foreground">
      <aside className="hidden xl:block fixed top-20 w-40 z-10" style={{ left: 'calc((100vw - 896px) / 2 - 180px)' }}>
        <SidebarAd type="sidebar-160x300" adKey={process.env.NEXT_PUBLIC_AD_SIDEBAR_160X300} />
      </aside>
      <aside className="hidden xl:block fixed top-20 w-40 z-10" style={{ right: 'calc((100vw - 896px) / 2 - 180px)' }}>
        <SidebarAd type="sidebar-160x600" adKey={process.env.NEXT_PUBLIC_AD_SIDEBAR_160X600} />
      </aside>

      <section className="relative overflow-hidden px-4 pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[hsl(var(--nav-theme)/0.1)] border border-[hsl(var(--nav-theme)/0.3)] mb-6">
            <Sparkles className="w-4 h-4 text-[hsl(var(--nav-theme-light))]" />
            <span className="text-sm font-medium">{t('hero.badge')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.05]">{t('hero.title')}</h1>
          <p className="mx-auto mb-10 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg md:text-2xl">{t('hero.description')}</p>
          <div className="mb-12 flex flex-col justify-center gap-3 sm:flex-row md:gap-4">
            <a href="https://allfiring.genmugame.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--nav-theme))] hover:bg-[hsl(var(--nav-theme)/0.9)] text-white rounded-lg font-semibold text-lg transition-colors">
              <Gift className="w-5 h-5" />
              {t('hero.getFreeCodesCTA')}
            </a>
            <a href="https://allfiring.genmugame.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
              {t('hero.playOnMobileCTA')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <HeroStats stats={Object.values(t.raw('hero.stats') as Record<string, { value: string; label: string }>)} />
        </div>
      </section>

      <NativeBannerAd adKey={process.env.NEXT_PUBLIC_AD_NATIVE_BANNER || ''} />

      <LatestGuidesAccordion articles={latestArticles} locale={locale} max={12} />

      <section className="px-4 py-14 md:py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t('tools.title')} <span className="text-[hsl(var(--nav-theme-light))]">{t('tools.titleHighlight')}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">{t('tools.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <a href="#codes" className="group rounded-xl border border-border p-4 md:p-6 bg-card hover:border-[hsl(var(--nav-theme)/0.5)] transition-all duration-300 text-left hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)]">
              <div className="mb-4 h-12 w-12 rounded-lg bg-[hsl(var(--nav-theme)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--nav-theme)/0.2)] transition-colors"><Gift className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" /></div>
              <h3 className="mb-1.5 text-sm md:text-base font-semibold">{tools[0].title}</h3><p className="text-sm text-muted-foreground">{tools[0].description}</p>
            </a>
            <a href="#beginner-guide" className="group rounded-xl border border-border p-4 md:p-6 bg-card hover:border-[hsl(var(--nav-theme)/0.5)] transition-all duration-300 text-left hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)]">
              <div className="mb-4 h-12 w-12 rounded-lg bg-[hsl(var(--nav-theme)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--nav-theme)/0.2)] transition-colors"><BookOpen className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" /></div>
              <h3 className="mb-1.5 text-sm md:text-base font-semibold">{tools[1].title}</h3><p className="text-sm text-muted-foreground">{tools[1].description}</p>
            </a>
            <a href="#tier-list" className="group rounded-xl border border-border p-4 md:p-6 bg-card hover:border-[hsl(var(--nav-theme)/0.5)] transition-all duration-300 text-left hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)]">
              <div className="mb-4 h-12 w-12 rounded-lg bg-[hsl(var(--nav-theme)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--nav-theme)/0.2)] transition-colors"><Trophy className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" /></div>
              <h3 className="mb-1.5 text-sm md:text-base font-semibold">{tools[2].title}</h3><p className="text-sm text-muted-foreground">{tools[2].description}</p>
            </a>
            <a href="#reroll-guide" className="group rounded-xl border border-border p-4 md:p-6 bg-card hover:border-[hsl(var(--nav-theme)/0.5)] transition-all duration-300 text-left hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)]">
              <div className="mb-4 h-12 w-12 rounded-lg bg-[hsl(var(--nav-theme)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--nav-theme)/0.2)] transition-colors"><RotateCcw className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" /></div>
              <h3 className="mb-1.5 text-sm md:text-base font-semibold">{tools[3].title}</h3><p className="text-sm text-muted-foreground">{tools[3].description}</p>
            </a>
            <a href="#characters-guide" className="group rounded-xl border border-border p-4 md:p-6 bg-card hover:border-[hsl(var(--nav-theme)/0.5)] transition-all duration-300 text-left hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)]">
              <div className="mb-4 h-12 w-12 rounded-lg bg-[hsl(var(--nav-theme)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--nav-theme)/0.2)] transition-colors"><Users className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" /></div>
              <h3 className="mb-1.5 text-sm md:text-base font-semibold">{tools[4].title}</h3><p className="text-sm text-muted-foreground">{tools[4].description}</p>
            </a>
            <a href="#team-building" className="group rounded-xl border border-border p-4 md:p-6 bg-card hover:border-[hsl(var(--nav-theme)/0.5)] transition-all duration-300 text-left hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)]">
              <div className="mb-4 h-12 w-12 rounded-lg bg-[hsl(var(--nav-theme)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--nav-theme)/0.2)] transition-colors"><Shield className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" /></div>
              <h3 className="mb-1.5 text-sm md:text-base font-semibold">{tools[5].title}</h3><p className="text-sm text-muted-foreground">{tools[5].description}</p>
            </a>
            <a href="#combat-guide" className="group rounded-xl border border-border p-4 md:p-6 bg-card hover:border-[hsl(var(--nav-theme)/0.5)] transition-all duration-300 text-left hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)]">
              <div className="mb-4 h-12 w-12 rounded-lg bg-[hsl(var(--nav-theme)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--nav-theme)/0.2)] transition-colors"><Swords className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" /></div>
              <h3 className="mb-1.5 text-sm md:text-base font-semibold">{tools[6].title}</h3><p className="text-sm text-muted-foreground">{tools[6].description}</p>
            </a>
            <a href="#download-launch" className="group rounded-xl border border-border p-4 md:p-6 bg-card hover:border-[hsl(var(--nav-theme)/0.5)] transition-all duration-300 text-left hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.1)]">
              <div className="mb-4 h-12 w-12 rounded-lg bg-[hsl(var(--nav-theme)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--nav-theme)/0.2)] transition-colors"><Download className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" /></div>
              <h3 className="mb-1.5 text-sm md:text-base font-semibold">{tools[7].title}</h3><p className="text-sm text-muted-foreground">{tools[7].description}</p>
            </a>
          </div>
        </div>
      </section>

      <AdBanner type="banner-300x250" adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250} className="md:hidden" />
      <AdBanner type="banner-728x90" adKey={process.env.NEXT_PUBLIC_AD_BANNER_728X90} className="hidden md:flex" />

      <section id="codes" className="scroll-mt-24 px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('modules.allFiringCodes.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('modules.allFiringCodes.intro')}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {codeItems.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-border p-5 bg-card">
                <p className="font-semibold text-[hsl(var(--nav-theme-light))]">{item.code}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.reward}</p>
                <p className="text-sm mt-2">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="beginner-guide" className="scroll-mt-24 px-4 py-14 md:py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('modules.allFiringBeginnerGuide.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('modules.allFiringBeginnerGuide.intro')}</p>
          <div className="space-y-4">
            {beginnerSteps.map((step, idx) => (
              <div key={idx} className="rounded-xl border border-border p-5 bg-card flex gap-4">
                <div className="h-8 w-8 rounded-full bg-[hsl(var(--nav-theme)/0.15)] flex items-center justify-center text-[hsl(var(--nav-theme-light))] font-bold">{idx + 1}</div>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tier-list" className="scroll-mt-24 px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('modules.allFiringTierList.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('modules.allFiringTierList.intro')}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {tierRows.map((row, idx) => (
              <div key={idx} className="rounded-xl border border-border p-5 bg-card">
                <p className="font-semibold text-[hsl(var(--nav-theme-light))]">{row.tier}</p>
                <p className="mt-2 font-medium">{row.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{row.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reroll-guide" className="scroll-mt-24 px-4 py-14 md:py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('modules.allFiringRerollGuide.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('modules.allFiringRerollGuide.intro')}</p>
          <div className="space-y-4">
            {rerollSteps.map((step, idx) => (
              <div key={idx} className="rounded-xl border border-border p-5 bg-card">
                <p className="font-semibold">{step.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="characters-guide" className="scroll-mt-24 px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('modules.allFiringCharactersGuide.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('modules.allFiringCharactersGuide.intro')}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {characters.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-border p-5 bg-card">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team-building" className="scroll-mt-24 px-4 py-14 md:py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('modules.allFiringTeamBuildingGuide.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('modules.allFiringTeamBuildingGuide.intro')}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {teams.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-border p-5 bg-card">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="combat-guide" className="scroll-mt-24 px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('modules.allFiringCombatGuide.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('modules.allFiringCombatGuide.intro')}</p>
          <div className="space-y-4">
            {combatSteps.map((step, idx) => (
              <div key={idx} className="rounded-xl border border-border p-5 bg-card flex items-start gap-3">
                <Check className="w-5 h-5 text-[hsl(var(--nav-theme-light))] mt-0.5" />
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download-launch" className="scroll-mt-24 px-4 py-14 md:py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('modules.allFiringDownloadLaunchGuide.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('modules.allFiringDownloadLaunchGuide.intro')}</p>
          <div className="space-y-3">
            {downloadRows.map((row, idx) => (
              <div key={idx} className="rounded-xl border border-border p-5 bg-card flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold">{row.platform}</p>
                  <p className="text-sm text-muted-foreground mt-1">{row.note}</p>
                </div>
                <a href={row.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--nav-theme-light))] hover:underline">
                  Open <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('faq.title')} <span className="text-[hsl(var(--nav-theme-light))]">{t('faq.titleHighlight')}</span></h2>
          <p className="text-muted-foreground mb-8">{t('faq.subtitle')}</p>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-border p-5 bg-card">
                <p className="font-semibold">{item.question}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="https://allfiring.genmugame.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(var(--nav-theme))] text-white font-semibold hover:bg-[hsl(var(--nav-theme)/0.9)] transition-colors">
              <Flame className="w-4 h-4" /> Visit All Firing Official Site
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
