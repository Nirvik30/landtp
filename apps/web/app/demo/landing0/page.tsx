import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";

export default function Landing0Page() {
  return (
    <main className="min-h-screen bg-black relative">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
