"use client";

import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { projectSchema } from "@/lib/schemas/projectSchema";

interface ProjectCardProps {
  project: z.infer<typeof projectSchema>;
}

//TODO: Update status colors if desired
const projectStatusColor = {
  Planning: "bg-gray-400",
  Developing: "bg-accent",
  Active: "bg-green-600",
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // If the project status is "Planning", always make the card non-clickable
  if (project.status === "Planning") {
    return (
      <Card className="min-h-[500px] transition-transform hover:scale-95 hover:shadow-lg relative opacity-60 cursor-not-allowed">
        <CardHeader className="min-h-24">
          <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
          <CardDescription className="">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={500}
            height={300}
            className="mt-2 rounded-lg"
          />
        </CardContent>
        <CardFooter className="absolute bottom-0 left-0">
          <Badge className={projectStatusColor[project.status]}>
            {project.status}
          </Badge>
        </CardFooter>
      </Card>
    );
  }

  // If the project has info, render a dialog box
  if (project.info) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Card className="min-h-[500px] cursor-pointer transition-transform hover:scale-95 hover:shadow-lg relative">
            <CardHeader className="min-h-24">
              <CardTitle className="text-lg font-bold">
                {project.title}
              </CardTitle>
              <CardDescription className="">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={300}
                className="mt-2 rounded-lg"
              />
            </CardContent>
            <CardFooter className="absolute bottom-0 left-0">
              <Badge className={projectStatusColor[project.status]}>
                {project.status}
              </Badge>
            </CardFooter>
          </Card>
        </DialogTrigger>
        <DialogContent className="min-w-[50vw] max-h-[80vh] overflow-y-auto">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg text-accent font-bold">
              {project.title}
            </DialogTitle>
            <DialogDescription>{project.status}</DialogDescription>
          </DialogHeader>

          {project.info?.problemStatement && (
            <div className="mb-4">
              <h3 className="font-bold">Problem Statement:</h3>
              <p>{project.info.problemStatement}</p>
            </div>
          )}
          {project.info?.solution && (
            <div className="mb-4">
              <h3 className="font-bold">Solution:</h3>
              <p>{project.info.solution}</p>
            </div>
          )}
          {project.info?.details && (
            <div className="mb-4">
              <h3 className="font-bold">Details:</h3>
              <p>{project.info.details}</p>
            </div>
          )}
          {project.info?.outcome && (
            <div className="mb-4">
              <h3 className="font-bold">Outcome:</h3>
              <p>{project.info.outcome}</p>
            </div>
          )}
          {project.info?.techStack && (
            <div className="mb-4">
              <h3 className="font-bold">Tech Stack:</h3>
              <ul className="list-disc p-4">
                {project.info?.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  // If the project status is not "Planning" and there is no info, wrap it with a link
  return (
    <Link href={project.link} target="_blank">
      <Card className="min-h-[500px] transition-transform hover:scale-95 hover:shadow-lg relative">
        <CardHeader>
          <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
          <CardDescription className="">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={500}
            height={300}
            className="mt-2 rounded-lg"
          />
        </CardContent>
        <CardFooter className="absolute bottom-0 left-0">
          <Badge className={projectStatusColor[project.status]}>
            {project.status}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};
