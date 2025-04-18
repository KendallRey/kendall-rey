import { Section } from '@/components';
import { Navigation } from '@/components/custom/Navigation';

export default function Home() {
  return (
    <>
      <Section className="h-screen flex items-center justify-around p-4 md:p-12">
        <div className="flex flex-col gap-5 md:max-w-[640px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hi! I'm <span className="text-blue-400">Kendall Rey Mozo</span>
          </h1>
          <h2 className="text-lg sm:text-xl font-medium mb-4">
            A Frontend Developer
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            I genuinely enjoy programming and bringing ideas to life in a clean,
            extensible way. I love crafting smooth user experiences and writing
            code that's both efficient and easy to maintain.
          </p>
        </div>
        <Navigation />
      </Section>
    </>
  );
}
