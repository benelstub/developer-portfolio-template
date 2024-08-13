"use client";

import React, { useState } from "react";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
} from "./timeline";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { TimelineElement } from "@/app/data/timeline";

interface TimelineLayoutProps {
  items: TimelineElement[];
}
export const TimelineLayout = ({ items }: TimelineLayoutProps) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  return (
    <div className="w-full">
      <Timeline className="items-center w-full">
        {showMore
          ? items.map((item, index) => (
              <TimelineItem key={index}>
                {index !== items.length - 1 && <TimelineConnector />}
                <TimelineTime>{item.date}</TimelineTime>
                <TimelineHeader>
                  <TimelineIcon />
                  <TimelineTitle>{item.title}</TimelineTitle>
                </TimelineHeader>

                <TimelineContent>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))
          : items.slice(0, 3).map((item, index) => (
              <TimelineItem key={index}>
                {index !== items.length - 1 && <TimelineConnector />}
                <TimelineTime>{item.date}</TimelineTime>
                <TimelineHeader>
                  <TimelineIcon />
                  <TimelineTitle>{item.title}</TimelineTitle>
                </TimelineHeader>

                <TimelineContent>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
      </Timeline>
      <div className="flex justify-center mt-4">
        {showMore && (
          <Button
            variant="secondary"
            size="icon"
            onClick={handleShowLess}
            className="flex items-center group"
          >
            <ChevronUpIcon className="h-4 w-4 animate-bounce group-hover:animate-none" />
          </Button>
        )}
        {!showMore && (
          <Button
            variant="secondary"
            onClick={handleShowMore}
            className="flex items-center group"
          >
            Show more{" "}
            <ChevronDownIcon className="h-4 w-4 ml-2 animate-bounce group-hover:animate-none " />
          </Button>
        )}
      </div>
    </div>
  );
};
