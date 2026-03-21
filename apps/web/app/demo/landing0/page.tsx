import {
	SaasFaqSection,
	SaasFeaturesSection,
	SaasFinalCtaSection,
	SaasHeroSection,
	SaasLogoCloudSection,
	SaasPricingSection,
	SaasTestimonialsSection,
} from "@workspace/ui/components/saas-landing-sections"

export default function LandingDemoPage() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_0%,hsl(var(--chart-2)/0.15),transparent_36%),radial-gradient(circle_at_100%_0%,hsl(var(--chart-1)/0.17),transparent_30%)]">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:gap-14 lg:px-8">
				<SaasHeroSection />
				<SaasLogoCloudSection />
				<SaasFeaturesSection />
				<SaasTestimonialsSection />
				<SaasPricingSection />
				<SaasFaqSection />
				<SaasFinalCtaSection />
			</div>
		</main>
	)
}
