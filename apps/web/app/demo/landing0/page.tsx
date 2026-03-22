import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";

export default function Landing0Page() {
  return (
    <main className="min-h-screen bg-black relative">
      <Navbar />
      <Hero />
      {/* You can add more sections here */}
    </main>
  );
}
