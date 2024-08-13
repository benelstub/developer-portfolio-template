import { z } from "zod";
import { projectSchema } from "@/lib/schemas/projectSchema";

export type Project = z.infer<typeof projectSchema>;

//TODO: Populate your projects. IF you are not linking to a URL you may add the optional info object

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A fully-featured e-commerce platform.",
    imageUrl: "/placeholder.png",
    link: "#",
    status: "Active",
  },
  {
    title: "Collaboration Tool",
    description: "A real-time collaboration tool.",
    imageUrl: "/placeholder.png",
    link: "#",
    status: "Planning",
  },
  {
    title: "AI-Powered Chatbot",
    description: "An AI-powered chatbot built with Google Cloud.",
    imageUrl: "/placeholder.png",
    link: "#",
    status: "Developing",
    info: {
      problemStatement:
        "Many businesses struggle to provide 24/7 customer support, leading to frustrated customers and lost opportunities.",
      solution:
        "Develop an AI-powered chatbot that leverages Google Dialogflow's natural language understanding capabilities and Google Cloud's scalable infrastructure to provide automated customer support.",
      details:
        "This project involves training a Dialogflow agent to understand and respond to customer inquiries, integrating it with Google Cloud Functions to handle complex tasks and interactions.",
      outcome:
        "The chatbot aims to provide businesses with a cost-effective and efficient way to provide 24/7 customer support, improving customer satisfaction and reducing support costs.",
      techStack: [
        "TypeScript",
        "Google Dialogflow",
        "Google Cloud Platform",
        "Node.js",
      ],
    },
  },
];
