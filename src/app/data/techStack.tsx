import {
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiFirebase,
  SiGooglecloud,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
interface TechStackItem {
  icon: React.ReactElement;
  name: string;
}

// TODO: Update your tech stack
// https://react-icons.github.io/react-icons/

const iconSize = 48;
const color = "text-accent";

export const techStack: TechStackItem[] = [
  {
    icon: <SiJavascript size={iconSize} className={color} />,
    name: "Javascript",
  },
  {
    icon: <SiTypescript size={iconSize} className={color} />,
    name: "Typescript",
  },
  {
    icon: <SiNodedotjs size={iconSize} className={color} />,
    name: "Node.js",
  },
  {
    icon: <SiReact size={iconSize} className={color} />,
    name: "React",
  },
  {
    icon: <SiNextdotjs size={iconSize} className={color} />,
    name: "Next.js",
  },
  {
    icon: <SiTailwindcss size={iconSize} className={color} />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiGooglecloud size={iconSize} className={color} />,
    name: "Google Cloud",
  },
  {
    icon: <SiFirebase size={iconSize} className={color} />,
    name: "Firebase",
  },
];
