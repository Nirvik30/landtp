import AnimatedContent from "@workspace/ui/components/AnimatedContent";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white py-24 border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-900/50 rounded-full mix-blend-screen filter blur-[120px] -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-2">
            <AnimatedContent
              distance={40}
              direction="vertical"
              reverse={false}
              initialOpacity={0.0}
              animateOpacity
              scale={0.95}
              threshold={0.2}
            >
              <h2 className="text-sm tracking-[0.2em] text-purple-400 uppercase font-semibold mb-6">
                About Us
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-white">
                Designing the
                <span className="block text-white/50 italic font-light mt-2">unseen infrastructure</span>
                of tomorrow.
              </h3>
            </AnimatedContent>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10">
            <AnimatedContent
              distance={40}
              direction="vertical"
              reverse={false}
              initialOpacity={0.0}
              animateOpacity
              scale={0.95}
              threshold={0.2}
              delay={0.1}
            >
              <div className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                <p className="mb-6 hover:text-gray-300 transition-colors duration-300">
                  We believe that the best digital experiences are the ones you barely notice. They seamlessly integrate into your workflow, anticipating needs before they arise and dissolving friction before it forms.
                </p>
                <p className="hover:text-gray-300 transition-colors duration-300">
                  Our team of engineers and designers are obsessed with performance, elegant architecture, and creating tools that empower creators rather than restricting them. We build for the edge cases, because that's where true innovation lives.
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={30}
              direction="vertical"
              reverse={false}
              initialOpacity={0.0}
              animateOpacity
              scale={0.95}
              threshold={0.2}
              delay={0.2}
            >
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="group cursor-pointer">
                  <div className="text-4xl font-light text-white mb-2 flex items-center gap-2">
                    99.9%
                  </div>
                  <div className="text-sm tracking-wide text-gray-500 uppercase font-medium group-hover:text-purple-400 transition-colors duration-300 flex items-center gap-1">
                    Uptime <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1 group-hover:translate-y-0" />
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="text-4xl font-light text-white mb-2 flex items-center gap-2">
                    50M+
                  </div>
                  <div className="text-sm tracking-wide text-gray-500 uppercase font-medium group-hover:text-purple-400 transition-colors duration-300 flex items-center gap-1">
                    Requests daily <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1 group-hover:translate-y-0" />
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
          
        </div>
      </div>

      {/* Decorative noise matching hero */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>
    </section>
  );
}
