import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Separator } from "@workspace/ui/components/separator"
import {
  ArrowRight,
  ChartNoAxesCombined,
  CircleCheck,
  Gauge,
  Lock,
  Sparkles,
  Zap,
} from "lucide-react"

const features = [
  {
    title: "Autopilot Workflows",
    description:
      "Ship repetitive operations on schedules or trigger events with visual workflows.",
    icon: Zap,
  },
  {
    title: "Realtime Insights",
    description:
      "Understand activation, churn risk, and conversion velocity with one dashboard.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Smart Performance",
    description:
      "Edge-cached architecture keeps your app responsive, even during high traffic spikes.",
    icon: Gauge,
  },
  {
    title: "Security by Default",
    description:
      "SOC2-aligned controls, granular roles, and encrypted sync for every workspace.",
    icon: Lock,
  },
]

const plans = [
  {
    name: "Starter",
    price: "$19",
    cadence: "/month",
    description: "Best for solo builders launching their first product.",
    points: ["1 workspace", "3 automations", "Email support"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    cadence: "/month",
    description: "For teams that need reliable scaling and deeper analytics.",
    points: ["Unlimited seats", "Priority support", "Advanced analytics"],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "Dedicated infrastructure and compliance controls for large orgs.",
    points: ["SAML SSO", "Custom SLAs", "Dedicated success manager"],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function SaasHeroSection() {
  return (
    <section className="relative overflow-hidden rounded-4xl border bg-card/70 px-6 py-14 shadow-2xl shadow-primary/10 sm:px-10 lg:px-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,hsl(var(--primary)/0.18),transparent_45%),radial-gradient(circle_at_80%_30%,hsl(var(--chart-1)/0.15),transparent_40%)]" />
      <Badge variant="secondary" className="mb-5 gap-1">
        <Sparkles className="size-3" />
        The modern ops layer for SaaS teams
      </Badge>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Turn product momentum into predictable revenue.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Lumen gives product and growth teams one operating system to automate
            onboarding, monitor engagement, and launch experiments with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" className="gap-2">
              Start 14-day trial
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline">
              Book a live demo
            </Button>
          </div>
        </div>
        <Card className="backdrop-blur">
          <CardHeader>
            <CardTitle>Weekly Growth Snapshot</CardTitle>
            <CardDescription>
              Activation rate climbed 32% after workflow automation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-muted/60 p-3">
                <p className="text-muted-foreground">MRR</p>
                <p className="mt-1 text-2xl font-semibold">$128k</p>
              </div>
              <div className="rounded-xl bg-muted/60 p-3">
                <p className="text-muted-foreground">Retention</p>
                <p className="mt-1 text-2xl font-semibold">94.2%</p>
              </div>
            </div>
            <div className="rounded-xl border p-4">
              <p className="text-sm text-muted-foreground">
                9 of 12 churn-risk accounts were recovered automatically this week.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export function SaasLogoCloudSection() {
  return (
    <section className="space-y-5">
      <p className="text-center text-sm text-muted-foreground">
        Trusted by teams at high-growth companies
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {["Northstar", "LatticeIQ", "PulseLab", "Orbit", "Flowstate", "Lynk"].map(
          (name) => (
            <Card key={name} className="items-center justify-center py-3">
              <CardContent className="px-2 py-0 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                {name}
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  )
}

export function SaasFeaturesSection() {
  return (
    <section className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything your revenue team needs to move faster.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Replace disconnected tools with one intentionally designed command
          center.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title} className="bg-card/80">
            <CardHeader>
              <div className="mb-2 inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="size-4" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export function SaasTestimonialsSection() {
  return (
    <section>
      <Card className="bg-card/80">
        <CardContent className="space-y-6 py-2">
          <p className="text-lg leading-relaxed sm:text-xl">
            "Lumen helped us align product, growth, and support around the same
            customer signals. We cut onboarding time by half and doubled expansion
            revenue in one quarter."
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Ari Tanaka</p>
                <p className="text-sm text-muted-foreground">
                  VP Product, Orbitly
                </p>
              </div>
            </div>
            <AvatarGroup>
              <Avatar size="sm">
                <AvatarFallback>PD</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarFallback>JN</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export function SaasPricingSection() {
  return (
    <section className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Pricing that scales with your team.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Start free, upgrade when you are ready, and only pay for impact.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.highlighted ? "ring-2 ring-primary shadow-lg" : ""}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {plan.name}
                {plan.highlighted ? <Badge>Most Popular</Badge> : null}
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground">
                  {plan.cadence}
                </span>
              </p>
              <Separator className="my-4" />
              <ul className="space-y-2 text-sm">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <CircleCheck className="size-4 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-6 w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export function SaasFaqSection() {
  return (
    <section className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions.
        </h2>
      </div>
      <Card>
        <CardContent className="py-1">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can I migrate from my current CRM and analytics stack?
              </AccordionTrigger>
              <AccordionContent>
                Yes. We provide assisted migrations and native connectors for the
                most common CRM, billing, and event-tracking platforms.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is there a startup discount for early teams?
              </AccordionTrigger>
              <AccordionContent>
                Early-stage startups receive up to 50% off for 12 months through
                our Launch Program.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How quickly can we launch our first automation?
              </AccordionTrigger>
              <AccordionContent>
                Most teams launch their first production workflow in less than an
                hour using templates and guided setup.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}

export function SaasFinalCtaSection() {
  return (
    <section className="rounded-4xl border bg-card/80 p-6 sm:p-10">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Build your next growth cycle on better data.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Join 4,000+ teams using Lumen to ship faster and retain more customers.
          </p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row">
          <Input type="email" placeholder="Work email" className="h-10" />
          <Button className="h-10 whitespace-nowrap">Get Early Access</Button>
        </form>
      </div>
    </section>
  )
}