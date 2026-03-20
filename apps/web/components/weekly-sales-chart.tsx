"use client"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
  { day: "Mon", sales: 24 },
  { day: "Tue", sales: 38 },
  { day: "Wed", sales: 31 },
  { day: "Thu", sales: 45 },
  { day: "Fri", sales: 52 },
  { day: "Sat", sales: 41 },
  { day: "Sun", sales: 35 },
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--color-chart-2)",
  },
} satisfies ChartConfig

export function WeeklySalesChart() {
  return (
    <section className="rounded-lg border p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-medium">Weekly sales</h2>
        <span className="text-muted-foreground text-xs">Last 7 days</span>
      </div>
      <ChartContainer config={chartConfig} className="h-52 w-full">
        <BarChart data={chartData} accessibilityLayer>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="sales" radius={6} fill="var(--color-sales)" />
        </BarChart>
      </ChartContainer>
    </section>
  )
}
