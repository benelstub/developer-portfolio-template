import React from "react";

import { ProjectCard } from "@/components/ProjectCard";
import { TechStackCard } from "@/components/TechStackCard";
import { ProfileImage } from "@/components/ProfileImage";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { ContactButton } from "@/components/ContactButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TimelineLayout } from "@/components/timeline/timeline-layout";

import { projects } from "./data/projects";
import { techStack } from "./data/techStack";
import { timelineData, timelineElementSchema } from "./data/timeline";

export default function Home() {
  const validatedTimelineData = timelineData.map((item) =>
    timelineElementSchema.parse(item)
  );

  //TODO: Personalise!

  return (
    <main className="flex flex-col items-center justify-between p-20">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <ProfileImage src="/you.jpg" alt="Profile Image" />
          <div className="ml-5 ">
            <h1 className="text-3xl font-bold">
              Hey, I'm <span className="text-accent">Nameless</span>
            </h1>

            <p className="text-gray-400 mt-2">Developer</p>
            <ContactButton />
          </div>
        </div>
        <div className="absolute right-16 top-16 flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
      <div className="mt-16 w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <div className="mb-12">
          <p className="text-pretty">
            Minim eu labore deserunt id reprehenderit anim irure laboris ipsum
            amet cupidatat exercitation velit laboris. Occaecat labore eiusmod
            pariatur commodo aliqua id consectetur ex. Ea aute nostrud minim et
            fugiat commodo proident proident sint nisi elit dolore ex.
          </p>
        </div>

        <div className="grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {techStack.map((tech, index) => (
            <TechStackCard key={index} {...tech} />
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-4">Projects</h2>
        <Carousel
          opts={{
            loop: true,
            dragFree: false,
            align: "center",
          }}
          className="mt-4"
        >
          <CarouselContent className="gap-6">
            {projects.map((project) => (
              <CarouselItem
                className="basis md:basis-1/2 lg:basis-1/3"
                key={project.title}
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" size="icon" />
          <CarouselNext variant="ghost" size="icon" />
        </Carousel>
        <h2 className="text-2xl font-bold mt-16 mb-14">Timeline</h2>

        <TimelineLayout items={validatedTimelineData} />
      </div>
    </main>
  );
}
