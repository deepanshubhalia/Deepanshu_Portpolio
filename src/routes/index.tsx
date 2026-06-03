import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ChatFab } from "@/components/ChatFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepanshu Bhalia — AI-Powered Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Deepanshu Bhalia — CS undergrad and full stack developer crafting AI-powered, premium web experiences with the MERN stack.",
      },
      { property: "og:title", content: "Deepanshu Bhalia — AI-Powered Full Stack Developer" },
      { property: "og:description", content: "Premium portfolio. AI integrations, MERN stack, cinematic UI/UX." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative noise">
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <ChatFab />
    </main>
  );
}
