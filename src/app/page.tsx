
import { Section } from "@/components";
import { Nav } from "@/components/nav/Nav";

export default function Home() {

  return (
    <>
      <Section className="h-screen flex items-center justify-around">
        <div className="flex flex-col gap-2">
          <p className="text-xl">Hi! I'm <strong>Kendall Rey Mozo</strong></p>
          <p className="text-md">A front-end developer</p>
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
