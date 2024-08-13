"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface TechStackCardProps {
  icon: React.ReactElement;
  iconColor?: string;
  name: string;
}

export const TechStackCard: React.FC<TechStackCardProps> = ({ icon, name }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex hover:translate-y-[-5px] transition-all items-center justify-center">
            {icon}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs text-center">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
