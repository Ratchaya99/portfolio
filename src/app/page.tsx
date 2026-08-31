import { About, Hero } from "@/components";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <main className="mx-auto w-full max-w-5xl">
        <Hero />
        <About />
      </main>
    </div>
  );
}
