import { FinalCta, Hero, Participate, Proposals, Results, Stats, Timeline, WhoIs, WhyEdinho, YourCity } from './sections';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Results />
      <Timeline />
      <WhoIs />
      <Proposals />
      <WhyEdinho />
      <YourCity />
      <Participate />
      <FinalCta />
    </main>
  );
}
