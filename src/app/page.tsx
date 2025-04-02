
import { Section } from "@/components";
import { Nav } from "@/components/nav/Nav";

export default function Home() {

  return (
    <>
      <Section className="h-screen flex items-center justify-around p-4 md:p-12">
        <div className="flex flex-col gap-5 md:max-w-[520px]">
          <p className="text-xl">Hi! I'm <strong>Kendall Rey Mozo</strong></p>
          <p className="text-md text-neutral-400">A front-end developer passionate about creating intuitive and appealing user experiences while maintaining clean, efficient code. I focus on the balance between UI/UX and code complexity to ensure high-quality, timely project delivery.</p>
        </div>
        <div>
          <Nav className="flex flex-col">
            <ul>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </Nav>
        </div>
      </Section>
    </>
  );
}
