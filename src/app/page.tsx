import { About, Hero } from "@/components";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}
