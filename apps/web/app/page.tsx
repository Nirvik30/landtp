import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { CursorDrivenParticleTypography } from "@workspace/ui/components/ui/cursor-driven-particle-typography"
import { WeeklySalesChart } from "@/components/weekly-sales-chart"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
          <Input className="mt-2" placeholder="Input" />
        </div>
        <div className="text-muted-foreground font-mono text-xs">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        <div className="h-[320px] w-full rounded-md border">
          <CursorDrivenParticleTypography text="DESIGN" fontSize={96} />
        </div>
        <WeeklySalesChart />
      </div>
    </div>
  )
}
