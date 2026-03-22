import AnimatedContent from "@workspace/ui/components/AnimatedContent";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          initialOpacity={0.0}
          animateOpacity
          scale={0.8}
          threshold={0.1}
        >
          <Badge variant="secondary" className="mb-6 py-2 px-4 shadow-xl shadow-purple-500/20 bg-white/5 backdrop-blur-md border border-white/10 text-purple-200">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Introducing the Next Generation
          </Badge>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] transition-transform duration-500 hover:scale-105 cursor-default">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pb-2 hover:from-red-400 hover:via-purple-500 hover:to-pink-500 transition-all duration-700">
              Transform your
            </span>
            <span className="block text-white hover:text-purple-200 transition-colors duration-300">
              digital experience
            </span>
          </h1>
        </AnimatedContent>

        <AnimatedContent
          distance={80}
          direction="vertical"
          reverse={false}
          initialOpacity={0.0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
          delay={0.2}
        >
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-12 transition-all duration-300 hover:text-white hover:glow-sm cursor-default">
            Elevate your workflow with our cutting-edge platform.
          </p>
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg font-semibold bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-semibold border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              View Documentation
            </Button>
          </div>
        </AnimatedContent>
      </div>

      {/* Decorative noise/texture overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>
    </div>
  );
}
